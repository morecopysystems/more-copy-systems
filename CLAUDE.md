# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (next/core-web-vitals)
```

No test suite is configured. Do not run `npm run build` while `npm run dev` is running — the build
replaces `.next` underneath the dev server and breaks it until restarted.

## Architecture

Marketing site for More Copy Systems (printer, photocopier and office-equipment dealer in
Kacheripady, Ernakulam) built with **Next.js 14 App Router** and **TypeScript**. Every route is
statically generated.

### Routes

- `/` — scroll narrative: Hero → Journeys → Product showcase → Brands → Services → Why → Local → Contact → Index
- `/products` — category index
- `/products/[category]` — full listing per category (`generateStaticParams` over `CATEGORY_SLUGS`)
- `/services` — all service groups, anchor-linked by group id and service slug
- `/contact` — showroom, map, pre-filled enquiry routes

### Data is the source of truth

All business content lives in `src/data/` and is consumed by every page and by the SEO surfaces
(sitemap, JSON-LD, footer). Change content there, not in components.

- `src/data/site.ts` — business identity, address, phones, hours, socials, and the seven `JOURNEYS`
- `src/data/products.ts` — `CATEGORIES` → `Product[]` (slug, brand, tagline, specs, images, note)
- `src/data/services.ts` — `SERVICE_GROUPS` and `TRUST_POINTS`
- `src/data/brands.ts` — the six brands carried

**Never invent product specifications, statistics, certifications or testimonials.** A product with
no photo gets `images: []` and renders as a type-led card; unknown specs are omitted rather than
guessed.

### Design system

Dark editorial. Tokens are HSL CSS variables in `src/app/globals.css`, surfaced as Tailwind colours:
`ink` (canvas), `paper` (type), `accent` (crimson), `hairline`, `surface`.

- Type: `font-display` (Bricolage Grotesque), `font-sans` (Inter Tight), `font-mono` (JetBrains Mono,
  used for eyebrow labels and specs). Fluid sizes: `text-display-xl` … `text-display-sm`, `text-label`.
- Utilities: `.shell` (page gutter), `.label` (eyebrow), `.rule`, `.link-underline`, `.grain`,
  `.glow` / `.glow-accent`, `.shot-well` (white plate behind product photos), `.logo-invert`.
- Class merging: `cn()` from `src/lib/utils.ts`. Enquiry links: `enquiryHref()` from the same file.

### Motion

Primitives in `src/components/motion/` — `Reveal` / `RevealGroup` / `RevealItem` (scroll entry),
`SplitText` (masked line reveal), `Magnetic` (pointer-only CTA), `Parallax`, `SmoothScroll` (Lenis).

Every primitive checks `useReducedMotion` and renders a static fallback; `globals.css` also disables
animation under `prefers-reduced-motion`. Motion must be transform/opacity only. Keep it that way.

`ProductShowcase` pins and scrolls horizontally on `lg+` only; narrower viewports and reduced-motion
users get an equivalent snap-scrolling rail.

### Components

- `src/components/layout/` — `SiteHeader` (sticky, transparent→solid, mega menu), `SiteFooter`, `ContactDock`
- `src/components/home/` — homepage sections
- `src/components/` root — shared blocks (`ProductCard`, `SectionHeader`, `PageHero`, `ContactCta`, `MapEmbed`, `SeoIndex`)
- `src/components/ui/action.tsx` — `Action` (next/link) and `ActionAnchor` (tel:, mailto:, wa.me)

Path alias: `@/*` → `./src/*`.

### SEO

`src/app/layout.tsx` (metadata + LocalBusiness JSON-LD from `src/lib/schema.ts`), per-route
`generateMetadata`, `ItemList` JSON-LD on category and services pages, `src/app/sitemap.ts` and
`src/app/robots.ts`. Domain: `morecopysystems.in`.

`MapEmbed` needs `NEXT_PUBLIC_GOOGLE_MAP_KEY`; without it, it degrades to a Google Maps link card.
