# Website Clone - Design System Documentation

This repository contains comprehensive design system documentation extracted from reference HTML files for a mobile-first travel/tourism website.

---

## 📁 Documentation Files

### 1. **DESIGN_REFERENCE.md** (Primary Document)
Complete design system reference including:
- Responsive breakpoints and media queries
- Complete spacing system (padding, margin, gap)
- Full color palette with hex codes
- Typography scale and font families
- Layout patterns (flexbox, grid)
- Component patterns (buttons, cards, tabs)
- Shadows, transitions, and effects
- Border radius and utilities

**Use this for**: Understanding the visual design system, spacing, colors, and responsive behavior.

### 2. **TECHNICAL_REFERENCE.md** (Technical Details)
Technical implementation details:
- Technology stack (Next.js, Tailwind CSS, Radix UI)
- Asset delivery and CDN strategy
- Accessibility features (ARIA attributes, roles)
- Data attributes system
- Navigation and routing structure
- Performance optimizations
- Analytics and tracking setup

**Use this for**: Understanding the technical architecture and implementation patterns.

### 3. **IMPLEMENTATION_GUIDE.md** (Step-by-Step Guide)
Practical implementation guide:
- Project setup instructions
- Tailwind configuration
- Font setup
- Core component implementations (Button, Card, Tabs, Carousel)
- Layout components (Header, Footer)
- Page structure examples
- Best practices and patterns

**Use this for**: Actually building the website clone from scratch.

---

## 🎨 Quick Design Overview

### Color Palette
```
Primary Green:  #008342
Primary Blue:   #0065D9
Alert Red:      #F61B00
Dark Text:      #1F1F1F
Light Gray:     #F3F3F3
Border:         #D8D8D8
```

### Breakpoints
```
Mobile:  0px     (default)
Tablet:  768px   (md:)
Desktop: 1024px  (lg:)
```

### Spacing Scale (Tailwind)
```
1  = 4px    5  = 20px
2  = 8px    6  = 24px
3  = 12px   8  = 32px
4  = 16px   10 = 40px
```

### Typography
```
Fonts:  aktivGrotesk (primary), Norsy (display)
Sizes:  text-xs, text-sm, text-base, text-xl, text-2xl
Weights: font-normal (400), font-medium (500), font-bold (700)
```

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (React)
- **Styling**: Tailwind CSS
- **Components**: Radix UI (accessible primitives)
- **Carousel**: Embla Carousel
- **Notifications**: Sonner
- **Image CDN**: CloudFront
- **Fonts**: Custom (aktivGrotesk, Norsy)

---

## 📊 Analysis Summary

### HTML Files Analyzed
- **reference_mobo.html**: Mobile version (447.4 KB)
- **reference_desktop.html**: Desktop version (446.7 KB)

### Key Findings
- **98.3% class overlap** between mobile and desktop
- **Mobile-first design** with responsive modifiers
- **417 unique Tailwind classes** in use
- **Minimal differences** between mobile/desktop (only 9 unique classes total)

### Design System Stats
- **10 brand colors** (primary, secondary, accent)
- **12 gray shades** (CSS custom properties)
- **3 main breakpoints** (mobile, md, lg)
- **20+ spacing values** in use
- **7 border radius** options
- **6 shadow** variants

---

## 🚀 Quick Start

### 1. Review Documentation
```
Start here → DESIGN_REFERENCE.md
Then read → TECHNICAL_REFERENCE.md
Implement  → IMPLEMENTATION_GUIDE.md
```

### 2. Set Up Project
```bash
npx create-next-app@latest my-clone
cd my-clone
npm install @radix-ui/react-accordion @radix-ui/react-tabs
npm install embla-carousel-react sonner
```

### 3. Configure Tailwind
Copy the configuration from `IMPLEMENTATION_GUIDE.md` section 3.

### 4. Build Components
Follow the component examples in `IMPLEMENTATION_GUIDE.md` sections 6-9.

---

## 📐 Component Library

### Core UI Components
- **Button** (3 variants: primary, secondary, ghost)
- **Card** (with image, content, title, description)
- **Tabs** (using Radix UI)
- **Carousel** (using Embla)
- **Accordion** (using Radix UI)

### Layout Components
- **Header** (sticky navigation)
- **Footer** (multi-column)
- **Navigation** (mobile + desktop)

### Page Sections
- **Hero** (full-screen with background image)
- **Destinations** (grid/carousel of cards)
- **Testimonials** (carousel)
- **Features** (icon + text grid)

---

## 🎯 Key Features to Implement

### Must-Have
1. Responsive navigation (mobile hamburger + desktop menu)
2. Image carousel/slider for destinations
3. Search/filter functionality
4. Tab-based content organization
5. Grid layouts for destination cards
6. Sticky header
7. Toast notifications
8. Accessibility features (ARIA labels, focus states)

### Nice-to-Have
1. Infinite scroll or pagination
2. Image lazy loading
3. Skeleton loading states
4. Animations and transitions
5. Dark mode toggle
6. Multi-language support
7. Advanced filters (price, duration, location)
8. User authentication

---

## 📱 Responsive Design Strategy

### Mobile First (0-767px)
- Single column layouts
- Stack elements vertically
- Hamburger navigation
- Full-width cards
- Touch-friendly buttons (44px min)

### Tablet (768-1023px)
- 2-column grids
- Horizontal navigation
- Increased spacing
- Larger typography

### Desktop (1024px+)
- 3-4 column grids
- Maximum container width
- Hover states
- Enhanced spacing

---

## 🔍 File Structure Recommendation

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── destinations/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic destination page
│   ├── about-us/
│   │   └── page.tsx
│   └── blogs/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Tabs.tsx
│   │   └── ...
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx
│   │   ├── Destinations.tsx
│   │   └── ...
│   └── carousel/
│       └── EmblaCarousel.tsx
├── lib/
│   └── utils.ts                # Utility functions
├── fonts/                      # Custom fonts
└── public/
    ├── icons/
    ├── images/
    └── ...
```

---

## ⚡ Performance Optimization

### Images
- Use Next.js Image component
- Serve WebP format
- Implement responsive images
- Lazy load below-fold images
- Use CloudFront CDN

### Code
- Code splitting (Next.js automatic)
- Tree shaking
- Remove unused Tailwind classes
- Minimize JavaScript bundle

### Loading
- Skeleton screens
- Progressive image loading
- Preload critical fonts
- Defer non-critical scripts

---

## ♿ Accessibility Checklist

- [ ] Semantic HTML (header, nav, main, footer)
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation support
- [ ] Focus visible states
- [ ] Alt text on all images
- [ ] Color contrast ratio > 4.5:1
- [ ] Screen reader friendly
- [ ] Skip to content link
- [ ] Form labels and error messages
- [ ] Responsive touch targets (44px min)

---

## 🧪 Testing Recommendations

### Manual Testing
- Test on real devices (iOS, Android)
- Test all breakpoints
- Test keyboard navigation
- Test screen readers
- Test different browsers

### Automated Testing
- Lighthouse audit (performance, accessibility, SEO)
- Unit tests for components
- E2E tests for critical flows
- Visual regression testing

---

## 🎨 Design Tokens Reference

All design tokens are available in the documentation files:

- **Colors**: See DESIGN_REFERENCE.md → Color Palette
- **Spacing**: See DESIGN_REFERENCE.md → Spacing System
- **Typography**: See DESIGN_REFERENCE.md → Typography
- **Shadows**: See DESIGN_REFERENCE.md → Shadows & Effects
- **Breakpoints**: See DESIGN_REFERENCE.md → Breakpoints

---

## 📚 Additional Resources

### Documentation
- All spacing values and patterns
- Complete color palette with use cases
- Component specifications
- Accessibility guidelines
- Performance best practices

### External Links
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com/primitives)
- [Embla Carousel](https://www.embla-carousel.com/)

---

## 🤝 Contributing

When building components:
1. Follow mobile-first approach
2. Use design tokens from documentation
3. Ensure accessibility (ARIA, keyboard nav)
4. Test on multiple devices
5. Optimize for performance

---

## 📝 Notes

- The reference files are from a production Next.js site
- Design is mobile-first with progressive enhancement
- Heavy use of Tailwind utilities (minimal custom CSS)
- Accessibility is prioritized (Radix UI, ARIA attributes)
- Performance optimized (image CDN, code splitting)

---

## 📅 Version History

- **v1.0** (2025-10-08): Initial documentation
  - Extracted design tokens
  - Created implementation guide
  - Documented technical architecture

---

## 📞 Support

For questions about:
- **Design tokens**: See DESIGN_REFERENCE.md
- **Technical implementation**: See TECHNICAL_REFERENCE.md
- **How to build**: See IMPLEMENTATION_GUIDE.md

---

**Happy Building! 🚀**

*Documentation generated from reference_mobo.html (447.4 KB) and reference_desktop.html (446.7 KB)*
