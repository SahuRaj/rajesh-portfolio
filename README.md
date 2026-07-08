# Rajesh Sahu — Portfolio

A static, dependency-free rebuild of the Framer portfolio (hero, selected projects,
bio, writing, contact) as plain HTML/CSS/JS. No build step, no framework — open
`index.html` and it works.

## Files
- `index.html` — homepage: hero, now, selected projects, experiments, bio, writing, contact
- `styles.css` — all styling (colors, type, layout, responsive rules)
- `script.js` — small scroll-reveal effect on the project/writing rows
- `favicon.ico`, `apple-touch-icon.png` — browser tab icon
- `og-image.png` — link preview image for LinkedIn/Slack/email
- `projects/` — one dedicated page per selected project (case study detail)

## Editing content
Everything is plain text in `index.html`. Each section is clearly commented
(`<!-- ============ HERO ============ -->` etc.). To add a new project or essay,
copy one `<a class="row reveal">...</a>` block and edit the text — no other
changes needed, the layout adapts automatically.

## Project detail pages
Each project card on the homepage links to a real page in `projects/`
(e.g. `projects/ai-reconciliation-workspace.html`). Each page has three parts:
1. **Header + CTAs** — "Open Prototype" / "Try Product" buttons. Not every
   project needs both — delete whichever `<a class="cta-button">` doesn't
   apply, and point the remaining one's `href="#"` at your real link.
2. **Read case study** — currently placeholder paragraphs marked
   `[Placeholder]`. Replace with your real writeup; remove the orange
   "Placeholder" tag once you do.
3. **Architecture** — optional section for system/technical detail. Delete
   the whole `<section>` if a project doesn't need it.

To add a 6th project: copy `projects/ap-citizen-platform.html`, rename it,
edit its content, then add a matching `<a class="row reveal">` link on the
homepage pointing to it.

## Experiments
The Experiments section (homepage) links straight out to external sites
(GitHub repos, live demos) — no detail pages. Just replace each `href="#"`
with your real link.

## Editing look and feel
All colors, fonts, and spacing live at the top of `styles.css` under `:root`.
- `--bg` / `--ink` — background and text colors
- `--serif` / `--sans` — the two typefaces (Lora + Inter, loaded from Google Fonts)
- `--accent` — the single warm accent color used on hover states

## Running it locally
Just double-click `index.html`, or serve it:
```
npx serve .
```

## After you get a domain
Once your site is live at your real domain (e.g. `rajeshsahu.com`), update one line
in `index.html` — the `og:url` meta tag currently says `https://rajeshsahu.com` as
a placeholder. Set it to your actual URL so link previews on LinkedIn/Slack/email
resolve correctly:
```html
<meta property="og:url" content="https://your-actual-domain.com">
```

## Deploying
Any static host works, for example:
- **Netlify**: drag the whole folder onto app.netlify.com/drop
- **Vercel**: `vercel deploy` from inside this folder
- **GitHub Pages**: push to a repo, enable Pages on the `main` branch
