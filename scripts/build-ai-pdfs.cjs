// Render the same language content used by the website, including live links.
const { chromium } = require('playwright');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const root = path.resolve(__dirname, '..');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    for (const lang of ['en', 'ru', 'ua']) {
      const page = await browser.newPage({ reducedMotion: 'reduce', viewport: { width: 1440, height: 1000 } });
      await page.goto(pathToFileURL(path.join(root, lang, 'ai/index.html')).href);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(root, '..', '.qa', `ai-${lang}-summary.png`) });
      await page.addStyleTag({ content: `
        @media print {
          @page { size: A4; margin: 18mm 17mm; }
          html, body { background: white !important; overflow: visible !important; }
          .site-nav, .mobile-drawer, .toc-col, .back-top, .qr-overlay, .pdf-download, footer { display: none !important; }
          .topic-header { padding: 0 0 20px; animation: none; }
          .topic-title { font-size: 30pt; }
          .article-kit { margin-top: 16px; }
          .nutshell-card { padding: 18px; box-shadow: none; }
          .nutshell-text { font-size: 11pt; line-height: 1.5; }
          .content-layout { display: block; padding: 20px 0 0; }
          .article-shell, .content-main { display: block; width: 100%; max-width: none; margin: 0; }
          .section-block { margin: 0 0 24px; padding-top: 20px; }
          .subsection-block { margin: 0 0 20px; }
          .content-html, .content-list { font-size: 11pt; line-height: 1.5; }
          .ai-part-heading { font-size: 19pt; }
          .section-heading { font-size: 15pt; }
          .content-subheading { font-size: 12pt; }
          h2, h3, h4 { break-after: avoid; }
          p, li { orphans: 3; widows: 3; }
        }` });
      await page.pdf({ path: path.join(root, 'downloads', `ai-faq-${lang}.pdf`), preferCSSPageSize: true, printBackground: true });
      console.log(`Created ai-faq-${lang}.pdf`);
      await page.close();
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
