---
sidebar_label: Install & first launch
title: Install & first launch
description: How to open Cue2 and complete first-run setup.
---

# Install & first launch

## Obtain Cue2

- **Releases:** download a build for your platform from the project’s [GitHub releases](https://github.com/Tech-mop/Cue2/releases) or the website [cue2.live](https://www.cue2.live/).
- **From source:** see [Building from source](../project/building.md).

Unzip or install according to the package for your OS. Keep bundled native libraries next to the application when using exported builds.

## First launch

1. Start Cue2.
2. If this is the first run, a **welcome / language** step may appear. Language is an **app preference** (stored for your user account), not part of the showfile.
3. The **launcher** lets you open a recent session or start a new one.
4. Choosing **New Session** opens the main workspace with an empty cuelist.

<!-- IMAGE: getting-started/launcher.png
     Caption: Cue2 launcher with recent sessions and New Session.
     Shot: Launcher window, default size.
-->
![Cue2 launcher](/img/docs/getting-started/launcher.png)

<!-- IMAGE: getting-started/first-time.png
     Caption: First-time language selection.
     Shot: Welcome dialog language picker.
-->
![First-time language selection](/img/docs/getting-started/first-time.png)

## User data location

Cue2 uses a custom user directory named **`Techmop/Cue2`** (via the engine’s user data path). Preferences such as keyboard Input Map and locale live here, separate from `.c2` showfiles.

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
