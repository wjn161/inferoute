## 1. Structured Data Module

- [ ] 1.1 Create `lib/structured-data.ts` with typed builder functions: `buildFaqSchema`, `buildOrganizationSchema`, `buildSoftwareApplicationSchema`, `buildBreadcrumbSchema`
- [ ] 1.2 Add TypeScript interfaces for each schema type (FAQPage, Organization, SoftwareApplication, BreadcrumbList)
- [ ] 1.3 Verify builder functions produce valid JSON-LD output via TypeScript compilation

## 2. JSON-LD Integration

- [ ] 2.1 Replace inline `jsonLd` object in `app/page.tsx` with `buildSoftwareApplicationSchema(modules)` call — add `offers`, `featureList` properties
- [ ] 2.2 Add FAQPage JSON-LD script to `FaqSection` component using `buildFaqSchema(faqs)`
- [ ] 2.3 Add Organization JSON-LD script to `app/layout.tsx` using `buildOrganizationSchema()` with social links from footer data
- [ ] 2.4 Add BreadcrumbList JSON-LD script to `HeroSection` using `buildBreadcrumbSchema()`
- [ ] 2.5 Validate all JSON-LD output passes Google Rich Results Test format

## 3. Heading Hierarchy Fixes

- [ ] 3.1 Add visually-hidden `<h2>` to `StatsSection` (e.g., "Platform statistics")
- [ ] 3.2 Add section `<h2>` header to `ValuePropsSection` and change card titles from `<h2>` to `<h3>`
- [ ] 3.3 Add `id` attributes to all section `<h2>` headings for anchor navigation targeting
- [ ] 3.4 Add `aria-labelledby` attribute to every `<section>` element pointing to its heading `id`
- [ ] 3.5 Verify heading hierarchy with a DOM audit: h1 → h2 → h3, no skipped levels

## 4. Skip Navigation and Accessibility

- [ ] 4.1 Add skip-to-content link in `app/layout.tsx` — visually hidden, visible on focus, targets `<main>` element
- [ ] 4.2 Add `id="main-content"` to the `<main>` element in `app/page.tsx`
- [ ] 4.3 Add skip-to-content styles to `app/globals.css` (sr-only + focus-visible pattern)

## 5. Anchor Navigation Sidebar

- [ ] 5.1 Create `components/landing/anchor-nav.tsx` — fixed-position sidebar with section links
- [ ] 5.2 Define anchor nav items array derived from section `id` attributes and heading text
- [ ] 5.3 Style anchor nav: fixed left, outside `max-w-7xl`, hidden below `xl:` breakpoint, using design tokens
- [ ] 5.4 Add active section highlighting using `IntersectionObserver` or CSS scroll-driven animation
- [ ] 5.5 Render `AnchorNav` component in `app/page.tsx`

## 6. Breadcrumb Trail

- [ ] 6.1 Create `components/landing/breadcrumbs.tsx` — semantic `<nav aria-label="Breadcrumb">` with `<ol>` structure
- [ ] 6.2 Render breadcrumbs in `HeroSection` below the transparent header: Home > AI Gateway
- [ ] 6.3 Style breadcrumbs with design tokens (muted text, mono font, small size)

## 7. Section Layout Variants

- [ ] 7.1 Refactor `ValuePropsSection` to split layout: section header + description on left column, three cards stacked on right column (lg: and above)
- [ ] 7.2 Refactor `FeaturesSection` to spotlight layout: first two modules as larger featured cards, remaining eight in a compact grid
- [ ] 7.3 Refactor `FaqSection` to staggered layout: FAQ items in alternating left/right offset pattern
- [ ] 7.4 Ensure all layout variants collapse to single-column stack below `lg:` breakpoint
- [ ] 7.5 Verify no CLS introduced by layout changes at all breakpoints (320, 768, 1024, 1280, 1440)

## 8. Internal Linking Enhancements

- [ ] 8.1 Add "Browse models →" link to each provider card in `ModelFamiliesSection` pointing to `/models?provider={slug}`
- [ ] 8.2 Add contextual link to `/models` in the "Compatible with your current stack" value prop card
- [ ] 8.3 Add contextual link to `https://docs.inferoute.ai` in the "Docs First" feature card
- [ ] 8.4 Add contextual link to `/models` in the `ProofSection` description text

## 9. Hero DOM Order Fix

- [ ] 9.1 Verify hero section DOM order: `<h1>` and CTA appear before `<CodePanel>` in source order
- [ ] 9.2 Confirm visual layout unchanged on desktop (headline left, code panel right) via CSS grid order
- [ ] 9.3 Confirm mobile layout: CTA buttons render before code panel visually and in DOM

## 10. Build Verification

- [ ] 10.1 Run `pnpm typecheck` — zero errors
- [ ] 10.2 Run `pnpm build` — production build succeeds with no warnings
- [ ] 10.3 Run `pnpm lint` — zero warnings
- [ ] 10.4 Manual visual check at breakpoints: 320px, 768px, 1024px, 1280px, 1440px
- [ ] 10.5 Validate JSON-LD with Google Rich Results Test (local HTML source)
