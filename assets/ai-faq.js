/* AI FAQ: language content is loaded through content/ai-faq.<lang>.js. */
(() => {
const language = document.documentElement.lang === 'uk' ? 'ua' : document.documentElement.lang;
const content = window.aiPageContent && window.aiPageContent[language];
if (content) {
  document.getElementById('articleMain').innerHTML = content.articleHtml;
  document.getElementById('tocList').innerHTML = content.tocHtml;
}
// Enhance the original paragraphs without changing their inline formatting or links.
const noteTitles = {
  en: {
    'part-1-q-1-2': 'It predicts not a word, but a token.',
    'part-1-q-2': 'On AI Consciosness',
    'part-1-q-5': 'About conspiracies',
    'part-3-q-19': 'What is a warning shot?',
    'part-3-q-25': 'Who is doomers?'
  },
  ru: {
    'part-1-q-1-2': 'Он предсказывает не слово, а токен.',
    'part-1-q-2': 'О сознании ИИ',
    'part-1-q-5': 'О заговорах',
    'part-3-q-19': 'Что такое предупредительный выстрел?',
    'part-3-q-25': 'Кто такие думеры?'
  },
  ua: {
    'part-1-q-1-2': 'Він передбачає не слово, а токен.',
    'part-1-q-2': 'Про свідомість ШІ',
    'part-1-q-5': 'Про змови',
    'part-3-q-19': 'Що таке попереджувальний постріл?',
    'part-3-q-25': 'Хто такі думери?'
  }
};
document.querySelectorAll('#articleMain .content-html > p').forEach((paragraph, index) => {
  const match = paragraph.textContent.match(/^\s*((?:Additional information|Note(?:\s+\d+)?|Дополнительно|Примечание(?:\s+\d+)?|Додатково|Примітка(?:\s+\d+)?)\s*:)/i);
  if (!match) return;
  const card = document.createElement('div');
  card.className = 'faq-note';
  const button = document.createElement('button');
  button.className = 'faq-note-toggle';
  button.type = 'button';
  button.textContent = noteTitles[language]?.[paragraph.closest('article')?.id] || match[1];
  button.setAttribute('aria-expanded', 'false');
  const panel = document.createElement('div');
  panel.className = 'faq-note-panel';
  panel.id = `faq-note-${index}`;
  button.setAttribute('aria-controls', panel.id);
  panel.inert = true;
  panel.setAttribute('aria-hidden', 'true');
  const inner = document.createElement('div');
  inner.className = 'faq-note-inner';
  // Remove only the label, even when Word split it across several styled runs.
  const walker = document.createTreeWalker(paragraph, NodeFilter.SHOW_TEXT);
  let remaining = match[0].length;
  while (remaining) {
    const node = walker.nextNode();
    if (!node) break;
    const length = Math.min(remaining, node.textContent.length);
    node.textContent = node.textContent.slice(length);
    remaining -= length;
  }
  paragraph.replaceWith(card);
  inner.appendChild(paragraph);
  panel.appendChild(inner);
  card.append(button, panel);
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    panel.inert = !open;
    panel.setAttribute('aria-hidden', String(!open));
    card.classList.toggle('open', open);
  });
});
function updateTocFades() {
  const shell = document.getElementById('tocShell');
  const block = document.getElementById('tocBlock');
  if (!shell || !block) return;

  const hasOverflow = block.scrollHeight - block.clientHeight > 2;
  const touched = block.dataset.tocTouched === 'true';
  shell.classList.toggle('fade-top', touched && block.scrollTop > 2);
  shell.classList.toggle('fade-bottom', hasOverflow && block.scrollTop + block.clientHeight < block.scrollHeight - 2);
}

function updateDesktopTocState() {
  const toc = document.querySelector('.toc-col');
  const shell = document.querySelector('.article-shell');
  if (!toc || !shell) return;

  if (window.innerWidth <= 1239) {
    toc.style.position = '';
    toc.style.top = '';
    toc.style.left = '';
    return;
  }

  const shellRect = shell.getBoundingClientRect();
  const shellTop = window.scrollY + shellRect.top;
  const shellBottom = shellTop + shell.offsetHeight;
  const tocHeight = toc.offsetHeight;
  const topOffset = 108;
  const fixedLeft = Math.max(24, (window.innerWidth / 2) - 790);
  const absoluteLeft = fixedLeft - shellRect.left;
  const stopTop = Math.max(0, shell.offsetHeight - tocHeight);

  if (window.scrollY + topOffset <= shellTop) {
    toc.style.position = 'absolute';
    toc.style.top = '0px';
    toc.style.left = `${absoluteLeft}px`;
    return;
  }

  if (window.scrollY + topOffset + tocHeight >= shellBottom) {
    toc.style.position = 'absolute';
    toc.style.top = `${stopTop}px`;
    toc.style.left = `${absoluteLeft}px`;
    return;
  }

  toc.style.position = 'fixed';
  toc.style.top = `${topOffset}px`;
  toc.style.left = `${fixedLeft}px`;
}

function updateActiveTocState() {
  const links = Array.from(document.querySelectorAll('#tocList a[data-target]'));
  if (!links.length) return;

  const markerY = window.scrollY + (window.innerWidth <= 768 ? 120 : 170);
  let activeId = links[0].dataset.target;

  links.forEach((link) => {
    const target = document.getElementById(link.dataset.target);
    if (!target) return;
    const targetTop = window.scrollY + target.getBoundingClientRect().top;
    if (targetTop <= markerY) activeId = link.dataset.target;
  });

  links.forEach((link) => link.classList.toggle('active', link.dataset.target === activeId));

  const activeLink = links.find((link) => link.dataset.target === activeId);
  if (activeLink && activeLink.dataset.section) {
    const parentLink = document.querySelector(`#tocList > li > a[data-target="${activeLink.dataset.section}"]`);
    if (parentLink) parentLink.classList.add('active');
  }
}
(function initFaq() {
  const switcher = document.getElementById('langSwitcher');
  const languageButton = document.getElementById('langCurrent');
  const drawer = document.getElementById('mobileDrawer');
  const burger = document.getElementById('burger');
  const toc = document.getElementById('tocBlock');
  let queued = false;
  let opener;
  let activeOverlay;

  const closeLanguage = () => {
    switcher.classList.remove('open');
    languageButton.setAttribute('aria-expanded', 'false');
  };
  languageButton.addEventListener('click', event => {
    event.stopPropagation();
    languageButton.setAttribute('aria-expanded', String(switcher.classList.toggle('open')));
  });
  document.addEventListener('click', event => { if (!switcher.contains(event.target)) closeLanguage(); });
  document.querySelectorAll('[data-lang]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('lang', link.dataset.lang); } catch (_) { /* Storage can be unavailable for local files. */ }
      link.hash = location.hash;
    });
  });

  function setDrawer(open) {
    drawer.classList.toggle('open', open);
    drawer.inert = !open;
    drawer.setAttribute('aria-hidden', String(!open));
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  setDrawer(false);
  burger.addEventListener('click', () => setDrawer(!drawer.classList.contains('open')));
  function closeOverlay() {
    if (!activeOverlay) return;
    activeOverlay.classList.remove('open');
    activeOverlay = null;
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
    if (opener) opener.focus();
  }
  function openOverlay(id, trigger) {
    activeOverlay = document.getElementById(id);
    opener = trigger;
    activeOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    activeOverlay.querySelector('button').focus();
  }
  document.querySelectorAll('[data-open-overlay]').forEach(trigger => {
    trigger.addEventListener('click', event => {
      event.preventDefault();
      openOverlay(trigger.dataset.openOverlay, trigger);
    });
  });
  document.querySelectorAll('[data-close-overlay]').forEach(button => button.addEventListener('click', closeOverlay));
  document.querySelectorAll('.qr-overlay, .note-overlay').forEach(overlay => {
    overlay.addEventListener('click', event => { if (event.target === overlay) closeOverlay(); });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (activeOverlay) closeOverlay();
      else if (drawer.classList.contains('open')) { setDrawer(false); burger.focus(); }
      else { closeLanguage(); }
    }
    if (event.key === 'Tab' && activeOverlay) {
      const focusable = [...activeOverlay.querySelectorAll('button, a[href]')];
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  const refresh = () => {
    queued = false;
    updateDesktopTocState();
    updateActiveTocState();
    updateTocFades();
    document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);
  };
  const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(refresh); } };
  const touched = () => { toc.dataset.tocTouched = 'true'; };
  toc.addEventListener('wheel', touched, { passive: true });
  toc.addEventListener('touchmove', touched, { passive: true });
  toc.addEventListener('scroll', updateTocFades, { passive: true });
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setDrawer(false);
    schedule();
  });
  window.addEventListener('hashchange', schedule);
  new ResizeObserver(schedule).observe(document.getElementById('articleMain'));
  document.getElementById('backTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
  refresh();
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => { target.scrollIntoView(); schedule(); });
  }
  if (document.fonts) document.fonts.ready.then(schedule);
})();
})();
