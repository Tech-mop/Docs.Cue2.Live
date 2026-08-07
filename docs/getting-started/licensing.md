---
sidebar_label: Licensing
title: Open source & licensing
description: Cue2 MIT license and FFmpeg LGPL compliance notes.
---

# Open source & licensing

## Cue2 application

Cue2 application code is released under the **MIT License**. See the `LICENSE` file in the source repository.

You are free to use, modify, and redistribute Cue2 under the terms of that license. The software is provided as-is, without warranty.

## FFmpeg

Cue2 loads **FFmpeg** shared libraries **dynamically** at runtime for decode and related media work. Bundled FFmpeg binaries are distributed under **LGPLv2.1 or later**.

Implications for distributors and packagers:

- Dynamic linking is the intended LGPL-compliant pattern used by Cue2.
- Corresponding FFmpeg source for the bundled library versions is provided via project documentation and/or GitHub Releases as described in the repository.
- Patent and codec considerations for certain formats remain the responsibility of whoever redistributes or deploys those codecs.

Attribution for FFmpeg and other libraries appears in the in-app **About** dialog.

## Other dependencies

| Dependency | Typical license |
|------------|-----------------|
| Godot Engine | MIT |
| SDL3 / SDL3-CS | zlib |
| FFmpeg.AutoGen | MIT |

Always check the `LICENSES` folder and About dialog for the build you ship.

## Related

- [Building from source](../project/building.md)
- [Contributing](../project/contributing.md)
