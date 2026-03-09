

# Logo & Brand Consistency Audit Plan

## Critical Issues Identified

### 1. **LOGO MISMATCH - URGENT**
The site is currently using **external WordPress-hosted logo** instead of the local SVG assets that match the brand guide:

**Current State:**
- `siteConfig.images.logo`: Points to `https://www.tootharchitectdental.com/wp-content/uploads/2022/05/logo-new.svg`
- Header (line 102, 121): Uses this external WordPress URL
- Footer: Uses same external URL with brightness filter

**Available Assets (confirmed in `/public/logos/`):**
- `primary-logo.svg` - Full color logo with Olive (#5F5B35) text and Rust (#D47D45) + Avocado (#7F7947) geometric mark
- `primary-logo-inverted.svg` - Light colors on dark (Linen #F1DDBC text, adjusted geometric mark)

**What needs to happen:**
- Update `siteConfig.ts` to use `/logos/primary-logo.svg` and `/logos/primary-logo-inverted.svg`
- Header: Use `primary-logo.svg` (works on white/light background)
- Footer: Use `primary-logo-inverted.svg` (designed for dark Olive background)
- Remove the `brightness-200` filter hack from Footer

---

### 2. **COLOR PALETTE DISCREPANCY - CRITICAL**

**Brand Guide Colors (from `docs/brand/brand-style-guide-extracted.md`):**
```
Olive (Primary)      #5F5B35  RGB(95,91,53)    HSL(66,28%,29%)   PMS 450 C
Avocado (Primary)    #7F7947  RGB(127,121,71)  HSL(73,32%,39%)   PMS 5825 C  
Eucalyptus (Second)  #B1C6B7  RGB(177,198,183) HSL(146,17%,74%)  PMS 5585 C
Linen (Secondary)    #F1DDBC  RGB(241,221,188) HSL(40,60%,84%)   PMS 7506 C
Rust (Accent)        #D47D45  RGB(212,125,69)  HSL(24,62%,55%)   PMS 1575 C
```

**Current Tailwind Config has WRONG colors:**
```typescript
brand: {
  'olive-dark': '#2F351A',  // ❌ NOT in brand guide
  'olive':      '#4C5220',  // ❌ NOT in brand guide  
  'ivory':      '#F5F1E9',  // ❌ NOT in brand guide
  'sand':       '#D9D3C4',  // ❌ NOT in brand guide
  'terracotta': '#C89A6A',  // ❌ WRONG - should be #D47D45 "Rust"
}
```

**CSS Variables also incorrect:**
- `--accent: 30 42% 60%` = #C89A6A (wrong terracotta)
- Should be `--accent: 24 62% 55%` = #D47D45 (Rust)

**Current code uses `brand-terracotta` 104 times across 9 files** - need to rename to `brand-rust` for brand accuracy

---

### 3. **MOBILE RESPONSIVENESS AUDIT SCOPE**

Based on 30 years UX/UI experience requirement, comprehensive mobile-first QA will include:

**Critical Mobile Tests (390×844 - iPhone 12/13/14):**
1. ✅ Text readability - minimum 16px body, no truncation
2. ✅ Touch targets - minimum 44×44px (Apple HIG)
3. ✅ Hamburger menu - logo display, navigation tree, CTA visibility
4. ✅ Bottom navigation bar - fixed positioning, safe area insets
5. ✅ Hero carousel - image scaling, text overlay contrast, dot indicators
6. ✅ Multi-step appointment form - field sizing, validation messages, progress bar
7. ✅ Service mega-menu - collapse to accordion on mobile
8. ✅ Footer - stacked layout, phone numbers clickable, logo legibility
9. ✅ CTAs - Rust color visibility against Olive backgrounds (contrast ratio check)
10. ✅ Spacing - no horizontal scroll, adequate padding on all sides

**Color Contrast Analysis:**
- Rust (#D47D45) on Olive (#5F5B35) = **2.08:1** ❌ FAILS WCAG AA (needs 4.5:1)
- Rust (#D47D45) on white (#FFFFFF) = **3.47:1** ⚠️ MARGINAL (close to 3:1 minimum for large text)
- This explains why some orange appears "lighter" - likely opacity adjustments to compensate for poor contrast

---

## Implementation Plan

### PHASE 1: Logo Correction (Highest Priority)

**File: `src/config/siteConfig.ts`**
```typescript
images: {
  logo: "/logos/primary-logo.svg",              // ← NEW (Olive text, colored mark)
  logoInverted: "/logos/primary-logo-inverted.svg",  // ← NEW (Light text for dark bg)
  // ... keep existing hero images
}
```

**File: `src/components/layout/Header.tsx`**
- Line 102: Change to `siteConfig.images.logo` (already correct reference, just updating target)
- Line 121: Same for mobile logo

**File: `src/components/layout/Footer.tsx`**
- Update to use `siteConfig.images.logoInverted`
- Remove `brightness-200` class

---

### PHASE 2: Color System Overhaul

**File: `tailwind.config.ts`**
Replace entire `brand` object:
```typescript
brand: {
  'olive':      '#5F5B35',  // Primary - headers, nav, footer
  'avocado':    '#7F7947',  // Primary variant
  'eucalyptus': '#B1C6B7',  // Secondary - soft accents
  'linen':      '#F1DDBC',  // Secondary - warm backgrounds
  'rust':       '#D47D45',  // Accent - CTAs ONLY (use sparingly)
}
```

**File: `src/index.css`**
Update CSS variables to match:
```css
--primary: 66 28% 29%;           /* #5F5B35 Olive */
--accent: 24 62% 55%;            /* #D47D45 Rust */
--background: 40 60% 84%;        /* #F1DDBC Linen */
--secondary: 146 17% 74%;        /* #B1C6B7 Eucalyptus */
```

**Global Search & Replace:**
- `brand-terracotta` → `brand-rust` (104 instances across 9 files)
- Validate each usage ensures it's for CTAs only (per brand guide: "key details or call-to-action elements")

---

### PHASE 3: Mobile Responsiveness Testing

**Test Matrix:**

| Component | Mobile Viewport | Test Criteria |
|-----------|----------------|---------------|
| Header | 390×844 | Logo height 32-40px, hamburger 44×44px tap, phone numbers readable |
| Mobile Menu | 390×844 | Full-bleed overlay, service accordion expands, CTA button full-width |
| Bottom Nav | 390×844 | Fixed to bottom, 60px height + safe area, icons 24px, labels 12px |
| Hero Carousel | 390×844 | Text overlay readable, 48px top margin, dots 16px from bottom, CTA 44px min |
| Appointment Form | 390×844 | Inputs 16px font (prevents iOS zoom), error text visible, progress bar clear |
| Footer | 390×844 | Logo 48px height, stacked columns, 16px body text, touch targets 44px |
| Service Cards | 390×844 | 2-column grid max, adequate card padding, icon visibility |

**Accessibility Checks:**
- Color contrast on all text/background pairs (WCAG AA minimum 4.5:1 for body, 3:1 for large text)
- Focus indicators visible
- Form validation messages readable

---

### PHASE 4: Brand Consistency Verification

**Documentation Cross-Check:**
- Confirm all color usage matches "Primary freely / Secondary sparingly / Accent strategically" guidance
- Typography: Mostra Nuova for headings, Museo Sans for body (already implemented correctly)
- Logo: Never altered, minimum 32px height (brand guide page 4)
- White space: Modern simplicity with clean spacing (brand applications page 8)

**Final Audit:**
- No external logo URLs remaining
- No legacy color variables (`terracotta`, `ivory`, `sand`) in codebase
- All CTAs use `brand-rust` with adequate contrast
- Mobile navigation mirrors desktop hierarchy (no missing links)

---

## Key Technical Decisions

1. **Logo Selection Logic:**
   - Light backgrounds (header, cards) → `primary-logo.svg`
   - Dark Olive backgrounds (footer, nav bar) → `primary-logo-inverted.svg`

2. **Rust Usage Restraint:**
   - ONLY for: primary CTAs, active states, strategic highlights
   - NOT for: body text, borders, large backgrounds (poor contrast)
   - Consider hover states using Avocado (#7F7947) instead for better accessibility

3. **Mobile-First Breakpoints:**
   - Base styles target 390px (smallest modern iPhone)
   - Scale up at 640px (sm), 768px (md), 1024px (lg)
   - Test on real devices: iPhone SE (375px), iPhone 14 (390px), iPad Mini (768px)

---

## Files Requiring Changes

### Configuration (2 files)
- `src/config/siteConfig.ts` - logo paths
- `tailwind.config.ts` - brand color object

### Styles (1 file)
- `src/index.css` - CSS variables

### Components Needing Color Updates (9 files)
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/CTABanner.tsx`
- `src/components/GoogleReviewBadge.tsx`
- `src/components/ServicePageTemplate.tsx`
- `src/pages/Index.tsx`
- `src/pages/RequestAppointment.tsx`
- `src/pages/MeetTheDoctor.tsx`
- `src/pages/ContactUs.tsx`

### Testing (all pages, mobile-first)
- `/` (home with carousel)
- `/request-an-appointment/` (multi-step form)
- `/contact-us/` (form)
- All service pages (consistent template)
- Mobile menu overlay
- Footer on all pages

---

## Success Criteria

✅ Header and footer display identical logo system (primary vs inverted)  
✅ No external logo URLs in codebase  
✅ Brand colors exactly match PDF guide (#5F5B35, #7F7947, #B1C6B7, #F1DDBC, #D47D45)  
✅ All CTAs use `brand-rust` (#D47D45) with consistent hover states  
✅ Mobile navigation: no text truncation, all touch targets ≥44px  
✅ Hero carousel: readable on all slides, smooth transitions  
✅ Appointment form: fields properly sized, validation visible, progress clear  
✅ Color contrast passes WCAG AA on all critical UI elements  
✅ No horizontal scroll on any page at 390px width  
✅ Bottom nav bar respects safe area on notched phones

