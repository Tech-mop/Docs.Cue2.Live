---
sidebar_label: Overview
title: Audio
cue2_version: v0.1:StripyHat
description: Audio components, patches, routing, and engine internals.
---

# Audio

Cue2 plays audio through a dedicated pipeline: **FFmpeg decode → PCM ring → mix matrix → SDL device streams**. Artistic controls (volume, pan, cue matrix) sit above show-level patches and master volume.

| Page | Level |
|------|--------|
| [Audio components](./audio-components.md) | Using |
| [Output patches](./output-patches.md) | Using |
| [Cue routing matrix](./routing-matrix.md) | Using |
| [Levels, pan & fades](./levels-and-fades.md) | Using |
| [Playback preferences](./playback-preferences.md) | Using |
| [Technical: signal path](./technical-signal-path.md) | Deep |
| [Technical: decode & buffers](./technical-decode-and-buffers.md) | Deep |
| [Technical: mixing](./technical-mixing.md) | Deep |
| [Formats & metadata](./formats-and-metadata.md) | Reference |
| [Troubleshooting](./troubleshooting.md) | Support |

```text
File ──FFmpeg──► PCM ring ──mix──► SDL device(s)
                      ▲
         volume · pan · cue matrix · master
```
