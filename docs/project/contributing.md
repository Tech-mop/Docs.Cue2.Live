---
sidebar_label: Contributing
title: Contributing
cue2_version: v0.1:StripyHat
description: How to contribute to Cue2 and its documentation.
---

# Contributing

Cue2 is open source. Application code lives at [github.com/Tech-mop/Cue2](https://github.com/Tech-mop/Cue2). This documentation site lives at [github.com/Tech-mop/Docs.Cue2.Live](https://github.com/Tech-mop/Docs.Cue2.Live).

## Docs workflow

```bash
cd Docs.Cue2.Live
npm install
npm start          # http://localhost:3000
npm run build      # must pass (broken links throw)
```

- Write Markdown under `docs/`.  
- Register pages in `sidebars.js`.  
- Add screenshots under `static/img/docs/` per [image checklist](../meta/image-checklist.md).  
- Keep technical numbers aligned with application source.  
- Do not name competing products in the manual.  

## Cue2 version on every page

Each page declares which Cue2 release it was written or last verified for:

```yaml
---
title: Example
cue2_version: v0.1:StripyHat
---
```

A badge at the top of the article shows **Applies to Cue2 …**.  
If a page’s `cue2_version` differs from the site current version, the badge highlights and shows the site current line.

| What | Where |
|------|--------|
| Site current version | `src/cue2DocMeta.js` → `CUE2_CURRENT_VERSION` |
| Per-page version | Front matter `cue2_version` on each `docs/**/*.md` |
| Badge UI | `src/theme/DocItem/Content/index.js` |

### When Cue2 ships a new version

1. Update `CUE2_CURRENT_VERSION` in `src/cue2DocMeta.js` (e.g. `v0.2:NewCodeName`).  
2. Re-read and correct each page as needed.  
3. Set that page’s `cue2_version` to the new value when it is verified.  
4. Optionally bulk-set remaining pages only after a full pass — leaving older values is intentional so readers see which pages lag.  

Format: `v{major}.{minor}:{CodeName}` (matches product naming, e.g. `v0.1:StripyHat`).

## Application contributions

Follow the repository’s contribution guidelines, code style, and PR process. Prefer small, reviewed changes with clear user-facing notes.
