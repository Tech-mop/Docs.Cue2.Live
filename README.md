# Cue2 Documentation

Official documentation for [Cue2](https://www.cue2.live/), built with [Docusaurus](https://docusaurus.io/).

## Local development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### Search

Offline full-text search uses `@easyops-cn/docusaurus-search-local`. The search **index is generated only during a production build**, not during `npm start` (dev mode shows a warning by design).

| Goal | Command |
|------|---------|
| Edit docs with hot reload | `npm start` — search index not available |
| Test search locally | `npm run preview` (runs `build` then `serve`) |
| Production / GitHub Pages | Workflow already runs `npm run build` — index is included in `./build` |

```bash
npm run build     # production build + search index (fails on broken links)
npm run serve     # serve ./build
npm run preview   # build + serve (use this to try search)
npm run clear     # clear Docusaurus cache
```

## Content layout

| Path | Content |
|------|---------|
| `docs/` | Manual Markdown |
| `docs/meta/image-checklist.md` | Screenshot capture list |
| `static/img/docs/` | Screenshots and figures |
| `sidebars.js` | Navigation tree |

## Contributing

See [Contributing](docs/project/contributing.md) in the manual. Prefer accurate, code-verified technical claims. Do not reference competing products in user-facing pages.
