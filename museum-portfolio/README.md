# Museum Portfolio Starter (Static HTML)

This is a lightweight, no-build portfolio template designed like a calm museum: fast to browse, but deep if someone wants detail.

## Quick deploy (GitHub Pages)

**Recommended:** create a *user site* repository so links work as written.

1. Create a repo named: `YOUR_GITHUB_USERNAME.github.io`
2. Upload these files to the repo root.
3. In GitHub → **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` (root)
4. Your site will appear at: `https://YOUR_GITHUB_USERNAME.github.io/`

## Edit the navigation labels

Navigation lives inside each page for now (simple static approach).  
Search for the block that begins with:

```html
<div class="topbar">
```

Then edit menu labels/links.

## Add new case studies

Copy an existing file from:

- `/exhibitions/patient-risk.html`

and update the content. Also add it to `/analysis-and-science/index.html`.

## Poster talks

Each exhibition includes a print-friendly poster page:
- `...-poster.html`

You can print to PDF from the browser, or link directly from a QR code.

## Next upgrade (optional)

When you’re ready, you can migrate this to a static-site generator (Astro/Next/Hugo) so navigation and project metadata live in one place.
