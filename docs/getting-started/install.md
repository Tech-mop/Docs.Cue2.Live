---
sidebar_label: Install & first launch
title: Install & first launch
cue2_version: v0.1:StripyHat
description: How to open Cue2 and complete first-run setup.
---

# Install & first launch

## Obtain Cue2

- **Releases:** download a build for your platform from the project’s [GitHub releases](https://github.com/Tech-mop/Cue2/releases) or the website [cue2.live](https://www.cue2.live/).
- **From source:** see [Building from source](../project/building.md).

Unzip the package for your OS. Keep bundled native libraries next to the application when using exported builds.

## First launch

1. Start Cue2.
2. On the first run, a **Welcome** window appears.
3. Set **language** and **UI Scaling** if you want. These are app preferences (stored for your user account), not part of the showfile.
4. When you are ready, press **Let's "Go"!**.
5. The main workspace opens with an empty cuelist.

Later launches skip the welcome window. Cue2 may reopen the last show, depending on startup preferences.

<!-- IMAGE: getting-started/first-time.png
     Caption: First-time welcome window.
     Shot: Welcome window with language and UI Scaling.
-->
![First-time welcome window](/img/docs/getting-started/first-time.png)

## User data location

Cue2 uses a custom user directory named **`Techmop/Cue2`**. Preferences such as keyboard Input Map, language, and UI scale live here, separate from `.c2` showfiles. Session logs are in the `logs` subfolder.

| Platform | Typical path |
|----------|----------------|
| **Windows** | `%APPDATA%\Techmop\Cue2` — for example `C:\Users\<you>\AppData\Roaming\Techmop\Cue2` |
| **macOS** | `~/Library/Application Support/Techmop/Cue2` |
| **Linux** | `~/.local/share/Techmop/Cue2` |

## Sanity checks after install

| Check | Expected |
|-------|----------|
| About dialog | Shows application version and library attribution |
| Log | No fatal FFmpeg load errors |
| Settings → audio devices / patch | Devices list populates |
| Drop an audio file | Cue appears; metadata/waveform can generate |

If media fails immediately, reinstall natives or rebuild with the export packaging scripts. See [System requirements](./system-requirements.md).

## Related

- [Concepts](./concepts.md)
- [Main window](../fundamentals/main-window.md)
- [Cue2 Preferences](../settings/cue2-preferences.md)
