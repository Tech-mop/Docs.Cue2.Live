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

The LGPLv2.1 text ships in the application `LICENSES` folder.

## MIDI

Cue2 uses **Melanchall.DryWetMidi** (MIT) for MIDI device I/O and related MIDI work. Platform native libraries (`Melanchall_DryWetMidi_Native64.dll` / `.dylib`) are loaded at runtime on Windows and macOS, the same way FFmpeg natives are.

Project: [github.com/melanchall/drywetmidi](https://github.com/melanchall/drywetmidi)

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
| Melanchall.DryWetMidi | MIDI input and output | MIT |
| Rug.Osc | OSC send and receive | MIT |

Attribution for these libraries appears in the in-app **About** dialog (**Help → About Cue2**). Always check that dialog and the `LICENSES` folder for the build you ship — versions can move between releases.

## Related

- [Building from source](../project/building.md)
- [Contributing](../project/contributing.md)
