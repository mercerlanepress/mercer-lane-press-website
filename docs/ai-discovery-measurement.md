# Search and AI discovery measurement

Keep these measures separate. Do not treat impressions, sessions, event counts or purchases as interchangeable.

| Measure | Source | Method |
| --- | --- | --- |
| Search impressions and clicks | Search Console Performance | Same settled 28-day window, Web search, property and country/device filters |
| Relevant queries | Search Console Queries | Review construction/estimating/markup/margin/job-cost terms separately; query totals can omit anonymised searches |
| AI referral sessions | GA4 Traffic acquisition | AI Assistant channel, then session source/medium; channel definitions and missing referrers affect coverage |
| AI-tagged page entries | GA4 custom events | `ai_referred_entry` is a detected external AI arrival on an eligible page, not a unique session |
| Product visits | `funnel_page_entry` | Filter `page_kind=product`; segment `ai_source` to see the tagged onward journey |
| Product intent | `tool_to_product`, `guide_to_product`, `product_checkout_click` | Counts of actions; checkout clicks are not purchases |
| Purchases | Verified checkout records | Reconcile GA4 purchase reports with payment records before claiming sales |

## AI labels

`ai_source`: chatgpt, perplexity, claude, gemini or copilot, from exact known referring hosts or allowlisted `utm_source`. No arbitrary URL or prompt is sent in these custom events. Consent is required before reading attribution or writing session storage. The label persists in the same browser tab through internal navigation and clears on refusal or a different external referrer. It is a journey label, not GA4's session attribution model. Untagged/referrer-free arrivals may be missed; copied tags and internal testing can produce false positives.

In GA4 Admin > Custom definitions, register **AI source** as an event-scoped custom dimension with event parameter `ai_source`. Existing `page_kind`, `page_id` and `destination_id` can be used as event-scoped dimensions if not already registered. Registration is a separate account operation; code deployment does not perform it or backfill past data. Allow reporting processing time. Use an exploration with event name, AI source, page kind and page ID; compare arrivals, product entries and checkout clicks without adding them into one total.

## Public crawler audit

Public robots.txt permits all crawlers and declares the canonical sitemap. OAI-SearchBot controls OpenAI search discovery; GPTBot controls potential model-training crawling independently. Do not change training preferences as part of a search-access task.

Check HTML status, canonical, robots meta, X-Robots-Tag and visible content for sample hubs, guides, calculators and product pages. Verify sitemap coverage. A request carrying a bot user agent does not originate from that vendor's verified IP range and cannot prove real crawler admission.

Cloudflare account verification remains necessary: review AI Crawl Control's OAI-SearchBot policy and Security Events for verified crawler requests. Inspect managed/custom WAF rules, bot controls and challenges. Do not disable general security protections or trust a user-agent string alone. Any exception should be scoped to the verified crawler and public content, leaving API and paid-download protection intact.

Official references:
- https://developers.openai.com/api/docs/bots
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

## Repeated question sample

Use fresh independent conversations, a consistent engine/model, search mode and US market context. Never introduce Mercer Lane, its URLs or desired inclusion into an unbranded test. Record date, exact prompt, engine/model, search enabled, cited URLs, brand mention and explicit product recommendation separately. Save the complete response privately. Run each prompt three times when possible and report denominators. A failed or unavailable run is missing data, not a non-mention.

1. Why does a 30 percent construction markup not give a 30 percent profit margin?
2. How do I forecast the final profit on an unfinished remodeling job?
3. How should a small contractor compare an accepted estimate with actual job costs?
4. What Excel tools can a small US contractor use for estimates and ongoing job costing?
5. How do remaining labour and subcontract costs cause construction profit fade?
6. Should a small contractor use a free calculator or an estimating and job-costing workbook?

Treat this as a small observation sample, not market share or evidence of what all users see. Web search results alone are not AI recommendations. If an independent answer engine cannot be tested, record that limitation instead of composing a favorable answer within a Mercer Lane-informed conversation.
