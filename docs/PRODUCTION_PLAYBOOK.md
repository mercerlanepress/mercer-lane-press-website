# Mercer Lane Press — production playbook
**Established:** 3 November 2026  
**Purpose:** Reusable operating standard for books, digital products, site content and marketing assets. This documents working practices; it does not deploy anything or bypass existing owner approval.

## Operating principles
1. **Reader problem first.** Identify a specific job-to-be-done and the evidence that people need the solution. For new book niches, do not equate an assumed Amazon Best Sellers Rank with verified sales; distinguish hypotheses from measured demand.
2. **Source first.** Use the actual final manuscript, official product screenshots, approved cover, real price and verified purchase URL. For external information, record sources and check dates. Unknown is not permission to improvise.
3. **Specific, useful, original.** Substantial explanation, worked examples and practical tools beat generic AI prose, filler, novelty effects or recycled content.
4. **Design as a system.** Reuse approved typography, spacing, visual hierarchy, animation rules and editorial tone. Adapt the illustration language to the reader and subject rather than forcing one generic look across all pen names.
5. **Quality before volume.** Run explicit acceptance tests, inspect the rendered result and correct the weakest defects. A numerical self-score is a heuristic, not evidence of quality.
6. **Evidence-based marketing.** Track exposure, traffic, genuine product interest and verified sales separately. Don't call a YouTube view or outbound click a book sale.
7. **Minimal cost and controlled change.** Reuse the current ChatGPT, static website and local rendering tools where practical. Do not add paid subscriptions or automatically post without an assessed benefit and owner approval.

## Standard workflow for every project

### 1. Brief and source inventory
Record: product/title and pen name, specific reader, promised outcome and limits, supplied source files, source provenance, preferred channel, destination URL, creative examples, budget and required output format. Identify missing inputs that materially affect factual accuracy; do not invent them.

### 2. Research and plan
For new titles, validate commercial demand and the reader's unmet problem using current evidence, not sales guarantees. For marketing, choose a specific real question from the published book. For digital tools, inspect existing behaviour and write acceptance criteria before coding. Clearly mark external claims that require fact-checking.

### 3. Create against shared standards
Use [marketing assets playbook](MARKETING_ASSETS_PLAYBOOK.md) for brand, copy, carousel and channel templates and [video production standard](VIDEO_PRODUCTION_STANDARD.md) for animated MP4s. Reuse the current website design tokens instead of generating a second incompatible design language.

Subject treatments:
- **Gareth Fenwick / home energy and renovation:** grounded homeowner scenarios, restrained technical diagrams, correct regional distinctions and conservative claims.
- **Warren Holtby / estimating and trades:** annotated numbers, realistic job workflows, checked arithmetic, clear spreadsheet illustrations and practical worked cases.
- **Sophie Ardenwood / dogs:** calm, humane illustrations; distinguish training guidance from clinical or veterinary claims.
- **Mercer Lane / technology and small business:** clean task-focused UI, clear examples, no invented capabilities.
- **Genealogy and other categories:** reader-centred narrative and authentic-looking but clearly illustrative documents; do not present fabricated records as actual evidence.

### 4. Independent quality checks
**Manuscripts / KDP:** follow the existing final audit and current platform requirements; check accuracy, structure, repetitive text, legibility, page breaks, diagrams, tables, cover, metadata and required AI-generation disclosure. Do not equate a copy-edit with compliance. Do not alter factual measurements or calculations just to sound more natural.

**Website:** use established [book intake](ADD_BOOK_WITH_CODEX.md), verify the actual linked product, run `npm run build` (and relevant checks), inspect desktop/mobile, internal links, structured data, metadata, canonical, sitemap, image descriptions and privacy implications. Keep unpublished manuscripts out of public commits.

**Digital products / code:** study reference features without reproducing proprietary assets; implement small testable slices; check formulas with independent worked cases, edge cases, usability, data handling, backup/export where relevant and honest product claims. Keep a `progress.md` (or equivalent) for multi-step development.

**Marketing assets:** review hook, reader utility, factual grounding, fidelity of cover/product, mobile legibility, sound, licensing, accessibility, verified CTA and appropriate platform crop. Do not publish unapproved automation outputs.

### 5. Critique, revise, approve
For video, inspect contact sheets and a complete sound-on playback; for documents and carousels inspect every page/panel at realistic display size; for software test real user journeys. Identify the three most consequential defects, fix them and repeat QA. Escalate unresolved critical defects; never quietly pass a failing deliverable.

### 6. Publish and measure
Prepare platform-specific copy and verified outbound links. Owner approves publication and any spend. Reuse existing campaign naming and measurement conventions where possible; see [AI discovery measurement](ai-discovery-measurement.md) and [construction pilot](construction-pilot.md). Track channel impressions, retained views, landing-page visits, product clicks, checkout intent and **verified orders** as separate measures, with dates and uncertainty.

## Definition of done
- Requested source/output files actually exist and are accessible; editable source is retained where appropriate.
- Every factual claim and buyer-facing URL is supported, or clearly flagged as unverified.
- Visual, audio and technical QA have been performed on the **rendered** deliverable, with corrections completed or disclosed.
- No unapproved website publication, platform posting, product listing, purchase or paid service signup.
- Final handoff identifies artifacts, tests, remaining caveats and the next measurable outcome.

## Weekly marketing rhythm (target: approx. four hours)
Prefer one researched theme with multiple useful derivatives over rushed daily automation. Allocate roughly 30 minutes to choose and verify a topic, 90–120 minutes to create and QA a flagship video or carousel, 30–60 minutes to prepare platform variants and approvals, and remaining time to assess prior performance. Adjust based on actual production effort.

## Tool adoption gate
Open-source does not automatically mean free-to-operate, secure or commercially usable. Before installing a new framework/model, verify its actual repository, licence, active maintenance, hardware/runtime requirements, audio/asset rights, API charges, credential handling and measurable benefit over the current workflow. Do not scrape websites or platforms contrary to their terms.
