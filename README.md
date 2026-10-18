# Karthik Bindumon, portfolio

React, Vite, `motion` (Framer Motion) and Lenis. Hosted free on GitHub Pages. Every push to `main` rebuilds and publishes the site.

## Updating it (the short version)

Add new work anywhere in `D:\RESUME`, then tell Claude: "update the site". Claude moves the files into `public/work/`, adds them to `src/content.js`, builds, checks it, and pushes. The site is live about a minute later.

## Where things live

| What | Where |
| --- | --- |
| All words, figures, case files, roles | `src/content.js` |
| The 32 pilot proposals | `src/library.js` |
| Demos, papers, reel and earlier-work links | `src/evidence.js` |
| Real screens and clips for case files | `public/work/<project>/...`, listed in a project's `media` in `src/content.js` |
| PDFs | `public/docs/` (case-file plans, playbooks) and `public/assets/` (résumé) |
| Old full case files with working demos | `public/case-files/` |
| Portrait | `public/assets/portrait-new.jpg` |
| Look and feel | `src/index.css`, and `DESIGN.md` at the project root |

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # outputs dist/
```

## Rules the site keeps

- Three colours only: ink, paper, vermilion.
- Every figure comes from the résumé or the earlier portfolio. No invented clients, testimonials or numbers.
- Illustrative art stays labelled "Illustrative art" until real screens replace it.
- Almost no "I": the visitor is "you".
