# Book intake area

Each book gets **one folder** inside `incoming/`. That folder must contain:

1. one manuscript: PDF, DOCX, Markdown, or plain text;
2. one original, high-resolution front cover: JPG, PNG, or WebP; and
3. one `metadata.yml`, copied from [`example/metadata.yml`](example/metadata.yml).

Do not add a back cover, interior images, or multiple manuscript versions to the same folder. The automation deliberately stops when it cannot tell which file is authoritative. Folder and file names may be anything; file extensions identify them.

The manuscript is the authority for book claims. Metadata supplies identity and commerce facts. `optionalNotes` is for instructions to Codex or the reviewer and is not placed on the public page.

Run `npm run add-book -- book-intake/incoming/my-folder`. When exactly one folder is present in `incoming`, `npm run add-book` is enough. The command validates the inputs, creates a `book/<slug>` branch from `main`, copies the original cover without recompressing it, updates the catalog and author data, runs the full check, and commits the result. It never pushes, opens, or merges a pull request.

PDF processing requires the common free `pdftotext` command; DOCX processing requires `unzip`. Markdown and text need no extra utility. If either utility is unavailable, the script stops with a clear message rather than silently generating copy from incomplete text.

## Cover rules

The minimum accepted size is 600×900 pixels. A height of at least 1600 pixels is recommended and smaller accepted files produce a warning. An unusual aspect ratio also produces a warning. The original bytes are copied—there is no lossy resize or aggressive compression—and site CSS displays covers with `width: 100%` and `height: auto`.
