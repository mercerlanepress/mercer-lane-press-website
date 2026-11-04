# Landscape estimating conversion pilot — 4 November 2026

**Status:** Review branch only; no live deployment, Etsy listing edit, price change, paid tool or social post.  
**Public page targeted:** `/tools/landscape-estimating-job-costing-system/`  
**Offer configuration:** `src/data/landscape-system.ts` (GBP £2.99, Etsy listing `4591278053`, version 1.1). This is the **website's advertised offer**, not a verified live checkout transaction or a guarantee Etsy will show the same price in every buyer's country.

## Why change the page
The page already had verified fictional Demo workbook previews, product scope, requirements, price, Etsy destination and free checklist. Its free option appeared in a paragraph while the paid workflow was elsewhere. The goal is to make an honest choice obvious **before** a visitor scrolls through a long technical explanation.

The new early comparison uses two clearly different customer tasks:
- **Free:** a six-pass pre-bid review, not a price calculator or job database.
- **Paid:** a 27-sheet Excel desktop estimating → quotation → cost logging → after-closeout profit workflow, with the existing Etsy checkout.

The comparison links to the actual product screenshots and retains limitations: Excel desktop is purchased separately, Windows Excel desktop 16.0 is the tested environment, no subscription, and the companion book is sold separately. No claims of guaranteed savings, increased profit, 'best seller' status or customer results were added.

## Technical change and checks
- Uses existing `grid-2`, `card` and button classes; no new CSS dependency or tracking vendor.
- Uses `product.checkoutUrl` and `product.priceLabel` from the single product data module, which also feeds Product JSON-LD.
- No checkout URL or order fulfilment changes.
- New `scripts/check-landscape-conversion.mjs` is included in `npm run check`; it checks shared offer data, active purchase buttons, free option, real screenshot asset existence, supported language and compliance boundaries.
- The Astro build and site checks must pass in PR CI. Before merge, inspect the Cloudflare preview at 375px and desktop, tap all links, and verify the actual Etsy page and download delivery separately.

## Measured experiment — do not assert a lift without data
1. **Baseline:** settled previous 28 days; collect Search Console page impressions/clicks, consented GA4 product-page visits and outgoing Etsy link clicks where currently tracked. Check Etsy actual listing traffic and completed orders directly. A missing metric is **unknown**, not zero.
2. **After owner-approved merge:** wait for a comparable settled 28-day period. Compare same sources, page and geography. Note other video/social/price changes.
3. **Interpretation:** more qualified product visits without additional Etsy orders means the offer still needs checking, not that sales increased. Outbound clicks are intent only and may be incompletely tracked. Never assign all Etsy sales to this page.
4. **Next action:** if visitors choose free checklist but few engage with product views, improve comparison imagery or task copy; if page-to-Etsy clicks occur but orders are low, examine the actual Etsy listing, buyer compatibility and checkout friction; if traffic is insufficient, mark result inconclusive.

## Independent release checklist
- [ ] Preview visually checked at phone width and desktop width; no overflow or visually cramped buttons.
- [ ] Actual screenshot images correspond to current product, not invented UI.
- [ ] Etsy destination, product price/currency and product description independently verified at review time.
- [ ] Free checklist and companion book links resolve, and each appears as a separate product/option.
- [ ] `npm run check` passes; `npm run build` passes; CI logs inspected.
- [ ] No GDPR/analytics consent regressions.
- [ ] Owner authorises merge; deployment, if any, subsequently confirmed.
- [ ] Baseline and follow-up measurements logged before claiming commercial success.

**Approver:** pending. **Verified sales impact:** unknown until deployment and a valid observation period.
