# Portfolio



## GitHub Pages

**Recommended:** a *user site* repository was created so that links work as written.

1. Create a repo named: `MY_GITHUB_USERNAME.github.io`
2. Upload these files to the repo root.
3. In GitHub → **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` (root)
4. My site is at: `https://MY_GITHUB_USERNAME.github.io/`

## Edit the navigation labels NOTES

Navigation is found inside each page.  

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
