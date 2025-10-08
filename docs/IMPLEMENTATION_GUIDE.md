# Implementation Quick Start Guide

This guide provides a step-by-step approach to building the mobile-first website clone based on the analyzed reference files.

---

## Prerequisites

### Required Tools
- Node.js 18+ and npm/yarn/pnpm
- Code editor (VS Code recommended)
- Git

### Recommended Extensions (VS Code)
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- PostCSS Language Support

---

## Project Setup

### 1. Initialize Next.js Project

```bash
npx create-next-app@latest my-website-clone
cd my-website-clone
```

When prompted, select:
- TypeScript: Yes/No (your preference)
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: Yes (recommended)
- App Router: Yes
- Import alias: Yes (@/*)

### 2. Install Required Dependencies

```bash
# UI Components
npm install @radix-ui/react-accordion
npm install @radix-ui/react-tabs
npm install @radix-ui/react-collapsible

# Carousel
npm install embla-carousel-react

# Toast notifications
npm install sonner

# Optional: Icons
npm install lucide-react
```

---

## Tailwind Configuration

### 3. Configure tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          DEFAULT: '#008342',
          foreground: '#ffffff',
        },
        primaryMain: '#008342',

        // Accent colors
        accent: {
          blue: '#0065D9',
          red: '#F61B00',
          yellow: '#FFB43F',
        },

        // Neutrals
        dark: {
          primary: '#1F1F1F',
          secondary: '#4d4d4d',
          tertiary: '#5A5A5A',
        },

        light: {
          border: '#D8D8D8',
          background: '#F3F3F3',
          surface: '#fdfdfd',
        },

        // Semantic colors
        success: {
          bg: 'hsl(143, 85%, 96%)',
          border: 'hsl(145, 92%, 87%)',
          text: 'hsl(140, 100%, 27%)',
        },
      },

      fontFamily: {
        aktivGrotesk: ['var(--font-aktiv-grotesk)', 'sans-serif'],
        norsy: ['var(--font-norsy)', 'sans-serif'],
        base: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      spacing: {
        // Custom spacing (already mostly covered by default)
        '2.5': '0.625rem',   // 10px
      },

      borderRadius: {
        // Already covered by default Tailwind
      },

      aspectRatio: {
        // Custom aspect ratios
        '4/3': '4 / 3',
        '9/16': '9 / 16',
      },

      fontSize: {
        // Add custom if needed
        'md': '0.9375rem',  // 15px
      },

      screens: {
        // Tailwind defaults are good
        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
        // xl: '1280px',
        // 2xl: '1536px',
      },
    },
  },
  plugins: [],
}
```

---

## Font Setup

### 4. Add Custom Fonts

Create `src/app/fonts.ts`:

```typescript
import localFont from 'next/font/local'

export const aktivGrotesk = localFont({
  src: [
    {
      path: '../fonts/AktivGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/AktivGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/AktivGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aktiv-grotesk',
})

export const norsy = localFont({
  src: '../fonts/Norsy-Regular.otf',
  variable: '--font-norsy',
})
```

Update `src/app/layout.tsx`:

```typescript
import { aktivGrotesk, norsy } from './fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${aktivGrotesk.variable} ${norsy.variable}`}>
      <body className="font-aktivGrotesk">{children}</body>
    </html>
  )
}
```

---

## Component Structure

### 5. Create Base Component Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Tabs.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── Destinations.tsx
│   │   └── ...
│   └── carousel/
│       └── EmblaCarousel.tsx
└── fonts/
    └── (font files)
```

---

## Core Components

### 6. Button Component

Create `src/components/ui/Button.tsx`:

```typescript
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2 whitespace-nowrap',
          'rounded-full font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
          'disabled:pointer-events-none disabled:opacity-50',

          // Variants
          {
            'bg-primary text-primary-foreground shadow hover:bg-primary/90':
              variant === 'primary',
            'hover:bg-accent border md:border text-accent-blue':
              variant === 'secondary',
            'hover:bg-accent':
              variant === 'ghost',
          },

          // Sizes
          {
            'h-9 px-4 py-2 text-sm': size === 'sm',
            'h-9 px-6 py-3 text-base': size === 'md',
            'h-11 px-8 py-4 text-lg': size === 'lg',
          },

          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
```

Create `src/lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Install dependencies:
```bash
npm install clsx tailwind-merge
```

### 7. Card Component

Create `src/components/ui/Card.tsx`:

```typescript
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl bg-white shadow-lg overflow-hidden',
        className
      )}
      {...props}
    />
  )
)
Card.displayName = 'Card'

const CardImage = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('relative aspect-video overflow-hidden', className)}
      {...props}
    />
  )
)
CardImage.displayName = 'CardImage'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-4', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-bold text-dark-primary', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-dark-secondary', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

export { Card, CardImage, CardContent, CardTitle, CardDescription }
```

### 8. Tabs Component (using Radix UI)

Create `src/components/ui/Tabs.tsx`:

```typescript
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex items-center gap-2 text-muted-foreground',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap',
      'rounded-full border border-light-border px-4 py-1',
      'font-aktivGrotesk text-xs font-medium md:text-sm',
      'ring-offset-background transition-all',
      'focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:border-black data-[state=active]:bg-background',
      'data-[state=active]:text-dark-primary data-[state=active]:shadow',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn('mt-6', className)}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

### 9. Carousel Component (using Embla)

Create `src/components/carousel/EmblaCarousel.tsx`:

```typescript
'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  options?: any
}

export function Carousel({ children, className, options }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    ...options,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 embla__container">
          {children}
        </div>
      </div>

      {/* Navigation buttons - optional */}
      {canScrollPrev && (
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
          aria-label="Previous"
        >
          ←
        </button>
      )}

      {canScrollNext && (
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
          aria-label="Next"
        >
          →
        </button>
      )}
    </div>
  )
}

export function CarouselSlide({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('flex-[0_0_100%] md:flex-[0_0_33.33%]', className)}>
      {children}
    </div>
  )
}
```

---

## Layout Components

### 10. Header Component

Create `src/components/layout/Header.tsx`:

```typescript
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/icons/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/destinations" className="text-sm font-medium hover:text-primary">
              Destinations
            </Link>
            <Link href="/about-us" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="/blogs" className="text-sm font-medium hover:text-primary">
              Blogs
            </Link>
          </nav>

          {/* CTA */}
          <Button size="sm">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}
```

---

## Page Implementation

### 11. Home Page Structure

Update `src/app/page.tsx`:

```typescript
import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { Destinations } from '@/components/sections/Destinations'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destinations />
        {/* Add more sections */}
      </main>
      <Footer />
    </>
  )
}
```

### 12. Example Hero Section

Create `src/components/sections/Hero.tsx`:

```typescript
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative h-screen md:h-[70vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-norsy mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Explore amazing destinations and create unforgettable memories
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              Explore Trips
            </Button>
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## Best Practices

### 13. Image Optimization

Always use Next.js Image component:

```typescript
import Image from 'next/image'

// Responsive image
<Image
  src="/images/destination.webp"
  alt="Destination name"
  width={600}
  height={400}
  className="rounded-xl"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// Fill container
<div className="relative aspect-video">
  <Image
    src="/images/hero.webp"
    alt="Hero"
    fill
    className="object-cover"
    priority  // For above-fold images
  />
</div>
```

### 14. Responsive Patterns

```typescript
// Mobile-first responsive classes
<div className="
  grid grid-cols-1          // Mobile: 1 column
  md:grid-cols-2            // Tablet: 2 columns
  lg:grid-cols-3            // Desktop: 3 columns
  gap-4 md:gap-6            // Responsive gap
  px-4 md:px-8              // Responsive padding
">
  {/* Content */}
</div>
```

### 15. Accessibility

```typescript
// Always include ARIA labels
<button aria-label="Close menu">
  <XIcon />
</button>

// Use semantic HTML
<nav aria-label="Main navigation">
  {/* Nav items */}
</nav>

// Focus visible states (already in components)
className="focus-visible:outline-none focus-visible:ring-2"
```

---

## Environment Setup

### 16. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics (if needed)
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SENTRY_DSN=
```

---

## Development Workflow

### 17. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 18. Build for Production

```bash
npm run build
npm run start
```

---

## Deployment Checklist

- [ ] Optimize images (use WebP format)
- [ ] Add meta tags for SEO
- [ ] Configure robots.txt and sitemap.xml
- [ ] Set up analytics
- [ ] Configure error tracking
- [ ] Test responsive design on multiple devices
- [ ] Check accessibility (lighthouse audit)
- [ ] Optimize Core Web Vitals
- [ ] Set up CDN for assets
- [ ] Configure caching headers

---

## Next Steps

1. **Build core pages**: Home, Destinations, Trip Details, About
2. **Implement search/filter**: For destinations
3. **Add forms**: Contact, Booking, Newsletter
4. **Integrate CMS**: For blog and dynamic content
5. **Set up API routes**: For backend functionality
6. **Add authentication**: If needed for user accounts
7. **Implement booking flow**: Multi-step form
8. **Optimize performance**: Code splitting, lazy loading
9. **Add animations**: Framer Motion or CSS animations
10. **Testing**: Unit tests, E2E tests

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives)
- [Embla Carousel Documentation](https://www.embla-carousel.com/)

---

*Last Updated: 2025-10-08*
*Reference: DESIGN_REFERENCE.md and TECHNICAL_REFERENCE.md*
