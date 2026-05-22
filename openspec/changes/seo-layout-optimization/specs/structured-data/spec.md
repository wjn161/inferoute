## ADDED Requirements

### Requirement: FAQPage JSON-LD schema
The landing page SHALL include a `FAQPage` JSON-LD schema that lists all FAQ items rendered by the `FaqSection` component. Each FAQ item SHALL be represented as a `Question` with `acceptedAnswer` of type `Answer`. The schema MUST be rendered as a `<script type="application/ld+json">` tag within the FAQ section.

#### Scenario: FAQPage schema renders with all FAQ items
- **WHEN** the landing page loads with 8 FAQ items
- **THEN** a `FAQPage` JSON-LD block is present in the DOM containing exactly 8 `Question` entries, each with a matching `acceptedAnswer.text`

#### Scenario: FAQPage schema passes Google validation
- **WHEN** the rendered JSON-LD is tested against Google Rich Results Test
- **THEN** the FAQPage schema is detected as valid with no errors or warnings

### Requirement: Organization JSON-LD schema
The landing page SHALL include an `Organization` JSON-LD schema with the company name "inferoute", the URL "https://inferoute.ai", and social profile links. The schema MUST be rendered in the root layout or page component.

#### Scenario: Organization schema includes required fields
- **WHEN** the landing page loads
- **THEN** an `Organization` JSON-LD block is present with `name`, `url`, `logo`, and `sameAs` fields populated

#### Scenario: Organization schema social links are correct
- **WHEN** the Organization JSON-LD `sameAs` array is inspected
- **THEN** it includes URLs for Discord, GitHub, LinkedIn, X (Twitter), and YouTube profiles

### Requirement: SoftwareApplication JSON-LD enhancement
The existing `SoftwareApplication` JSON-LD SHALL be enhanced with `offers` (free tier), `operatingSystem`, `applicationCategory`, and `aggregateRating` or `featureList` properties to provide richer context to search engines.

#### Scenario: Enhanced SoftwareApplication schema renders
- **WHEN** the landing page loads
- **THEN** the `SoftwareApplication` JSON-LD includes an `offers` object with `price: "0"` and `priceCurrency: "USD"`, and a `featureList` array derived from the feature modules

### Requirement: BreadcrumbList JSON-LD schema
The landing page SHALL include a `BreadcrumbList` JSON-LD schema representing the navigation path. The breadcrumb MUST contain at least one `ListItem` for the home page.

#### Scenario: BreadcrumbList schema renders for landing page
- **WHEN** the landing page loads
- **THEN** a `BreadcrumbList` JSON-LD block is present with a `Home` item pointing to `https://inferoute.ai/`

### Requirement: Structured data builder module
A `lib/structured-data.ts` module SHALL export typed builder functions for each JSON-LD schema type: `buildFaqSchema`, `buildOrganizationSchema`, `buildSoftwareApplicationSchema`, `buildBreadcrumbSchema`. Each function SHALL accept typed parameters and return a plain object suitable for `JSON.stringify`.

#### Scenario: Builder functions produce valid JSON
- **WHEN** `buildFaqSchema(faqs)` is called with an array of FAQ objects
- **THEN** the returned object has `@context: "https://schema.org"` and `@type: "FAQPage"` with `mainEntity` containing the FAQ items

#### Scenario: Builder functions are type-safe
- **WHEN** a builder function is called with incorrect parameter types
- **THEN** TypeScript compilation fails with a type error
