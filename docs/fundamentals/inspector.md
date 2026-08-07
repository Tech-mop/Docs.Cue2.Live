---
sidebar_label: Inspector
title: The inspector
cue2_version: v0.1:StripyHat
description: Inspector tabs for shell and component editing.
---

# The inspector

The inspector is the primary editor for the **focused cue**.

<!-- IMAGE: fundamentals/inspector-tabs.png
     Caption: Inspector tab strip on a multi-component cue.
     Shot: Shell tab visible with other tabs populated.
-->
![Inspector tabs](/img/docs/fundamentals/inspector-tabs.png)

## Tabs (typical)

| Tab | Contents |
|-----|----------|
| **Shell** | Number, name, colour, armed, waits, follow, notes, memo, triggers (hotkey / OSC / MIDI / clock) |
| **Timeline** | Visual layout of components and nested children over time; optional waveforms |
| **Audio** | File, waveform, in/out, loop, levels, pan, fades, patch, routing matrix |
| **Video** | File/image, in/out or hold duration, layout, opacity, target layer, embedded audio |
| **Text** | Content, typography, layer, duration, style |
| **Connection** | OSC send components, MIDI output, cue light actions |
| **Control** | Control components (GO/stop/fade/seek/translate) |
| **Library** | Save/load library entries related to the cue |

Exact tab availability depends on what components exist and UI focus rules.

## Editing rules

1. **Record before mutate** — document edits go through undo (you do not need to think about this; the UI does).  
2. Continuous fields (names, drags) **coalesce** into one undo step until focus exits or drag ends.  
3. **Multi-edit** may apply shell changes to all selected cues when enabled.  
4. While undo is restoring, the inspector suppresses re-entrant records.

## Previews

Video and text inspectors can show **preview** surfaces that do **not** replace house outputs. Preview resolution can be reduced in [video output settings](../settings/video-output.md) without changing output quality mode.

## Related

- [Cues](./cues.md)
- [Timeline concepts in timing](./timing.md)
- [Main window](./main-window.md)
