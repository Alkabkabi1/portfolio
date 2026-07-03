import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const orig = execSync('git show HEAD:index.html', { encoding: 'utf8', cwd: root });
const match = orig.match(/<section id="course-projects"[\s\S]*?<\/section>/);
if (!match) throw new Error('course-projects section not found in HEAD');

const gridOnly = match[0]
  .replace(/<p class="section-label"[\s\S]*?<div class="course-projects-grid">/, '<div class="course-projects-grid">')
  .replace(/<p class="course-projects-note"[\s\S]*$/, '');

const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Archive of academic course projects — Norah Alkabkabi">
  <title>مشاريع المقررات | نورة الكبكبي</title>
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="styles.css?v=5">
  <script>
    (function () {
      var th = localStorage.getItem('portfolio-theme');
      var loc = localStorage.getItem('portfolio-locale');
      document.documentElement.setAttribute('data-theme', th === 'dark' ? 'dark' : 'light');
      if (loc === 'en') {
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
      }
    })();
  </script>
</head>
<body>
  <nav class="nav" aria-label="Main">
    <div class="container nav-inner">
      <a href="index.html" class="nav-logo">
        <img src="assets/logo-mark.svg" alt="" class="nav-logo-mark" width="28" height="28">
        Norah<span>.</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html#highlights" data-i18n="nav.highlights">Home</a></li>
        <li><a href="index.html#course-projects" data-i18n="archive.back.featured">Featured projects</a></li>
      </ul>
      <div class="nav-actions">
        <button class="locale-toggle" type="button">English</button>
        <button class="theme-toggle" type="button" aria-label="Theme">
          <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </div>
    </div>
  </nav>

  <main class="section archive-page" style="padding-top: 2rem;">
    <div class="container fade-in visible">
      <p class="section-label" data-i18n="archive.label">Archive</p>
      <h1 class="section-title" data-i18n="archive.title">All academic course projects</h1>
      <p class="section-lead" data-i18n="archive.lead">Full archive of 18 team projects from Software Engineering coursework at Umm Al-Qura University.</p>
      <a href="index.html#course-projects" class="btn btn-ghost archive-back-link" data-i18n="archive.back">← Back to portfolio</a>
      ${gridOnly.replace('<section id="course-projects" class="section" style="padding-top: 0;">', '').replace('<div class="container fade-in">', '').replace(/<\/div>\s*<\/section>\s*$/, '')}
      <p class="course-projects-note" data-i18n="courseproj.note">18 team projects from coursework — summaries reflect what we built together, not individual roles.</p>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <p data-i18n="footer.copy">© 2026 نورة محمد الكبكبي</p>
      <p class="footer-note" data-i18n="footer.note">خريجة هندسة برمجيات – جامعة أم القرى</p>
    </div>
  </footer>

  <script src="i18n.js?v=4"></script>
  <script src="script.js?v=4"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(root, 'course-projects.html'), html);
console.log('course-projects.html created');
