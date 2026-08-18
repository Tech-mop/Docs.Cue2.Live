---
sidebar_label: Licensing
title: Open source & licensing
cue2_version: v0.1:StripyHat
description: Cue2 MIT license and third-party dependency notices.
---

# Open source & licensing

## Cue2 application

Cue2 application code is released under the **MIT License**. See the `LICENSE` file in the source repository.

You are free to use, modify, and redistribute Cue2 under the terms of that license. The software is provided as-is, without warranty.

Copyright © 2025–2026 Samuel Moxham.

## FFmpeg

Cue2 loads **FFmpeg** shared libraries dynamically at runtime for decode and related media work. Bundled FFmpeg binaries are distributed under **LGPLv2.1 or later**.

Implications for distributors and packagers:

- Dynamic linking is the intended LGPL-compliant pattern used by Cue2.
- Corresponding FFmpeg source for the bundled library versions is provided via project documentation and/or GitHub Releases as described in the repository.
- Patent and codec considerations for certain formats remain the responsibility of whoever redistributes or deploys those codecs.

The LGPLv2.1 text ships in the application `LICENSES` folder. The RtMidi license is `LICENSES/RtMidi.txt`.

## MIDI

Cue2 uses **RtMidi 6.0** (MIT-style, Gary P. Scavone) for MIDI device input and output. Platform natives are loaded at runtime the same way FFmpeg natives are:

| Platform | File |
|----------|------|
| Windows (x64 and arm64) | `rtmidi.dll` |
| macOS (arm64) | `librtmidi.dylib` |
| Linux (x64 and arm64) | `librtmidi.so` |

Linux builds are ALSA-only and need system `libasound.so.2` (`libasound2` / `libasound2t64` on Debian/Ubuntu). JACK is not required.

Project: [github.com/thestk/rtmidi](https://github.com/thestk/rtmidi)

## OSC

Cue2 uses **Rug.Osc** (MIT) for OSC send and receive.

Project: [bitbucket.org/rugcode/rug.osc](https://bitbucket.org/rugcode/rug.osc)

## Other dependencies

| Dependency | Role | License |
|------------|------|---------|
| Godot Engine | Application runtime | MIT |
| SDL3 / SDL3-CS | Audio device I/O | zlib |
| FFmpeg (native libraries) | Media decode | LGPLv2.1+ |
| FFmpeg.AutoGen | C# bindings for FFmpeg | MIT |
| RtMidi | MIDI device input and output | MIT-style |
| Rug.Osc | OSC send and receive | MIT |

Attribution for these libraries appears in the in-app **About** dialog (**Help → About Cue2**). Always check that dialog and the `LICENSES` folder for the build you ship — versions can move between releases.

## Related

- [Building from source](../project/building.md)
- [Contributing](../project/contributing.md)
