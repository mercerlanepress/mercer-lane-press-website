# Add a book with Codex

Use this as the standard task for every future Mercer Lane Press title.

## Inputs to provide

Attach or supply:
1. Final manuscript PDF.
2. Final front-cover JPG, PNG or WebP.
3. Verified Amazon.com product URL.
4. Author name/pen name if it is not unambiguous from the manuscript.

Do not upload unpublished manuscripts into this public GitHub repository. The manuscript is source material for the task only.

## Master instruction

```text
Publish this new book to the Mercer Lane Press website using the attached final manuscript, attached final cover image, and the verified Amazon.com URL I provide.

Work only in mercerlanepress/mercer-lane-press-website.

WORKFLOW
- Start from the current main branch.
- Create a new branch named codex/add-book-<short-slug>.
- Do not commit directly to main.
- Do not merge anything.
- Use the manuscript as the source of truth for book facts and subject matter.
- Do not invent credentials, endorsements, reviews, ratings, awards, bestseller claims, sales figures, prices, or retailer details.
- Use natural American English for customer-facing copy.
- Run the full production build and fix all build errors.
- Open a pull request when complete.

BOOK PAGE
- Add the title, subtitle, author, publisher, description, cover path and verified Amazon.com URL to the site's structured book data.
- Upload the supplied cover to public/images/books/ using a stable lowercase hyphenated filename.
- Mark the cover as ready so the real image is displayed.
- Create or update the book page using the existing Mercer Lane Press visual system.
- Make the page useful and sales-oriented without exaggerated claims.
- Include who the book is for, the problems it addresses, the core system/framework where supported by the manuscript, what readers will learn, relevant disclaimers, and related free guides.

AUTHOR
- Reuse the existing author page if the pen name already exists.
- Otherwise create a restrained author entry/page.
- Do not invent biography details that were not supplied.

SEO / CONTENT CLUSTER
- Identify the strongest genuinely useful problem-solving search intents supported by the manuscript.
- Create a focused topic hub when appropriate.
- Create 3-6 substantial free guides where the manuscript supports them.
- Do not create thin, repetitive or keyword-stuffed pages.
- Each guide should answer the user's problem early, give an ordered procedure, explain what observations mean, and link naturally to the book and related guides.
- Add internal links, canonical URLs, metadata, Article/Book/Breadcrumb structured data where appropriate, sitemap coverage, and descriptive URLs.
- Do not fabricate keyword volumes or ranking claims.

QUALITY CONTROL
- Check desktop and mobile layouts.
- Check the real cover does not overflow or distort.
- Check navigation.
- Check all internal links.
- Check the Amazon URL is the exact supplied URL.
- Check no manuscript PDF was added to the repository.
- Run npm install and npm run build.
- Let the existing GitHub workflows create the Cloudflare preview if deployment secrets are configured.

FINAL RESPONSE
Report:
- branch name
- pull request
- pages/routes created or changed
- number of SEO guides created
- build result
- preview deployment result if available
- anything requiring owner review

Stop before merge. The owner must review the preview and approve the pull request.
```

## Owner approval

Normal future publishing should require only one decision from the owner:

**Does the preview look correct?**

If yes, merge the pull request. The production deployment then happens automatically.
