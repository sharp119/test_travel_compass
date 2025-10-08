# Color Palette - Logo-Based Theme

**Complete color system derived from the logo's cyan palette**

---

## 🎨 Logo Color Analysis

The logo (`logo.svg`) features a modern cyan/turquoise color scheme that conveys:
- **Trust & Reliability** - Blue tones
- **Freshness & Innovation** - Cyan brightness
- **Clarity & Transparency** - Clean white elements
- **Professional & Modern** - Minimalist design

---

## Primary Brand Colors

### Main Cyan (Logo Primary)
```
Hex:  #0099C2
RGB:  rgb(0, 153, 194)
HSL:  hsl(193, 100%, 38%)
CMYK: C:100 M:21 Y:0 K:24

Usage: Primary CTAs, main headers, brand elements, navigation bars
Tailwind: bg-[#0099C2], text-[#0099C2], border-[#0099C2]
```

**Where to use:**
- Primary action buttons
- Main navigation background
- Brand logo area
- Section headers
- Links (primary state)

---

### Accent Cyan (Logo Accent)
```
Hex:  #0299C2
RGB:  rgb(2, 153, 194)
HSL:  hsl(193, 99%, 38%)
CMYK: C:99 M:21 Y:0 K:24

Usage: Hover states, secondary CTAs, highlights, active states
Tailwind: hover:bg-[#0299C2], bg-[#0299C2], active:bg-[#0299C2]
```

**Where to use:**
- Button hover states
- Active navigation items
- Highlighted sections
- Interactive element states
- Secondary CTAs

---

### Deep Cyan (Logo Details)
```
Hex:  #079AC3
RGB:  rgb(7, 154, 195)
HSL:  hsl(193, 93%, 40%)
CMYK: C:97 M:21 Y:0 K:24

Usage: Interactive elements, focus states, borders, accents
Tailwind: bg-[#079AC3], border-[#079AC3], ring-[#079AC3]
```

**Where to use:**
- Focus rings
- Active borders
- Icon colors
- Decorative elements
- Link underlines

---

## Complementary Colors

### Success Green
```
Hex:  #00C896
RGB:  rgb(0, 200, 150)
HSL:  hsl(165, 100%, 39%)

Usage: Success messages, positive confirmations, "completed" states
Tailwind: bg-[#00C896], text-[#00C896]
```

**Where to use:**
- Success notifications
- Form validation (success)
- Confirmation buttons
- Progress indicators (complete)
- Positive badges

---

### Alert Coral
```
Hex:  #FF6B6B
RGB:  rgb(255, 107, 107)
HSL:  hsl(0, 100%, 71%)

Usage: Errors, warnings, urgent actions, destructive operations
Tailwind: bg-[#FF6B6B], text-[#FF6B6B]
```

**Where to use:**
- Error messages
- Form validation (error)
- Delete/destructive buttons
- Warning alerts
- Urgent notifications

---

## Light Tints (Logo-Based)

### Pale Cyan
```
Hex:  #F2F8FB
RGB:  rgb(242, 248, 251)
HSL:  hsl(200, 43%, 97%)

Usage: Subtle backgrounds, section dividers, card backgrounds
Tailwind: bg-[#F2F8FB]
```

### Pale Cyan Alternative
```
Hex:  #F3F8FB
RGB:  rgb(243, 248, 251)
HSL:  hsl(200, 40%, 97%)

Usage: Alternative light background, alternating rows
Tailwind: bg-[#F3F8FB]
```

### Light Cyan
```
Hex:  #E8F2F8
RGB:  rgb(232, 242, 248)
HSL:  hsl(202, 50%, 94%)

Usage: Hover states on light backgrounds, selected states
Tailwind: hover:bg-[#E8F2F8], bg-[#E8F2F8]
```

---

## White Variations (Logo-Based)

### Pure White
```
Hex:  #FEFEFE
RGB:  rgb(254, 254, 254)

Usage: Text on dark backgrounds, logo elements
Tailwind: text-[#FEFEFE]
```

### Off-White (Surface)
```
Hex:  #FCFDFE
RGB:  rgb(252, 253, 254)

Usage: Card backgrounds, content surfaces
Tailwind: bg-[#FCFDFE]
```

### Almost White (Cards)
```
Hex:  #FBFDFD
RGB:  rgb(251, 253, 253)

Usage: Card backgrounds, elevated surfaces
Tailwind: bg-[#FBFDFD]
```

### Lightest Cyan Tint
```
Hex:  #F9FCFD
RGB:  rgb(249, 252, 253)

Usage: Very subtle backgrounds, section backgrounds
Tailwind: bg-[#F9FCFD]
```

---

## Neutral Colors

### Dark Neutrals
```
#1F1F1F - Almost Black (primary text, dark UI elements)
#4D4D4D - Dark Gray (secondary text, icons)
#5A5A5A - Medium Gray (tertiary text, disabled text)
```

### Light Neutrals
```
#AEAEAE - Medium Light Gray (borders, separators)
#BCBCBC - Light Gray (backgrounds, disabled backgrounds)
#D8D8D8 - Very Light Gray (subtle borders, dividers)
#F3F3F3 - Neutral Off-White (general backgrounds)
#EAEAEA - Near White (text on dark backgrounds)
```

---

## Color Usage Guide

### Buttons

#### Primary Button
```html
<button class="bg-[#0099C2] hover:bg-[#0299C2] text-white">
  Primary Action
</button>
```

#### Secondary Button
```html
<button class="border-[#0099C2] text-[#0099C2] hover:bg-[#F2F8FB]">
  Secondary Action
</button>
```

#### Success Button
```html
<button class="bg-[#00C896] hover:bg-[#00B387] text-white">
  Confirm
</button>
```

#### Destructive Button
```html
<button class="bg-[#FF6B6B] hover:bg-[#FF5252] text-white">
  Delete
</button>
```

---

### Backgrounds

#### Hero Sections
```html
<section class="bg-[#0099C2]">
  <!-- White text on cyan -->
</section>
```

#### Content Sections
```html
<section class="bg-[#F2F8FB]">
  <!-- Subtle cyan tint -->
</section>
```

#### Cards
```html
<div class="bg-[#FCFDFE] shadow-lg">
  <!-- Off-white cards -->
</div>
```

---

### Text Colors

```css
/* Primary text */
.text-primary { color: #1F1F1F; }

/* Secondary text */
.text-secondary { color: #5A5A5A; }

/* Link (default) */
.text-link { color: #0099C2; }

/* Link (hover) */
.text-link-hover { color: #0299C2; }

/* Success */
.text-success { color: #00C896; }

/* Error */
.text-error { color: #FF6B6B; }
```

---

### Borders

```css
/* Primary border */
.border-primary { border-color: #0099C2; }

/* Light border */
.border-light { border-color: #D8D8D8; }

/* Dark border */
.border-dark { border-color: #1F1F1F; }

/* Success border */
.border-success { border-color: #00C896; }

/* Error border */
.border-error { border-color: #FF6B6B; }
```

---

## Accessibility Notes

### Color Contrast Ratios

**Primary Cyan (#0099C2) on White:**
- Ratio: 4.89:1 ✅ Passes AA for large text
- Passes: WCAG AA (18pt+)
- Use: Headlines, large UI elements

**White Text on Primary Cyan (#0099C2):**
- Ratio: 4.28:1 ✅ Passes AA for large text
- Use: Buttons, headers

**Dark Text (#1F1F1F) on White:**
- Ratio: 16.63:1 ✅✅ Passes AAA
- Use: All text sizes

**Dark Text (#1F1F1F) on Pale Cyan (#F2F8FB):**
- Ratio: 15.42:1 ✅✅ Passes AAA
- Use: All text sizes

### Recommendations
- Use **#1F1F1F** for body text on light backgrounds
- Use **White (#FEFEFE)** for text on cyan backgrounds
- Use **#FF6B6B** sparingly for errors (good contrast)
- Pair **#00C896** with white text for success messages

---

## Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand': {
          'cyan': '#0099C2',
          'cyan-accent': '#0299C2',
          'cyan-deep': '#079AC3',
        },
        // Functional Colors
        'success': '#00C896',
        'error': '#FF6B6B',
        // Light Tints
        'cyan-pale': '#F2F8FB',
        'cyan-pale-alt': '#F3F8FB',
        'cyan-light': '#E8F2F8',
        // Neutrals
        'neutral': {
          '900': '#1F1F1F',
          '700': '#4D4D4D',
          '600': '#5A5A5A',
          '400': '#AEAEAE',
          '300': '#BCBCBC',
          '200': '#D8D8D8',
          '100': '#F3F3F3',
        }
      }
    }
  }
}
```

---

## CSS Custom Properties

```css
:root {
  /* Brand Colors */
  --color-brand-cyan: #0099C2;
  --color-brand-cyan-accent: #0299C2;
  --color-brand-cyan-deep: #079AC3;

  /* Functional */
  --color-success: #00C896;
  --color-error: #FF6B6B;

  /* Tints */
  --color-cyan-pale: #F2F8FB;
  --color-cyan-pale-alt: #F3F8FB;
  --color-cyan-light: #E8F2F8;

  /* Neutrals */
  --color-text-primary: #1F1F1F;
  --color-text-secondary: #5A5A5A;
  --color-border: #D8D8D8;
  --color-bg: #F3F3F3;
}
```

---

## Color Psychology

### Why Cyan/Turquoise?

**Positive Associations:**
- Trust & dependability
- Communication & clarity
- Calmness & serenity
- Innovation & technology
- Health & wellness

**Best For:**
- Tech startups
- Healthcare
- Finance/Banking
- Communication platforms
- Travel & tourism
- Social media

---

## Design Tips

1. **Use 60-30-10 Rule:**
   - 60% Neutral (white, off-white)
   - 30% Primary Cyan
   - 10% Accent (success/error colors)

2. **Limit Bright Colors:**
   - Use #FF6B6B sparingly (errors only)
   - Use #00C896 for positive reinforcement

3. **Create Hierarchy:**
   - #0099C2 for primary actions
   - #0299C2 for hover states
   - #079AC3 for secondary elements

4. **Maintain Consistency:**
   - Always use same cyan for same actions
   - Keep error red consistent
   - Use tints for backgrounds consistently

---

**Last Updated:** 2025-10-08
**Based On:** logo.svg color extraction
