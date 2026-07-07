# Rajesh Sahu — Portfolio

A static, dependency-free rebuild of the Framer portfolio (hero, selected projects,
bio, writing, contact) as plain HTML/CSS/JS. No build step, no framework — open
`index.html` and it works.

## Files
- `index.html` — all page content and structure
- `styles.css` — all styling (colors, type, layout, responsive rules)
- `script.js` — small scroll-reveal effect on the project/writing rows

## Editing content
Everything is plain text in `index.html`. Each section is clearly commented
(`<!-- ============ HERO ============ -->` etc.). To add a new project or essay,
copy one `<article class="row reveal">...</article>` block and edit the text —
no other changes needed, the layout adapts automatically.

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
