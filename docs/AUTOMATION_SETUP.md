# Mercer Lane Press automation setup

This site is designed so routine publishing work happens in GitHub and Cloudflare rather than through manual file uploads.

## Intended workflow

1. A new book is prepared in a Codex/ChatGPT task using the final manuscript, final cover image and verified Amazon.com URL.
2. Codex updates the website on a new Git branch and opens a pull request.
3. GitHub builds the Astro site automatically.
4. If Cloudflare secrets are configured, the pull request is automatically deployed to the stable preview Worker:
   `mercer-lane-press-preview.<account-subdomain>.workers.dev`
5. The owner reviews the preview.
6. The owner merges the pull request.
7. The merge to `main` automatically deploys the production Worker:
   `mercer-lane-press.<account-subdomain>.workers.dev`
8. After the custom domain is connected once, future merged updates publish automatically to the live site.

## One-time Cloudflare authentication

GitHub Actions needs two repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Create a Cloudflare API token with the minimum permissions required to edit/deploy Workers for this account. Do not place the token or account ID in source files.

In GitHub, open:

Repository > Settings > Secrets and variables > Actions > New repository secret

Add the two values using the exact names above.

Until those secrets exist, the Cloudflare workflow still builds the site but deliberately skips deployment instead of failing.

## Preview and production

Pull requests deploy to:
- Worker name: `mercer-lane-press-preview`

Pushes to `main` deploy to:
- Worker name: `mercer-lane-press`

The custom domain should only be attached to the production Worker after the preview has been approved.

## Files that control deployment

- `wrangler.jsonc` — Cloudflare static-assets configuration.
- `.github/workflows/deploy-cloudflare.yml` — automatic build/deploy workflow.
- `.github/workflows/build.yml` — independent production-build check.


## After adding or rotating secrets

After adding or rotating either Cloudflare secret, push a commit to the pull-request branch (or re-run the workflow) so GitHub Actions executes again with the new encrypted values.
