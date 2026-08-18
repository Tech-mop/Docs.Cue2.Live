---
sidebar_label: System requirements
title: System requirements
cue2_version: v0.1:StripyHat
description: Supported platforms and hardware guidance for Cue2.
---

# System requirements

## Supported platforms

| Platform | Notes                                          |
|----------|------------------------------------------------|
| **Windows** | Windows 10 or later (x64; arm64 builds provided separately) |
| **macOS** | Apple Silicon and Intel depending on the build |
| **Linux** | Modern distributions with working audio and display stacks |

## Hardware guidance

Cue2 is designed for **low-latency GO** and multi-cue playback, but real performance depends on codec, resolution, channel count, and how many cues run at once.

| Workload | Recommendation |
|----------|----------------|
| Stereo audio, modest cue count | Typical modern laptop or desktop |
| Multi-channel audio + large patches | Prefer low-latency audio interfaces; use [Prefer stability](../audio/playback-preferences.md) if you hear underruns |
| HD / multi-layer video | Dedicated GPU helps present; prefer wired displays; tune [video quality mode](../video/output-preferences.md) |
| Multi-screen canvases | Enough GPU memory and reliable display connections |

There is no fixed “minimum RAM” enforced by the app. Video prefetch rings and waveform generation use more memory with more simultaneous media.

## Media and MIDI libraries

Release and export packages include platform-specific **FFmpeg** and **RtMidi** natives. If those files are missing, Cue2 logs an error at startup:

- **FFmpeg** missing → audio/video decode will not work.
- **RtMidi** missing → MIDI devices will not enumerate or open.

See [Building from source](../project/building.md) for developer packaging notes.

**Linux MIDI** also needs system ALSA (`libasound.so.2`). Install `libasound2` or `libasound2t64` on Debian/Ubuntu if the MIDI native loads but devices never appear.

Accepted file **extensions** for browse/drop and practical codec notes live under:

- [Audio formats & metadata](../audio/formats-and-metadata.md)
- [Video formats & images](../video/formats-and-images.md)

## Displays and audio devices

- **Audio:** Cue2 enumerates devices through its audio device service (SDL). Open the devices you need in show settings / patch UI before expecting sound.
- **Video:** Output windows are managed per screen configuration in the [canvas editor](../settings/canvas-editor.md). House outputs are separate from the main editing window.

## Related

- [Install & first launch](./install.md)
- [Audio troubleshooting](../audio/troubleshooting.md)
- [Video troubleshooting](../video/troubleshooting.md)
