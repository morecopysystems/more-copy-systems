# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (next/core-web-vitals)
```

No test suite is configured.

## Architecture

This is a single-page marketing website for More Copy Systems (a printing equipment provider) built with **Next.js 14 App Router** and **TypeScript**.

### Page Structure

The home page (`src/app/page.tsx`) renders sections sequentially:
`Hero → About → BajajFin → Products → Brands → GoogleReview → Contact → Footer`

Navigation uses anchor-based scroll links (`#aboutus`, `#products`, `#contact`) — no client-side routing.

### Key Conventions

- **Path alias**: `@/*` maps to `./src/*`
- **Static data** lives in `src/constants/index.ts` (hero images, services, brands, etc.)
- **Class merging**: use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)
- **Styling**: Tailwind CSS with HSL CSS variables for design tokens; dark mode via `.dark` class

### Component Organization

- `src/components/ui/` — Radix UI primitives wrapped with Tailwind (shadcn/ui pattern)
- `src/components/navbar/` — `Navbar.tsx` (desktop, hidden on mobile) + `MobileNav.tsx`
- `src/components/products/` — Product display components
- `src/components/` root — Page section components (Hero, About, Contact, Footer, etc.)

Custom animation/effect components (typewriter, moving-border, infinite-moving-cards, card-hover-effect) live directly in `src/components/ui/`.

### Adding shadcn/ui Components

The project uses shadcn/ui with the `default` style and CSS variables. Base color is `slate`. Add new components via the shadcn CLI targeting `src/components/ui/`.

### SEO / Meta

- Site metadata: `src/app/layout.tsx`
- `src/app/robots.ts` and `src/app/sitemap.ts` for crawl configuration (domain: `morecopysystems.in`)
