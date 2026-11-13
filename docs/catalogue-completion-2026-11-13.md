# Practical catalogue completion — 13 November 2026

## Buyer task and source scope

Make each already-published practical title discoverable in the subject catalogue, linked author page and sitemap, with a genuine cover and the correct paperback destination. The source comparison covered both KDP bookshelf pages at 50 titles per page (65 title groups), checked against current main at `38729e2` and existing custom book pages as well as shared book data.

Title, subtitle, author and live paperback ASIN were verified in the owner's authenticated KDP bookshelf. Before public submission, all 15 source descriptions were also independently read from the corresponding public Amazon.com paperback pages (`https://www.amazon.com/dp/<ASIN>`). Each public description matched its KDP source after whitespace normalization. The page summaries therefore use already-public product information; no private manuscript material is being disclosed. Front covers were retrieved from the corresponding public Amazon paperback listing at the image resolution exposed by that listing (1000-pixel wide images or larger). No unpublished manuscripts, account data, signed asset URLs or credentials are included here.

Only supported book contents are described. Detailed technical tutorials and new topic clusters were not added from marketing descriptions alone. Existing related guides are linked where relevant. No price, ratings, sales claim or entitlement to a separate downloadable product is promised.

## Added pages and verified paperback destinations

| Book route under `/books/` | Author | Paperback ASIN |
| --- | --- | --- |
| small-job-pricing-when-the-scope-is-unknown | Warren Holtby | B0HR9M98XG |
| performance-reviews-that-actually-help | Mercer Lane | B0HQGC2Y94 |
| painting-contractor-estimating-and-pricing | Warren Holtby | B0HQ4GMPQR |
| home-renovation-budget-and-builder-quote-comparison-workbook | Gareth Fenwick | B0HPRZ2XQD |
| home-ev-charger-installed-now-what | Gareth Fenwick | B0HNXLHW29 |
| the-home-battery-owners-operating-manual | Gareth Fenwick | B0HNQXN7C9 |
| you-won-the-federal-grant-now-what | Cameron Northfield | B0HH8H5N3Z |
| construction-estimating-field-workbook | Warren Holtby | B0HH3RB7ZS |
| life-after-work-for-men | Richard Tolland | B0HDTY11GK |
| the-iep-caseload-control-system | Mercer Lane | B0HFN7ZB3G |
| the-moving-home-operating-workbook | James Carter | B0HFN2ZJMR |
| the-bookbinding-fix-it-manual | Edward Hale | B0HFKCYDW4 |
| the-homeschool-year-record | Mercer Lane | B0HFK2S84N |
| the-separated-dad-operating-manual | Nathan Calder | B0HFBKGKTW |
| the-aging-parent-admin-system | Rebecca Tolland | B0HDNGY32G |

UK homeowner titles use Amazon.co.uk; the remaining titles use Amazon.com. Only live paperback editions are linked, including where an ebook is unavailable. Coloring books, trivia, the devotional and plain workout logs were excluded. Practical workbooks and organizational planners were included.

## Integration and acceptance criteria

- 15 distinct pages use the existing book layout and brand styles.
- Each has the verified title, subtitle, author, local genuine cover, retailer link, reader fit, problems, contents, outcomes and scope limits.
- All new books appear once in the appropriate catalogue subject and on their author's page.
- Four restrained author entries are added; no qualifications or biography details are inferred.
- Mercer Lane is selected by author slug rather than array position.
- Covers have checked intrinsic dimensions, descriptive alt text and preserved proportions.
- Book schema includes the cover and retailer identity; existing canonicals and breadcrumb schema apply.
- All 15 routes and four new author routes appear in the sitemap.
- Existing homepage selections remain unchanged.
- Full production checks must pass before review. Owner-approved merge remains the publication gate.

## Free versus paid and measurement

The pages describe paid paperback books. Related free guides answer narrower questions and are not the book or a promise of its companion files. The estimating field workbook is identified as a separately sold companion to the main book.

Behavior to measure: whether visitors to the added book pages follow the verified Amazon purchase links. Existing consent and retailer click handling are reused. After deployment, compare the first settled 28 days with the preceding 28 days for catalogue entries and relevant author/subject traffic; new book routes have no prior-period baseline. Report page visits and retailer clicks separately from KDP sales. Do not infer attributed purchases from outbound clicks. No new tracking is introduced.

## Validation results

- `npm run check` passed, including the 347-page production build, all internal links, image metadata, existing calculator and delivery checks, analytics consent, and sitemap/canonical checks.
- A separate inventory pass verified all 15 source identities, page headings, cover paths, retailer identifiers, catalogue-category membership, author listings, Book schema and sitemap entries. Catalogue total: 54 practical titles.
- All 15 front covers were visually inspected together and matched their corresponding titles and authors.
- All 15 public Amazon descriptions matched the KDP source text. No private account information, unpublished text or signed URLs are included in the commit.
- Desktop/mobile browser review is pending the Cloudflare preview.
