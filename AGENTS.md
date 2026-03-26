# AGENTS.md

## Cursor Cloud specific instructions

This repo is the **marketing website and documentation** for the CoreRec Python library. The actual library source lives elsewhere (PyPI). This repo has one primary service: a Next.js static site under `web/`.

### Project layout

- `web/` -- Next.js 16 app (App Router, static export via `output: "export"`). This is the main thing you'll be working on.
- `docs/` -- Sphinx / MkDocs source for API docs. Pre-built HTML is already committed at `web/public/docs/`, so you rarely need to rebuild these.
- `inspirations&assets/` -- design reference images, not code.

### Running the web app

All commands run from the `web/` directory:

```
npm run dev    # dev server on :3000
npm run build  # static export to out/
npm run lint   # eslint -- note: pre-built docs JS in public/ will produce lint noise, app source is clean
```

### Gotchas

- **Lint exit code 1**: `npm run lint` exits non-zero because ESLint picks up vendored JS files under `web/public/docs/`. The actual app source (`app/`, `components/`, `lib/`) is clean. Don't panic if CI or lint shows errors from `_static/*.js` files.
- **No database or external services needed.** This is a purely static site -- no API keys, no DB, no Docker required.
- **Static export**: `next.config.ts` sets `output: "export"`, so there's no server-side rendering. `next dev` still works normally for development though.
- **Package manager**: Use **npm** (there's a `package-lock.json`).
