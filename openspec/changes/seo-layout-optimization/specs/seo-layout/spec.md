## ADDED Requirements

### Requirement: Strict heading hierarchy
Every section on the landing page SHALL follow a strict heading hierarchy: one `<h1>` in the hero, one `<h2>` per major section, and `<h3>` for items within a section. No heading level SHALL be skipped. Visual styling MUST be decoupled from heading level using explicit Tailwind classes.

#### Scenario: Value props section uses correct heading levels
- **WHEN** the Value Props section renders
- **THEN** the section title uses `<h2>` and each value prop card title uses `<h3>` (not `<h2>`)

#### Scenario: Stats section has a heading
- **WHEN** the Stats section renders
- **THEN** a visually-hidden `<h2>` element is present with text describing the section (e.g., "Platform statistics")

#### Scenario: No heading level is skipped
- **WHEN** the full page DOM is analyzed for heading hierarchy
- **THEN** headings follow the sequence h1 → h2 → h3 with no skipped levels

### Requirement: Alternating section layouts
The landing page SHALL use at least three distinct section layout patterns to create visual and structural hierarchy. The patterns MUST be: split layout (text + visual side by side), spotlight layout (featured item + grid), and the existing uniform grid. Each section MUST use the layout most appropriate to its content density.

#### Scenario: Value Props section uses split layout
- **WHEN** the Value Props section renders on desktop (lg: breakpoint and above)
- **THEN** the section displays a text column on the left and the three value prop cards stacked on the right

#### Scenario: Features section uses spotlight layout
- **WHEN** the Features section renders on desktop (lg: breakpoint and above)
- **THEN** the first two feature modules are displayed as larger spotlight cards and the remaining modules are displayed in a smaller grid

#### Scenario: All layouts collapse to single column on mobile
- **WHEN** any section renders below the `lg:` breakpoint
- **THEN** all layout variants collapse to a single-column stacked layout

### Requirement: Anchor navigation sidebar
The landing page SHALL include an anchor navigation sidebar that provides in-page section links. The sidebar MUST render as a fixed-position element on the left viewport gutter at `xl:` breakpoint (1280px) and above. The sidebar MUST be hidden below `xl:` breakpoint.

#### Scenario: Anchor nav visible on desktop
- **WHEN** the viewport width is 1280px or greater
- **THEN** a vertical list of section links is visible on the left side of the viewport, outside the `max-w-7xl` content area

#### Scenario: Anchor nav hidden on smaller screens
- **WHEN** the viewport width is below 1280px
- **THEN** no anchor navigation element is visible or takes up space

#### Scenario: Anchor links scroll to sections
- **WHEN** a user clicks an anchor nav link
- **THEN** the page smooth-scrolls to the corresponding section identified by its `id` attribute

### Requirement: Skip-to-content link
The page layout SHALL include a visually-hidden skip-to-content link that becomes visible on focus. The link MUST target the `<main>` element.

#### Scenario: Skip link is hidden until focused
- **WHEN** the page loads
- **THEN** the skip link is not visually rendered
- **WHEN** the user presses Tab from the top of the page
- **THEN** the skip link becomes visible and focused

#### Scenario: Skip link jumps to main content
- **WHEN** the skip link is activated
- **THEN** focus moves to the `<main>` element, bypassing the header navigation

### Requirement: Section aria-labelledby attributes
Every `<section>` element on the landing page SHALL have an `aria-labelledby` attribute pointing to the `id` of its heading element (the `<h2>`).

#### Scenario: Each section references its heading
- **WHEN** any landing page section renders
- **THEN** the `<section>` element has `aria-labelledby` matching the `id` of its `<h2>` child

### Requirement: Contextual internal links
Sections SHALL include contextual internal links to the model catalog (`/models`) and relevant provider pages. Each link MUST be contextually relevant to the surrounding content. A minimum of 4 new internal links SHALL be added across the landing page sections.

#### Scenario: Model Families cards link to provider model pages
- **WHEN** a Model Families provider card renders
- **THEN** the card includes a "Browse models" link pointing to `/models?provider={provider-name}`

#### Scenario: Value Props section links to model catalog
- **WHEN** the "Compatible with your current stack" value prop card renders
- **THEN** the card includes a contextual link to `/models`

#### Scenario: Features section links to documentation
- **WHEN** the "Docs First" feature card renders
- **THEN** the card includes a link to `https://docs.inferoute.ai`

### Requirement: Breadcrumb trail in hero section
The hero section SHALL render a minimal breadcrumb trail below the transparent header. The breadcrumb MUST include at least "Home" and one descriptor (e.g., "AI Gateway"). It MUST use semantic `<nav aria-label="Breadcrumb">` markup.

#### Scenario: Breadcrumb renders in hero
- **WHEN** the hero section renders
- **THEN** a breadcrumb nav is visible below the header with "Home" as a link and "AI Gateway" as the current page (not linked)

#### Scenario: Breadcrumb uses semantic markup
- **WHEN** the breadcrumb DOM is inspected
- **THEN** it uses `<nav aria-label="Breadcrumb">` with an `<ol>` list structure

### Requirement: Hero DOM order prioritizes content
The hero section MUST render the `<h1>` headline and primary CTA before the code panel in DOM order, regardless of visual layout. This ensures crawlers and screen readers encounter the most important content first.

#### Scenario: H1 appears before code panel in DOM
- **WHEN** the hero section HTML is inspected
- **THEN** the `<h1>` element appears before the `<pre>` code block in source order

#### Scenario: Visual layout unchanged on desktop
- **WHEN** the hero section renders on desktop (lg: and above)
- **THEN** the headline and CTA appear on the left and the code panel on the right, matching the current visual layout

### Requirement: Mobile content prioritization
On viewports below the `lg:` breakpoint, the landing page MUST render content in priority order: hero headline → CTA buttons → stats → value props → model families. Non-essential visual elements (code panel, routing diagram) MUST appear after the primary content.

#### Scenario: Mobile hero shows CTA before code panel
- **WHEN** the hero section renders below `lg:` breakpoint
- **THEN** the CTA buttons appear before the code panel in both DOM and visual order
