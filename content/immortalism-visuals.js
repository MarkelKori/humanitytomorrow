(() => {
  const copy = {
    ru: {
      deaths: {
        eyebrow: 'Масштаб проблемы',
        title: 'Смерти в день от разных причин',
        intro: 'Старение выглядит абстрактно, пока его не поставить рядом с другими глобальными бедствиями.',
        note: 'Старение убивает больше людей, чем войны, голод и нехватка воды вместе взятые.',
        data: [
          ['Старение', 120000, '#2E7A4F', '120,000 смертей/день\n= 43.8 млн в год\n≈ 75% всех смертей'],
          ['Голод', 25000, '#6B6560', '25,000 смертей/день\n= 9.1 млн в год\nПреимущественно дети в Африке и Азии'],
          ['Нехватка воды', 3800, '#EDE9E1', '3,800 смертей/день\n= 1.4 млн в год\nОт заболеваний, связанных с грязной водой, и от обезвоживания'],
          ['Войны', 187, '#F5F2EC', '187 смертей/день\n≈ 68,000\nОт всех конфликтов в мире. Цифра очень приблизительная']
        ],
        unit: 'смертей/день'
      },
      land: {
        eyebrow: 'Эффективность ресурсов',
        title: 'Использование земли: текущее vs потенциал',
        intro: 'Проблема не только в количестве людей, но и в том, как мы используем землю, воду и пищу.',
        note: '3 млрд гектаров примерно равны площади Африки.',
        areaUnit: 'млрд га',
        total: 'Общая площадь сельхозземель: 4 млрд га',
        controls: { current: 'Сейчас', plant: 'Растительная диета', cellular: '+ Клеточное с/х' },
        scenarios: {
          current: [['Животноводство', 3.2, '#C1440E'], ['Растениеводство', 0.8, '#2E7A4F']],
          plant: [['Растениеводство', 1.0, '#2E7A4F'], ['Освобождено', 3.0, '#EDE9E1']],
          cellular: [['Клеточное с/х', 0.7, '#1A5C8A'], ['Освобождено', 3.3, '#EDE9E1']]
        }
      },
      budget: {
        eyebrow: 'Экономика старения',
        title: 'Бюджет государства: куда идут деньги?',
        intro: 'Пенсии и возраст-связанная медицина занимают огромную часть бюджета, а исследования причины получают крошечную долю.',
        note: 'Мы тратим миллиарды на симптомы старения, но почти ничего на искоренение причины.',
        center: ['Бюджет', 'OECD 2023'],
        data: [
          ['Пенсии', 18, '#C1440E', 'Пенсии: 18%\nСредняя пенсия в EU: €1,300/месяц'],
          ['Здравоохранение пожилых', 15, '#E67E22', 'Здравоохранение пожилых: 15%\nБольшая часть медрасходов приходится на последние 2 года жизни'],
          ['Другие расходы', 67, '#6B6560', 'Другие расходы: 67%\nОбразование, оборона, инфраструктура, наука, культура и т.д.'],
          ['Исследования старения', 0.5, '#2E7A4F', 'Исследования старения: <1%\n~$4-5 млрд/год глобально']
        ]
      },
      experience: {
        eyebrow: 'Жить вечно не значит исчерпать жизнь',
        title: 'Сколько нужно времени, чтобы всё испытать?',
        intro: 'Даже если мир застынет, на чтение, обучение, путешествия и игры потребуются века.',
        note: 'И это только малая часть возможного опыта.',
        unit: 'лет',
        monthShort: 'мес.',
        total: (years) => `Итого: ${years}+ лет непрерывной практики`,
        data: [
          ['Все книги Дюма', 0.5, '#C1440E', 'Александр Дюма: около 0.5 года при чтении 8 часов в день'],
          ['Топ 10 инструментов', 10, '#9B59B6', 'Мастерство в 10 инструментах: около 10 лет'],
          ['Топ 20 языков мира', 20, '#2E7A4F', 'Мастерство в 20 языках: около 20 лет'],
          ['Вся научная фантастика', 50, '#1A5C8A', 'Все книги в жанре sci-fi: около 50 лет'],
          ['Все игры Steam', 130, '#16A085', 'Все игры Steam: около 130 лет'],
          ['6 мес. в 450 городах >1 млн', 225, '#D35400', 'По 6 месяцев в каждом городе с населением >1 млн: около 225 лет']
        ]
      }
    },
    ua: {
      deaths: {
        eyebrow: 'Масштаб проблеми',
        title: 'Смерті на день від різних причин',
        intro: 'Старіння виглядає абстрактно, доки не поставити його поруч з іншими глобальними лихами.',
        note: 'Старіння вбиває більше людей, ніж війни, голод і нестача води разом.',
        data: [
          ['Старіння', 120000, '#2E7A4F', '120,000 смертей/день\n= 43.8 млн на рік\n≈ 75% усіх смертей'],
          ['Голод', 25000, '#6B6560', '25,000 смертей/день\n= 9.1 млн на рік\nПереважно діти в Африці та Азії'],
          ['Нестача води', 3800, '#EDE9E1', '3,800 смертей/день\n= 1.4 млн на рік\nВід захворювань, пов’язаних із брудною водою, і від зневоднення'],
          ['Війни', 187, '#F5F2EC', '187 смертей/день\n≈ 68,000\nВід усіх конфліктів у світі. Цифра дуже приблизна']
        ],
        unit: 'смертей/день'
      },
      land: {
        eyebrow: 'Ефективність ресурсів',
        title: 'Використання землі: поточне vs потенціал',
        intro: 'Проблема не лише в кількості людей, а й у тому, як ми використовуємо землю, воду та їжу.',
        note: '3 млрд гектарів приблизно дорівнюють площі Африки.',
        areaUnit: 'млрд га',
        total: 'Загальна площа сільгоспземель: 4 млрд га',
        controls: { current: 'Зараз', plant: 'Рослинна дієта', cellular: '+ Клітинне с/г' },
        scenarios: {
          current: [['Тваринництво', 3.2, '#C1440E'], ['Рослинництво', 0.8, '#2E7A4F']],
          plant: [['Рослинництво', 1.0, '#2E7A4F'], ['Звільнено', 3.0, '#EDE9E1']],
          cellular: [['Клітинне с/г', 0.7, '#1A5C8A'], ['Звільнено', 3.3, '#EDE9E1']]
        }
      },
      budget: {
        eyebrow: 'Економіка старіння',
        title: 'Бюджет держави: куди йдуть гроші?',
        intro: 'Пенсії та вікова медицина займають величезну частину бюджету, а дослідження причини отримують крихітну частку.',
        note: 'Ми витрачаємо мільярди на симптоми старіння, але майже нічого на викорінення причини.',
        center: ['Бюджет', 'OECD 2023'],
        data: [
          ['Пенсії', 18, '#C1440E', 'Пенсії: 18%\nСередня пенсія в EU: €1,300/місяць'],
          ['Охорона здоров’я літніх людей', 15, '#E67E22', 'Охорона здоров’я літніх людей: 15%'],
          ['Інші витрати', 67, '#6B6560', 'Інші витрати: 67%\nОсвіта, оборона, інфраструктура, наука, культура тощо'],
          ['Дослідження старіння', 0.5, '#2E7A4F', 'Дослідження старіння: <1%\n~$4-5 млрд/рік глобально']
        ]
      },
      experience: {
        eyebrow: 'Жити вічно не означає вичерпати життя',
        title: 'Скільки потрібно часу, щоб усе пережити?',
        intro: 'Навіть якщо світ застигне, на читання, навчання, подорожі та ігри потрібні століття.',
        note: 'І це лише мала частина можливого досвіду.',
        unit: 'років',
        monthShort: 'міс.',
        total: (years) => `Разом: ${years}+ років безперервної практики`,
        data: [
          ['Усі книги Дюма', 0.5, '#C1440E', 'Усі книги Дюма: близько 0.5 року'],
          ['Топ 10 інструментів', 10, '#9B59B6', 'Майстерність у 10 інструментах: близько 10 років'],
          ['Топ 20 мов світу', 20, '#2E7A4F', 'Майстерність у 20 мовах: близько 20 років'],
          ['Уся наукова фантастика', 50, '#1A5C8A', 'Усі книги в жанрі sci-fi: близько 50 років'],
          ['Усі ігри Steam', 130, '#16A085', 'Усі ігри Steam: близько 130 років'],
          ['6 міс. у 450 містах >1 млн', 225, '#D35400', 'По 6 місяців у кожному місті >1 млн: близько 225 років']
        ]
      }
    },
    en: {
      deaths: {
        eyebrow: 'Scale of the problem',
        title: 'Deaths per day by cause',
        intro: 'Aging feels abstract until it is placed next to other global disasters.',
        note: 'Aging kills more people than wars, hunger, and lack of water combined.',
        data: [
          ['Aging', 120000, '#2E7A4F', '120,000 deaths/day\n= 43.8 million per year\n≈ 75% of all deaths'],
          ['Hunger', 25000, '#6B6560', '25,000 deaths/day\n= 9.1 million per year\nMostly children in Africa and Asia'],
          ['Lack of water', 3800, '#EDE9E1', '3,800 deaths/day\n= 1.4 million per year\nFrom dirty-water diseases and dehydration'],
          ['Wars', 187, '#F5F2EC', '187 deaths/day\n≈ 68,000\nFrom all conflicts worldwide. Very approximate']
        ],
        unit: 'deaths/day'
      },
      land: {
        eyebrow: 'Resource efficiency',
        title: 'Land use: current vs potential',
        intro: 'The problem is not only how many people exist, but how we use land, water, and food.',
        note: '3 billion hectares is roughly the area of Africa.',
        areaUnit: 'billion ha',
        total: 'Total agricultural land: 4 billion ha',
        controls: { current: 'Current', plant: 'Plant-based diet', cellular: '+ Cellular agriculture' },
        scenarios: {
          current: [['Livestock', 3.2, '#C1440E'], ['Crops', 0.8, '#2E7A4F']],
          plant: [['Crops', 1.0, '#2E7A4F'], ['Freed land', 3.0, '#EDE9E1']],
          cellular: [['Cellular ag', 0.7, '#1A5C8A'], ['Freed land', 3.3, '#EDE9E1']]
        }
      },
      budget: {
        eyebrow: 'The economics of aging',
        title: 'State budget: where does the money go?',
        intro: 'Pensions and age-related healthcare take a huge share of the budget, while research into the cause receives a tiny fraction.',
        note: 'We spend billions fighting symptoms of aging, but almost nothing on eliminating the cause.',
        center: ['Budget', 'OECD 2023'],
        data: [
          ['Pensions', 18, '#C1440E', 'Pensions: 18%\nAverage pension in the EU: €1,300/month'],
          ['Healthcare for older people', 15, '#E67E22', 'Healthcare for older people: 15%'],
          ['Other spending', 67, '#6B6560', 'Other spending: 67%\nEducation, defense, infrastructure, science, culture, etc.'],
          ['Aging research', 0.5, '#2E7A4F', 'Aging research: <1%\n~$4-5B/year globally']
        ]
      },
      experience: {
        eyebrow: 'Living forever does not mean exhausting life',
        title: 'How long would it take to experience everything?',
        intro: 'Even if the world stood still, reading, learning, travel, and games would take centuries.',
        note: 'And this is only a small part of possible experience.',
        unit: 'years',
        monthShort: 'mo.',
        total: (years) => `Total: ${years}+ years of continuous practice`,
        data: [
          ['All books by Dumas', 0.5, '#C1440E', 'All books by Dumas: about 0.5 years'],
          ['Top 10 instruments', 10, '#9B59B6', 'Mastery of 10 instruments: about 10 years'],
          ['Top 20 world languages', 20, '#2E7A4F', 'Mastery of 20 languages: about 20 years'],
          ['All science fiction', 50, '#1A5C8A', 'All sci-fi books: about 50 years'],
          ['All Steam games', 130, '#16A085', 'All Steam games: about 130 years'],
          ['6 mo. in 450 cities >1M', 225, '#D35400', '6 months in every city >1M: about 225 years']
        ]
      }
    }
  };

  const langCopy = (lang) => copy[lang] || copy.en;
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const fmt = (value) => value >= 100000 ? `${Math.round(value / 1000)}K` : value >= 1000 ? `${(value / 1000).toFixed(1)}K` : String(value);

  function frame(id, lang) {
    const spec = langCopy(lang)[id];
    const root = el('figure', `article-visual article-visual-${id}`);
    root.dataset.visualId = id;
    const header = el('figcaption', 'article-visual-header');
    header.append(el('p', 'article-visual-eyebrow', spec.eyebrow), el('h3', 'article-visual-title', spec.title), el('p', 'article-visual-intro', spec.intro));
    root.appendChild(header);
    root.appendChild(id === 'deaths' ? deaths(spec) : id === 'land' ? land(spec) : id === 'budget' ? budget(spec) : experience(spec));
    root.appendChild(el('p', 'article-visual-note', spec.note));
    return root;
  }

  function deaths(spec) {
    const max = Math.max(...spec.data.map((item) => item[1]));
    const wrap = el('div', 'visual-bars visual-deaths-bars');
    spec.data.forEach(([label, value, color, tip]) => {
      const item = el('div', 'visual-bar-item');
      item.dataset.tooltip = tip;
      item.style.setProperty('--bar-color', color);
      item.style.setProperty('--bar-height', `${Math.max(1, value / max * 100)}%`);
      const track = el('div', 'visual-bar-track');
      track.appendChild(el('div', 'visual-bar'));
      item.append(track, el('p', 'visual-bar-value', fmt(value)), el('p', 'visual-bar-unit', spec.unit), el('p', 'visual-bar-label', label));
      wrap.appendChild(item);
    });
    return wrap;
  }

  function land(spec) {
    const root = el('div', 'visual-land');
    const controls = el('div', 'article-visual-controls');
    const chart = el('div', 'visual-land-chart');
    chart.appendChild(el('p', 'visual-land-total', spec.total));
    const row = el('div', 'visual-land-row');
    chart.appendChild(row);
    const segmentCount = Math.max(...Object.values(spec.scenarios).map((items) => items.length));
    const segments = Array.from({ length: segmentCount }, () => {
      const segment = el('div', 'visual-land-segment');
      segment.append(el('span'), el('strong'));
      row.appendChild(segment);
      return segment;
    });
    const render = (key) => {
      const items = spec.scenarios[key];
      segments.forEach((segment, index) => {
        const item = items[index];
        segment.classList.toggle('is-empty', !item);
        segment.classList.remove('is-light');
        if (!item) {
          segment.style.setProperty('--segment-color', '#EDE9E1');
          segment.style.setProperty('--segment-grow', 0);
          segment.dataset.tooltip = '';
          segment.querySelector('span').textContent = '';
          segment.querySelector('strong').textContent = '';
          return;
        }
        const [label, value, color] = item;
        segment.style.setProperty('--segment-color', color);
        segment.style.setProperty('--segment-grow', value);
        segment.classList.toggle('is-light', color === '#EDE9E1');
        segment.dataset.tooltip = `${label}: ${value.toFixed(1)} ${spec.areaUnit}`;
        segment.querySelector('span').textContent = label;
        segment.querySelector('strong').textContent = `${value.toFixed(1)} ${spec.areaUnit}`;
      });
    };
    Object.entries(spec.controls).forEach(([key, label]) => {
      const button = el('button', 'article-visual-btn', label);
      button.type = 'button';
      if (key === 'current') button.classList.add('active');
      button.addEventListener('click', () => {
        controls.querySelectorAll('button').forEach((item) => item.classList.toggle('active', item === button));
        render(key);
      });
      controls.appendChild(button);
    });
    root.append(controls, chart);
    render('current');
    return root;
  }

  function budget(spec) {
    const root = el('div', 'visual-budget');
    const pie = el('div', 'visual-pie');
    pie.style.background = 'conic-gradient(#C1440E 0 18%, #E67E22 18% 33%, #6B6560 33% 99.5%, #2E7A4F 99.5% 100%)';
    pie.appendChild(el('span', 'visual-pie-center', spec.center.join('\n')));
    root.appendChild(pie);
    const list = el('div', 'visual-budget-list');
    spec.data.forEach(([label, value, color, tip]) => {
      const item = el('div', 'visual-budget-item');
      item.dataset.tooltip = tip;
      item.style.setProperty('--item-color', color);
      item.append(el('span', 'visual-budget-dot'), el('span', 'visual-budget-label', label), el('strong', 'visual-budget-value', value === 0.5 ? '<1%' : `${value}%`));
      list.appendChild(item);
    });
    root.appendChild(list);
    return root;
  }

  function experience(spec) {
    const max = Math.max(...spec.data.map((item) => item[1]));
    const root = el('div', 'visual-experience');
    spec.data.forEach(([label, years, color, tip]) => {
      const row = el('div', 'visual-exp-row');
      row.dataset.tooltip = tip;
      row.style.setProperty('--exp-color', color);
      row.style.setProperty('--exp-width', `${years / max * 100}%`);
      row.append(el('span', 'visual-exp-label', label), el('span', 'visual-exp-track', ''), el('strong', 'visual-exp-value', `${years < 1 ? (years * 12).toFixed(0) + ' ' + spec.monthShort : years.toFixed(years < 5 ? 1 : 0) + ' ' + spec.unit}`));
      root.appendChild(row);
    });
    root.appendChild(el('p', 'visual-exp-total', spec.total(spec.data.reduce((sum, item) => sum + item[1], 0).toFixed(0))));
    return root;
  }

  window.createImmortalismVisual = frame;
})();
