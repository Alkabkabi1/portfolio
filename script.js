(function () {
  const root = document.documentElement;
  const STORAGE_LOCALE = 'portfolio-locale';
  const STORAGE_THEME = 'portfolio-theme';
  const dict = window.PORTFOLIO_I18N || { en: {}, ar: {} };

  function t(key, locale) {
    const loc = locale || root.getAttribute('lang') || 'ar';
    return dict[loc]?.[key] ?? dict.en?.[key] ?? key;
  }

  function applyLocale(locale) {
    const loc = locale === 'en' ? 'en' : 'ar';
    root.setAttribute('lang', loc);
    root.setAttribute('dir', loc === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem(STORAGE_LOCALE, loc);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key, loc);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key, loc);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key, loc));
    });

    const titleKey = document.querySelector('meta[name="description"]')?.getAttribute('data-i18n-content');
    if (titleKey) {
      document.title = t('meta.title', loc);
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', t('meta.description', loc));
    }

    document.title = t('meta.title', loc);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description', loc));

    const localeBtn = document.querySelector('.locale-toggle');
    if (localeBtn) {
      localeBtn.textContent = t('nav.locale', loc);
      localeBtn.setAttribute('aria-label', loc === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    }

    const nav = document.querySelector('.nav');
    if (nav) nav.setAttribute('aria-label', t('nav.aria', loc));

    const navMenuBtn = document.querySelector('.nav-toggle');
    if (navMenuBtn) navMenuBtn.setAttribute('aria-label', t('nav.menu', loc));

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'), loc));
    });

    const theme = root.getAttribute('data-theme') || 'light';
    updateThemeLabels(theme, loc);
  }

  function updateThemeLabels(theme, locale) {
    const loc = locale || root.getAttribute('lang') || 'ar';
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      const key = theme === 'dark' ? 'nav.theme.light' : 'nav.theme.dark';
      const label = t(key, loc);
      themeToggle.setAttribute('aria-label', label);
      themeToggle.setAttribute('title', label);
    }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_THEME, theme);
    updateThemeLabels(theme);
  }

  const localeToggle = document.querySelector('.locale-toggle');
  if (localeToggle) {
    localeToggle.addEventListener('click', () => {
      const current = root.getAttribute('lang') || 'ar';
      applyLocale(current === 'ar' ? 'en' : 'ar');
    });
  }

  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
    applyTheme(root.getAttribute('data-theme') || 'light');
  }

  applyLocale(localStorage.getItem(STORAGE_LOCALE) || 'ar');

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.contrib-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('.contrib-card');
      const isOpen = card.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  if (sections.length && navAnchors.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navAnchors.forEach((a) => {
              a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' }
    );
    sections.forEach((s) => sectionObserver.observe(s));
  }
})();
