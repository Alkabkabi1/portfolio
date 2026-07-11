<div align="center">

# Norah Mohammed Alkabkabi — Software Engineering Portfolio

### *Three proofs, one screen.*

Personal portfolio for **Norah Mohammed Alkabkabi** (نورة محمد الكبكبي) — Software Engineering graduate from **Umm Al-Qura University** with co-op experience in healthcare IT and a documented graduation project live on the web.

<br>

[![Live site](https://img.shields.io/badge/Live-alkabkabi1.github.io%2Fportfolio-0e5a38?style=for-the-badge&logo=github&logoColor=white)](https://alkabkabi1.github.io/portfolio/)
[![TeamHUB](https://img.shields.io/badge/TeamHUB-v1.0.0--rc1-00d9a0?style=for-the-badge&labelColor=0a1210)](https://github.com/Alkabkabi1/TeamHUB)
[![Ruwad](https://img.shields.io/badge/Ruwad-ruwad.space-1a7a52?style=for-the-badge&labelColor=f8fbf9)](https://ruwad.space)
[![GPA](https://img.shields.io/badge/GPA-3.67%20%2F%204.00-1a7a52?style=for-the-badge&labelColor=f8fbf9&color=0e5a38)](https://alkabkabi1.github.io/portfolio/#academics)
[![Bilingual](https://img.shields.io/badge/Arabic%20%2B%20English-AR%20%2F%20EN-0e5a38?style=for-the-badge&labelColor=f8fbf9&color=1a7a52)](https://alkabkabi1.github.io/portfolio/)

</div>

---

## Summary

This repository hosts a **bilingual (Arabic-first / English)** static portfolio site that presents three pillars of evidence in one scroll:

| Pillar | Highlights |
|:---|:---|
| **Academics** | GPA **3.67 / 4.00** · Second honors · **164** credits · **25** A+ grades · **53** courses completed |
| **Co-op training** | **King Abdulaziz Hospital**, Mecca — **2** full-stack systems deployed on the hospital server · **67** automated tests · **17+** HR workflows · Certificate of appreciation |
| **TeamHUB** | Arabic-first teamwork platform — **339** Pest tests · **32** AI tools · v1.0.0-rc1 · MIT open source · [github.com/Alkabkabi1/TeamHUB](https://github.com/Alkabkabi1/TeamHUB) |
| **Graduation project** | **Ruwad** — student clubs platform live at [ruwad.space](https://ruwad.space) · SRS documentation · **18+** Pest tests · CI/CD via GitHub Actions |

**Focus areas:** software testing, technical documentation, DevOps, and explaining technical concepts clearly to teammates.

---

## About

Norah is a **June 2026 Software Engineering graduate** from Umm Al-Qura University (College of Computing). Her portfolio combines strong academic results with hands-on delivery:

- **University honors** — Readiness Medal (Dean's Honor List), department appreciation certificate
- **Faculty recommendations** — letters from Software Requirements and Software Maintenance courses
- **Coursera certificates** — portfolio web development (HTML/CSS) and Java desktop development
- **18 academic course projects** — DevOps, web engineering, Flutter, data engineering, software testing, security, and more (PDF reports included)

---

## Co-op — King Abdulaziz Hospital

Four months (+ one improvement week) in the hospital IT department building production systems for healthcare operations:

- **2 deployed systems** — HR request workflows (Node.js, Express, MySQL) and IT maintenance / data-center management
- **67 passing automated tests**, CSP headers, rate limiting, and RBAC
- **17+ digital HR forms** — leave, travel, certificates, clearance, and multi-step approval chains
- **Bilingual Arabic/English** UI in a live institutional environment
- Full training report and appreciation certificate available on the site

---

## TeamHUB — open-source teamwork platform

**TeamHUB** is an Arabic-first platform for small teams and organizations where completing a task means submitting a real deliverable and getting lead approval — not checking a box.

**Stack:** Laravel 13 · PHP 8.4 · Inertia.js v3 · Svelte 5 · Tailwind CSS v4 · Filament v4 · Laravel Octane/RoadRunner · Pest · PHPStan level 5

**Highlights:**

1. Full domain re-engineering from [Ruwad](https://github.com/Weaam-02/ruwad) (university clubs) into a generic teamwork product
2. Deliverable review workflow — Todo → In Progress → Review → Done
3. **339** automated tests, PHPStan level 5, CI (lint, types, security audit)
4. **32** scoped AI assistant tools with confirm-before-write on all mutations
5. Bilingual Arabic/English UI with RTL as first-class · v1.0.0-rc1 shipped July 2026

**Repository:** [github.com/Alkabkabi1/TeamHUB](https://github.com/Alkabkabi1/TeamHUB)

---

## Graduation project — Ruwad

**Ruwad** is a digital platform for student clubs, events, and volunteer hours at Umm Al-Qura University.

**Stack:** Laravel 13 · Inertia.js v3 · Svelte 5 · Pest 4 · Filament v4 · DomPDF · GitHub Actions

**Key contributions:**

1. Volunteer hours system — REST APIs, role-based dashboards, policy validation
2. Automated Pest feature and unit tests with SRS traceability
3. Bilingual PDF reports with Arabic glyph shaping (DomPDF)
4. i18n infrastructure — 21 translation groups, RTL support, ~95% UI coverage
5. Technical documentation, Fortify security, and CI/CD workflow fixes

---

## Technical skills

`Laravel` · `Node.js` · `Express` · `MySQL` · `Svelte` · `Flutter` · `Java` · `Python` · `Git` · `GitHub Actions` · `Pest` · `Docker` · `CI/CD` · `REST APIs` · `DevOps` · Software testing · Technical documentation

---

## Site features

| Feature | Detail |
|:---|:---|
| **Bilingual** | Arabic-first RTL + English toggle (`i18n.js`) |
| **Themes** | Light and dark mode — persisted in `localStorage` |
| **Credentials** | Academic transcript, graduation certificate, honors, recommendations |
| **Projects** | 8 featured course projects + archive page with 10 more |
| **CV exports** | `cv/resume.html`, `cv/resume.tex`, cover letters |

Built with **HTML + CSS + vanilla JavaScript** — no build step, fast on GitHub Pages.

---

## Screenshots (English)

<p align="center">
  <img src="assets/readme/hero-light.png" alt="Portfolio hero — light mode" width="49%">
  <img src="assets/readme/hero-dark.png" alt="Portfolio hero — dark mode" width="49%">
</p>

<p align="center">
  <img src="assets/readme/academics.png" alt="Academic record section" width="88%">
</p>

<p align="center">
  <img src="assets/readme/training.png" alt="Co-op training section" width="88%">
</p>

<p align="center">
  <img src="assets/readme/teamhub.png" alt="TeamHUB open-source project section" width="88%">
</p>

<p align="center">
  <img src="assets/readme/ruwad.png" alt="Ruwad graduation project section" width="88%">
</p>

---

## Run locally

```bash
git clone https://github.com/Alkabkabi1/portfolio.git
cd portfolio
```

Open `index.html` in a browser, or serve locally:

```bash
python -m http.server 8080
# → http://localhost:8080
```

To default to English:

```js
localStorage.setItem('portfolio-locale', 'en');
location.reload();
```

---

## Project structure

```
portfolio/
├── index.html              # Main portfolio site
├── course-projects.html    # Extended course project archive
├── styles.css              # Theme and layout
├── script.js               # Navigation, theme, accordions
├── i18n.js                 # Arabic / English strings
├── assets/                 # Certificates, transcripts, course PDFs
├── assets/readme/          # README screenshots
└── cv/                     # Resume and cover letter exports
```

---

## Links

| | |
|:---|:---|
| **Live portfolio** | [alkabkabi1.github.io/portfolio](https://alkabkabi1.github.io/portfolio/) |
| **TeamHUB** | [github.com/Alkabkabi1/TeamHUB](https://github.com/Alkabkabi1/TeamHUB) |
| **Ruwad** | [ruwad.space](https://ruwad.space) |
| **GitHub** | [github.com/Alkabkabi1](https://github.com/Alkabkabi1) |
| **Email** | nora.alkabkabi@gmail.com |

---

<div align="center">

**© 2026 Norah Mohammed Alkabkabi**

*Software Engineering · Umm Al-Qura University*

</div>
