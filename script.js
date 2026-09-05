(() => {
  const featuredButtons = [...document.querySelectorAll('.language-button')];
  const allLanguageButtons = [...document.querySelectorAll('.language-option')];
  const languageButtons = [...featuredButtons, ...allLanguageButtons];
  const toast = document.getElementById('toast');
  const download = document.getElementById('download-pdf');
  const backgrounds = [...document.querySelectorAll('.hero-bg')];
  const toggleLanguages = document.getElementById('toggle-languages');
  const languageBrowser = document.getElementById('language-browser');
  const languageSearch = document.getElementById('language-search');
  const languageEmpty = document.getElementById('language-empty');

  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  };

  const normalize = (value) => (value || '')
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  const languageMessage = (button) => {
    const lang = button.dataset.lang;
    const label = button.dataset.label || button.querySelector('span')?.textContent || 'Questa lingua';
    return lang === 'it'
      ? 'Italiano selezionato. Il manuale 2026.1 è pronto; il download sul sito è in pubblicazione.'
      : `${label}: versione in preparazione.`;
  };

  const selectLanguage = (button) => {
    const lang = button.dataset.lang;
    featuredButtons.forEach((item) => {
      const active = item.dataset.lang === lang;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    if (lang === 'it') document.documentElement.lang = 'it';
    showToast(languageMessage(button));
  };

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => selectLanguage(button));
  });

  if (toggleLanguages && languageBrowser) {
    toggleLanguages.addEventListener('click', () => {
      const opening = languageBrowser.hidden;
      languageBrowser.hidden = !opening;
      toggleLanguages.setAttribute('aria-expanded', String(opening));
      toggleLanguages.textContent = opening ? 'Chiudi elenco' : 'Tutte le lingue';
      if (opening && languageSearch) {
        window.setTimeout(() => languageSearch.focus(), 50);
      }
    });
  }

  if (languageSearch) {
    languageSearch.addEventListener('input', () => {
      const query = normalize(languageSearch.value);
      let visible = 0;
      allLanguageButtons.forEach((button) => {
        const haystack = normalize(`${button.dataset.label} ${button.textContent}`);
        const show = !query || haystack.includes(query);
        button.classList.toggle('is-hidden', !show);
        if (show) visible += 1;
      });
      if (languageEmpty) languageEmpty.hidden = visible !== 0;
    });
  }

  if (download) {
    download.addEventListener('click', (event) => {
      if (download.classList.contains('is-disabled')) {
        event.preventDefault();
        showToast('Il manuale italiano è pronto. Il pulsante verrà attivato appena il PDF sarà caricato sul sito.');
      }
    });
  }

  // Three optional original photos: assets/hero-1.jpg, hero-2.jpg, hero-3.jpg.
  // Until they are uploaded, the CSS gradient remains the visible background.
  if (backgrounds.length) {
    let current = 0;
    backgrounds[current].classList.add('is-active');
    window.setInterval(() => {
      backgrounds[current].classList.remove('is-active');
      current = (current + 1) % backgrounds.length;
      backgrounds[current].classList.add('is-active');
    }, 8000);
  }
})();
