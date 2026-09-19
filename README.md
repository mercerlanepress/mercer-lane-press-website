# Mercer Lane Press website

This repository contains Version 1 of the official [Mercer Lane Press](https://mercerlanepress.com) website. It is a static website built with **Astro**: Astro turns the source files in this repository into ordinary HTML and CSS files that a web host can deliver quickly. There is no database, account system, CMS, or server application.

## Before you start

Install [Node.js](https://nodejs.org/) (the current Long Term Support version is appropriate). Node includes **npm**, the tool that downloads the project's software packages and runs its commands. A terminal is the text-based application where you enter the commands below.

## Important folders

| Location | Purpose |
| --- | --- |
| `src/pages/` | The permanent pages and URL structure |
| `src/content/guides/` | Troubleshooting articles written as Markdown files |
| `src/data/books.ts` | Book facts and purchase links |
| `src/data/authors.ts` | Author names and biographies |
| `src/components/` | Reusable page pieces such as the header, footer, cards, and cover placeholder |
| `src/layouts/` | Shared page and article shells, including search metadata |
| `src/styles/global.css` | All site colors, typography, spacing, and responsive styles |
| `public/images/books/` | Final book-cover image files |
| `dist/` | The finished website created by a build (generated; do not hand-edit) |

## Install and run locally

1. Open a terminal in this repository's main folder.
2. Run `npm install`. This downloads the packages listed in `package.json` into a local `node_modules` folder.
3. Run `npm run dev`.
4. Open the local address printed in the terminal, normally `http://localhost:4321`.
5. Press **Ctrl+C** in the terminal when you want to stop the local site.

Edits are reflected in the local preview. Saving a file is not the same as publishing it.

## Create the finished site

Run:

```sh
npm run build
```

Astro checks and generates the site in `dist/`. A successful build is the version that can be deployed. To inspect that build locally, run `npm run preview` and open the printed address. Never edit `dist/` directly: the next build replaces it.

## Add or update a book

For a new book, use the intake automation rather than editing source files. See [`ADD_A_NEW_BOOK.md`](ADD_A_NEW_BOOK.md), place the manuscript, original cover, and completed metadata template in `book-intake/incoming/`, then run `npm run add-book`. The older manual notes below remain useful when maintaining the existing first book.

1. Open `src/data/books.ts`.
2. Copy an existing book object inside the `books` list.
3. Give every field accurate content and a unique lowercase `slug` with words separated by hyphens.
4. Add the book's page under `src/pages/books/`. The existing 5G page is the complete example to follow.
5. Run the build and open the new page to check it.

The site does not infer claims, reviews, prices, or retailer details. Add only verified information.

### Add the final 5G book cover

Place the supplied WebP cover at exactly:

`public/images/books/5g-home-internet-troubleshooting-manual-cover.webp`

The intended path is already stored in the book record's `cover` field. The page currently uses a designed HTML placeholder so it does not request a missing image. After adding the image, open `src/components/BookCover.astro` and follow the comment there to replace the placeholder with the image element. Preserve meaningful alternative text. For another book, put its cover in the same folder and enter that `/images/books/...` path in its data record.

### Add the future Amazon.com purchase URL

Open `src/data/books.ts`, find the 5G book, and paste the complete verified URL between the quotes here:

```ts
purchaseUrl: ''
```

Until that value exists, the page shows “Purchase link coming soon” and creates no dead Amazon link. Do not use a guessed URL.

## Add an author

1. Add a new object to `src/data/authors.ts` with a unique `slug`, factual `name`, and restrained `bio`.
2. Add an author page under `src/pages/authors/`, following `mercer-lane.astro` as an example.
3. Link the relevant book record to the same author slug.
4. Build and verify both the authors index and the author page.

## Add a troubleshooting article

1. Copy a file in `src/content/guides/` and rename it with a short, descriptive, hyphenated filename. That filename becomes the final part of its URL.
2. Update every field between the `---` lines: use a unique title and description, a real publication date, a concise card summary, a unique order number, and existing article filenames in `related` (without `.md`).
3. Replace the article body. Use one `#` heading only through the page title supplied by the layout; start article sections with `##`.
4. Run the build. The shared route automatically creates the article page and adds it to the hub and sitemap.

Astro validates article data using `src/content.config.ts`. This helps catch missing or incorrectly formatted fields.

## Add a topic hub

A new subject needs a hub page in `src/pages/`, a content collection (or an extension of the current collection) in `src/content.config.ts`, and routes/templates appropriate to that subject. This is a structural change; ask a developer to follow the existing 5G hub pattern rather than duplicating it without updating links and metadata.

## Automated publishing and Cloudflare deployment

The normal workflow is now GitHub-first rather than manual ZIP uploads.

- Pull requests build automatically.
- Once the two Cloudflare repository secrets are configured, pull requests deploy to a stable preview Worker.
- Merges to `main` deploy the production Worker automatically.
- The custom domain only needs to be connected once.

See `docs/AUTOMATION_SETUP.md` for the one-time Cloudflare/GitHub setup.

For future books, use the reusable task in `docs/ADD_BOOK_WITH_CODEX.md`. The intended owner workflow is: provide the final manuscript, cover and verified Amazon.com URL; review the generated preview; merge if approved.

No credentials belong in this repository. Cloudflare credentials must be stored only as encrypted GitHub Actions secrets.

## Files not to edit casually

- Do not edit `dist/`, `node_modules/`, or `.astro/`; they are generated.
- Do not edit `package-lock.json` by hand; npm maintains it.
- Change `astro.config.mjs`, `src/content.config.ts`, layouts, or shared components only when changing site-wide behavior.
- Keep the canonical domain in `astro.config.mjs` set to `https://mercerlanepress.com`.
- Update `src/pages/privacy/index.astro` before adding analytics, cookies, advertising, forms, or embedded third-party services.

## Pre-publish checklist

Run `npm run build`, inspect important pages at desktop and mobile widths, test internal links, and review factual claims. Confirm that any new retailer URL is real, images have useful alternative text, canonical URLs use the official domain, and the generated `dist/sitemap.xml` plus `dist/robots.txt` exist.
