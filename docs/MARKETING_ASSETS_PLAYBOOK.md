# Mercer Lane Press — design, copy and marketing asset templates
**Established:** 3 November 2026

This playbook operationalises reusable design and copy instructions described in recent video-production research. It does not require Claude, paid APIs, daily automation or new software.

## Brand design specification (`design.md` equivalent)
Before producing a campaign, gather the actual book cover/product art, relevant book pages, website design tokens, previously approved campaign examples, audience and target channel. Record:
- Display sizes/aspect ratios and safe regions, typography hierarchy, whitespace, contrast and accessibility.
- A restrained shared Mercer Lane identity plus a category-specific visual vocabulary (energy cutaways, financial examples, dog behaviour scenes, genealogy record comparisons).
- Source imagery inventory and explicit instructions to use *actual* published book/product assets.
- Clear negative rules: generic AI stock look, misleading mockups, fabricated data/screenshots, incompatible styles and excessively small text.
- Reusable components and motion grammar. Reference current `src/styles/global.css` for the actual site; do not hard-code made-up brand colours.

## Reference-led art direction instead of generic AI design
Maintain a **curated approved-exemplar library** by campaign subject: energy/renovation, contractor/estimating, genealogy, dog training and digital tools. Capture only permitted reference URLs or low-risk screenshots plus a short note about the specific quality worth reusing (hierarchy, contrast, spacing, rhythm, causal animation, visual density). Label whether each reference is an *owned approved Mercer Lane asset* or *third-party inspiration*; do not treat inspiration as licensed source artwork.

Start every design from the actual book/product material and the current website design tokens, not a generic 'make it premium' prompt. For high-impact new creative directions, compare a small number of materially different layouts and refine the strongest; do not multiply versions for their own sake. Inspect both full-size and phone-size views. Explicitly check text within its boundaries and factual labels at every animated state. Preserve the rationale for the chosen design and incorporate approved corrections into the next campaign's brief.

Use [video campaign brief and QA record](templates/VIDEO_CAMPAIGN_BRIEF.md) for every future video handoff. Reuse published approved exemplars as **style references**, while producing a new narrative and original illustrations for each topic.

## Copy specification (`copy.md` equivalent)
Reader-first, useful and natural. Start with one concrete problem or surprising question the source material can resolve. Deliver a specific real explanation before the product CTA; never promise outcomes the book does not establish. Avoid formulaic triple lists, repeated rhetorical patterns, filler, superlatives and mechanical calls to action. Keep concise American English for US-targeted book marketing when appropriate. Human editorial review must preserve scientific, financial and legal/technical accuracy. Maintain correct platform AI disclosures where required; do not use copy editing to evade disclosure.

## Carousel specification (`carousel.md` equivalent)
Typical 5–7 panels, adapted to platform:
1. An accurate high-specificity hook.
2. Why the problem happens / context.
3–5. A clear visual sequence, example, calculation or troubleshooting steps.
6. Key takeaway, limitation or practical checklist.
7. Genuine book/product cover with a restrained verified CTA (omit or vary panel count as needed).
Use one visual idea per panel, readable text sizes, clean diagrams and deliberate continuity between panels. Prefer exportable, editable layered sources when practical. For animated carousels follow the [video standard](VIDEO_PRODUCTION_STANDARD.md) for motion and audio.

## Derivative content workflow
For each validated topic:
- Make one flagship video **or** carousel.
- Where worthwhile, adapt it into a static infographic/pin, a platform-specific caption and an on-site guide or product-page improvement; don't publish redundant or thin content just to hit a quota.
- Use the *existing* actual book/product and supporting pages. Do not add unsupported chapters or features in promotional copy.
- Keep a lightweight campaign record: source title, URL, question answered, assets, platform, copy, approved CTA, UTM source/medium/campaign/content and publication status.
- Check link targets, licensing, accessibility, platform aspect ratios and AI disclosure before seeking owner approval.
- Automated research can create a **draft queue**, not automatic publication. Protect API keys and login credentials; no bulk unreviewed scraping.

## Campaign and outcomes
Reuse existing analytics/consent conventions and known campaign names; check [construction pilot](construction-pilot.md) when working on that campaign. Record:
- Platform impressions / views and retained views where available.
- Website entries and source/campaign attribution where consent and referrer data permit.
- Guide-to-product and product-checkout click events as **intent**, not sales.
- Separately verified Amazon/KDP or Etsy/Stripe sales data, if accessible. Do not attribute all purchases to a video without evidence.
- Reporting windows, unknowns and any omitted or incomplete platform data.

## Hook, landing-page and sales experiments
Before launching a batch, define one specific product question, a single verified destination, and the first success metric that could disprove the idea. Test better opening words and scene-2 proof *before* producing more full-length videos. If early attention is weak, change the hook; if qualified viewers visit but few click the CTA, examine reader fit and the landing page; if checkout clicks occur without verified sales, examine the real transaction path without assuming every click is a buyer.

Record **initial retention** or comparable early-view metrics where a platform provides them, average view duration, website entries, product-page visits, checkout-intent actions and separately verified purchases. Use matched reporting windows and note sample-size, consent and attribution limits. Neither views nor model-generated virality predictions establish revenue. A campaign should not get a second production batch by default if results are unmeasured or if source facts/CTA are unverified.

## Gate for recurring content
Start with human-approved weekly batches and existing zero/low-cost tools. Only consider automated scheduling, external render APIs or additional subscriptions after showing a repeatable content format, stable fact-checking process and a measurable traffic or revenue benefit.
