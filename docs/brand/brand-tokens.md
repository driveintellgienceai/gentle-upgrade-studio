# Tooth Architect Dental Care — Wonderist Brand Tokens
## Source: Wonderist Agency Brand Style Guide (PDF)
## Last updated: March 2026

---

## Brand Voice & Tone
**Three words:** Thoughtful, Artful, Genuine

The brand communicates with a calm confidence that reflects both creativity and
professionalism. Language should feel warm and conversational — never clinical or
overly formal. When Tooth Architect speaks, it balances design-oriented
sophistication with approachability, helping patients feel informed, cared for, and
part of something thoughtfully crafted just for them.

---

## Brand Colors

### Primary Colors
| Name | Hex | Role |
|------|-----|------|
| Olive | #5B6142 | Primary brand color — headers, nav, footer, primary buttons |
| Forest | #3E4A3C | Dark variant — hover states, text on light backgrounds |

### Secondary Colors
| Name | Hex | Role |
|------|-----|------|
| Sage | #8FA89B | Secondary elements — cards, borders, icons, section accents |
| Parchment | #EDE4D3 | Warm light background — sections, cards, form backgrounds |

### Accent Colors
| Name | Hex | Role |
|------|-----|------|
| Linen | #F5EDE0 | Page background — warm off-white, never sterile pure white |
| Rust | #C1602D | Call-to-action accent — buttons, links, highlights, badges |

### Additional UI Colors (derived from brand)
| Name | Hex | Role |
|------|-----|------|
| Off White | #FAFAF5 | Lightest background |
| Dark Text | #2C2C28 | Primary body text |
| Muted Text | #6B6B63 | Secondary/caption text |
| Border | #D4CFC7 | Card borders, dividers |

> **NOTE:** These hex values are visual approximations from the Brand Style Guide.
> Once the actual PDF is extracted, verify and update if needed.
> The COLOR FAMILIES are confirmed: olive green primary, sage secondary,
> parchment/linen warm neutrals, rust orange accent.

---

## Brand Typography

### Typefaces
| Role | Font Family | Weight | Usage |
|------|------------|--------|-------|
| Display/Headings | **Mostra Nuova** | Light (300) | H1, H2, logo text, hero headlines, page titles |
| Body/UI | **Museo Sans** | 500 (Medium) | Body text, navigation, buttons, captions, forms |

### Font Files
These are LICENSED COMMERCIAL FONTS custom-ordered from Wonderist Agency.
- `public/fonts/MostraNuova-Light.otf` (or .ttf)
- `public/fonts/MuseoSans-500.otf` (or .ttf)

### Google Fonts Fallbacks (active until custom fonts are dropped in)
- Mostra Nuova → **Cormorant Garamond** (closest free serif)
- Museo Sans → **Nunito Sans** (closest free geometric sans)

### Type Scale
| Element | Font | Size (desktop) | Size (mobile) |
|---------|------|----------------|---------------|
| H1 | Mostra Nuova Light | 48–56px | 32–36px |
| H2 | Mostra Nuova Light | 36–40px | 26–30px |
| H3 | Museo Sans 500 | 24–28px | 20–22px |
| Body | Museo Sans 500 | 16–18px | 16px |
| Nav | Museo Sans 500 | 14–15px uppercase | 14px |
| Caption | Museo Sans 500 | 13–14px | 12–13px |
| Buttons | Museo Sans 500 | 14–16px, letter-spacing 0.05em | 14px |

---

## Logo System
| # | Variant | Usage |
|---|---------|-------|
| 1 | Primary (full color) | Default — icon + wordmark horizontal |
| 2 | Primary Outline | Light/reversed backgrounds |
| 3 | Vertical | Stacked — icon above wordmark |
| 4 | Vertical Outline | Stacked reversed |
| 5 | Badge | Circular enclosure |
| 6 | Badge Single | Simplified circular |
| 7 | Badge Outline | Circular reversed |
| 8 | Icon | Diamond/geometric mark only |
| 9 | Icon Outline | Mark reversed |
| 10 | Wordmark | Text only |

Logo colors: Olive + Rust on light; White on dark. Single-color: Olive on light, White on dark.

---

## Tailwind Config Tokens

```ts
// In tailwind.config.ts → theme.extend.colors.brand:
brand: {
  olive:     '#5B6142',   // primary
  forest:    '#3E4A3C',   // dark primary
  sage:      '#8FA89B',   // secondary
  parchment: '#EDE4D3',   // warm bg
  linen:     '#F5EDE0',   // page bg
  rust:      '#C1602D',   // CTA/accent
}
```
