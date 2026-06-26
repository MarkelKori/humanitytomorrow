const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const outputDir = path.join(root, 'downloads');
const tmpDir = path.join(os.tmpdir(), 'humanitytomorrow-immortalism-pdf');

const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);

const copy = {
  en: {
    lang: 'en',
    file: 'immortalism-faq-en.pdf',
    kicker: 'Humanity Tomorrow',
    subtitle: 'Life extension, rejuvenation, and the case against deathism.',
    contents: 'Contents',
    notes: 'Notes',
    resources: 'Recommended reading',
    visual: 'Visual block',
  },
  ru: {
    lang: 'ru',
    file: 'immortalism-faq-ru.pdf',
    kicker: 'Humanity Tomorrow',
    subtitle: 'Продление жизни, омоложение и аргументы против десизма.',
    contents: 'Содержание',
    notes: 'Примечания',
    resources: 'Рекомендованное чтение',
    visual: 'Визуальный блок',
  },
  ua: {
    lang: 'uk',
    file: 'immortalism-faq-ua.pdf',
    kicker: 'Humanity Tomorrow',
    subtitle: 'Продовження життя, омолодження та аргументи проти десизму.',
    contents: 'Зміст',
    notes: 'Примітки',
    resources: 'Рекомендоване читання',
    visual: 'Візуальний блок',
  },
};

const visualTitles = {
  en: {
    experience: 'How long could just a few entertainments take?',
    deaths: 'Deaths per day by cause',
    land: 'Land use and overpopulation',
    budget: 'Public spending and aging',
  },
  ru: {
    experience: 'Сколько времени могут занять лишь некоторые развлечения?',
    deaths: 'Смерти в день по разным причинам',
    land: 'Использование земли и перенаселение',
    budget: 'Государственные расходы и старение',
  },
  ua: {
    experience: 'Скільки часу можуть зайняти лише деякі розваги?',
    deaths: 'Смерті на день від різних причин',
    land: 'Використання землі та перенаселення',
    budget: 'Державні витрати та старіння',
  },
};

function findChrome() {
  for (const candidate of chromeCandidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error('Chrome or Edge was not found. Set CHROME_PATH to a Chromium-based browser executable.');
}

function loadPage(lang) {
  const sandbox = { window: { immortalismPageContent: {} } };
  vm.createContext(sandbox);
  const source = fs.readFileSync(path.join(root, 'content', `immortalism-faq.${lang}.js`), 'utf8');
  vm.runInContext(source, sandbox, { filename: `immortalism-faq.${lang}.js` });
  return sandbox.window.immortalismPageContent[lang];
}

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function allowedHtml(html) {
  return String(html || '')
    .replace(/\[\[note:[^\]]+\]\]/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\s+target="_blank"/g, '')
    .replace(/\s+rel="noopener"/g, '');
}

function createNoteState() {
  return { next: 1, entries: [], byKey: new Map() };
}

function noteKey(note) {
  return `${note.id || ''}|${note.url || ''}`;
}

function noteNumber(note, state) {
  if (!note) return '';
  const key = noteKey(note);
  if (!state.byKey.has(key)) {
    const number = state.next++;
    state.byKey.set(key, number);
    state.entries.push({ number, ...note });
  }
  return state.byKey.get(key);
}

function renderText(text, notes = [], state) {
  const notesById = new Map(notes.map((note) => [note.id, note]));
  return esc(text).replace(/\[\[note:([^\]]+)\]\]/g, (_, id) => {
    const note = notesById.get(id);
    const number = noteNumber(note, state);
    return number ? `<sup>${number}</sup>` : '';
  });
}

function renderBlock(block, lang, noteState) {
  switch (block.type) {
    case 'paragraph':
      return `<p>${renderText(block.text || '', block.notes || [], noteState)}</p>`;
    case 'html':
      return `<div class="inline-html">${allowedHtml(block.html)}</div>`;
    case 'quote': {
      const text = renderText(block.text || '', block.notes || [], noteState);
      const cite = block.cite ? `<cite>${esc(block.cite)}</cite>` : '';
      return `<blockquote><p>${text}</p>${cite}</blockquote>`;
    }
    case 'visual': {
      const title = visualTitles[lang]?.[block.visual] || block.visual || '';
      return `<aside class="visual-note"><span>${esc(copy[lang].visual)}</span>${esc(title)}</aside>`;
    }
    case 'subheading':
      return `<h3>${esc(block.text || '')}</h3>`;
    case 'list':
      return `<ul>${(block.items || []).map((item) => `<li>${renderText(item, block.notes || [], noteState)}</li>`).join('')}</ul>`;
    default:
      return '';
  }
}

function renderContent(page, lang) {
  const noteState = createNoteState();
  const sectionsHtml = page.sections.map((section, sectionIndex) => {
    const sectionBlocks = (section.blocks || []).map((block) => renderBlock(block, lang, noteState)).join('\n');
    const items = (section.items || []).map((item) => {
      const blocks = (item.blocks || []).map((block) => renderBlock(block, lang, noteState)).join('\n');
      return `<article><h3>${esc(item.title || '')}</h3>${blocks}</article>`;
    }).join('\n');
    return `<section><p class="section-kicker">${String(sectionIndex + 1).padStart(2, '0')} / ${esc(section.label || section.tocLabel || '')}</p><h2>${esc(section.label || section.tocLabel || '')}</h2>${sectionBlocks}${items}</section>`;
  }).join('\n');

  const toc = page.sections.map((section, index) => `<li>${String(index + 1).padStart(2, '0')} ${esc(section.tocLabel || section.label || '')}</li>`).join('');
  const notes = noteState.entries.length
    ? `<section class="notes"><h2>${esc(copy[lang].notes)}</h2>${noteState.entries.map((note) => `<p><sup>${note.number}</sup> <a href="${esc(note.url || '#')}">${esc(note.url || note.id || '')}</a></p>`).join('')}</section>`
    : '';
  const resources = (page.resources || []).length
    ? `<section class="resources"><h2>${esc(copy[lang].resources)}</h2>${page.resources.map((item) => `<p><strong>${esc(item.title || '')}</strong><br>${esc(item.description || '')}${item.url ? `<br><a href="${esc(item.url)}">${esc(item.url)}</a>` : ''}</p>`).join('')}</section>`
    : '';

  return { toc, sectionsHtml, notes, resources };
}

function buildHtml(page, lang) {
  const langCopy = copy[lang];
  const rendered = renderContent(page, lang);
  const introHtml = page.intro ? `<p class="intro">${esc(page.intro)}</p>` : '';
  return `<!doctype html>
<html lang="${langCopy.lang}">
<head>
<meta charset="utf-8">
<title>${esc(page.pageTitle)} - Humanity Tomorrow</title>
<style>
  @page { size: A4; margin: 17mm 17mm 20mm; }
  * { box-sizing: border-box; }
  body { margin: 0; color: #1A1814; background: #fff; font-family: Georgia, "Times New Roman", serif; font-size: 11.2pt; line-height: 1.58; }
  a { color: #2E6F8F; text-decoration: none; word-break: break-word; }
  .cover { min-height: 72vh; display: flex; flex-direction: column; justify-content: center; border-bottom: 1px solid rgba(26,24,20,0.18); page-break-after: always; }
  .kicker, .section-kicker { font-family: Arial, sans-serif; font-size: 7.5pt; letter-spacing: 0.17em; text-transform: uppercase; color: #8B6B2D; }
  h1 { margin: 12px 0 18px; font-size: 40pt; line-height: 1.04; font-weight: 400; color: #8A5D00; }
  .subtitle { max-width: 430px; font-family: Arial, sans-serif; font-size: 10pt; color: #5B554E; }
  .intro { margin-top: 34px; max-width: 520px; font-size: 15pt; line-height: 1.48; color: #2E2B26; }
  .toc { page-break-after: always; }
  .toc h2, section h2, .notes h2, .resources h2 { margin: 0 0 14px; font-size: 21pt; line-height: 1.2; font-weight: 400; color: #8A5D00; }
  .toc ol { margin: 24px 0 0; padding: 0; list-style: none; columns: 2; column-gap: 28px; font-family: Arial, sans-serif; font-size: 9.5pt; line-height: 1.9; color: #3C3832; }
  section { page-break-before: always; }
  article { margin-top: 22px; }
  article h3 { margin: 0 0 10px; font-size: 17pt; line-height: 1.25; font-weight: 400; color: #1A1814; }
  p { margin: 0 0 11px; }
  .inline-html p { margin: 0 0 11px; }
  blockquote { margin: 18px 0; padding-left: 16px; border-left: 2px solid rgba(138,93,0,0.35); color: #3F3932; font-style: italic; }
  blockquote cite { display: block; margin-top: 8px; font-family: Arial, sans-serif; font-size: 8pt; letter-spacing: 0.12em; text-transform: uppercase; color: #6D655D; font-style: normal; }
  sup { font-family: Arial, sans-serif; font-size: 7pt; color: #8A5D00; }
  .visual-note { margin: 18px 0; padding: 13px 15px; border: 1px solid rgba(46,111,143,0.22); background: #F1F7F9; font-family: Arial, sans-serif; font-size: 9pt; color: #334047; }
  .visual-note span { display: block; margin-bottom: 3px; font-size: 7pt; letter-spacing: 0.14em; text-transform: uppercase; color: #6A8592; }
  .notes, .resources { page-break-before: always; font-family: Arial, sans-serif; font-size: 8.8pt; line-height: 1.45; }
  .notes p, .resources p { margin-bottom: 8px; }
</style>
</head>
<body>
  <section class="cover">
    <p class="kicker">${esc(langCopy.kicker)}</p>
    <h1>${esc(page.pageTitle)}</h1>
    <p class="subtitle">${esc(langCopy.subtitle)}</p>
    ${introHtml}
  </section>
  <section class="toc">
    <h2>${esc(langCopy.contents)}</h2>
    <ol>${rendered.toc}</ol>
  </section>
  ${rendered.sectionsHtml}
  ${rendered.resources}
  ${rendered.notes}
</body>
</html>`;
}

function buildPdf(lang, chromePath) {
  const page = loadPage(lang);
  const html = buildHtml(page, lang);
  const htmlPath = path.join(tmpDir, `immortalism-faq-${lang}.html`);
  const pdfPath = path.join(outputDir, copy[lang].file);
  fs.writeFileSync(htmlPath, html, 'utf8');
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
  execFileSync(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--print-to-pdf-no-header',
    `--print-to-pdf=${pdfPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: 'inherit' });
  const size = fs.statSync(pdfPath).size;
  if (size < 10000) throw new Error(`Generated PDF looks too small: ${pdfPath}`);
  console.log(`${copy[lang].file} ${Math.round(size / 1024)} KB`);
}

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(tmpDir, { recursive: true });
const chromePath = findChrome();
for (const lang of ['en', 'ru', 'ua']) buildPdf(lang, chromePath);
