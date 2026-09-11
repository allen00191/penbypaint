---
version: alpha
name: PenbyPaint-design-analysis
description: A warm paper-canvas civic-editorial interface for PenbyPaint's interest-class and workshop platform. The system is adapted from Zenkojidaira (長野県善光寺平土地改良区) — a textured cream paper floor with teal-water CTAs, landscape-adjacent photography, and a river-wave motif. Brand voltage comes from the cream/teal pairing. Type voice runs a humanist Japanese gothic ("Zen Kaku Gothic New") for UI and body. Column lists follow the mamoribito pattern — hash-prefixed category pills, 3-up photo cards, date + excerpt + footer tags.

colors:
  primary: "#2B8385"
  primary-active: "#39979A"
  primary-disabled: "#C8D6D6"
  ink: "#404040"
  body: "#404040"
  body-strong: "#333333"
  muted: "#A9A9A9"
  muted-soft: "#C5C5C5"
  hairline: "#DEDEDE"
  hairline-mid: "#C3C3C3"
  hairline-ink: "rgba(0, 0, 0, 0.2)"
  canvas: "#FAF8F5"
  surface-card: "#FFFFFF"
  surface-soft: "#FAF8F5"
  on-primary: "#FFFFFF"
  on-card: "#404040"
  ruby: "#888888"
  accent-wave: "#2B8385"
  success: "#2B8385"
  warning: "#BDAC8F"
  error: "#C64545"

typography:
  display-xl:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 45px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.035em
  display-lg:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 37px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.035em
  display-md:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.035em
  display-sm:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 25px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.035em
  title-lg:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 23px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  title-md:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 19px
    fontWeight: 700
    lineHeight: 2
    letterSpacing: 0
  title-sm:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 2
    letterSpacing: 0.035em
  body-sm:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0.035em
  caption:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption-soft:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.75
    letterSpacing: 0.035em
  nav-link:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.035em
  nav-link-secondary:
    fontFamily: "Zen Kaku Gothic New, Noto Sans TC, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.035em

rounded:
  xs: 3px
  sm: 5px
  md: 10px
  lg: 15px
  xl: 20px
  2xl: 30px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 16px
  lg: 20px
  xl: 30px
  xxl: 45px
  section-sm: 60px
  section: 90px
  section-lg: 140px

components:
  button-primary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 20px
    width: 382px
    shadow: "0 0 15px rgba(0, 0, 0, 0.05)"
  button-primary-active:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.primary-active}"
    rounded: "{rounded.pill}"
  button-on-teal:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 20px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 92px
  top-nav-scrolled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    height: 70px
  drawer-btn:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    size: 30px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    height: 570px
  info-board-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.xl}"
    padding: 36px 45px
  feature-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.md}"
  cta-band-teal:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: 60px 90px
  category-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 0 8px
  category-pill-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
  breadcrumb-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 0 16px
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: 0
    padding: 12px 16px
    height: 48px
  text-input-focused:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    outlineColor: "{colors.primary-active}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: 36px 0 70px
---

## Overview

PenbyPaint's public site is a **warm paper-canvas** interest-class and workshop platform. The base atmosphere is a **tinted cream paper floor** (`{colors.canvas}` — #FAF8F5). Brand voltage comes from the **cream + water-teal pairing**. Teal (`{colors.primary}` — #2B8385) is used on primary CTA *labels* (not button fills), on arrow glyphs, on active category pills, and on full-bleed `{component.cta-band-teal}` moments. A lighter companion teal (`{colors.primary-active}` — #39979A) handles focus and pressed states.

The column / sharing index follows **mamoribito**: hash-prefixed category pills, a 3-up photo card grid, date + title + 3-line excerpt, and a hairline-separated category tag row at the card footer.

**Key Characteristics:**
- Warm cream canvas (`{colors.canvas}` — #FAF8F5) with charcoal body (`{colors.ink}` — #404040).
- Water-teal primary (`{colors.primary}` — #2B8385). Scarce on chrome; generous on teal CTA bands.
- Humanist gothic via Zen Kaku Gothic New / Noto Sans TC at weight 500, 700 for section titles. `letter-spacing: 0.035em`.
- Primary buttons are **white pills with teal labels**. Teal *fill* is for bands, not buttons.
- Category pills: white + `#名稱`; active is teal fill + white type.
- Border radius: `{rounded.md}` (10px) photos, `{rounded.xl}` (20px) boards, `{rounded.pill}` buttons.
- Section rhythm `{spacing.section-lg}` (140px) / `{spacing.section}` (90px).

## Colors

### Brand & Accent
- **Water Teal / Primary** (`{colors.primary}` — #2B8385): Canal-water brand. Button labels, arrows, active pills, CTA bands.
- **Water Teal Active** (`{colors.primary-active}` — #39979A): Press / focus.
- **Water Teal Disabled** (`{colors.primary-disabled}` — #C8D6D6): Derived disabled.

### Surface
- **Canvas** (`{colors.canvas}` — #FAF8F5): Page floor and footer. Never pure white as the ground.
- **Surface Card** (`{colors.surface-card}` — #FFFFFF): Boards, slides, primary buttons, inputs. White sits *on* cream.
- **Hairline** (`{colors.hairline}` — #DEDEDE): List rules, card term separators.

### Text
- **Ink** (`{colors.ink}` — #404040): Default running text and headlines.
- **Muted** (`{colors.muted}` — #A9A9A9): Breadcrumb current, inactive numerals.
- **On Primary** (`{colors.on-primary}` — #FFFFFF): Text on teal bands.

### Semantic
- **Success** reuses primary. **Error** (`{colors.error}` — #C64545) only on form required markers.

## Typography

Zen Kaku Gothic New (or **Noto Sans TC** as the Traditional-Chinese substitute) at 500 for body, 700 for section titles. Positive tracking `0.035em`. Display sizes use 700, never 900 on adult pages.

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 45px | 700 | Section heads |
| `{typography.display-md}` | 30px | 700 | Card / CTA titles |
| `{typography.title-lg}` | 23px | 500 | Column card titles |
| `{typography.body-md}` | 17px | 500 | Running text |
| `{typography.body-sm}` | 15px | 500 | Pills, secondary nav |
| `{typography.button}` | 17px | 500 | Pill buttons |
| `{typography.nav-link}` | 16px | 700 | Header primary |

## Layout

- Base unit 4px; live scale 10 / 20 / 30 / 45 / 60 / 90 / 140.
- Content max ~1200px; hero up to ~1500px; reading column ~928px.
- Feature / blog grids: 3-up ≥1280px, 1-up mobile.
- Breakpoints: 768 / 960 / 1280.

## Elevation & Depth

Paper first. Soft pill shadow `0 0 15px rgba(0,0,0,0.05)`. Depth from cream vs white vs teal. Wave-shaped section dividers replace hard rules between homepage bands.

## Shapes

Buttons always pills (`100vmax`). Cards 10–20px. Photos `border-radius: 10px`. Inputs are the one sharp rectangle (0 radius) — a form is a form.

## Components

- **`top-nav`**: Transparent, cream gradient on scroll. Hamburger below 960px opens a full-sheet cream menu.
- **`button-primary`**: White fill, teal label, pill, max-width 382px.
- **`category-pill`**: White, teal type, leading `#`. Active: teal fill, white type.
- **`cta-band-teal`**: Primary fill, white type, 20px radius.
- **`info-board-card`**: White, 20px radius — homepage 最新消息 / 課程列表 boards.
- **`footer`**: Stays cream. Never inverts to dark.

## Do's and Don'ts

### Do
- Anchor every page on cream paper. White is a card, never the ground.
- Keep primary buttons white pills with teal labels.
- Use `#` prefixes on category pills (mamoribito).
- Alternate cream bands with white cards and occasional teal CTA.

### Don't
- Don't fill primary buttons with teal.
- Don't use a navy footer or cool gray canvas.
- Don't introduce a fourth brand hue.
- Don't use 8px SaaS radius.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger; 1-up grids; hero stacks |
| Tablet | 768–959px | Tighter nav sheet until 960 |
| Desktop | 960–1279px | Horizontal header |
| Wide | ≥ 1280px | 3-up cards; max content width caps |

## Iteration Guide

1. One component at a time. Use `{token.refs}`.
2. Never document hover beyond label → `{colors.primary-active}`.
3. Cream + water-teal + white-card is the trinity.
4. Phase 1 categories are hardcoded; do not invent a Category CMS here.

## Known Gaps

- Phase 1 uses mock TypeScript data, not a CMS.
- Paper-grain bitmap from the source site is not bundled; canvas color carries the warmth.
- Form submissions do not persist in Phase 1.
- Motion timings (drawer 0.8s, arrow 0.2s) are approximated, not copied from the original CSS animation set.
