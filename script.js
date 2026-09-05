(() => {
  const languageButtons = [...document.querySelectorAll('.language-button')];
  const toast = document.getElementById('toast');
  const download = document.getElementById('download-pdf');
  const backgrounds = [...document.querySelectorAll('.hero-bg')];

  const languageMessages = {
    en: 'English version coming soon.',
    es: 'La versión en español llegará después del master italiano.',
    fr: 'La version française arrivera après le master italien.',
    de: 'Die deutsche Version folgt nach dem italienischen Master.',
    pt: 'A versão em português chegará depois do master italiano.'
  };

  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  };

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      languageButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      if (lang === 'it') {
        document.documentElement.lang = 'it';
        showToast('Italiano selezionato. Il PDF sarà disponibile qui appena pubblicato.');
      } else {
        showToast(languageMessages[lang] || 'Versione in preparazione.');
      }
    });
  });

  if (download) {
    download.addEventListener('click', (event) => {
      if (download.classList.contains('is-disabled')) {
        event.preventDefault();
        showToast('Il PDF italiano è in preparazione. Il pulsante sarà attivato senza cambiare questo indirizzo.');
      }
    });
  }

  // Three optional original photos: assets/hero-1.jpg, hero-2.jpg, hero-3.jpg.
  // Until they are uploaded, the CSS gradient remains the visible background.
  if (backgrounds.length) {
    let current = 0;
    backgrounds[current].classList.add('is-active');
    setInterval(() => {
      backgrounds[current].classList.remove('is-active');
      current = (current + 1) % backgrounds.length;
      backgrounds[current].classList.add('is-active');
    }, 8000);
  }
})();
