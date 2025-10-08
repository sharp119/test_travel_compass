# HTML Structure Analysis: Mobile & Desktop Versions

## Overview
This document provides a detailed breakdown of the HTML structure, Tailwind classes, and layout patterns used in both mobile and desktop versions of the reference site.

---

## 1. Top Banner/Coupon Section

### Structure
```html
<div class="fixed top-0 z-50 w-full">
  <a target="_blank" rel="noopener noreferrer" class="w-full" href="/newyear-getaways">
    <div class="fixed top-0 z-[100] flex w-full items-center justify-center bg-[#008342]">
      <p class="font-base px-4 py-3 text-center font-[aktivGrotesk] text-sm text-white">
        New Year Sale is live! Get up to ₹5000 off 🎉
      </p>
    </div>
  </a>
</div>
```

### Key Classes
- **Container**: `fixed top-0 z-[100] flex w-full items-center justify-center`
- **Background**: `bg-[#008342]` (Green color: #008342)
- **Text**: `font-[aktivGrotesk] text-sm text-white px-4 py-3 text-center`

### Features
- Fixed positioning at top with z-index 100
- Full width banner
- Clickable link wrapper
- Green background (#008342)
- White text with aktivGrotesk font
- Centered content with flexbox

---

## 2. Header/Navigation

### Mobile Header

#### Structure
```html
<div class="fixed z-50 w-full transition-all duration-300 ease-in-out lg:hidden bg-transparent" style="top: 40px;">
  <div class="no-scrollbar flex items-stretch justify-between">
    <div class="flex w-full items-center justify-between gap-2 bg-transparent p-4">

      <!-- Left: User Icon -->
      <div class="flex items-center text-white">
        <span class="font-[aktivGrotesk] text-base font-normal duration-300 ease-in-out">
          <svg class="lucide lucide-circle-user h-6 w-6 text-white">...</svg>
        </span>
      </div>

      <!-- Center: Logo -->
      <div class="w-max">
        <a class="w-full lg:w-auto" href="/">
          <svg class="h-[2.5rem] w-[12.5rem] text-white">...</svg>
        </a>
      </div>

      <!-- Right: Hamburger Menu -->
      <div class="flex flex-shrink-0 items-center gap-2">
        <button class="text-white">
          <svg class="h-6 w-6">...</svg>
        </button>
      </div>

    </div>
  </div>
</div>
```

#### Key Mobile Header Classes
- **Container**: `fixed z-50 w-full transition-all duration-300 ease-in-out lg:hidden bg-transparent`
- **Position**: `top: 40px` (inline style - positioned below banner)
- **Inner wrapper**: `flex items-stretch justify-between`
- **Content area**: `flex w-full items-center justify-between gap-2 bg-transparent p-4`
- **Logo**: `h-[2.5rem] w-[12.5rem] text-white`
- **Icons**: `h-6 w-6 text-white`

#### Features
- Fixed positioning with smooth transitions
- Hidden on desktop (`lg:hidden`)
- Transparent background
- Three-column layout: User icon | Logo | Menu
- All icons are white colored SVGs

### Mobile Navigation Menu (Hamburger)

#### Search Bar in Header
```html
<div class="absolute left-1/2 mx-4 -translate-x-1/2 transform">
  <div class="relative w-60 max-w-md">
    <svg class="lucide lucide-search absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-[#4d4d4d]">...</svg>
    <input
      class="flex h-9 w-full bg-transparent px-3 py-1 shadow-sm transition-colors rounded-full border border-[#aeaeae] pl-10 text-sm text-[#5a5a5a]"
      placeholder="Find your destination..."
      type="text"
    />
  </div>
</div>
```

#### Mobile Menu Items
```html
<div class="flex flex-shrink-0 flex-wrap items-center gap-6 font-medium">
  <a class="flex w-max items-center justify-center gap-2 text-center text-sm font-medium" href="tel:+918287636079">
    <svg class="lucide lucide-phone h-5 w-5">...</svg>
    (+91) 8287636079
  </a>
  <button class="inline-flex items-center justify-center gap-2 ... bg-primary text-primary-foreground ... h-9 rounded-full px-6 py-3 text-base font-medium">
    Login
  </button>
</div>
```

### Desktop Header

#### Structure
```html
<header class="hidden lg:block sticky top-0 z-50 w-full bg-white shadow-md">
  <nav class="container mx-auto px-4">
    <!-- Logo -->
    <div class="logo">...</div>

    <!-- Desktop Menu -->
    <div class="flex justify-center gap-10">
      <div>
        <button class="flex items-center font-[aktivGrotesk] text-sm font-medium text-black">
          <span class="mr-1">✈️</span>
          <span class="mr-2">International Trips</span>
          <svg class="lucide lucide-chevron-down transition-transform duration-300 rotate-0">...</svg>
        </button>
      </div>
      <div>
        <button class="flex items-center font-[aktivGrotesk] text-sm font-medium text-black">
          <span class="mr-1">[Icon]</span>
          <span class="mr-2">Domestic Trips</span>
          <svg class="lucide lucide-chevron-down">...</svg>
        </button>
      </div>
      <div>
        <a class="flex items-center font-[aktivGrotesk] text-sm font-medium text-black" href="/weekend-trip-from-delhi">
          <span class="mr-1">🚗</span>Weekend Trips
        </a>
      </div>
      <div>
        <a class="flex items-center font-[aktivGrotesk] text-sm font-medium text-black" href="/upcoming-trips">
          <span class="mr-1">🧳</span>Upcoming Trips
        </a>
      </div>
      <div>
        <a class="flex items-center font-[aktivGrotesk] text-sm font-medium text-black" href="/wellness-retreats">
          <span class="mr-1">🧘🏻</span>Wellness Retreats
        </a>
      </div>
      <div>
        <a class="flex items-center font-[aktivGrotesk] text-sm font-medium text-black" href="/corporate-tours">
          <span class="mr-1">🏫</span>Corporate Trips
        </a>
      </div>
    </div>
  </nav>
</header>
```

#### Desktop Header Classes
- **Container**: `hidden lg:block sticky top-0 z-50 w-full bg-white shadow-md`
- **Navigation**: `container mx-auto px-4`
- **Menu wrapper**: `flex justify-center gap-10`
- **Menu items**: `flex items-center font-[aktivGrotesk] text-sm font-medium text-black`
- **Dropdowns**: Include `lucide-chevron-down transition-transform duration-300 rotate-0`

#### Features
- Sticky header on desktop
- White background with shadow
- Horizontal menu with emoji icons
- Dropdown support for International/Domestic
- Black text instead of white (desktop vs mobile)

---

## 3. Hero Section

### Structure
```html
<div class="mt-[44px] md:mt-[153px]">
  <main class="font-[aktivGrotesk]">
    <div class="relative aspect-[0.7/1] w-full bg-black font-[aktivGrotesk] md:aspect-[3.17/1]">

      <!-- Top Gradient Overlay (Mobile Only) -->
      <div class="absolute left-0 right-0 top-0 z-10 h-40 bg-gradient-to-b from-black/50 to-transparent md:hidden"></div>

      <!-- Bottom Gradient Overlay -->
      <div class="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-black/50 to-transparent"></div>

      <!-- Hero Title -->
      <h1 class="absolute bottom-[112px] z-20 flex w-full justify-center px-4 text-center font-[Norsy] text-[28px] font-medium leading-tight text-white md:bottom-28 md:text-5xl md:leading-tight">
        Your next adventure is just a click away!
      </h1>

      <!-- Background Image/Video -->
      <!-- Carousel or static image would go here -->

    </div>
  </main>
</div>
```

### Key Hero Classes
- **Main wrapper**: `mt-[44px] md:mt-[153px]` (offset for fixed headers)
- **Hero container**: `relative aspect-[0.7/1] w-full bg-black md:aspect-[3.17/1]`
  - Mobile: 0.7:1 aspect ratio (portrait)
  - Desktop: 3.17:1 aspect ratio (wide)
- **Top gradient**: `absolute ... bg-gradient-to-b from-black/50 to-transparent md:hidden`
- **Bottom gradient**: `absolute ... bg-gradient-to-t from-black/50 to-transparent`
- **Title**: `absolute bottom-[112px] z-20 ... font-[Norsy] text-[28px] md:text-5xl text-white`

### Features
- Responsive aspect ratios (portrait mobile, wide desktop)
- Black background base
- Gradient overlays for text readability
- Centered hero text
- Uses Norsy font for heading
- Absolute positioned title over background

---

## 4. Stats/Features Bar

### Structure (Below Hero)
```html
<div class="w-full overflow-hidden bg-black">
  <!-- Mobile: Marquee -->
  <div class="relative block md:hidden">
    <div class="marquee-wrapper">
      <div class="marquee-track">
        <div class="flex flex-shrink-0 items-center gap-2 px-6 py-2 text-white">
          <img class="h-5 w-5" src="https://v2-statics.s3.ap-south-1.amazonaws.com/icons/google.svg" />
          <div class="flex flex-row whitespace-nowrap text-xs">
            <span>4.9 ⭐</span>
            <span>Ratings</span>
          </div>
        </div>
        <!-- Repeated items for marquee effect -->
      </div>
    </div>
  </div>

  <!-- Desktop: Static Grid -->
  <div class="hidden items-center justify-center gap-16 py-3 md:flex">
    <div class="flex items-center gap-2 text-white">
      <img class="h-7 w-7" src="...google.svg" />
      <div class="flex flex-row">
        <span class="font-[aktivGrotesk] text-base font-normal">4.9 ⭐</span>
        <span class="font-[aktivGrotesk] text-base font-normal">Ratings</span>
      </div>
    </div>
    <div class="flex items-center gap-2 text-white">
      <img class="h-7 w-7" src="...instaLogo.svg" />
      <div class="flex flex-row">
        <span class="font-[aktivGrotesk] text-base font-normal">512k+ </span>
        <span class="font-[aktivGrotesk] text-base font-normal">Community</span>
      </div>
    </div>
    <div class="flex items-center gap-2 text-white">
      <img class="h-7 w-7" src="...mapLogo.svg" />
      <div class="flex flex-row">
        <span class="font-[aktivGrotesk] text-base font-normal">500+ </span>
        <span class="font-[aktivGrotesk] text-base font-normal">Itineraries</span>
      </div>
    </div>
    <div class="flex items-center gap-2 text-white">
      <img class="h-7 w-7" src="...walletLogo.svg" />
      <div class="flex flex-row">
        <span class="font-[aktivGrotesk] text-base font-normal">No Cost EMI</span>
      </div>
    </div>
  </div>
</div>
```

### Features
- Black background (`bg-black`)
- Mobile: Scrolling marquee effect
- Desktop: Centered flex grid with gap
- White text and icons
- 4 main stats: Ratings, Community, Itineraries, EMI

---

## 5. Footer

### Structure
```html
<footer class="bg-[#F8F8F8] px-5 py-10 md:px-20 md:py-16">
  <div class="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">

    <!-- Column 1: Contact Info -->
    <div class="flex flex-col gap-2">
      <h4 class="mb-6 font-[aktivGrotesk] text-xl font-medium">Contact Us</h4>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <span class="h-6 w-6">[WhatsApp Icon]</span>
          <p class="font-[aktivGrotesk] text-base font-normal">
            CaptureaTrip India Pvt Ltd - Gurgaon
          </p>
        </div>
        <a class="flex w-fit items-center gap-2 rounded-full border-2 border-[#1F1F1F] bg-[#FEFEDE] px-3 py-2 text-xs text-[#1F1F1F] transition hover:underline"
           href="https://maps.app.goo.gl/...">
          <img src="...locationMark-black.svg" />
          View on Map
        </a>
        <p class="font-[aktivGrotesk] text-base font-normal">
          📍Plot no-376, Udyog Vihar Phase 2, opposite Vi John WeWork, Gurgaon, Haryana 122016, India
        </p>
        <p class="font-[aktivGrotesk] text-base font-normal">
          Mobile: +91-8368653222
        </p>
      </div>
    </div>

    <!-- Column 2: Quick Links -->
    <div class="flex flex-col gap-2">
      <h4 class="mb-6 font-[aktivGrotesk] text-xl font-medium">Quick Links</h4>
      <ul class="list-none space-y-1 font-[aktivGrotesk] text-base font-normal">
        <li><a class="hover:underline" href="/about-us">About Us</a></li>
        <li><a class="hover:underline" href="/travel-blogs">Blogs</a></li>
        <li><a class="hover:underline" href="/contact-us">Contact Us</a></li>
        <li><a class="hover:underline" href="/privacy-policy">Privacy Policy</a></li>
        <li><a class="hover:underline" href="/cancellation-policy">Cancellation Policy</a></li>
        <li><a class="hover:underline" href="/terms-and-conditions">Terms & Conditions</a></li>
        <li><a class="hover:underline" href="/wellness-retreats">Wellness Retreats</a></li>
      </ul>
    </div>

    <!-- Column 3: Popular Destinations (assumed) -->
    <div class="flex flex-col gap-2">
      <h4 class="mb-6 font-[aktivGrotesk] text-xl font-medium">Popular Destinations</h4>
      <ul class="list-none space-y-1 font-[aktivGrotesk] text-base font-normal">
        <!-- Links to destinations -->
      </ul>
    </div>

    <!-- Column 4: Social Media / Newsletter (assumed) -->
    <div class="flex flex-col gap-2">
      <h4 class="mb-6 font-[aktivGrotesk] text-xl font-medium">Follow Us</h4>
      <!-- Social icons and links -->
    </div>

  </div>
</footer>
```

### Key Footer Classes
- **Container**: `bg-[#F8F8F8] px-5 py-10 md:px-20 md:py-16`
- **Grid**: `grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12`
- **Column headings**: `font-[aktivGrotesk] text-xl font-medium mb-6`
- **Links**: `hover:underline font-[aktivGrotesk] text-base font-normal`
- **Map button**: `rounded-full border-2 border-[#1F1F1F] bg-[#FEFEDE] px-3 py-2 text-xs`

### Features
- Light gray background (#F8F8F8)
- 4-column grid on desktop, single column on mobile
- aktivGrotesk font throughout
- Hover effects on links
- Yellow-ish button for "View on Map" (#FEFEDE)
- Generous spacing (gap-8, md:gap-12)

---

## 6. Typography

### Font Families
1. **aktivGrotesk** - Main body font, navigation, most text
2. **Norsy** - Hero headings and special titles

### Font Loading
```html
<link rel="preload" href="/_next/static/media/1ba786f98a0ba208-s.p.otf" as="font" crossorigin="" type="font/otf">
<link rel="preload" href="/_next/static/media/28f759b82ed11fe3-s.p.otf" as="font" crossorigin="" type="font/otf">
<!-- etc. -->
```

---

## 7. Color Palette

### Primary Colors
- **Green Banner**: `#008342`
- **Black**: `#000000` (hero background, text)
- **White**: `#FFFFFF` (text on dark backgrounds)
- **Light Gray**: `#F8F8F8` (footer background)
- **Yellow/Cream**: `#FEFEDE` (CTA buttons)

### Text Colors
- **Dark Text**: `#1F1F1F` (main text, footer)
- **Gray Text**: `#5a5a5a` (placeholder text)
- **Border Gray**: `#aeaeae`
- **Medium Gray**: `#4d4d4d`

---

## 8. Responsive Breakpoints

### Tailwind Breakpoints Used
- **md** (768px): Tablet and up
- **lg** (1024px): Desktop

### Common Patterns
- `lg:hidden` - Hide on desktop (mobile-only)
- `hidden md:block` - Hide on mobile, show on tablet+
- `md:px-20` - Increase padding on larger screens
- `aspect-[0.7/1] md:aspect-[3.17/1]` - Different aspect ratios

---

## 9. Z-Index Hierarchy

1. **z-[100]** - Top banner (highest)
2. **z-50** - Header navigation
3. **z-20** - Hero title text
4. **z-10** - Hero gradient overlays

---

## 10. Spacing System

### Padding
- Mobile: `px-4` (1rem / 16px), `py-3` (0.75rem / 12px)
- Desktop: `px-20` (5rem / 80px), `py-16` (4rem / 64px)

### Gaps
- Small: `gap-2` (0.5rem)
- Medium: `gap-6` (1.5rem)
- Large: `gap-10` (2.5rem), `gap-16` (4rem)

---

## 11. Interactive Elements

### Buttons
```html
<!-- Primary Button -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 rounded-full px-6 py-3 text-base font-medium">
  Login
</button>

<!-- Secondary/Outline Button -->
<a class="rounded-full border-2 border-[#1F1F1F] bg-[#FEFEDE] px-3 py-2 text-xs text-[#1F1F1F] transition hover:underline">
  View on Map
</a>
```

### Links
- Standard: `hover:underline`
- Navigation: `text-sm font-medium text-black`

---

## 12. Animations & Transitions

### Transitions
- **Header**: `transition-all duration-300 ease-in-out`
- **Dropdowns**: `transition-transform duration-300`
- **Buttons**: `transition-colors`

### Transforms
- **Center**: `-translate-x-1/2 -translate-y-1/2`
- **Rotate**: `rotate-0` (for chevrons)

---

## 13. Key Differences: Mobile vs Desktop

| Feature | Mobile | Desktop |
|---------|--------|---------|
| Header BG | Transparent | White with shadow |
| Header Position | Fixed, top: 40px | Sticky, top: 0 |
| Logo Color | White | Black |
| Navigation | Hamburger menu | Horizontal menu |
| Hero Aspect | 0.7:1 (portrait) | 3.17:1 (wide) |
| Stats Bar | Marquee scroll | Static flex grid |
| Footer Columns | 1 column | 4 columns |
| Text Size | Smaller (text-sm, text-xs) | Larger (text-base) |

---

## 14. Component Patterns

### Card Pattern (Used in trip listings)
```html
<div class="rounded-lg overflow-hidden shadow-md">
  <div class="relative">
    <img ... />
    <div class="absolute ...">[Overlay content]</div>
  </div>
  <div class="p-4">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</div>
```

### Tab Pattern (Used for trip categories)
```html
<div role="tablist">
  <button
    role="tab"
    class="rounded-full border border-[#D8D8D8] px-4 py-1 data-[state=active]:border-black data-[state=active]:bg-background data-[state=active]:shadow">
    Tab Name
  </button>
</div>
```

---

## 15. Accessibility Features

- **ARIA Labels**: Used on interactive elements
- **Focus Styles**: `focus-visible:outline-none focus-visible:ring-1`
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<footer>`
- **Alt Text**: Present on images
- **Tab Roles**: Proper ARIA roles for tabs/tabpanels

---

## 16. Performance Optimizations

### Image Loading
- `loading="lazy"` on non-critical images
- `decoding="async"`
- Preload for above-the-fold images

### Font Loading
- Preload critical fonts
- Multiple font formats (.otf, .woff2)

### CSS
- Utility-first Tailwind approach
- Minimal custom CSS

---

## Summary

The site uses a modern, component-based approach with:
- **Tailwind CSS** for styling
- **Responsive design** (mobile-first)
- **Fixed/sticky positioning** for headers
- **Custom fonts** (aktivGrotesk, Norsy)
- **Consistent color scheme** (green, black, cream yellow)
- **Smooth transitions** and animations
- **Accessible** markup with ARIA labels
- **Performance-optimized** image and font loading
