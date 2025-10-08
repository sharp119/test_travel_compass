# Quick Reference Cheatsheet

A one-page reference for the most commonly used design tokens and patterns.

---

## 🎨 Colors (Copy-Paste Ready)

**Theme based on logo's cyan palette**

### Brand Colors (From Logo)
```css
--primary-cyan:    #0099C2  /* Main brand color */
--accent-cyan:     #0299C2  /* Hover states */
--deep-cyan:       #079AC3  /* Interactive elements */
--success-green:   #00C896  /* Success states */
--alert-coral:     #FF6B6B  /* Warnings/errors */
```

### Background Tints (From Logo)
```css
--pale-cyan:       #F2F8FB  /* Subtle backgrounds */
--pale-cyan-alt:   #F3F8FB  /* Alternative tint */
--light-cyan:      #E8F2F8  /* Hover states */
--white-pure:      #FEFEFE  /* Pure white */
--white-off:       #FCFDFE  /* Off white surfaces */
```

### Tailwind Classes
```html
<!-- Backgrounds -->
bg-[#0099C2]  <!-- Primary Cyan (Logo) -->
bg-[#0299C2]  <!-- Accent Cyan (Logo) -->
bg-[#079AC3]  <!-- Deep Cyan (Logo) -->
bg-[#00C896]  <!-- Success Green -->
bg-[#FF6B6B]  <!-- Alert Coral -->
bg-[#F2F8FB]  <!-- Pale Cyan Tint -->
bg-[#F3F3F3]  <!-- Neutral Light Gray -->
bg-white
bg-black

<!-- Text -->
text-[#0099C2]  <!-- Primary Cyan -->
text-[#1F1F1F]  <!-- Dark Text -->
text-[#5A5A5A]  <!-- Gray Text -->
text-white
text-black

<!-- Borders -->
border-[#0099C2]  <!-- Cyan Border -->
border-[#D8D8D8]  <!-- Light Border -->
border-[#1F1F1F]  <!-- Dark Border -->

<!-- Hover States -->
hover:bg-[#0299C2]  <!-- Cyan Hover -->
hover:bg-[#E8F2F8]  <!-- Light Cyan Hover -->
```

---

## 📏 Spacing (Most Common)

### Padding/Margin
```html
p-2   = 8px      px-4  = 16px horizontal
p-3   = 12px     px-6  = 24px horizontal
p-4   = 16px     py-3  = 12px vertical
p-6   = 24px     py-4  = 16px vertical

mb-4  = 16px bottom margin
mb-6  = 24px bottom margin
mt-4  = 16px top margin
mt-6  = 24px top margin

mx-4  = 16px horizontal margin (left + right)
```

### Gap (Flexbox/Grid)
```html
gap-2  = 8px
gap-4  = 16px    ← Most common
gap-6  = 24px
```

---

## 📱 Responsive Breakpoints

```html
<!-- Mobile First (default) -->
<div class="grid grid-cols-1">

<!-- Tablet (768px+) -->
<div class="grid grid-cols-1 md:grid-cols-2">

<!-- Desktop (1024px+) -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Common Responsive Patterns
```html
<!-- Stack on mobile, horizontal on tablet+ -->
<div class="flex flex-col md:flex-row">

<!-- Hide on mobile, show on desktop -->
<div class="hidden lg:block">

<!-- Show on mobile, hide on desktop -->
<div class="block lg:hidden">

<!-- Responsive spacing -->
<div class="px-4 md:px-8 lg:px-12">
<div class="gap-2 md:gap-4 lg:gap-6">
```

---

## 🔤 Typography

### Font Families
```html
font-[aktivGrotesk]  <!-- Primary font -->
font-[Norsy]         <!-- Display font -->
```

### Font Sizes
```html
text-xs    = 12px
text-sm    = 14px
text-base  = 16px   ← Default
text-xl    = 20px
text-2xl   = 24px
text-[20px]         ← Custom size
```

### Font Weights
```html
font-normal    = 400
font-medium    = 500   ← Most common
font-bold      = 700
```

---

## 🎯 Component Patterns

### Primary Button (Cyan)
```html
<button class="
  inline-flex items-center justify-center gap-2
  bg-[#0099C2] text-white
  rounded-full px-6 py-3
  font-medium text-base
  shadow hover:bg-[#0299C2]
  transition-colors
">
  Button Text
</button>
```

### Secondary Button (Outline Cyan)
```html
<button class="
  inline-flex items-center justify-center gap-2
  border border-[#0099C2]
  text-[#0099C2]
  rounded-full px-4 py-2
  font-medium text-sm
  hover:bg-[#F2F8FB]
  transition-colors
">
  Button Text
</button>
```

### Card Component
```html
<div class="rounded-xl bg-white shadow-lg overflow-hidden">
  <!-- Image -->
  <div class="relative aspect-video">
    <img src="..." alt="..." class="w-full h-full object-cover" />
  </div>

  <!-- Content -->
  <div class="p-4">
    <h3 class="text-xl font-bold text-[#1F1F1F] mb-2">
      Card Title
    </h3>
    <p class="text-sm text-[#5A5A5A]">
      Card description text
    </p>
  </div>
</div>
```

### Tab Button
```html
<button class="
  rounded-full border border-[#D8D8D8]
  px-4 py-1
  text-xs md:text-sm font-medium
  data-[state=active]:border-black
  data-[state=active]:shadow
">
  Tab Label
</button>
```

---

## 📦 Layout Patterns

### Container
```html
<div class="container mx-auto px-4">
  <!-- Content -->
</div>
```

### Responsive Grid
```html
<!-- 1 col mobile, 2 cols tablet, 3 cols desktop -->
<div class="
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-4 md:gap-6
">
  <!-- Grid items -->
</div>
```

### Flexbox
```html
<!-- Center items -->
<div class="flex items-center justify-center gap-4">

<!-- Space between -->
<div class="flex items-center justify-between">

<!-- Responsive direction -->
<div class="flex flex-col md:flex-row gap-4">
```

### Full Width Image
```html
<div class="relative aspect-video w-full overflow-hidden">
  <img src="..." alt="..." class="w-full h-full object-cover" />
</div>
```

---

## 🎨 Border & Shadow

### Border Radius
```html
rounded-lg      = 8px
rounded-xl      = 12px
rounded-2xl     = 16px
rounded-3xl     = 24px
rounded-full    = 9999px (pill)
```

### Shadows
```html
shadow-sm       = Subtle shadow
shadow-md       = Medium shadow
shadow-lg       = Large shadow  ← Most common
drop-shadow-lg  = Drop shadow
```

---

## 🎭 Interactive States

### Hover States
```html
hover:bg-[#0299C2]         ← Cyan button
hover:bg-[#E8F2F8]         ← Light cyan background
hover:bg-gray-200          ← Light button
hover:text-[#0099C2]       ← Cyan text link
```

### Focus States
```html
focus-visible:outline-none
focus-visible:ring-1
focus-visible:ring-ring
```

### Disabled States
```html
disabled:pointer-events-none
disabled:opacity-50
```

### Transitions
```html
transition-colors    ← Color changes
transition-all       ← All properties
duration-200         ← 200ms duration
```

---

## 📐 Sizing

### Width
```html
w-full     = 100%
w-auto     = auto
w-fit      = fit-content
w-4/5      = 80%

<!-- Fixed widths -->
w-[280px]
w-[411px]

<!-- Responsive -->
w-full md:w-[411px]
```

### Height
```html
h-full     = 100%
h-auto     = auto
h-fit      = fit-content

<!-- Fixed heights -->
h-[50px]
h-[2.5rem]

<!-- Min height -->
min-h-44
min-h-[2.5rem]
```

---

## 🔄 Aspect Ratios

```html
aspect-square       = 1:1
aspect-video        = 16:9
aspect-[4/3]        = 4:3
aspect-[0.7/1]      = Portrait
aspect-[2/1]        = Wide landscape

<!-- Responsive -->
aspect-square md:aspect-[4/3]
```

---

## 🎯 Common Combinations

### Hero Section
```html
<section class="relative h-screen md:h-[70vh]">
  <div class="absolute inset-0">
    <!-- Background image -->
  </div>
  <div class="relative z-10 container mx-auto px-4 h-full">
    <!-- Content -->
  </div>
</section>
```

### Section Container
```html
<section class="py-14 md:py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl md:text-4xl font-bold mb-6 md:mb-10">
      Section Title
    </h2>
    <!-- Content -->
  </div>
</section>
```

### Carousel Item
```html
<div class="flex gap-4 overflow-x-auto">
  <div class="flex-[0_0_100%] md:flex-[0_0_33.33%]">
    <!-- Slide content -->
  </div>
</div>
```

---

## 🎨 Gradient Backgrounds

```html
bg-gradient-to-b    ← Top to bottom
bg-gradient-to-r    ← Left to right
bg-gradient-to-t    ← Bottom to top

<!-- With opacity -->
bg-black/10         ← Black at 10% opacity
bg-white/50         ← White at 50% opacity
```

---

## ⚡ Performance Tips

### Images
```html
<!-- Use Next.js Image -->
<Image
  src="/image.webp"
  alt="Description"
  width={600}
  height={400}
  className="rounded-xl"
  priority  <!-- For above-fold -->
/>
```

### Lazy Loading
```html
loading="lazy"  <!-- For images below fold -->
```

---

## 📋 Copy-Paste Components

### Simple Card
```html
<div class="rounded-xl bg-white shadow-lg p-4">
  <h3 class="text-xl font-bold mb-2">Title</h3>
  <p class="text-sm text-[#5A5A5A]">Description</p>
</div>
```

### Icon Button
```html
<button class="
  rounded-full bg-white p-2 shadow-lg
  hover:bg-gray-200 transition-colors
">
  <svg><!-- Icon --></svg>
</button>
```

### Input Field
```html
<input
  type="text"
  placeholder="Search..."
  class="
    w-full px-4 py-2
    border border-[#D8D8D8] rounded-full
    focus:outline-none focus:ring-2 focus:ring-primary
  "
/>
```

### Badge (Cyan)
```html
<span class="
  inline-flex items-center
  px-3 py-1 rounded-full
  bg-[#0099C2] text-white
  text-xs font-medium
">
  Badge Text
</span>
```

### Success Badge
```html
<span class="
  inline-flex items-center
  px-3 py-1 rounded-full
  bg-[#00C896] text-white
  text-xs font-medium
">
  Success
</span>
```

---

## 🎯 Z-Index Scale

```html
z-0      = 0      ← Base level
z-10     = 10     ← Dropdowns
z-20     = 20     ← Fixed elements
z-30     = 30     ← Floating buttons
z-50     = 50     ← Modals
z-[100]  = 100    ← Top level
```

---

## ✨ Pro Tips

1. **Mobile First**: Write base styles for mobile, then add `md:` and `lg:` modifiers
2. **Consistent Spacing**: Use 4, 6, 8 for most spacing (16px, 24px, 32px)
3. **Common Gaps**: Use `gap-4` (16px) for most flex/grid layouts
4. **Button Height**: Use `h-9` (36px) for standard buttons
5. **Border Radius**: Use `rounded-xl` (12px) for cards, `rounded-full` for buttons
6. **Shadows**: Use `shadow-lg` for most cards and elevated elements

---

**Print this page and keep it handy while building! 🚀**
