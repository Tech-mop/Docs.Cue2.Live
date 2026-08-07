---
sidebar_label: Keyboard shortcuts
title: Keyboard shortcuts
description: Default keyboard Input Map actions in Cue2.
---

# Keyboard shortcuts

Shortcuts are bound through Cue2’s **Input Map** (app preference). You can rebind them in **Cue2 Preferences**. The table below lists **factory defaults**. On macOS, **Ctrl** in this table means the command-or-control binding (⌘).

These bindings remain active even when a text field has focus for Undo/Redo (the input listener keeps document history available).

## Session & file

| Action | Default | Input Map name |
|--------|---------|----------------|
| New session | *see app menu / rebind* | `NewSession` |
| Open | Ctrl+O | `OpenSession` |
| Save | Ctrl+S | `SaveSession` |
| Save as | Ctrl+Shift+S | `SaveAsSession` |

## Playback

| Action | Default | Input Map name |
|--------|---------|----------------|
| GO | Space | `Go` |
| Stop all | Escape | `StopAll` |
| Pause all | `[` | `PauseAll` |
| Resume all | `]` | `ResumeAll` |

## Edit

| Action | Default | Input Map name |
|--------|---------|----------------|
| Undo | Ctrl+Z | `Undo` |
| Redo | Ctrl+Shift+Z | `Redo` |
| Cut | Ctrl+X | `CutSelectedCues` |
| Copy | Ctrl+C | `CopySelectedCues` |
| Paste | Ctrl+V | `PasteCues` |
| Duplicate | Ctrl+D | `DuplicateSelectedCues` |
| Delete | Delete | `DeleteCue` |
| Select all | Ctrl+A | `SelectAll` |
| Create cue | Ctrl+N | `CreateCue` |
| Group selected | Ctrl+G | `GroupSelectedCues` |

## Navigation & view

| Action | Default | Input Map name |
|--------|---------|----------------|
| Select previous | Up | `SelectPrevious` |
| Select next | Down | `SelectNext` |
| Settings | Ctrl+, | `ToggleSettings` |
| Log | Ctrl+/ | `ToggleLog` |
| Toggle show mode | Ctrl+Shift+E | `ToggleShowMode` |
| Expand one layer | `=` | `ExpandOneLayer` |
| Collapse one layer | `-` | `CollapseOneLayer` |
| Expand / collapse all | `.` | `ToggleExpandAll` |

## Per-cue hotkeys

Individual cues can also define a **hotkey trigger** in the shell inspector. That binding is stored **in the showfile** with the cue, independent of the global Input Map. See [Triggers](../fundamentals/triggers.md).

## Related

- [Cue2 Preferences](../settings/cue2-preferences.md)
- [Playback & transport](../fundamentals/playback-transport.md)
