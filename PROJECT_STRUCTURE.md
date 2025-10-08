# Project Structure

```
clone/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   │
│   ├── destinations/            # Destinations routes
│   │   ├── page.tsx            # List all destinations
│   │   └── [slug]/
│   │       └── page.tsx        # Single destination detail
│   │
│   ├── tours/                   # Tours routes
│   │   ├── page.tsx            # List all tours
│   │   └── [slug]/
│   │       └── page.tsx        # Single tour detail
│   │
│   ├── blog/                    # Blog routes
│   │   ├── page.tsx            # List all blog posts
│   │   └── [slug]/
│   │       └── page.tsx        # Single blog post
│   │
│   ├── about/                   # About page
│   │   └── page.tsx
│   │
│   └── contact/                 # Contact page
│       └── page.tsx
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx          # Main header
│   │   ├── Footer.tsx          # Main footer
│   │   ├── MobileNav.tsx       # Mobile navigation
│   │   └── DesktopNav.tsx      # Desktop navigation
│   │
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx            # Hero section
│   │   ├── FeaturedDestinations.tsx
│   │   ├── PopularTours.tsx
│   │   └── Testimonials.tsx
│   │
│   ├── features/                # Feature components
│   │   ├── DestinationCard.tsx # Destination card
│   │   ├── TourCard.tsx        # Tour card
│   │   ├── TestimonialCard.tsx # Testimonial card
│   │   ├── Carousel.tsx        # Carousel/slider
│   │   └── FilterBar.tsx       # Filter/search bar
│   │
│   └── ui/                      # UI components
│       ├── Button.tsx          # Button component
│       ├── Card.tsx            # Generic card
│       ├── Input.tsx           # Input field
│       └── SearchBar.tsx       # Search bar
│
├── lib/                         # Utilities
│   └── utils.ts                # Utility functions
│
├── types/                       # TypeScript types
│
├── public/                      # Static assets
│   └── logo.svg                # Logo file
│
└── docs/                        # Documentation
    ├── COLOR_PALETTE.md
    ├── DESIGN_REFERENCE.md
    ├── IMPLEMENTATION_GUIDE.md
    ├── QUICK_REFERENCE.md
    └── TECHNICAL_REFERENCE.md
```

## Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home page |
| `/destinations` | `app/destinations/page.tsx` | All destinations |
| `/destinations/[slug]` | `app/destinations/[slug]/page.tsx` | Single destination |
| `/tours` | `app/tours/page.tsx` | All tours |
| `/tours/[slug]` | `app/tours/[slug]/page.tsx` | Single tour |
| `/blog` | `app/blog/page.tsx` | All blog posts |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Single blog post |
| `/about` | `app/about/page.tsx` | About page |
| `/contact` | `app/contact/page.tsx` | Contact page |

## Component Structure

### Layout Components
- **Header**: Logo, navigation, search, CTA buttons
- **Footer**: Links, social media, copyright
- **MobileNav**: Hamburger menu for mobile
- **DesktopNav**: Full navigation for desktop

### Section Components
- **Hero**: Full-screen hero with CTA
- **FeaturedDestinations**: Carousel of destinations
- **PopularTours**: Grid/carousel of tours
- **Testimonials**: Customer testimonials carousel

### Feature Components
- **DestinationCard**: Card showing destination info
- **TourCard**: Card showing tour details
- **TestimonialCard**: Testimonial with user info
- **Carousel**: Embla carousel wrapper
- **FilterBar**: Search and filter functionality

### UI Components
- **Button**: Reusable button with variants
- **Card**: Generic card component
- **Input**: Form input field
- **SearchBar**: Search input with icon

## Development Status
✅ Project structure created
✅ All routes set up
✅ Component placeholders created
⏳ Ready for implementation
