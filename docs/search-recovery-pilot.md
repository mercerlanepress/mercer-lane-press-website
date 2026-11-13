# Search visibility recovery pilot — 13 November 2026

## Decision and limits

Improve three existing guides for readers who need to diagnose a specific problem. Keep their established URLs, titles, book destinations and consent behaviour. This is a content improvement experiment, not a confirmed repair to Google's ranking systems or evidence that recovery has happened. Missing citations alone do not prove a ranking cause.

Public checks on 13 November found all 323 current sitemap URLs returning HTTP 200, a single self-referencing HTTPS-apex canonical, one H1 and no robots-meta or X-Robots-Tag indexing block. Each sitemap page had an incoming link from another sitemap page. Sample HTTP-apex and HTTPS-www guide URLs redirected permanently to HTTPS apex. These are point-in-time checks from this environment; they do not prove universal availability or verified Googlebot access. Search Console's live inspection separately fetched the 5G disconnection page successfully and allowed indexing. Private analytics baselines and detailed inspection notes remain outside this public repository.

## Reader tasks and changes

| Existing page | Reader task | Added value |
| --- | --- | --- |
| `/5g-home-internet/keeps-disconnecting/` | Determine whether an interruption affects the cellular connection, local Wi-Fi or one device | Provider/model distinctions, original illustrative diagnostic case, explicit limits on the inference and direct support references |
| `/5g-home-internet/slow-at-night/` | Make a fair daytime/evening comparison before blaming congestion or buying hardware | Copyable comparison sheet, units, controlled-test example and provider source |
| `/underfloor-heating-owners/underfloor-heating-thermostat-settings/` | Understand the active sensor/mode before changing a thermostat | Named manufacturer examples, room-versus-floor target distinction and a support handover record |

Examples are labelled illustrative; they are not customer cases or measured product tests. No professional credentials, device ownership, endorsements or success rates are claimed. Manufacturer-specific instructions are bounded to the named product. Protected installer settings and electrical work remain outside the owner checks.

The guides keep the existing verified book destinations: *The 5G Home Internet Troubleshooting Manual* and *Living With Underfloor Heating*. The free article must resolve the initial task without payment; the optional books provide the fuller workflow and records already described on their book pages. This change adds no product feature, price or checkout claim.

## Source record

All sources were opened and checked on 13 November 2026. New statements are paraphrased; examples and worksheets are original editorial material.

- T-Mobile Home Internet troubleshooting: https://www.t-mobile.com/support/home-internet/customer-support.html
- T-Mobile network speeds: https://www.t-mobile.com/support/home-internet/t-mobile-gateway/network-speed
- Verizon 5G Home Modem connection troubleshooting: https://www.verizon.com/support/knowledge-base-309019/
- Heatmiser neoStat preheat: https://faq.heatmiser.com/hc/en-us/articles/360001725419-Do-the-neoStat-s-learn-the-heat-up-time-in-my-home-Preheat
- Heatmiser neoStat WiFi: https://www.heatmiser.com/neostat-wifi/
- Warmup Tempo sensor restrictions: https://www.warmup.co.uk/underfloor-heating/questions/programming/cant-program-tempo-read-air-temperature

## Release and measurement

Build and run the existing full site checks; inspect all three rendered pages at desktop and phone widths. Verify source links, worksheet usability, original publication dates, the new visible update dates, Article `dateModified`, canonical URLs and book links. Only these revised guides should receive an update date. Owner reviews the preview before merge, following AGENTS.md.

After an approved production deployment, inspect the revised production URLs and request recrawling if appropriate. Do not repeatedly resubmit already-indexed pages or validate expected alternate canonical exclusions as errors.

The single reader behaviour being tested is completion of a useful diagnostic comparison before choosing a next step. Observe consented guide-to-book clicks as a secondary intent signal; those clicks are not purchases. The site does not currently measure worksheet completion, so do not claim an engagement outcome from the worksheet's existence.

Compare the first settled 28 days after Google recrawls each revision with the preceding 28 days, using the same Search Console Web search filters. Record impressions, clicks, relevant query visibility and per-page position, alongside the unedited `/5g-home-internet/weak-signal/` and `/5g-home-internet/gateway-placement/` guides as observational comparisons. Record crawl dates and deployment date separately. A site-wide Google update, low counts, changing query mix and concurrent site changes can confound the comparison; it is not a controlled SEO split test.

Do not expand this pilot into a bulk rewrite on the strength of a few impressions. If visibility does not improve over that observation period, revisit site-wide content differentiation and original evidence, plus verified crawler/security logs if available. A working build or new source links cannot guarantee ranking recovery.
