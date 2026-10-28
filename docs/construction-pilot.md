# Construction calculator pilot

Prepared 28 October 2026. This change supports the construction content pilot; it does not publish social posts or recorded videos.

The markup calculator's existing product/guide handoff now sits immediately below the calculator, before the long explanation and FAQs. It links to the existing guide and toolkit page, makes the Excel desktop requirement visible and keeps pricing on the product page. The calculator's arithmetic and form behaviour are unchanged.

## Campaign attribution

The separate pilot asset pack uses `utm_campaign=construction_pilot_2026_10` with these exact content IDs:

- Pinterest: `pin01` through `pin06`.
- YouTube: `video01_markup`, `video01_product`, `video02_profit`, `video02_product`, `video03_remaining`, `video03_product`.
- LinkedIn: `post01_markup`, `post02_remaining`.

Use `utm_source=pinterest`, `youtube` or `linkedin` as appropriate. The pack uses `organic_social` or `organic_video` as the medium; the custom funnel attribution reads only the allowlisted source, campaign and content, not arbitrary parameters. Internal website links remain untagged.

Existing `construction_202610` and `fleet_202610` campaign tags remain supported. Source/campaign/content combinations are validated both on entry and when restoring session attribution. The new pilot's IDs cannot be recorded as the older campaigns, or vice versa.

The existing analytics-consent gate applies. With consent denied or unavailable, the funnel script does not record events or store campaign attribution. Revoking consent clears that attribution. No calculator amounts, personal query parameters or additional analytics vendors are introduced.

## Existing event names to use in reporting

- `tool_entry` and `campaign_entry`: eligible tool visits and tagged arrivals.
- `tool_calculation`: explicit valid markup/margin submissions; the calculator's initial example is not counted.
- `tool_to_product`: the calculator's toolkit link is clicked.
- `product_checkout_click`: checkout intent, not a verified purchase.

These are event counts, not automatically unique users or sessions. Compare matched windows using settled source data. Confirm actual purchases separately through payment records. A PR build cannot verify production analytics delivery or purchase attribution, and no live baseline was retrieved for this pilot.

## Review and release

Run `npm run check`, inspect the generated page at desktop and mobile widths, exercise both percentage modes and reset, and check the guide and toolkit destinations. Review the PR and its hosted preview before approving a production merge.
