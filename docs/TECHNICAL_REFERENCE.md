# Technical Implementation Reference

This document provides technical details about the implementation, including framework specifics, asset patterns, and accessibility features.

---

## Technology Stack

### Frontend Framework
- **Next.js** (React framework)
  - Evidence: `/_next/` paths for static assets, optimized images, and chunks
  - Server-side rendering capabilities
  - Image optimization with `next/image`

### Styling
- **Tailwind CSS** - Utility-first CSS framework
  - Custom theme configuration
  - Extended with custom colors and utilities
  - Mobile-first responsive design

### UI Component Library
- **Radix UI** - Headless UI components
  - Evidence: `radix-` prefixed IDs and data attributes
  - Accessible by default
  - Components identified:
    - Accordion/Collapsible
    - Tabs
    - Various primitive components

### Carousel/Slider
- **Embla Carousel**
  - Evidence: `embla__container` class
  - Touch-friendly, accessible carousel

### Fonts
Custom fonts loaded:
- `1ba786f98a0ba208-s.p.otf`
- `28f759b82ed11fe3-s.p.otf`
- `4cf2300e9c8272f7-s.p.woff2` (aktivGrotesk likely)
- `93f479601ee12b01-s.p.woff2` (Norsy likely)
- `940e939ccdda9ada-s.p.otf`
- `f6da47d419f3ae50-s.p.otf`

---

## Asset Delivery & CDN

### Image CDN Domains

#### Primary CDN (CloudFront)
```
d1zvcmhypeawxj.cloudfront.net
```
Used for: Main content images, optimized WebP images

#### AWS S3 Buckets
```
v2-statics.s3.ap-south-1.amazonaws.com  - Static assets (icons)
cat-dev-v1.s3.ap-south-1.amazonaws.com  - Development/test assets
```

### Next.js Image Optimization
Format: `/_next/image?url={encoded_url}&w={width}&q={quality}`

Example widths used:
- 256w, 384w, 640w, 750w, 828w, 1080w (responsive images)

Quality parameter: `q=75` (75% quality for optimized file size)

Format: WebP (modern, compressed format)

---

## Accessibility Features

### ARIA Attributes Used

#### Dynamic State
```html
aria-expanded="true|false"     - Collapsible/expandable elements
aria-selected="true|false"     - Tab selection state
aria-hidden="true|false"       - Hide decorative elements
aria-controls="{id}"           - Link controller to controlled element
```

#### Labels & Descriptions
```html
aria-label="{description}"     - Accessible name
aria-labelledby="{id}"        - Reference to labeling element
```

#### Live Regions (for dynamic content)
```html
aria-live="polite|assertive"   - Announce changes
aria-atomic="true|false"       - Announce entire region
aria-relevant="{changes}"      - What changes to announce
```

#### Navigation
```html
aria-orientation="horizontal|vertical"  - Tab/menu orientation
aria-haspopup="true"                   - Indicates popup/menu
```

### ARIA Roles
```html
role="contentinfo"  - Footer information
role="region"       - Significant page section
role="tab"          - Tab in tab list
role="tablist"      - Container for tabs
role="tabpanel"     - Content panel for tab
```

### Focus Management
```
focus-visible:outline-none     - Remove outline for mouse users
focus-visible:ring-1           - Show ring for keyboard users
focus-visible:ring-2           - Stronger ring for important elements
focus-visible:ring-ring        - Use theme ring color
focus-visible:ring-offset-2    - Add offset to ring
```

### Interactive States
```
disabled:pointer-events-none   - Prevent interaction when disabled
disabled:opacity-50            - Visual indication of disabled state
data-[state=active]           - Active state styling
data-[disabled=true]          - Disabled state
```

---

## Data Attributes System

### Component State Management
```
data-state="active|inactive|open|closed"
data-orientation="horizontal|vertical"
data-disabled="true|false"
data-expanded="true|false"
data-selected="true|false"
data-visible="true|false"
```

### Toast/Notification System (Sonner)
```
data-sonner-theme="light|dark"
data-sonner-toast
data-sonner-toaster
data-type="success|error|warning|info"
data-rich-colors="true|false"
data-x-position="left|center|right"
data-y-position="top|bottom"
data-mounted="true|false"
data-front="true|false"
data-lifted="true|false"
data-removed="true|false"
data-swiping="true|false"
data-swiped="true|false"
data-swipe-out="true|false"
data-swipe-direction="left|right|up|down"
data-invert="true|false"
data-styled="true|false"
data-promise="true|false"
```

### Next.js Specific
```
data-nimg="1"              - Next.js image component
data-nscript="beforeInteractive|afterInteractive|lazyOnload"
data-precedence="next"     - Loading priority
```

### Radix UI
```
data-radix-collection-item   - Collection item
```

---

## Navigation & Routing

### Main Routes Identified
```
/                              - Home page
/about-us                      - About page
/contact-form                  - Contact form
/cancellation-policy           - Cancellation policy
/privacy-policy                - Privacy policy
/terms-and-conditions          - Terms and conditions
/faq                          - FAQ page
/blogs                        - Blog listing
/search                       - Search/destinations
/trip/{slug}                  - Trip detail pages
/customized-trip              - Custom trip builder
```

### Blog Routes
```
/blog/{slug}                   - Individual blog posts
Examples:
  - /blog/10-most-beautiful-places-in-spiti-valley
  - /blog/almaty-nightlife
  - /blog/best-time-to-visit-bali
  - /blog/places-to-visit-in-meghalaya
  - /blog/things-to-do-in-vietnam
```

---

## Performance Optimizations

### Image Optimization
1. **WebP format** - Modern, efficient image format
2. **Responsive images** - Multiple sizes served based on viewport
3. **Lazy loading** - Images load as needed
4. **CloudFront CDN** - Fast global delivery
5. **Next.js Image component** - Automatic optimization

### Font Loading Strategy
```html
<link rel="preload" href="..." as="font" crossorigin type="font/woff2">
```
- Preload critical fonts
- Use WOFF2 format (best compression)
- Cross-origin attribute for external fonts

### Asset Preloading
Critical assets preloaded for faster initial render:
- Logo SVG
- Social media icons (Google, Instagram, Maps, Wallet)
- YouTube icon for floating button

### Code Splitting
- Webpack chunks for code splitting
- Multiple CSS chunks
- Polyfills loaded separately

---

## CSS Architecture

### Utility-First Approach
- Tailwind CSS utilities for 90%+ of styling
- Minimal custom CSS
- Inline utilities for maintainability

### CSS Modules/Chunks
```
/_next/static/css/0c879a7761f00468.css
/_next/static/css/64726268e638610e.css
/_next/static/css/715be398208dca58.css
/_next/static/css/d093ce9f4d5261d6.css
```

### CSS Custom Properties Strategy
- Use CSS variables for theme values
- Grayscale palette (--gray1 through --gray12)
- Component-specific variables (--normal-bg, --success-bg, etc.)
- Enable easy theming and maintenance

---

## Responsive Image Breakpoints

Next.js Image generates these widths:
```
256w   - Extra small mobile
384w   - Small mobile
640w   - Large mobile / small tablet
750w   - Tablet
828w   - Large tablet
1080w  - Desktop
1200w  - Large desktop
1920w  - Extra large desktop
2048w  - 2K displays
3840w  - 4K displays
```

---

## Component Patterns

### Tabs Component (Radix)
```html
<div role="tablist" aria-orientation="horizontal">
  <button role="tab"
          aria-selected="true|false"
          aria-controls="panel-id"
          data-state="active|inactive">
    Tab Label
  </button>
</div>
<div role="tabpanel"
     id="panel-id"
     aria-labelledby="tab-id"
     data-state="active|inactive">
  Panel Content
</div>
```

### Accordion/Collapsible
```html
<div data-state="open|closed"
     data-orientation="vertical">
  <button aria-expanded="true|false"
          aria-controls="content-id">
    Trigger
  </button>
  <div id="content-id"
       data-state="open|closed"
       style="--radix-collapsible-content-height: {height}px">
    Content
  </div>
</div>
```

---

## Analytics & Tracking

### Services Detected
1. **Google Tag Manager** - Tag management
2. **Google Ads** - Conversion tracking
3. **Facebook Pixel** - Social media tracking
4. **Hotjar** - Heatmaps and session recording
5. **Microsoft Clarity** - Behavior analytics
6. **Sentry** - Error tracking and monitoring

### Meta Tags
```html
<meta name="sentry-trace" content="{trace-id}">
<meta name="baggage" content="sentry-environment=production,...">
```

---

## Mobile-Specific Optimizations

### Touch Interactions
```
touch-action:none  - Disable browser touch gestures for carousel
```

### Viewport Meta
Standard mobile viewport configuration expected:
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Mobile-First Media Queries
Base styles target mobile, then:
```css
@media (max-width: 600px) { /* Toast system mobile */ }
@media (hover: none) and (pointer: coarse) { /* Touch devices */ }
```

---

## File Size Analysis

### HTML Payload
- **Mobile HTML**: 447.4 KB
- **Desktop HTML**: 446.7 KB
- **Difference**: Only 761 bytes (0.17%)

This minimal difference indicates:
1. Server-side rendering with same data
2. Responsive classes handle both layouts
3. No separate mobile/desktop builds
4. CSS handles responsive behavior

### Class Usage
- **Mobile unique classes**: 417 total
- **Desktop unique classes**: 412 total
- **Shared classes**: 410 (98.3% overlap)
- **Mobile-only**: 7 classes
- **Desktop-only**: 2 classes

Key difference: Desktop adds `grid-cols-1` and `md:grid-cols-2` for more layout options.

---

## Browser Support Strategy

### Modern Features Used
- CSS Grid
- Flexbox
- CSS Custom Properties
- WebP images
- Modern JavaScript (ES6+)

### Fallbacks
- System font stack fallback
- Polyfills for older browsers
- Progressive enhancement approach

---

## Security Features

### Content Security
- HTTPS for all external resources
- Crossorigin attributes for fonts
- NoScript fallback for critical tracking

### Error Monitoring
- Sentry integration for production
- Sampling rate configured
- Environment tracking

---

## Development vs Production

### Environment Indicators
```
sentry-environment=production
sentry-release={commit-hash}
```

### Asset Versioning
- Content-based hashing for cache busting
- Static asset paths include hash

---

## Key Technical Decisions

1. **Next.js for SSR/SSG** - Better SEO, performance
2. **Tailwind for styling** - Rapid development, consistency
3. **Radix UI for components** - Accessibility built-in
4. **CloudFront CDN** - Global performance
5. **WebP images** - Smaller file sizes
6. **Mobile-first CSS** - Better mobile experience
7. **Utility-first CSS** - Faster development, smaller CSS

---

*Last Updated: 2025-10-08*
*Source: reference_mobo.html and reference_desktop.html*
