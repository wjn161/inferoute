## Context

The inferoute landing page is a single Next.js server component (`app/page.tsx`) composed of 9 section components rendered in a fixed order: Hero → Stats → Value Props → Model Families → Agents → Features → Proof → CTA → FAQ. All sections use the same visual pattern: full-width dark canvas background, `max-w-7xl` container, overline + heading + subtitle header, then a uniform card grid. The page has basic `SoftwareApplication` JSON-LD but no FAQ, Organization, or BreadcrumbList schemas. Internal linking is limited to the header nav and two hero CTAs. The heading hierarchy has inconsistencies (value props use `<h2>`, features use `<h2>`+`<h3>`, FAQ uses `<h2>`+`<h3>`).

Constraints:
- No content changes — all marketing copy stays the same
- No new dependencies — only Tailwind CSS and lucide-react
- No backend changes — all work is frontend/SSR
- Must preserve existing dark design system tokens
- Must remain fully responsive (mobile-first)

## Goals / Non-Goals

**Goals:**
- Qualify for Google rich results (FAQ rich snippets, Organization knowledge panel)
- Establish a clear h1 → h2 → h3 heading hierarchy across all sections
- Create visual variety in section layouts to improve dwell time and reduce bounce rate
- Add in-page anchor navigation to increase scroll depth signals
- Strengthen internal linking to model catalog and provider pages
- Improve accessibility signals (skip nav, aria-labelledby, landmark roles)
- Maintain Core Web Vitals scores (no layout shifts, no heavy JS)

**Non-Goals:**
- Changing any marketing copy, headlines, or data content
- Adding new pages or routes
- Implementing actual backend functionality (auth, payments, API)
- Adding JavaScript-heavy interactions or animation libraries
- Redesigning the visual identity or color system
- Modifying the model catalog or detail pages

## Decisions

### 1. Structured Data Strategy: Inline JSON-LD scripts per section

**Decision**: Each section component that generates structured data will render its own `<script type="application/ld+json">` tag. A shared `lib/structured-data.ts` module will export builder functions for each schema type.

**Alternatives considered**:
- Centralized single JSON-LD block in `page.tsx` — rejected because it couples the page file to schema details and makes sections less self-contained
- Next.js Metadata API for JSON-LD — rejected because `generateMetadata` does not support arbitrary JSON-LD types well; inline scripts are the standard approach

**Rationale**: Self-contained sections with co-located schemas are easier to maintain and test. Google parses all JSON-LD on the page regardless of placement.

### 2. Anchor Navigation: Sticky sidebar on desktop, hidden on mobile

**Decision**: Add an `AnchorNav` component that renders as a fixed-position vertical pill list on the left side of the viewport (outside `max-w-7xl`) on `xl:` breakpoint and above. Hidden entirely on smaller screens.

**Alternatives considered**:
- Horizontal scrollable tab bar below header — rejected because it competes with the sticky header and adds CLS risk
- Floating TOC overlay — rejected because it overlaps content on smaller viewports
- No anchor nav — rejected because it misses scroll-depth and internal-linking benefits

**Rationale**: A sidebar that only appears when there is physical space (xl: 1280px+) avoids layout shift, doesn't compete with content, and provides persistent navigation for deep-scrolling pages. The `xl:` breakpoint ensures there is actual gutter space outside the content container.

### 3. Section Layout Alternation: Three layout variants

**Decision**: Introduce three distinct section layout patterns and assign them to break the uniform grid:
- **Split layout** (text left, visual right): Value Props, Proof section
- **Spotlight layout** (large featured card + smaller grid): Features section
- **Staggered layout** (offset cards with alternating alignment): FAQ section

**Alternatives considered**:
- Bento grid — rejected as too visually busy for a developer-focused product
- Full-width editorial style — rejected because it would require content changes
- Keep uniform grid with color variation only — rejected because color alone doesn't create structural hierarchy signals for crawlers

**Rationale**: Each layout variant creates a distinct DOM structure with different heading/content nesting, which gives crawlers clearer signals about content importance and relationships. The visual variety also improves user engagement metrics.

### 4. Heading Hierarchy Fix: Scoped per-section with consistent levels

**Decision**: Establish a rule: the page has one `<h1>` (hero), each major section gets one `<h2>`, and cards/items within a section use `<h3>`. The value props section currently uses `<h2>` for card titles — these will change to `<h3>` with a new section-level `<h2>` header added.

**Current → Target**:
```
Hero: h1 ✓
Stats: (no heading) → add visually-hidden h2
Value Props: cards use h2 → cards use h3, add section h2
Model Families: h2 + h3 ✓
Agents: h2 + h3 ✓
Features: h2 + h3 ✓
Proof: h2 ✓ (no cards with headings)
CTA: h2 ✓
FAQ: h2 + h3 ✓
```

**Rationale**: A strict heading hierarchy is one of the strongest on-page SEO signals. Skipping levels or using wrong levels confuses crawlers about content structure.

### 5. Internal Linking: Contextual link additions, not structural changes

**Decision**: Add 1-2 contextual `Link` components per section where relevant:
- Value Props → link to `/models` from "Compatible with your current stack" card
- Model Families → add "Browse {provider} models" link at bottom of each provider card
- Features → link to docs from "Docs First" card
- Proof → link to `/models` from the section description

**Rationale**: Contextual links within content body carry more SEO weight than navigation links. Each link is relevant to its surrounding content and points to a real destination.

### 6. Breadcrumbs: Below transparent header in hero only

**Decision**: Render a minimal breadcrumb (`Home > AI Gateway`) only in the hero section, below the transparent header. Use `BreadcrumbList` JSON-LD. Other pages already have breadcrumb support in the header.

**Rationale**: Breadcrumbs on the landing page help crawlers understand site hierarchy. Keeping them minimal avoids visual clutter. The hero section is the natural place since it's the entry point.

## Risks / Trade-offs

- **[Visual regression]** → All layout changes are CSS-only with existing tokens. Mitigation: visual regression testing at key breakpoints before merge.
- **[CLS from anchor nav]** → The sidebar renders outside the content flow with `position: fixed` and only at `xl:`. No impact on content layout. Mitigation: test CLS at 1280px, 1440px, 1920px.
- **[Over-engineering sections]** → Three layout variants is the maximum. No section gets a unique one-off layout. Mitigation: reuse layout wrapper components.
- **[JSON-LD validation]** → Incorrect structured data can trigger Google Search Console warnings. Mitigation: validate all JSON-LD with Google Rich Results Test before deploying.
- **[Heading changes break styling]** → Some heading level changes (h2→h3) may affect visual size. Mitigation: explicitly set Tailwind classes to maintain current visual appearance regardless of heading level.
