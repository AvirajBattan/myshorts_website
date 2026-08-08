# myshorts_website

The marketing site for MyShorts.ai. Static, zero-build, fast — pure HTML/CSS/JS.

## Design
Light and premium, **matched to the app** for one consistent brand: zinc neutrals,
**Ember `#FC4438`** accent (used sparingly, as a spark), **Geist** type, and the same
gradient play+sparkle logo as the app. The YouTube connection is signalled by **content,
not the theme** — the paste bar's play glyph and the source thumbnail's play button stay
**YouTube red (`#FF0033`)**, so the brand stays yours and source-agnostic (room for
Uploads/Drive later) while still reading "works with YouTube" instantly.

### Videos (hero + phones)
Every video spot shows an **animated preview** by default (never a black box), and a real
clip fades in on top the moment the file exists. Drop files in `website/assets/`:

| File | Where it shows |
|---|---|
| `assets/source.mp4` | hero "YouTube source" (any talking-head clip) |
| `assets/short.mp4` | hero phone (a vertical 9:16 Short) |
| `assets/short2.mp4` | reframing section phone (vertical 9:16) |

Quick placeholders to test (run these — needs internet):
```bash
cd website/assets
curl -L -o source.mp4 "https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
curl -L -o short.mp4  "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
curl -L -o short2.mp4 "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
```
For launch, replace `short.mp4`/`short2.mp4` with your **own rendered 9:16 Shorts**.

### Motion
CSS/JS baseline (auroras, gradient shimmer, scroll reveals, hover, CTA sheen) + **GSAP
ScrollTrigger** (loaded via CDN) for scroll parallax and the app-showcase settle. GSAP is
additive — if it doesn't load, the site still looks complete.

## Files
- `index.html` — the page (semantic + full SEO: OG/Twitter, JSON-LD, canonical)
- `styles.css` — the design system
- `script.js` — sticky nav, scroll reveals, mobile menu (graceful without JS)
- `robots.txt`, `sitemap.xml`

## Preview locally
```bash
cd website && python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (any static host)
Drag the `website/` folder onto **Cloudflare Pages**, **Netlify**, or **Vercel** — no
build step, no framework. Point your domain (e.g. myshorts.in) at it.

## ⚠️ Before launch — replace these placeholders
1. **App URL:** every CTA links to `https://app.myshorts.in` — find/replace with your
   real app (Vercel) URL in `index.html`.
2. **Domain:** `https://myshorts.in/` appears in the canonical tag, OG/Twitter tags,
   `sitemap.xml`, and `robots.txt` — set to your real marketing domain.
3. **Social image:** add a `1200×630` `og.png` in this folder (referenced by OG/Twitter
   tags) so link shares look premium.
4. **Contact / legal:** `hello@myshorts.in` and the `/privacy` + `/terms` links.
5. Optional: swap the CSS-drawn product mockups for real screenshots once you have them.
