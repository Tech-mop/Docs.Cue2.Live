---
sidebar_label: Main window
title: The main window
description: Tour of Cue2's primary workspace layout.
---

# The main window

The main window is where you program and run a show.

<!-- IMAGE: fundamentals/main-window-annotated.png
     Caption: Main Cue2 window with major regions labeled.
     Shot: Session with a few cues, inspector open, active area visible.
-->
![Main window overview](/img/docs/fundamentals/main-window-annotated.png)

## Regions

```text
┌─────────────────────────────────────────────────────────────┐
│ Title bar (File / Edit / Playback / View / Help)            │
├──────────────┬──────────────────────────┬───────────────────┤
│              │                          │                   │
│   Cuelist    │     Inspector tabs       │  (optional        │
│   (shells)   │     (focused cue)        │   panels)         │
│              │                          │                   │
├──────────────┴──────────────────────────┴───────────────────┤
│ Header: GO control, standby / notes (scaleable)             │
├─────────────────────────────────────────────────────────────┤
│ Active cues (running / armed sequence members)              │
├─────────────────────────────────────────────────────────────┤
│ Footer: status, media backup progress, log entry points     │
└─────────────────────────────────────────────────────────────┘
```

| Region | Role |
|--------|------|
| **Title bar menus** | Session, edit, playback, view, help |
| **Cuelist** | Ordered shells; selection; drag reorder; nest chrome |
| **Inspector** | Edit shell and components for the focused cue |
| **GO header** | Primary GO affordance; can be scaled or hidden in settings |
| **Active cues** | Live instances: progress, stop, levels feedback |
| **Footer** | Session path hints, backup progress, messages |

## Focus vs multi-selection

- **Focused cue** drives which inspector content you edit.
- **Multi-selection** supports bulk shell edits when multi-edit is enabled in [General settings](../settings/general.md).

## Related windows

| Window | How to open | Purpose |
|--------|-------------|---------|
| Settings | View → Settings or Ctrl+, | Show settings + preferences tree |
| Log | View → Log | Event log |
| About | Help → About Cue2 | Version and licenses |
| Video outputs | Created by canvas/screens | House displays (not the editor) |

## Related

- [Inspector](./inspector.md)
- [Cuelist](./cuelist.md)
- [General settings](../settings/general.md) (UI scale, GO scale, cuelist scale)
