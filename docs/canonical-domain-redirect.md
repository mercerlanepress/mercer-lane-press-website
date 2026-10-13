# Canonical public-page routing

The preferred public website origin is `https://mercerlanepress.com`.
Keep the canonical declarations in `BaseLayout.astro` and `astro.config.mjs` aligned with that origin.

Production routing changes require owner approval. This note does not change the Cloudflare configuration.

The checked-in deployment uses a Cloudflare Worker with static assets and custom domains for apex and www. Confirm the actual serving resource and zone rules before changing configuration; do not assume a Pages `_redirects` file will apply.

## Proposed public-page rule

Use a Cloudflare zone Single Redirect named `Canonical public pages to HTTPS apex`:

```text
(http.host in {"mercerlanepress.com" "www.mercerlanepress.com"})
and (http.host eq "www.mercerlanepress.com" or not ssl)
and (http.request.method in {"GET" "HEAD"})
and not starts_with(http.request.uri.path, "/api/")
```

Dynamic destination: `concat("https://mercerlanepress.com", http.request.uri.path)`.
Status: **301**. **Preserve query string: enabled**.

Review existing rule ordering and the proxy/domain configuration first. The condition does not match preferred HTTPS apex requests. API endpoints and other request methods remain outside this public-page rule.

Before enabling, test homepage and representative guide, book and tool paths from HTTP apex, HTTP www and HTTPS www. Each canonical trailing-slash path should permanently redirect to the identical HTTPS apex path, retain its query string, and end at 200 without loops. Verify product access and download-return navigation. Existing slashless normalization can add another hop; do not add a global rule that treats file and API paths as directories.

After approval and deployment, verify the actual response headers and Google-selected canonicals. Expected alternate-page exclusions need no attempt to force duplicate URLs into the index.

References: [Cloudflare Single Redirect settings](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/settings/) and [www-to-root example](https://developers.cloudflare.com/rules/url-forwarding/examples/redirect-www-to-root/).
