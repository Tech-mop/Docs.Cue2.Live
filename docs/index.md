---
sidebar_label: Home
title: Cue2 Documentation
cue2_version: v0.1:StripyHat
description: Official manual for Cue2 — cross-platform live media playback and show control.
---

# Cue2 Documentation

Cue2 is free and open-source software for **cue-based playback of audio, video, text, and show control**. It is built for live performance, installations, and any workflow that needs reliable, low-latency triggering of media and network commands.

This manual covers the product as it exists in the current development line. Each page shows an **Applies to** badge with the Cue2 version it was last verified against (currently **v0.1:StripyHat**).

## Start here

| If you want to… | Go to |
|-----------------|--------|
| Install and open Cue2 for the first time | [Install & first launch](./getting-started/install.md) |
| Learn the core ideas in a few minutes | [Concepts](./getting-started/concepts.md) |
| Play your first audio file | [Zero to audio](./tutorials/zero-to-audio.md) |
| Put video on a display | [Zero to video](./tutorials/zero-to-video.md) |
| Understand cue timing and sequences | [Cue sequences](./fundamentals/cue-sequences.md) |
| Dig into the audio engine | [Audio technical: signal path](./audio/technical-signal-path.md) |
| Dig into video decode and present | [Video technical: decode & present](./video/technical-decode-and-present.md) |
| Drive Cue2 over the network | [OSC command reference](./networking/osc-command-reference.md) |

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

## Version note

Cue2 is under active development and is currently in alpha. A great deal of work has gone into making it reliable, but you should still treat it with the caution appropriate to alpha software.

## Bug reports, feedback, and suggestions

Report bugs, share feedback, or suggest features through the [Cue2 GitHub issues](https://github.com/Tech-mop/Cue2/issues) tracker.

When filing a bug, attach the current session log (`cue2.log` & `Cue2System.log`). You can review the current session in-app from **View → Log**. On-disk logs live in the Cue2 user-data folder:

| Platform | Typical path |
|----------|----------------|
| **Windows** | `%APPDATA%\Techmop\Cue2\logs` — for example `C:\Users\<you>\AppData\Roaming\Techmop\Cue2\logs` |
| **macOS** | `~/Library/Application Support/Techmop/Cue2/logs` |
| **Linux** | `~/.local/share/Techmop/Cue2/logs` |

The current session is `cue2.log`. Previous sessions are kept as timestamped files (for example `cue22026-08-15T10.13.15.log`) until they are pruned. The same folder also contains the engine log (`Cue2Sytem.log`), which is useful if the app crashed before the session log was written.
