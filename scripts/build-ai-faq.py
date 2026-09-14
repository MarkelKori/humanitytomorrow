"""Import the three original DOCX FAQs, preserving rich text and link targets.

Run from any directory. The generated language scripts also work over file://.
"""
import html
import json
import re
from pathlib import Path
from zipfile import ZipFile
from lxml import etree, html as html_parser

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT.parent / 'translations' / 'ai-risks'
NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
W = '{' + NS['w'] + '}'
R = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'
esc = html.escape


def convert(filename):
    with ZipFile(SOURCES / filename) as archive:
        document = etree.fromstring(archive.read('word/document.xml'))
        for node in document.findall('.//w:t', NS):
            if node.text:
                node.text = re.sub(r'(?<=contains )X(?= questions)', '25', node.text)
                node.text = re.sub(r'(?<=содержит )[ХX](?= вопросов)', '25', node.text)
                node.text = re.sub(r'(?<=містить )[ХX](?= запитань)', '25', node.text)
                node.text = re.sub(r'\s*\((?:See|см\.|Див\.)\s*2\.?\)\.?', '', node.text)
        rels = {r.get('Id'): r.get('Target') for r in etree.fromstring(archive.read('word/_rels/document.xml.rels'))}
        numbering = etree.fromstring(archive.read('word/numbering.xml'))
        def inline(node):
            tag = etree.QName(node).localname
            if tag == 't':
                return esc(node.text or '')
            if tag in ('br', 'cr'):
                return '<br>'
            if tag == 'tab':
                return '&#9;'
            if tag in ('rPr', 'pPr'):
                return ''
            text = ''.join(inline(child) for child in node)
            if tag == 'r':
                props = node.find('w:rPr', NS)
                if props is not None:
                    for prop, element in [('b', 'strong'), ('i', 'em'), ('u', 'u'), ('strike', 's')]:
                        value = props.find('w:' + prop, NS)
                        if value is not None and value.get(W + 'val') not in ('0', 'false', 'none'):
                            text = f'<{element}>{text}</{element}>'
                    vert = props.find('w:vertAlign', NS)
                    if vert is not None and vert.get(W + 'val') in ('superscript', 'subscript'):
                        element = 'sup' if vert.get(W + 'val') == 'superscript' else 'sub'
                        text = f'<{element}>{text}</{element}>'
            if tag == 'hyperlink':
                target = rels.get(node.get(R + 'id'), '#' + node.get(W + 'anchor', ''))
                text = f'<a href="{esc(target, quote=True)}">{text}</a>'
            return text

        body = document.find('w:body', NS)
        # Separate the final action headings from their explanations.
        language = 'en' if 'English' in filename else ('ru' if 'Russian' in filename else 'ua')
        action_titles = {
            'en': ['5. Use your vote.', '6. Participate in public consultations.', '7. Participate in protests and peaceful demonstrations.', '8. Sign petitions and open letters.', '9. Do not make things worse.'],
            'ru': ['5. Используйте свой голос избирателя.', '6. Участвуйте в публичных обсуждениях.', '7. Участвуйте в акциях протеста и мирных демонстрациях.', '8. Подписывайте петиции и открытые письма.', '9. Не делайте хуже.'],
            'ua': ['5. Використовуйте свій голос виборця.', '6. Беріть участь у публічних обговореннях.', '7. Беріть участь в акціях протесту й мирних демонстраціях.', '8. Підписуйте петиції та відкриті листи.', '9. Не робіть гірше.'],
        }[language]
        obsolete_intro = {
            'en': 'This article will be updated and improved.',
            'ru': 'Эта статья будет обновляться и улучшаться.',
            'ua': 'Ця стаття оновлюватиметься й покращуватиметься.',
        }[language]
        embedding_leads = {
            'en': ('They are represented by ', 'Tokens are converted into '),
            'ru': ('Они представляют собой ', 'Токены превращаются в '),
            'ua': ('Вони представлені як ', 'Токени перетворюються на '),
        }
        xrisk_copy = {
            'en': ('Note: ', 'X-risk', ' is short for ', 'existential risk', ', which is any threat that could either wipe out human life completely or permanently and drastically destroy humanity’s future potential.'),
            'ru': ('Примечание: ', 'X-risk', ' — сокращение от ', 'existential risk', ' («экзистенциальный риск»), то есть любой угрозы, которая может либо полностью уничтожить человеческую жизнь, либо навсегда и радикально лишить человечество его будущего потенциала.'),
            'ua': ('Примітка: ', 'X-risk', ' — скорочення від ', 'existential risk', ' («екзистенційний ризик»), тобто будь-якої загрози, яка може або повністю знищити людське життя, або назавжди й радикально позбавити людство його майбутнього потенціалу.'),
        }[language]
        def make_paragraph(value, bold=False):
            paragraph = etree.Element(W + 'p')
            run = etree.SubElement(paragraph, W + 'r')
            if bold:
                etree.SubElement(etree.SubElement(run, W + 'rPr'), W + 'b')
            etree.SubElement(run, W + 't').text = value
            return paragraph
        def make_xrisk_note():
            paragraph = etree.Element(W + 'p')
            for index, value in enumerate(xrisk_copy):
                run = etree.SubElement(paragraph, W + 'r')
                if index in (0, 1, 3):
                    etree.SubElement(etree.SubElement(run, W + 'rPr'), W + 'b')
                text = etree.SubElement(run, W + 't')
                text.set('{http://www.w3.org/XML/1998/namespace}space', 'preserve')
                text.text = value
            return paragraph
        # Apply editorial changes directly to the import tree so generated HTML
        # and the source-text integrity check remain in sync.
        old_lead, new_lead = embedding_leads[language]
        for paragraph in list(body):
            value = ''.join(paragraph.xpath('.//w:t/text()', namespaces=NS)).strip()
            if value.startswith(obsolete_intro):
                body.remove(paragraph)
                continue
            for node in paragraph.findall('.//w:t', NS):
                if node.text:
                    node.text = node.text.replace(old_lead, new_lead)
            value = ''.join(paragraph.xpath('.//w:t/text()', namespaces=NS)).strip()
            if re.match(r'^13\. .*x-risk', value, re.I):
                for node in paragraph.findall('.//w:t', NS):
                    node.text = (node.text or '').replace('x-risk*', 'x-risk')
                body.insert(body.index(paragraph) + 1, make_xrisk_note())
        in_actions = False
        for paragraph in list(body):
            value = ''.join(paragraph.xpath('.//w:t/text()', namespaces=NS)).strip()
            if re.match(r'^(PART|БЛОК) 4\.', value):
                in_actions = True
            number = re.match(r'^([5-8])\. ', value) if in_actions else None
            if not number:
                continue
            n = int(number[1])
            replacements = [make_paragraph(action_titles[n - 5 if n < 8 else 4], True)]
            if n in (5, 6):
                explanation = value[value.index('(') + 1:value.rindex(')')].strip()
                replacements.append(make_paragraph(explanation.rstrip('.') + '.'))
            elif n == 7:
                replacements.append(make_paragraph(action_titles[3], True))
            position = body.index(paragraph)
            body.remove(paragraph)
            for offset, replacement in enumerate(replacements):
                body.insert(position + offset, replacement)
        paragraphs = document.findall('w:body/w:p', NS)
        token_note = next(p for p in paragraphs if re.match(r'^(Additional information|Дополнительно|Додатково):', ''.join(p.xpath('.//w:t/text()', namespaces=NS)).strip()))
        next_heading = next(p for p in paragraphs if ''.join(p.xpath('.//w:t/text()', namespaces=NS)).strip().startswith('1.2.'))
        body.remove(token_note)
        body.insert(body.index(next_heading), token_note)
        paragraphs = document.findall('w:body/w:p', NS)
        for paragraph in paragraphs:
            if ''.join(paragraph.xpath('.//w:t/text()', namespaces=NS)).strip().startswith('25.'):
                for node in paragraph.findall('.//w:t', NS):
                    node.text = (node.text or '').replace('*', '')
        sections = []
        current = None
        blocks = None
        for p in paragraphs:
            plain = ''.join(p.xpath('.//w:t/text()', namespaces=NS)).strip()
            if not plain:
                continue
            rich = inline(p)
            part = re.match(r'^(?:PART|БЛОК)\s+(\d+)\.', plain)
            if not sections or plain in ('INTRODUCTION', 'ВВЕДЕНИЕ', 'ВСТУП') or part:
                sid = ('part-' + part[1]) if part else ('summary' if not sections else 'introduction')
                current = {'id': sid, 'label': plain, 'headingHtml': rich, 'blocks': [], 'items': []}
                sections.append(current)
                blocks = current['blocks']
                continue
            number = re.match(r'^(\d+(?:\.\d+)*)\.\s', plain)
            if number:
                item = {'id': current['id'] + '-q-' + number[1].replace('.', '-'), 'title': plain,
                        'headingHtml': rich, 'nested': '.' in number[1], 'blocks': []}
                current['items'].append(item)
                blocks = item['blocks']
                continue
            num = p.find('w:pPr/w:numPr', NS)
            if num is not None:
                num_id = num.find('w:numId', NS).get(W + 'val')
                level = num.find('w:ilvl', NS)
                level = level.get(W + 'val') if level is not None else '0'
                abstract = numbering.xpath('./w:num[@w:numId=$n]/w:abstractNumId/@w:val', namespaces=NS, n=num_id)[0]
                fmt = numbering.xpath('./w:abstractNum[@w:abstractNumId=$a]/w:lvl[@w:ilvl=$l]/w:numFmt/@w:val', namespaces=NS, a=abstract, l=level)
                list_tag = 'ul' if fmt == ['bullet'] else 'ol'
                key = num_id + '-' + level
                if blocks and blocks[-1].get('listKey') == key:
                    blocks[-1]['html'] = blocks[-1]['html'][:-len(list_tag)-3] + f'<li>{rich}</li></{list_tag}>'
                else:
                    blocks.append({'type': 'html', 'listKey': key, 'html': f'<{list_tag} class="content-list"><li>{rich}</li></{list_tag}>'})
            else:
                blocks.append({'type': 'html', 'html': f'<p>{rich}</p>'})

        quote_data = {
            'en': {
                'introduction': ('Look, all I’m asking is that you tell me a specific, detailed story about AI killing everyone that doesn’t sound to me like science fiction.', None, 'https://x.com/robbensinger/status/2098152546225496573?s=20'),
                'part-2': ('Humans are just stochastic parrots. True intelligence requires the transformer architecture.', 'vik', 'https://x.com/vikhyatk/status/2096717802623398134?s=20'),
                'part-4': ('There’s no way I alone can make a difference. That would require collective action.', None, 'https://x.com/chrislakin/status/2097798895208419512?s=20'),
            },
            'ru': {
                'introduction': ('Послушайте, всё, о чём я прошу, — расскажите мне конкретную, подробную историю о том, как ИИ убивает всех, которая не звучала бы для меня как научная фантастика.', None, 'https://x.com/robbensinger/status/2098152546225496573?s=20'),
                'part-2': ('Люди — всего лишь стохастические попугаи. Для настоящего интеллекта нужна архитектура трансформера.', 'vik', 'https://x.com/vikhyatk/status/2096717802623398134?s=20'),
                'part-4': ('Я один никак не смогу что-то изменить. Для этого нужны коллективные действия.', None, 'https://x.com/chrislakin/status/2097798895208419512?s=20'),
            },
            'ua': {
                'introduction': ('Послухайте, усе, про що я прошу, — розкажіть мені конкретну, докладну історію про те, як ШІ вбиває всіх, яка не звучала б для мене як наукова фантастика.', None, 'https://x.com/robbensinger/status/2098152546225496573?s=20'),
                'part-2': ('Люди — лише стохастичні папуги. Для справжнього інтелекту потрібна архітектура трансформера.', 'vik', 'https://x.com/vikhyatk/status/2096717802623398134?s=20'),
                'part-4': ('Я один ніяк не зможу щось змінити. Для цього потрібні колективні дії.', None, 'https://x.com/chrislakin/status/2097798895208419512?s=20'),
            },
        }[language]
        def quote_html(section_id):
            if section_id not in quote_data:
                return ''
            quote, author, url = quote_data[section_id]
            source = f'<a href="{esc(url, quote=True)}" aria-label="Source"></a>'
            citation = f'<cite>{esc(author)}{source}</cite>' if author else ''
            if section_id == 'part-4':
                first, second = quote.split('. ', 1)
                quote_body = f'<span class="quote-text quote-first-line">{esc(first)}.</span><br><span class="quote-source-line"><span class="quote-continuation">{esc(second)}</span>{source}</span>'
                return f'<div class="article-quote ai-added-quote" data-generated-quote="true"><blockquote>{quote_body}</blockquote></div>'
            else:
                quote_body = esc(quote)
                trailing_source = '' if author else source
            return f'<div class="article-quote ai-added-quote" data-generated-quote="true"><blockquote><span class="quote-text">{quote_body}</span>{trailing_source}</blockquote>{citation}</div>'

        article, toc = '', ''
        for section in sections:
            sid = section['id']
            article += f'<section class="section-block" id="{sid}"><h2 class="ai-part-heading">{section["headingHtml"]}</h2>'
            article += quote_html(sid)
            article += ''.join('<div class="content-html">' + b['html'] + '</div>' for b in section['blocks'])
            toc += f'<li><a href="#{sid}" data-target="{sid}">{esc(section["label"])}</a>'
            if section['items']:
                toc += '<ol class="toc-sublist">'
            for item in section['items']:
                iid = item['id']
                tag, cls = ('h4' if item['nested'] else 'h3'), 'section-heading'
                article += f'<article class="subsection-block" id="{iid}"><{tag} class="{cls}">{item["headingHtml"]}</{tag}>'
                article += ''.join('<div class="content-html">' + b['html'] + '</div>' for b in item['blocks']) + '</article>'
                nested = ' class="toc-nested"' if item['nested'] else ''
                toc += f'<li{nested}><a href="#{iid}" data-target="{iid}" data-section="{sid}">{esc(item["title"])}</a></li>'
            if section['items']:
                toc += '</ol>'
            toc += '</li>'
            article += '</section>'
        # Every source word and hyperlink must survive conversion in reading order.
        normalize = lambda t: re.sub(r'\s+', '', t)
        source_text = ''.join(document.xpath('.//w:body//w:t/text()', namespaces=NS))
        output = html_parser.fromstring('<main>' + article + '</main>')
        for generated in output.xpath('.//*[@data-generated-quote]'):
            generated.getparent().remove(generated)
        assert normalize(source_text) == normalize(output.text_content()), filename
        source_links = [rels[n.get(R + 'id')] for n in document.findall('.//w:hyperlink', NS) if n.get(R + 'id')]
        assert source_links == output.xpath('.//a/@href'), filename
        return {'sections': sections, 'articleHtml': article, 'tocHtml': toc}, len(source_links)


for lang, filename in [('en', 'AI Risks - English.docx'), ('ru', 'AI Risks - Russian corrected.docx'), ('ua', 'AI Risks - Ukrainian.docx')]:
    data, links = convert(filename)
    summary = data['sections'].pop(0)
    data['summaryHtml'] = ''.join(b['html'] for b in summary['blocks'])
    data['articleHtml'] = re.sub(r'^<section[\s\S]*?</section>', '', data['articleHtml'], count=1)
    data['tocHtml'] = re.sub(r'^<li>[\s\S]*?</li>', '', data['tocHtml'], count=1)

    # Editorial link overrides for the compact summary and the token note.
    if lang == 'en':
        data['summaryHtml'] = data['summaryHtml'].replace(
            'Misalignment with human values',
            '<a href="https://en.wikipedia.org/wiki/AI_alignment"><u>Misalignment with human values</u></a>',
            1,
        ).replace(
            'Progress in safety',
            '<a href="https://internationalaisafetyreport.org/publication/2026-report-extended-summary-policymakers"><u>Progress in safety</u></a>',
            1,
        )
    unlinked_terms = {
        'en': ('token', 'embeddings'),
        'ru': ('токен', 'эмбеддинги'),
        'ua': ('токен', 'ембединги'),
    }[lang]
    for term in unlinked_terms:
        data['articleHtml'] = data['articleHtml'].replace(
            f'<a href="https://arxiv.org/abs/1706.03762"><u>{term}</u></a>',
            term,
            1,
        )
    (ROOT / 'content' / f'ai-faq.{lang}.js').write_text(
        '/* Generated by scripts/build-ai-faq.py from the original DOCX. */\nwindow.aiPageContent = window.aiPageContent || {};\n'
        + f'window.aiPageContent.{lang} = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
    for relative in ([f'{lang}/ai/index.html', 'ai/index.html'] if lang == 'en' else [f'{lang}/ai/index.html']):
        page = ROOT / relative
        text = page.read_text(encoding='utf-8')
        text = re.sub(r'<main class="content-main" id="articleMain">[\s\S]*?</main>', lambda _: '<main class="content-main" id="articleMain">' + data['articleHtml'] + '</main>', text)
        text = re.sub(r'<ol class="toc-list" id="tocList">[\s\S]*?</ol></nav>', lambda _: '<ol class="toc-list" id="tocList">' + data['tocHtml'] + '</ol></nav>', text)
        text = re.sub(r'<p class="prototype-status">.*?</p>\s*', '', text)
        text = re.sub(r'<p class="topic-intro">.*?</p>\s*', '', text)
        text = re.sub(r'<div class="article-kit" id="articleKit">[\s\S]*?</a></div>', '', text)
        text = re.sub(r'<div class="article-kit">[\s\S]*?</div></div>\s*', '', text)
        text = re.sub(r'<div class="note-overlay" id="noteOverlay"[\s\S]*?(?=</body>)', '', text)
        text = text.replace('<meta name="robots" content="noindex, follow">\n', '')
        title = re.search(r'<h1[^>]*>(.*?)</h1>', text)[1]
        text = re.sub(r'<title>.*?</title>', f'<title>{title} - Humanity Tomorrow</title>', text)
        text = re.sub(r'<meta property="og:title"[^>]*>', f'<meta property="og:title" content="{title}">', text)
        for attr in ['name="description"', 'property="og:description"']:
            text = re.sub(r'<meta ' + attr + r'[^>]*>', f'<meta {attr} content="{title}">', text)
        prefix = '../' if relative == 'ai/index.html' else '../../'
        if 'hreflang="x-default"' not in text:
            text = text.replace('</head>', '<link rel="alternate" hreflang="x-default" href="https://humanitytomorrow.site/en/ai/">\n</head>')
        label, download, description = {
            'en': ('As short as possible', 'Download PDF', 'Download the article as a formatted PDF'),
            'ru': ('Короче некуда', 'Скачать PDF', 'Скачать статью в формате PDF'),
            'ua': ('Коротше нікуди', 'Завантажити PDF', 'Завантажити статтю у форматі PDF'),
        }[lang]
        text = re.sub(r'<div class="article-kit" id="articleKit">[\s\S]*?</a></div>', '', text)
        kit = ('<div class="article-kit" id="articleKit">'
               '<div class="nutshell-card" id="nutshellCard">'
               f'<p class="nutshell-label">{label}</p><div class="nutshell-text">{data["summaryHtml"]}</div></div>'
               f'<a class="pdf-download" id="pdfDownload" href="{prefix}downloads/ai-faq-{lang}.pdf" download="ai-faq-{lang}.pdf" type="application/pdf">'
               f'<span class="pdf-download-mark">PDF</span><span><span class="pdf-download-label">{download}</span>'
               f'<span class="pdf-download-title">{description}</span></span>'
               '<span class="pdf-download-arrow" aria-hidden="true"><svg viewBox="0 0 18 18" focusable="false"><path d="M9 3v8"></path><path d="M5.8 7.8 9 11l3.2-3.2"></path><path d="M4.5 14.5h9"></path></svg></span></a></div>')
        text = re.sub(r'(<h1[^>]*>.*?</h1>)', lambda m: m[1] + kit, text, count=1)
        text = re.sub(r'<script src="[^"]*content/ai-faq\.[^"]+" defer></script>\s*', '', text)
        text = text.replace(f'<script src="{prefix}assets/ai-faq.js" defer></script>', f'<script src="{prefix}content/ai-faq.{lang}.js" defer></script>\n<script src="{prefix}assets/ai-faq.js" defer></script>')
        if 'toc-scrollbar.css' not in text:
            text = text.replace(f'<link rel="stylesheet" href="{prefix}assets/ai-faq.css">', f'<link rel="stylesheet" href="{prefix}assets/ai-faq.css">\n<link rel="stylesheet" href="{prefix}assets/toc-scrollbar.css">')
        if 'toc-scrollbar.js' not in text:
            text = text.replace(f'<script src="{prefix}assets/ai-faq.js" defer></script>', f'<script src="{prefix}assets/ai-faq.js" defer></script>\n<script src="{prefix}assets/toc-scrollbar.js" defer></script>')
        page.write_text(text, encoding='utf-8')
    print(f'{lang}: {len(data["sections"])} sections, {sum(len(s["items"]) for s in data["sections"])} headings, {links} hyperlinks; full text verified')
