# Design System Reference - Mobile-First Website Clone

This document contains all the extracted design tokens, patterns, and styling information from the reference HTML files.

---

## Table of Contents
1. [Breakpoints & Responsive Design](#breakpoints--responsive-design)
2. [Spacing System](#spacing-system)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Layout Patterns](#layout-patterns)
6. [Component Patterns](#component-patterns)
7. [Shadows & Effects](#shadows--effects)
8. [Transitions & Animations](#transitions--animations)
9. [Z-Index Scale](#z-index-scale)
10. [Border Radius](#border-radius)

---

## Breakpoints & Responsive Design

### Media Query Breakpoints
Based on the CSS analysis, the site uses these breakpoints:

```css
/* Mobile First - Default (0px and up) */
/* Small - Not explicitly defined in media queries */
/* Medium Tablet */
@media (max-width: 600px)

/* Tailwind Breakpoints in use: */
/* md: 768px (based on Tailwind classes md:*) */
/* lg: 1024px (based on Tailwind classes lg:*) */
```

### Responsive Class Patterns

#### MD Breakpoint (768px+)
- `md:flex` - Switch to flex layout
- `md:flex-row` - Horizontal flex direction
- `md:flex-col` - Vertical flex direction
- `md:block` - Display block
- `md:hidden` - Hide element
- `md:grid-cols-2` - 2 column grid
- `md:gap-3`, `md:gap-4`, `md:gap-6`, `md:gap-16` - Gap adjustments
- `md:mb-6`, `md:mb-10`, `md:mb-14` - Margin bottom adjustments
- `md:mt-4`, `md:mt-10` - Margin top adjustments
- `md:h-16`, `md:h-40`, `md:h-full` - Height adjustments
- `md:min-w-96` - Minimum width
- `md:border` - Show border

#### LG Breakpoint (1024px+)
- `lg:block` - Display block
- `lg:hidden` - Hide element
- `lg:w-auto` - Auto width

### Aspect Ratios

#### Mobile Aspect Ratios
- `aspect-square` - 1:1
- `aspect-video` - 16:9
- `aspect-[9/16]` - Portrait video
- `aspect-[4/3]` - Classic ratio
- `aspect-[0.7/1]` - Portrait
- `aspect-[0.71/1]` - Portrait
- `aspect-[0.9/1]` - Near square portrait
- `aspect-[2/1]` - Wide landscape
- `aspect-[1.8/1]` - Wide landscape
- `aspect-[2.5/1]` - Ultra wide
- `aspect-[3/1]` - Ultra wide
- `aspect-[3.6/1]` - Ultra wide

#### Desktop Aspect Ratios (MD+)
- `md:aspect-[0.8/1]` - Portrait
- `md:aspect-[1.16/1]` - Near square landscape
- `md:aspect-[3.17/1]` - Ultra wide
- `md:aspect-[3.76/1]` - Ultra wide
- `md:aspect-[4/1]` - Ultra wide banner

---

## Spacing System

### Tailwind Spacing Scale
The site uses Tailwind's default spacing scale (1 unit = 0.25rem = 4px):

```
0.5  = 2px
1    = 4px
2    = 8px
2.5  = 10px
3    = 12px
4    = 16px
5    = 20px
6    = 24px
7    = 28px
8    = 32px
10   = 40px
14   = 56px
16   = 64px
20   = 80px
```

### Padding Classes Used
```
p-0.5, p-2, p-3, p-4
pt-2, pt-4, pt-6, pt-8
pb-1, pb-3, pb-4
pl-2.5, pl-10
pr-1
px-1, px-3, px-4, px-5, px-6, px-8, px-20
py-1, py-2, py-3, py-4, py-6, py-7, py-14
```

### Margin Classes Used
```
mb-2, mb-3, mb-4, mb-5, mb-6, mb-8, mb-20
mt-2, mt-3, mt-4, mt-5, mt-6, mt-8, mt-16
ml-2
mr-1, mr-2
mx-4
my-6, my-14
```

### Gap Classes (Flexbox/Grid)
```
gap-1  = 4px
gap-2  = 8px
gap-3  = 12px
gap-4  = 16px
gap-6  = 24px
gap-7  = 28px
gap-10 = 40px
gap-16 = 64px
```

### Space Between
```
space-y-1 = 4px vertical spacing between children
```

---

## Color Palette

**🎨 Theme Based on Logo Colors**

The color scheme is derived from the logo's cyan/turquoise palette, creating a fresh, modern, and trustworthy brand identity.

### Brand Colors

#### Primary Cyan (From Logo)
```
#0099C2 - Primary brand cyan (main logo color)
Used for: Primary CTAs, headers, brand elements, backgrounds
Classes: bg-[#0099C2], text-[#0099C2]
RGB: rgb(0, 153, 194)
HSL: hsl(193, 100%, 38%)
```

#### Accent Cyan (From Logo)
```
#0299C2 - Accent cyan (logo accent)
Used for: Hover states, secondary CTAs, highlights
Classes: bg-[#0299C2], text-[#0299C2], hover:bg-[#0299C2]
RGB: rgb(2, 153, 194)
HSL: hsl(193, 99%, 38%)
```

#### Deep Cyan (From Logo)
```
#079AC3 - Deep cyan (logo details)
Used for: Interactive elements, focus states, accents
Classes: bg-[#079AC3], text-[#079AC3]
RGB: rgb(7, 154, 195)
HSL: hsl(193, 93%, 40%)
```

#### Success Green (Complementary)
```
#00C896 - Success/confirmation actions
Used for: Success messages, positive actions
Classes: bg-[#00C896], text-[#00C896]
```

#### Alert Coral (Complementary)
```
#FF6B6B - Alert/warning (warm contrast to cyan)
Used for: Errors, warnings, urgent CTAs
Classes: bg-[#FF6B6B], text-[#FF6B6B]
```

### Neutral Colors

#### Dark Neutrals
```
#1F1F1F - Almost black (text, borders)
#1f1f1f - Same as above (lowercase variant)
#4d4d4d - Dark gray (secondary text)
#5A5A5A - Medium gray
#5a5a5a - Same as above (lowercase variant)
```

#### Light Neutrals
```
#F2F8FB - Pale cyan tint (from logo - subtle backgrounds)
#F3F8FB - Pale cyan tint variant (from logo)
#E8F2F8 - Light cyan tint (from logo - hover states)
#FEFEFE - Pure white (from logo - text)
#FCFDFE - Off white (from logo - surfaces)
#FBFDFD - Almost white (from logo - cards)
#F9FCFD - Lightest cyan tint (from logo)
#F3F3F3 - Neutral off white (general backgrounds)
#eaeaea - Near white (text on dark)
#D8D8D8 - Very light gray (borders)
#BCBCBC - Light gray (backgrounds)
#aeaeae - Medium light gray (borders)
```

### Tailwind Semantic Colors
```
bg-black
bg-white
bg-transparent
bg-primary (defined in theme)
text-black
text-white
text-gray-600
text-muted-foreground
text-primary-foreground
text-primaryMain
border-gray-300
```

### Opacity Variants
```
bg-black/10 - Black at 10% opacity
bg-opacity-50 - 50% opacity
hover:bg-black/20 - Black at 20% on hover
hover:bg-primary/90 - Primary at 90% on hover
```

### Gradients
```
bg-gradient-to-b - Top to bottom
bg-gradient-to-r - Left to right
bg-gradient-to-t - Bottom to top
```

### CSS Custom Properties (Grayscale)
```css
--gray1: hsl(0, 0%, 99%)     /* Almost white */
--gray2: hsl(0, 0%, 97.3%)   /* Very light gray */
--gray3: hsl(0, 0%, 95.1%)   /* Light gray */
--gray4: hsl(0, 0%, 93%)     /* Light gray */
--gray5: hsl(0, 0%, 90.9%)   /* Medium light gray */
--gray6: hsl(0, 0%, 88.7%)   /* Medium light gray */
--gray7: hsl(0, 0%, 85.8%)   /* Medium gray */
--gray8: hsl(0, 0%, 78%)     /* Gray */
--gray9: hsl(0, 0%, 56.1%)   /* Medium dark gray */
--gray10: hsl(0, 0%, 52.3%)  /* Medium dark gray */
--gray11: hsl(0, 0%, 43.5%)  /* Dark gray */
--gray12: hsl(0, 0%, 9%)     /* Almost black */
```

### State Colors (from CSS)
```css
--normal-bg: #fff
--normal-border: var(--gray4)
--normal-text: var(--gray12)
--success-bg: hsl(143, 85%, 96%)
--success-border: hsl(145, 92%, 87%)
```

---

## Typography

### Font Families

#### Primary Fonts (Custom)
```css
font-[aktivGrotesk] - Primary sans-serif font
font-[Norsy] - Display/accent font
font-base - Base system font
```

#### System Font Stack (from CSS)
```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
             Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
             Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
```

### Font Sizes
```
text-xs   - Extra small
text-sm   - Small
text-base - Base size (16px typically)
text-md   - Medium (custom, not standard Tailwind)
text-xl   - Extra large
text-2xl  - 2x large
text-[20px] - Custom 20px
text-[3rem] - Custom 48px
```

### Font Weights
```
font-extralight - 200
font-normal     - 400
font-medium     - 500
font-bold       - 700
```

### Line Heights
```
leading-tight - Tight line height (1.25)
```

### Text Utilities
```
text-left
text-center
text-nowrap
line-clamp-4 (on md: md:line-clamp-4)
```

---

## Layout Patterns

### Display Types
```
flex
inline-flex
grid
block
hidden
md:block
md:flex
md:hidden
lg:block
lg:hidden
```

### Flexbox
```
flex-1          - Flex grow
flex-row        - Horizontal direction
flex-col        - Vertical direction
flex-wrap       - Allow wrapping
flex-none       - Don't grow/shrink
flex-shrink-0   - Don't shrink
flex-[0_0_100%] - Custom flex basis

items-center
items-start
justify-center
justify-start
md:items-start
```

### Grid
```
grid
grid-cols-1
grid-cols-2
grid-cols-4
grid-cols-5
grid-flow-col
grid-rows-2
grid-rows-6
md:grid-cols-2

row-span-2
row-start-1
row-start-2
row-start-4
row-start-5
row-start-6

md:basis-1/4  - 25% basis on medium screens
```

### Container Widths
```
w-full     - 100%
w-auto     - Auto
w-fit      - Fit content
w-max      - Max content
w-4/5      - 80%

w-2        - 8px
w-2.5      - 10px
w-4        - 16px
w-5        - 20px
w-6        - 24px
w-7        - 28px
w-14       - 56px
w-60       - 240px
w-72       - 288px
w-80       - 320px

w-[50px]
w-[110px]
w-[280px]
w-[12.5rem]  - 200px
w-[18.5rem]  - 296px

md:w-16
md:w-full
md:w-[70px]
md:w-[160px]
md:w-[411px]
md:w-[30%]

lg:w-auto

max-w-md  - Max width medium (28rem / 448px)
md:min-w-96  - Min width 384px on medium
```

### Heights
```
h-full
h-fit
h-px      - 1px

h-2       - 8px
h-2.5     - 10px
h-4       - 16px
h-5       - 20px
h-6       - 24px
h-7       - 28px
h-8       - 32px
h-9       - 36px
h-10      - 40px
h-14      - 56px
h-28      - 112px
h-40      - 160px

h-[1px]
h-[2px]
h-[45%]
h-[50px]
h-[62%]
h-[2.5rem]  - 40px

min-h-44
min-h-[2.5rem]
md:min-h-[3rem]

md:h-16
md:h-40
md:h-[70px]
md:h-full
```

### Overflow
```
overflow-hidden
overflow-x-auto
overflow-x-hidden
overflow-y-hidden
```

### Position
```
absolute
relative
fixed

top-0
top-1/2
bottom-0
bottom-2
bottom-4
bottom-14
bottom-16
bottom-[112px]
left-0
left-1/2
left-3
right-0
right-2
right-4
right-6
inset-0

md:bottom-10
```

---

## Component Patterns

### Button Styles

#### Primary Button
```html
class="inline-flex items-center justify-center gap-2 whitespace-nowrap
       transition-colors focus-visible:outline-none focus-visible:ring-1
       focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
       [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
       bg-primary text-primary-foreground shadow hover:bg-primary/90
       h-9 rounded-full px-6 py-3 text-base font-medium"
```

#### Secondary Button
```html
class="inline-flex items-center justify-center gap-2 whitespace-nowrap
       transition-colors focus-visible:outline-none focus-visible:ring-1
       focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
       [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
       hover:bg-accent h-9 px-4 py-2 rounded-full text-sm font-medium
       text-[#0065D9] hover:text-[#0065D9] md:border"
```

#### Tab Button
```html
class="inline-flex items-center justify-center whitespace-nowrap
       rounded-full border border-[#D8D8D8] px-4 py-1
       ring-offset-background transition-all focus-visible:outline-none
       focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
       disabled:pointer-events-none disabled:opacity-50
       data-[state=active]:border-black data-[state=active]:bg-background
       data-[state=active]:text-[#1F1F1F] data-[state=active]:shadow
       font-[aktivGrotesk] text-xs font-medium md:text-sm"
```

#### Floating Action Button
```html
class="absolute bottom-4 right-6 z-30 rounded-full p-2"
```

#### Light Button
```html
class="rounded-full bg-white px-6 py-3 text-xs font-normal
       text-black shadow-lg hover:bg-gray-200"
```

### Carousel/Slider
```
embla__container - Main container class for Embla carousel
```

---

## Shadows & Effects

### Drop Shadows
```
drop-shadow-md
drop-shadow-lg
```

### Box Shadows
```
shadow
shadow-sm
shadow-md
shadow-lg
data-[state=active]:shadow
```

---

## Transitions & Animations

### Transition Classes
```
transition          - Default transition
transition-all      - All properties
transition-colors   - Colors only
transition-opacity  - Opacity only
transition-transform - Transform only
```

### Duration
```
duration-150 - 150ms
duration-200 - 200ms
duration-300 - 300ms
```

### Easing
```
ease-in-out
ease-out
```

---

## Z-Index Scale
```
z-0
z-10
z-20
z-30
z-50
z-[100]  - Custom z-index 100
```

---

## Border Radius
```
rounded-none    - 0
rounded-lg      - 0.5rem (8px)
rounded-xl      - 0.75rem (12px)
rounded-2xl     - 1rem (16px)
rounded-3xl     - 1.5rem (24px)
rounded-full    - 9999px (pill shape)
rounded-t-2xl   - Top corners only

--border-radius: 8px  /* CSS custom property */
```

---

## Border Utilities
```
border          - 1px border
border-2        - 2px border
border-b        - Bottom border only
border-t        - Top border only
md:border       - Show border on medium screens
```

---

## CSS Custom Properties Reference

```css
/* Border */
--border-radius: 8px

/* Grayscale */
--gray1 through --gray12 (see Color Palette section)

/* Component States */
--normal-bg: #fff
--normal-border: var(--gray4)
--normal-text: var(--gray12)
--success-bg: hsl(143, 85%, 96%)
--success-border: hsl(145, 92%, 87%)

/* Layout */
--radix-accordion-content-height: var(--radix-collapsible-content-height)
--radix-accordion-content-width: var(--radix-collapsible-content-width)
```

---

## Preloaded Assets

### Icons
- `/icons/logo.svg`
- `https://v2-statics.s3.ap-south-1.amazonaws.com/icons/google.svg`
- `https://v2-statics.s3.ap-south-1.amazonaws.com/icons/instaLogo.svg`
- `https://v2-statics.s3.ap-south-1.amazonaws.com/icons/mapLogo.svg`
- `https://v2-statics.s3.ap-south-1.amazonaws.com/icons/walletLogo.svg`
- `/floatbutton/youtubered.svg`

---

## Mobile vs Desktop Differences

### Key Differences
1. **Grid columns**: Mobile uses more varied grid patterns (grid-cols-4, grid-cols-5), desktop adds `md:grid-cols-2`
2. **Spacing**: Desktop increases margins and gaps at `md:` breakpoint
3. **Aspect ratios**: Desktop adjusts aspect ratios for wider screens
4. **Typography**: Desktop may show more text (`md:line-clamp-4`)
5. **Layout direction**: Many elements switch from column to row (`md:flex-row`)
6. **Visibility**: Some elements hidden on mobile, shown on desktop (`md:block`) and vice versa (`md:hidden`)

### Breakpoint Strategy
- **Mobile-first**: Base styles target mobile
- **MD (768px+)**: Tablet and desktop adjustments
- **LG (1024px+)**: Large screen optimizations (minimal usage)

---

## Implementation Notes

### Framework
- This site uses **Tailwind CSS** with custom theme extensions
- Custom fonts: aktivGrotesk and Norsy
- Component library: Radix UI (evidenced by radix- prefixed IDs)
- Carousel: Embla Carousel

### Best Practices Observed
1. Mobile-first responsive design
2. Semantic color naming (primary, success, etc.)
3. Consistent spacing scale
4. Reusable component patterns
5. Utility-first CSS approach
6. Focus states for accessibility
7. Smooth transitions on interactive elements

---

## Quick Reference Tables

### Spacing Quick Reference
| Class | Value | Pixels |
|-------|-------|--------|
| 0.5   | 0.125rem | 2px  |
| 1     | 0.25rem  | 4px  |
| 2     | 0.5rem   | 8px  |
| 3     | 0.75rem  | 12px |
| 4     | 1rem     | 16px |
| 6     | 1.5rem   | 24px |
| 8     | 2rem     | 32px |
| 10    | 2.5rem   | 40px |
| 16    | 4rem     | 64px |
| 20    | 5rem     | 80px |

### Color Quick Reference
| Usage | Color | Hex |
|-------|-------|-----|
| Primary Cyan | Brand/CTA | #0099C2 |
| Accent Cyan | Hover/Secondary | #0299C2 |
| Deep Cyan | Interactive | #079AC3 |
| Success Green | Positive Actions | #00C896 |
| Alert Coral | Warnings/Errors | #FF6B6B |
| Dark Text | Primary | #1F1F1F |
| Gray Text | Secondary | #5A5A5A |
| Pale Cyan BG | Subtle | #F2F8FB |
| Light BG | Surface | #F3F3F3 |
| Border | Divider | #D8D8D8 |

### Breakpoint Quick Reference
| Name | Min Width | Tailwind Prefix |
|------|-----------|-----------------|
| Mobile | 0px | (none) |
| Tablet | 768px | md: |
| Desktop | 1024px | lg: |

---

*Last Updated: 2025-10-08*
*Generated from: reference_mobo.html and reference_desktop.html*
