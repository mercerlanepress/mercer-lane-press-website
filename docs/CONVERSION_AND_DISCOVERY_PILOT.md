# Construction Toolkit PRO conversion and discovery pilot

**Started:** 3 November 2026  
**Status:** Website changes prepared for review. No new external posts, paid tools or price changes.  
**Product page:** `/tools/construction-estimating-system-pro/`  
**Primary checkout:** Stripe Managed Payments link already used by the website. The page and Product JSON-LD both identify **US$19.99 plus applicable tax**. Do not infer Etsy pricing from this offer or replace the Stripe link without checking payment and delivery configuration.

## Why this pilot

The product page already contained actual v3.2 screenshots, a full contents inventory, Excel desktop requirements, support/refund links, the working checkout URL and a demo-to-download pathway. The November transcript lessons are best applied by **making the offer easier to understand**, not by inventing reviews, adding arbitrary keyword repetitions or creating a new site.

This pilot adds:
- A quick **paid vs free** decision section for contractors who only need a single calculation.
- A **fictional forecast example** linked to the existing detailed construction job-costing guide. The figures ($36,000 approved revenue; $19,700 incurred direct cost; $10,000 remaining direct cost; $6,300 forecast direct gross profit) are explicitly before company overhead. They are not claimed as actual customer performance or a screenshot of workbook output.
- A build-time regression test to catch checkout-link/schema mismatches, missing local destinations, lost compatibility notes and arithmetic drift.

## Four-stage measurement and optimisation process

### 1. Baseline (before publishing)
- Record the page's current title, meta description, CTA URL, screenshot and price.
- Collect the latest **settled** Search Console Web search impressions/clicks/queries for the page and its construction hub; report the period and page-level scope. Separately collect consented GA4 product-page visits and `product_checkout_click` events. Do **not** treat these events as payments.
- Obtain confirmed orders/refunds from Stripe reports for the matching period. Do not infer orders from KDP, Etsy or analytics events.
- Note data gaps; a missing baseline is not a zero.

**Access limitation (3 Nov 2026):** GSC Wizard refused the account request because its trial or subscription has ended. No new Search Console baseline was retrieved or invented in this pilot. Existing website tracking remains as-is. The user can review Search Console directly or restore connector access if they want a connected report.

### 2. Check buyer intent and the page
- Inspect 2–3 genuinely relevant competing product pages, not simply pages with high keyword density. Record the intended buyer, actual contents, screenshots, compatibility caveats, refund information and where a clear offer appears.
- Review common buyer questions from first-party enquiries, consented analytics and the real product. Never manufacture testimonials, reviews, discounts, purchase scarcity or buyer objections.
- Use only verified actual product features. Treat the paid offer and free calculators as distinct user needs.

### 3. Promote one problem, not a generic product
- Create **one** original 27–35-second explanatory video using the actual toolkit screenshot and an independently checked forecast or estimating example, following `docs/VIDEO_PRODUCTION_STANDARD.md`.
- Provide a genuine, currently valid destination URL; use the approved construction pilot campaign tags in `docs/construction-pilot.md` when the asset matches that campaign. Do not create a new tag ad hoc and assume analytics accepts it.
- Inspect rendered text bounds on a phone, scene continuity, audio and the final CTA; correct the three worst issues. Obtain publication approval before posting.

### 4. Compare matched windows
- After publication and search recrawl, compare a settled 28-day window with a similarly sized previous settled window, annotating holidays, promotions and changes to offer/price.
- Report **search impressions, clicks, organic sessions, product-page visits, checkout-click events and verified orders separately**. Do not divide platform views by all Stripe orders and call it a video conversion rate.
- If the measured traffic is too small to assess conversion, say so. Prefer another useful product-page experiment over multiplying thin SEO articles.

## Success criteria and stop rules
- Technical: `npm run check` and CI pass; purchase destination and download flow remain unchanged; page remains readable at 375px and desktop; all structured facts agree with the rendered offer.
- Editorial: exact source screenshot, honest software support and clear distinction between hypothetical calculations and product features.
- Commercial: improvement is evaluated by qualified traffic and **confirmed purchases/earnings** wherever accessible, not AI rankings, social views or clicks alone.
- Stop: incorrect prices, claims, accessibility failures, broken checkout, missing files or regression test failure. No new paid subscriptions, spammy backlink purchases, scraped competitor testimonials or automatic unreviewed posts.

## Broader reuse
- KDP: build genuinely distinct specialist follow-on books only when there is independent demand evidence; keep the existing final PDF/cover/AI disclosure audits; avoid volume for its own sake.
- SEO and AI discovery: connect a product hub to genuinely helpful problem guides with natural descriptive internal links and honest structured data. Avoid keyword stuffing or doorway page factories. Measure organic search, direct AI referrals and sampled AI mentions as separate evidence streams.
- Coding: use written acceptance criteria, small changes, regression tests and a PR preview; assess open-source dependencies for security, licences and cost before installation.
