---
sidebar_label: Contributing
title: Contributing
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

## Application contributions

Follow the repository’s contribution guidelines, code style, and PR process. Prefer small, reviewed changes with clear user-facing notes.
