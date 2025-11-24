# Volcrest Capital

A minimal, elite-style landing page for Volcrest Capital inspired by the Melville template. Built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** with custom configuration
- **Framer Motion** for smooth animations
- **Cormorant Garamond** serif font for display text
- **Inter** sans-serif font for body text

## Design Features

### Typography
- Large hero text (7rem desktop, 3.5rem mobile)
- Serif/sans-serif font pairing (Cormorant Garamond + Inter)
- Custom letter spacing and line heights
- Wide-caps tracking for uppercase elements

### Layout
- Max-width containers (1280px)
- Generous whitespace (py-32 to py-48)
- Left-aligned hero section with massive typography
- Grid-based three-column layout
- Fixed navbar with backdrop blur

### Animations
- Custom cubic-bezier easing: [0.22, 1, 0.36, 1]
- Staggered fade-up animations on scroll
- Smooth button hover effects with scale transitions
- Underline animations on nav links

### Components
- Premium logo with stacked layout
- Minimal navigation bar
- Full-screen hero section
- Three-column focus areas
- Closing CTA section
- Minimal footer

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage composition
│   └── globals.css      # Global styles + font imports
├── components/
│   ├── Navbar.tsx       # Fixed header navigation
│   ├── Logo.tsx         # Stacked brand logo
│   ├── Hero.tsx         # Hero section with large typography
│   ├── ThreeColumns.tsx # Focus areas grid
│   ├── ClosingCTA.tsx   # Final call-to-action
│   └── Footer.tsx       # Minimal footer
└── lib/
    └── siteConfig.ts    # Centralized content configuration
```

## Customization

### Content Updates
All site content is centralized in `lib/siteConfig.ts` - update text without touching component files.

### Design Tokens
Customize spacing, colors, and typography in `tailwind.config.ts`:
- Custom font sizes (hero, display, subtitle, body-large)
- Extended spacing scale (18-48)
- Container max-widths
- Letter spacing presets

### Colors
Current palette: Pure white (#FFFFFF) text on black (#000000) background
- Modify in `tailwind.config.ts` under `colors`
- Alternative options: off-white (#FAFAFA) on soft-black (#0A0A0A)

## Performance

- Server-side rendering with Next.js 14 App Router
- Optimized font loading via Google Fonts
- Smooth scroll behavior with padding offset
- Lazy animation triggers on viewport intersection

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Smooth scrolling for WebKit and standards-compliant browsers
- Custom scrollbar styling for WebKit browsers

