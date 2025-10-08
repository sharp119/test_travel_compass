# Component Implementation Guide

This guide provides ready-to-use React/Next.js components based on the analyzed HTML structure.

---

## 1. Top Banner Component

```tsx
// components/TopBanner.tsx
import Link from 'next/link';

export function TopBanner() {
  return (
    <div className="fixed top-0 z-50 w-full">
      <Link
        href="/newyear-getaways"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <div className="fixed top-0 z-[100] flex w-full items-center justify-center bg-[#008342]">
          <p className="font-base px-4 py-3 text-center font-[aktivGrotesk] text-sm text-white">
            New Year Sale is live! Get up to ₹5000 off 🎉
          </p>
        </div>
      </Link>
    </div>
  );
}
```

**Usage:**
```tsx
<TopBanner />
```

---

## 2. Mobile Header Component

```tsx
// components/MobileHeader.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CircleUser, Menu } from 'lucide-react';

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="fixed z-50 w-full transition-all duration-300 ease-in-out lg:hidden bg-transparent"
      style={{ top: '40px' }}
    >
      <div className="no-scrollbar flex items-stretch justify-between">
        <div className="flex w-full items-center justify-between gap-2 bg-transparent p-4">
          {/* Left: User Icon */}
          <div className="flex items-center text-white">
            <span className="font-[aktivGrotesk] text-base font-normal duration-300 ease-in-out">
              <CircleUser className="h-6 w-6 text-white" />
            </span>
          </div>

          {/* Center: Logo */}
          <div className="w-max">
            <Link className="w-full lg:w-auto" href="/">
              <svg
                width="82"
                height="32"
                viewBox="0 0 82 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[2.5rem] w-[12.5rem] text-white"
              >
                {/* SVG logo paths - paste your logo here */}
                <path d="..." fill="currentColor" />
              </svg>
            </Link>
          </div>

          {/* Right: Menu Button */}
          <div className="flex flex-shrink-0 items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg">
          {/* Add your mobile menu content here */}
        </div>
      )}
    </div>
  );
}
```

---

## 3. Desktop Header Component

```tsx
// components/DesktopHeader.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone } from 'lucide-react';

export function DesktopHeader() {
  const [internationalOpen, setInternationalOpen] = useState(false);
  const [domesticOpen, setDomesticOpen] = useState(false);

  return (
    <header className="hidden lg:block sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-max">
            <Link href="/">
              <svg
                width="82"
                height="32"
                viewBox="0 0 82 32"
                className="h-[2.5rem] w-[12.5rem] text-black"
              >
                {/* Logo SVG */}
              </svg>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative w-60 max-w-md">
            <svg className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-[#4d4d4d]">
              {/* Search icon */}
            </svg>
            <input
              className="flex h-9 w-full bg-transparent px-3 py-1 shadow-sm transition-colors rounded-full border border-[#aeaeae] pl-10 text-sm text-[#5a5a5a] placeholder:text-muted-foreground"
              placeholder="Find your destination..."
              type="text"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 font-medium">
            <Link
              className="flex w-max items-center justify-center gap-2 text-center text-sm font-medium"
              href="tel:+918287636079"
            >
              <Phone className="h-5 w-5" />
              (+91) 8287636079
            </Link>

            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 rounded-full px-6 py-3 text-base font-medium">
              Login
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex justify-center gap-10 mt-4">
          {/* International Trips */}
          <div className="relative">
            <button
              onClick={() => setInternationalOpen(!internationalOpen)}
              className="flex items-center font-[aktivGrotesk] text-sm font-medium text-black focus:outline-none"
            >
              <span className="mr-1">✈️</span>
              <span className="mr-2">International Trips</span>
              <ChevronDown className={`transition-transform duration-300 ${internationalOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {/* Dropdown content */}
          </div>

          {/* Domestic Trips */}
          <div className="relative">
            <button
              onClick={() => setDomesticOpen(!domesticOpen)}
              className="flex items-center font-[aktivGrotesk] text-sm font-medium text-black focus:outline-none"
            >
              <span className="mr-1">🏔️</span>
              <span className="mr-2">Domestic Trips</span>
              <ChevronDown className={`transition-transform duration-300 ${domesticOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
          </div>

          {/* Weekend Trips */}
          <Link
            className="flex items-center font-[aktivGrotesk] text-sm font-medium text-black"
            href="/weekend-trip-from-delhi"
          >
            <span className="mr-1">🚗</span>
            Weekend Trips
          </Link>

          {/* Upcoming Trips */}
          <Link
            className="flex items-center font-[aktivGrotesk] text-sm font-medium text-black"
            href="/upcoming-trips"
          >
            <span className="mr-1">🧳</span>
            Upcoming Trips
          </Link>

          {/* Wellness Retreats */}
          <Link
            className="flex items-center font-[aktivGrotesk] text-sm font-medium text-black"
            href="/wellness-retreats"
          >
            <span className="mr-1">🧘🏻</span>
            Wellness Retreats
          </Link>

          {/* Corporate Trips */}
          <Link
            className="flex items-center font-[aktivGrotesk] text-sm font-medium text-black"
            href="/corporate-tours"
          >
            <span className="mr-1">🏫</span>
            Corporate Trips
          </Link>
        </div>
      </nav>
    </header>
  );
}
```

---

## 4. Hero Section Component

```tsx
// components/HeroSection.tsx
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="mt-[44px] md:mt-[153px]">
      <main className="font-[aktivGrotesk]">
        <div className="relative aspect-[0.7/1] w-full bg-black font-[aktivGrotesk] md:aspect-[3.17/1]">
          {/* Top Gradient Overlay (Mobile Only) */}
          <div className="absolute left-0 right-0 top-0 z-10 h-40 bg-gradient-to-b from-black/50 to-transparent md:hidden" />

          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Background Image */}
          <Image
            src="/hero-bg.webp"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />

          {/* Hero Title */}
          <h1 className="absolute bottom-[112px] z-20 flex w-full justify-center px-4 text-center font-[Norsy] text-[28px] font-medium leading-tight text-white md:bottom-28 md:text-5xl md:leading-tight">
            Your next adventure is just a click away!
          </h1>
        </div>
      </main>
    </div>
  );
}
```

---

## 5. Stats Bar Component

```tsx
// components/StatsBar.tsx
import Image from 'next/image';

const stats = [
  {
    icon: 'https://v2-statics.s3.ap-south-1.amazonaws.com/icons/google.svg',
    value: '4.9 ⭐',
    label: 'Ratings',
    alt: 'Ratings',
  },
  {
    icon: 'https://v2-statics.s3.ap-south-1.amazonaws.com/icons/instaLogo.svg',
    value: '512k+',
    label: 'Community',
    alt: 'Community',
  },
  {
    icon: 'https://v2-statics.s3.ap-south-1.amazonaws.com/icons/mapLogo.svg',
    value: '500+',
    label: 'Itineraries',
    alt: 'Itineraries',
  },
  {
    icon: 'https://v2-statics.s3.ap-south-1.amazonaws.com/icons/walletLogo.svg',
    value: '',
    label: 'No Cost EMI',
    alt: 'No Cost EMI',
  },
];

export function StatsBar() {
  return (
    <div className="w-full overflow-hidden bg-black">
      {/* Mobile: Marquee */}
      <div className="relative block md:hidden">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {/* Duplicate stats for seamless loop */}
            {[...stats, ...stats].map((stat, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 items-center gap-2 px-6 py-2 text-white"
              >
                <Image
                  alt={stat.alt}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                  src={stat.icon}
                />
                <div className="flex flex-row whitespace-nowrap text-xs">
                  {stat.value && <span>{stat.value}&nbsp;</span>}
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Static Grid */}
      <div className="hidden items-center justify-center gap-16 py-3 md:flex">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-2 text-white">
            <Image
              alt={stat.alt}
              loading="lazy"
              width={28}
              height={28}
              className="h-7 w-7"
              src={stat.icon}
            />
            <div className="flex flex-row">
              {stat.value && (
                <span className="font-[aktivGrotesk] text-base font-normal">
                  {stat.value}&nbsp;
                </span>
              )}
              <span className="font-[aktivGrotesk] text-base font-normal">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

**CSS for Marquee (add to globals.css):**
```css
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-wrapper {
  overflow: hidden;
}

.marquee-track {
  display: flex;
  animation: marquee 20s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}
```

---

## 6. Footer Component

```tsx
// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#F8F8F8] px-5 py-10 md:px-20 md:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
        {/* Column 1: Contact Info */}
        <div className="flex flex-col gap-2">
          <h4 className="mb-6 font-[aktivGrotesk] text-xl font-medium">
            Contact Us
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6">💬</span>
              <p className="font-[aktivGrotesk] text-base font-normal">
                CaptureaTrip India Pvt Ltd - Gurgaon
              </p>
            </div>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 rounded-full border-2 border-[#1F1F1F] bg-[#FEFEDE] px-3 py-2 text-xs text-[#1F1F1F] transition hover:underline"
              href="https://maps.app.goo.gl/D3fGagaiQW2MSfBx6"
            >
              <Image
                alt="Location"
                loading="lazy"
                width={16}
                height={16}
                src="/locationMark-black.svg"
              />
              View on Map
            </Link>
            <p className="font-[aktivGrotesk] text-base font-normal">
              📍Plot no-376, Udyog Vihar Phase 2, opposite Vi John WeWork,
              Gurgaon, Haryana 122016, India
            </p>
            <p className="font-[aktivGrotesk] text-base font-normal">
              Mobile: +91-8368653222
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="mb-6 font-[aktivGrotesk] text-xl font-medium">
            Quick Links
          </h4>
          <ul className="list-none space-y-1 font-[aktivGrotesk] text-base font-normal">
            <li>
              <Link className="hover:underline" href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/travel-blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact-us">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/cancellation-policy">
                Cancellation Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/wellness-retreats">
                Wellness Retreats
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Popular Destinations */}
        <div className="flex flex-col gap-2">
          <h4 className="mb-6 font-[aktivGrotesk] text-xl font-medium">
            Popular Destinations
          </h4>
          <ul className="list-none space-y-1 font-[aktivGrotesk] text-base font-normal">
            <li>
              <Link className="hover:underline" href="/destination/bali">
                Bali
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/destination/thailand">
                Thailand
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/destination/vietnam">
                Vietnam
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/destination/ladakh">
                Ladakh
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/destination/spiti">
                Spiti Valley
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="flex flex-col gap-2">
          <h4 className="mb-6 font-[aktivGrotesk] text-xl font-medium">
            Follow Us
          </h4>
          <div className="flex flex-col gap-3">
            <Link
              className="flex items-center gap-2 hover:underline"
              href="https://instagram.com/captureatrip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Instagram"
                width={24}
                height={24}
                src="/icons/instagram.svg"
              />
              Instagram
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline"
              href="https://facebook.com/captureatrip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Facebook"
                width={24}
                height={24}
                src="/icons/facebook.svg"
              />
              Facebook
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline"
              href="https://youtube.com/captureatrip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="YouTube"
                width={24}
                height={24}
                src="/icons/youtube.svg"
              />
              YouTube
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center">
        <p className="font-[aktivGrotesk] text-sm text-[#1F1F1F]">
          © {new Date().getFullYear()} CaptureaTrip India Pvt Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
```

---

## 7. Main Layout Component

```tsx
// components/Layout.tsx
import { TopBanner } from './TopBanner';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopBanner />
      <MobileHeader />
      <DesktopHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

---

## 8. Home Page Example

```tsx
// app/page.tsx
import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import { StatsBar } from '@/components/StatsBar';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <StatsBar />

      {/* Add more sections here */}
      <div className="flex flex-col gap-7 py-7 md:gap-16 md:py-16">
        {/* Trip listings, categories, etc. */}
      </div>
    </Layout>
  );
}
```

---

## 9. Tailwind Configuration

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008342',
          foreground: '#ffffff',
        },
        'green-banner': '#008342',
        'footer-bg': '#F8F8F8',
        'map-button': '#FEFEDE',
        'dark-text': '#1F1F1F',
      },
      fontFamily: {
        aktivGrotesk: ['aktivGrotesk', 'sans-serif'],
        norsy: ['Norsy', 'serif'],
      },
      aspectRatio: {
        'hero-mobile': '0.7 / 1',
        'hero-desktop': '3.17 / 1',
      },
    },
  },
  plugins: [],
};
```

---

## 10. Global Styles

```css
/* app/globals.css */
@import url('/_next/static/media/aktivGrotesk.otf');
@import url('/_next/static/media/Norsy.otf');

@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'aktivGrotesk';
  src: url('/_next/static/media/aktivGrotesk.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Norsy';
  src: url('/_next/static/media/Norsy.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

/* Marquee Animation */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-wrapper {
  overflow: hidden;
}

.marquee-track {
  display: flex;
  animation: marquee 20s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

/* Hide scrollbar but keep functionality */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Custom scrollbar hide utility */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

---

## 11. Utility Hooks

```tsx
// hooks/useScrollDirection.ts
import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;

      if (currentOffset > prevOffset) {
        setScrollDirection('down');
      } else if (currentOffset < prevOffset) {
        setScrollDirection('up');
      }

      setPrevOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll');
    };
  }, [prevOffset]);

  return scrollDirection;
}
```

```tsx
// hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
```

---

## 12. TypeScript Types

```typescript
// types/index.ts

export interface TripCard {
  id: string;
  title: string;
  destination: string;
  price: number;
  duration: string;
  image: string;
  rating: number;
  category: 'international' | 'domestic' | 'weekend' | 'wellness';
}

export interface NavItem {
  label: string;
  href?: string;
  icon?: string;
  children?: NavItem[];
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface Stat {
  icon: string;
  value: string;
  label: string;
  alt: string;
}
```

---

## Summary

This implementation guide provides:

1. **Ready-to-use React components** matching the analyzed structure
2. **Tailwind CSS classes** exactly as used in the reference
3. **Type safety** with TypeScript interfaces
4. **Responsive design** patterns (mobile-first)
5. **Custom hooks** for common functionality
6. **Global styles** including animations
7. **Configuration** for Tailwind and fonts

All components follow Next.js 14+ App Router conventions and use modern React patterns (Server Components where appropriate, Client Components for interactivity).
