# Brand Fonts — Tooth Architect Dental Care

LICENSED COMMERCIAL FONTS from Wonderist Agency. Do NOT redistribute.

## Required Files

Drop these into this directory:
- `MostraNuova-Light.otf` (or .ttf or .woff2)
- `MuseoSans-500.otf` (or .ttf or .woff2)

## Source

Google Drive > Tooth Architect Shiva > Wonderist Branding > _Fonts/

## How It Works

Files in `public/` are served as-is by Vite at the root URL.
`public/fonts/MuseoSans-500.otf` → accessible at `/fonts/MuseoSans-500.otf`
The `@font-face` rules in `src/index.css` reference these paths.
No database, no CDN required.

## Fallback Fonts (active until files are added)

- Mostra Nuova → Cormorant Garamond (Google Fonts)
- Museo Sans → Nunito Sans (Google Fonts)
