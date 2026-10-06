# Small Fleet Maintenance System release handoff

Status: HOLD — NOT FOR COMMERCIAL SALE. Do not merge until publisher approval. Checkout fails closed while FLEET_RELEASED is false.

## Private object

Upload the exact accepted customer ZIP (not the publisher package) to the existing private bucket `mercer-lane-products` under object key `Mercer_Lane_Small_Fleet_Maintenance_System_v1_0.zip`. Do not commit the ZIP to this public repository. Verify the object SHA-256 against the publisher manifest.

## Payment configuration after acceptance

Publisher consideration: $9.99 USD, one-time download. This is not a live price. Publisher must approve price and license before creating the real Stripe Product/Price/Payment Link. No IDs have been invented. Use the existing account's approved tax/payment setup.

Set the real Payment Link return URL to `https://mercerlanepress.com/tools/small-fleet-maintenance-system/download/?session_id={CHECKOUT_SESSION_ID}`. Configure `FLEET_PAYMENT_LINK_ID` in the correct Cloudflare environment and the real checkout URL in `src/data/small-fleet-system.ts`. Reuse the existing restricted server-side Stripe key only if its checkout-session read permissions cover this product. Never commit keys.

Register the required webhook `/api/fleet-stripe-webhook` for `checkout.session.completed` and `checkout.session.async_payment_succeeded`; set `FLEET_STRIPE_WEBHOOK_SECRET` in Cloudflare secrets. The handler verifies signatures and paid live sessions against this product's Payment Link. Delayed payment remains unavailable until actually paid. Orders are recorded idempotently under `orders/small-fleet-maintenance-system/<session>.json` without customer/card details. Test unpaid, wrong-product, duplicate webhook, success and private download paths in an isolated sandbox before live activation; current mock tests do not replace an actual Stripe/R2 end-to-end order.

## Enable only after release audit

Complete desktop Excel and row-extension tests, visual review and package acceptance first. Upload verified ZIP. Test payment/storage end-to-end. Then set `released:true` with the real checkout URL in the product config and `FLEET_RELEASED:"true"` in the approved environment. Update the product page with the actually tested Excel version and real price if displayed. No credentials or payment IDs belong in the customer files.

## Preview

The existing pull-request Cloudflare workflow deploys the preview Worker when repository secrets are available. The PR must remain unmerged. The download page is noindex and excluded from sitemap; the free tool and product page are indexable. The calculator uses the existing consent-aware layout, and its custom events contain no entered values.

## Research boundary

All methodology comes from the provided final manuscript. Calendar form labels follow MDN accessibility guidance: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names . Visible FAQs are supplied without FAQ rich-result markup, following Google’s restricted support: https://developers.google.com/search/blog/2023/08/howto-faq-changes . No traffic, reviews or savings claims are made.
