# Volcrest Capital Design System

## Overview
This design system is inspired by the Melville template, featuring minimal elegance, generous whitespace, and premium typography.

---

## Typography Scale

### Display Fonts (Cormorant Garamond Serif)
- **Hero Title**: 7rem (112px) desktop / 3.5rem (56px) mobile
  - Line height: 1.0
  - Letter spacing: -0.02em
  - Weight: 300 (Light)
  - Usage: Main hero heading

- **Display**: 4.5rem (72px)
  - Line height: 1.1
  - Letter spacing: -0.02em
  - Weight: 300 (Light)
  - Usage: Section titles, closing CTA

- **Section Headings**: 4xl to 5xl (2.25-3rem)
  - Weight: 300 (Light)
  - Usage: Three-column headings

### Body Fonts (Inter Sans-Serif)
- **Subtitle**: 1.5rem (24px)
  - Line height: 1.4
  - Weight: 300 (Light)
  - Usage: Hero subtitle

- **Body Large**: 1.25rem (20px)
  - Line height: 1.6
  - Weight: 300 (Light)
  - Usage: Hero subline, important body text

- **Body**: 1rem to 1.125rem (16-18px)
  - Line height: 1.6
  - Weight: 300-400
  - Usage: Paragraph text

- **Small Caps**: 0.65rem to 0.75rem (10.4-12px)
  - Letter spacing: 0.15em
  - Text transform: uppercase
  - Weight: 500 (Medium)
  - Usage: Navigation, buttons, logo subtitle

---

## Spacing System

### Vertical Rhythm
- **Hero Section**: py-32 to py-40 (8-10rem / 128-160px)
- **Content Sections**: py-32 to py-40 (8-10rem / 128-160px)
- **Closing Section**: py-40 to py-48 (10-12rem / 160-192px)
- **Navbar**: py-6 to py-8 (1.5-2rem / 24-32px)
- **Footer**: py-12 to py-16 (3-4rem / 48-64px)

### Horizontal Rhythm
- **Page Padding**: px-6 (mobile) / px-12 (tablet) / px-16 (desktop)
- **Element Gaps**: 8-20 spacing units (2-5rem)

### Container Widths
- **Max Container**: 1280px (80rem)
- **Max Content**: 1140px (71.25rem)
- **Max Narrow**: 800px (50rem)

---

## Color Palette

### Primary
- **Pure Black**: `#000000` - Background
- **White**: `#FFFFFF` - Main text, borders

### Secondary
- **Soft Black**: `#0A0A0A` - Alternative background
- **Off White**: `#FAFAFA` - Alternative text color

### Grays (Dark Mode)
- **Gray 400**: `#9CA3AF` - Body text, secondary content
- **Gray 500**: `#6B7280` - Footer text
- **Gray 600**: `#4B5563` - Muted text
- **Gray 800**: `#1F2937` - Borders, dividers

---

## Components

### Logo
```
Volcrest     ← Serif, 2xl-3xl, light
CAPITAL      ← Sans, xs, uppercase, wide tracking
```

### Navigation
- Fixed position with backdrop blur
- Border bottom: 1px gray-100
- Small caps uppercase links
- Animated underline on hover (1px height, full width transition)

### Buttons
- Rounded full (9999px radius)
- Border: 1px solid black
- Padding: px-10 py-4
- Small caps uppercase text
- Hover: Black background with white text
- Animation: Scale-x transform from left origin

### Three-Column Grid
- Desktop: 3 equal columns
- Tablet/Mobile: Stacked single column
- Gap: 16-20 spacing units
- Border top separator

---

## Animation System

### Timing Functions
- **Primary Easing**: `cubic-bezier(0.22, 1, 0.36, 1)`
  - Smooth, natural deceleration
  - Usage: All content animations

- **Standard**: `ease-out`
  - Usage: Navbar, quick interactions

### Durations
- **Fast**: 300ms - Hover effects, quick UI changes
- **Medium**: 500ms - Button fills, transitions
- **Slow**: 800-1000ms - Content reveals, page load

### Animation Patterns
1. **Fade Up**: Opacity 0→1, translateY 30-40px→0
2. **Stagger**: Sequential delays (0.15-0.2s between items)
3. **Viewport Trigger**: Intersection Observer with -150px margin
4. **Scale Fill**: Scale-x 0→1 for button backgrounds

### Scroll Behavior
- Smooth scroll enabled globally
- Scroll padding: 120px (accounts for fixed navbar)

---

## Responsive Breakpoints

### Mobile First Approach
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Key Responsive Changes
- Hero text: 3.5rem → 7rem
- Padding: px-6 → px-16
- Grid: 1 column → 3 columns
- Navbar: Compact → Spacious
- Logo: 2xl → 3xl

---

## Best Practices

### Typography
- Always use font-light (300) for large text
- Increase font-weight for smaller sizes
- Maintain consistent letter spacing
- Use tracking-tighter for display text
- Use tracking-wide-caps for uppercase

### Spacing
- Double spacing between major sections
- Use whitespace liberally - less is more
- Maintain consistent vertical rhythm
- Align to 4px/8px grid where possible

### Animation
- Always animate opacity + transform together
- Use stagger for related elements
- Keep durations under 1 second
- Test on slower devices
- Respect `prefers-reduced-motion`

### Performance
- Lazy load animations with viewport intersection
- Use `will-change` sparingly
- Optimize font loading with `font-display: swap`
- Minimize layout shifts

---

## File Organization

```
tailwind.config.ts    → Design tokens, scales, breakpoints
globals.css           → Font imports, scroll behavior, global resets
siteConfig.ts         → All content strings
components/           → Reusable UI components
```

---

## Usage Examples

### Hero Section
```tsx
<h1 className="font-serif text-hero-mobile md:text-hero font-light tracking-tighter">
  Volcrest Capital
</h1>
```

### Button
```tsx
<button className="px-10 py-4 text-sm uppercase tracking-wide-caps border border-black rounded-full">
  Connect With Us
</button>
```

### Section Spacing
```tsx
<section className="py-32 md:py-40 px-6 md:px-16">
  {/* Content */}
</section>
```

### Three Column Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-16">
  {/* Columns */}
</div>
```

---

## Maintenance Notes

- All content edits: `lib/siteConfig.ts`
- Design token updates: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component-specific styles: Use Tailwind classes inline
- Avoid custom CSS unless absolutely necessary

