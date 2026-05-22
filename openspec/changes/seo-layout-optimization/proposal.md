## Why

The current landing page uses a uniform card-grid pattern across nearly every section, which creates weak semantic hierarchy for search engine crawlers. While the content is solid, the layout treats all sections with equal visual and structural weight — missing opportunities for Google rich results (FAQ schema, HowTo, Organization), stronger internal linking to the 51 model detail pages, and clearer heading hierarchy that signals topical authority for "AI gateway", "OpenAI compatible API", and "LLM routing" keywords.

## What Changes

- Add structured data (JSON-LD) for FAQPage, Organization, and BreadcrumbList to qualify for Google rich results
- Restructure heading hierarchy (h1 → h2 → h3) so each section sends a clear topical signal instead of flat h2/h3 cards
- Introduce alternating section layouts (text-left/text-right split, staggered grid, feature spotlight) to create stronger content hierarchy and dwell-time signals
- Add a sticky table-of-contents sidebar (desktop) / horizontal scroll nav (mobile) for in-page anchor navigation — improves scroll depth and time-on-page
- Add breadcrumb trail below the header for crawl path clarity
- Add contextual internal links from value props and features to `/models` and specific model provider pages — strengthens link equity distribution
- Add skip-to-content link and `aria-labelledby` on every section for accessibility (Core Web Vitals + accessibility ranking signal)
- Add a "Related models" link strip at the bottom of Model Families cards to boost internal page connections
- Improve mobile content prioritization: reorder hero elements so H1 and CTA render before the code panel in DOM order

## Capabilities

### New Capabilities
- `structured-data`: JSON-LD schemas (FAQPage, Organization, SoftwareApplication enhancement, BreadcrumbList) injected into the landing page for Google rich results eligibility
- `seo-layout`: Alternating section layouts, heading hierarchy fixes, sticky anchor nav, breadcrumb trail, internal linking enhancements, and accessibility improvements — all without changing the core marketing copy

### Modified Capabilities
(none — no existing specs to modify)

## Impact

- **Files changed**: `app/page.tsx`, all `components/landing/*.tsx`, `app/layout.tsx` (minor — skip nav), `components/header.tsx` (breadcrumb integration), `components/footer.tsx` (minor link additions)
- **New files**: `components/landing/anchor-nav.tsx` (sticky TOC), `components/landing/breadcrumbs.tsx`, `lib/structured-data.ts` (JSON-LD builders)
- **Dependencies**: None — all changes use existing Tailwind + lucide-react
- **Breaking changes**: None — purely additive layout and structural changes
- **Risk**: Low — no content changes, no backend changes, no new dependencies
