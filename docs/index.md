---
sidebar_label: Home
title: Cue2 Documentation
description: Official manual for Cue2 — cross-platform live media playback and show control.
---

# Cue2 Documentation

Cue2 is free and open-source software for **cue-based playback of audio, video, text overlays, and show-control messages**. It is built for live performance, installations, and any workflow that needs reliable, low-latency triggering of media and network commands.

This manual covers the product as it exists in the current development line (**v0.1.x**). Defaults, buffer sizes, and command paths are taken from the application source so technical readers can trust the numbers.

## Start here

| If you want to… | Go to |
|-----------------|--------|
| Install and open Cue2 for the first time | [Install & first launch](./getting-started/install.md) |
| Learn the core ideas in a few minutes | [Concepts](./getting-started/concepts) |
| Play your first audio file | [Zero to audio](./tutorials/zero-to-audio) |
| Put video on a display | [Zero to video](./tutorials/zero-to-video) |
| Understand cue timing and sequences | [Cue sequences](./fundamentals/cue-sequences) |
| Dig into the audio engine | [Audio technical: signal path](./audio/technical-signal-path) |
| Dig into video decode and present | [Video technical: decode & present](./video/technical-decode-and-present) |
| Drive Cue2 over the network | [OSC command reference](./networking/osc-command-reference) |

## How this manual is organised

```text
Getting started     → install, concepts, shortcuts, licensing
Tutorials           → short, hands-on procedures
Fundamentals        → workspace, cues, timing, transport, undo
Audio               → patches, routing, levels, deep engine notes
Video & displays    → layers, canvas, layout, decode/present
Control & components→ control, OSC send, MIDI out, cue lights
Networking          → OSC / MIDI listen, maps, full command list
Settings            → show settings and app preferences
Reference           → glossary, formats, FAQ
Project             → contributing and building
```

- **Tutorials** teach by doing. Steps include placeholders where screenshots will appear once you add images under `static/img/docs/`.
- **Fundamentals** and domain chapters are the reference manual.
- **Technical** pages under Audio and Video explain pipelines, clocks, buffers, and mixing with diagrams and tables.

## Mental model

Cue2 organises a show as a **session** saved in a **`.c2` showfile**. Inside the session, a **cuelist** holds **cues** (shells). Each cue can carry one or more **components** (audio, video, text, OSC, MIDI, control, cue light) that run together when the cue is triggered.

```text
Show (.c2)
├── Cuelist
│   └── Cue (shell: number, name, waits, follow, triggers…)
│       └── Components (audio, video, text, OSC, MIDI, control…)
├── Show settings (patches, canvas, OSC/MIDI maps, defaults…)
└── App preferences (keyboard map, language) — stored per user, not in the showfile
```

## Platforms

Cue2 targets **Windows 10+**, **macOS**, and **Linux**, with media decode via **FFmpeg** and audio I/O via **SDL3**. See [System requirements](./getting-started/system-requirements.md).

## Screenshots

Many pages include image placeholders like this:

```markdown
![Description](/img/docs/path/file.png)
```

A full capture list lives in [Image checklist](./meta/image-checklist.md) (for maintainers and contributors filling media).

## Version note

Cue2 is under active development. Behaviour described here matches the application codebase used to write this manual. When defaults change, technical tables in the Audio and Video chapters are the first place to re-verify.
