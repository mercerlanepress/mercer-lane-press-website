# Add a new book (beginner instructions)

Nothing in this workflow publishes automatically. A pull request creates a private review step; only the owner should merge it after checking the preview.

## What to prepare

- The final manuscript as PDF, DOCX, Markdown, or text. This is the source of truth for claims.
- The original high-resolution **front** cover as JPG, PNG, or WebP. Do not use a screenshot or thumbnail.
- The exact author or pen name.
- The exact `https://www.amazon.com/...` purchase URL. The workflow will not invent or alter it.
- Optional notes and, for a new author, an optional factual biography.

## The easiest workflow: ask Codex

1. Put the three files into a new folder under `book-intake/incoming/`. Copy `book-intake/example/metadata.yml` there and fill in the author and Amazon URL. Title, subtitle, category, biography, and notes may also be supplied. **Everything under `book-intake/incoming/` is intentionally Git-ignored and must remain local/private; never force-add manuscripts, covers, or intake metadata to Git.**
2. Paste the prompt from `NEW_BOOK_CODEX_PROMPT.md` into Codex.
3. Codex reads the manuscript, completes or improves the generated page copy without unsupported claims, and runs `npm run add-book`.
4. Codex pushes the new `book/<book-slug>` branch and opens a pull request. Existing GitHub Actions build the site and deploy the pull-request branch to the existing Cloudflare preview environment.
5. Open the preview URL reported by the Cloudflare deployment check. Check the cover, title, author, wording, links, and mobile layout. Ask for changes if anything is wrong.
6. **Stop here until you approve it.** After approval, merge the pull request in GitHub. The existing `main` workflow then deploys production exactly as it does today.

## What the command does

`npm run add-book -- book-intake/incoming/FOLDER-NAME` validates the intake and Amazon domain/product path; extracts manuscript text; derives a safe URL slug and restrained topic summaries; checks cover dimensions and aspect ratio; copies the unmodified cover; reuses an author by exact name or adds a neutral author record; updates structured book data; and creates the branch and commit. Reusable Astro routes provide the book page, author page, Books listing, internal links, canonical/social metadata, Book JSON-LD, and sitemap entry.

The command then runs `npm run check`, which builds the site and checks internal links, cover references, image alternative text, purchase URLs, sitemap, robots file, canonical host, and duplicate metadata. `git diff --check` is included.

## Editorial review matters

The command intentionally generates conservative copy. Codex should compare every statement with the manuscript and rewrite it into natural US English. It must not copy long passages or invent credentials, reviews, ratings, awards, bestseller claims, endorsements, testimonials, sales figures, or keyword research.

Codex may add a topic hub and a **small** number of substantial guides only when the manuscript supports them and each guide solves a real, specific problem. This is an editorial decision, not bulk generation. Guides must stand alone, link naturally to the book, use Article schema through the existing layout, and avoid keyword stuffing.

## If the command stops

Read the `ERROR:` line. Common fixes are supplying exactly one file of each kind, installing `pdftotext` or `unzip`, using the original larger cover, correcting `metadata.yml`, or pasting a complete Amazon.com product URL. It is safer for automation to stop than to guess.
