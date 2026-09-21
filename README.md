# Afiq Syazwan Razizad — CV / Résumé Site

Single-page CV site for Afiq Syazwan Razizad, Ts., CEng MIET — Manager, Facilities Management (Asset Integrity), PETRONAS.

Vanilla HTML/CSS/JS, no build step. Design language is an engineering-drawing "technical dossier" theme (blueprint grid, sheet-numbered sections, annotated portrait, a turnaround-schedule-style Gantt chart for work experience) rather than a generic template look.

## Structure

```
index.html        Page markup + SEO/meta + JSON-LD
css/style.css      Design tokens + all component styles (incl. dark mode + print)
js/main.js         Nav, dark-mode toggle, expandable sections, scroll reveals, counters
assets/            Portrait (photo.webp), downloadable CV (Afiq_Syazwan_Razizad_CV.pdf), favicon
robots.txt, sitemap.xml   Basic SEO
```

## Run locally

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deploy

Hosted on **GitHub Pages** from this repo's default branch. In GitHub: Settings → Pages → Source → Deploy from a branch → `main` / `/ (root)`.

## Updating content

All copy lives directly in `index.html` (no CMS/build step). To update the downloadable CV, replace `assets/Afiq_Syazwan_Razizad_CV.pdf` with the new file (keep the same filename, or update the `href` references in `index.html`).
