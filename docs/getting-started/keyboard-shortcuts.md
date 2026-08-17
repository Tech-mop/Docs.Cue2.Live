---
sidebar_label: Keyboard shortcuts
title: Keyboard shortcuts
cue2_version: v0.1:StripyHat
description: Default keyboard Input Map actions in Cue2.
---

# Keyboard shortcuts

Shortcuts are bound through Cue2’s **Input Map** (an app preference). Rebind, clear, or reset them in **Cue2 Preferences**. The tables below list **factory defaults**.

Where a shortcut shows **Ctrl**, Godot’s command-or-control remap is used: **⌘** on macOS, **Ctrl** on Windows and Linux. Keys without a modifier (Space, Escape, arrows, `[`, `]`, `=`, `-`, `.`) are the same on every platform.

**Undo** and **Redo** still work when a text field has focus. Other shortcuts are paused while you type so they do not steal keystrokes.

The same action names can also be bound to MIDI or OSC in the show’s [MIDI Input Map](../networking/midi-input-map.md) and [OSC Input Map](../networking/osc-input-map.md). Some playback and mode actions ship with factory OSC addresses (`/Go`, `/StopAll`, `/PauseAll`, `/ResumeAll`, `/SelectAll`, `/SelectNext`, `/SelectPrevious`, `/Save`, `/Undo`, `/Redo`, `/EditMode`, `/ShowMode`).

## Session

| Action | Default | Input Map name |
|--------|---------|----------------|
| New session | Unbound (File menu) | `NewSession` |
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

## Cue editing

| Action | Default | Input Map name |
|--------|---------|----------------|
| Create cue | Ctrl+N | `CreateCue` |
| Group selected | Ctrl+G | `GroupSelectedCues` |
| Delete | Delete | `DeleteCue` |
| Duplicate | Ctrl+D | `DuplicateSelectedCues` |
| Cut | Ctrl+X | `CutSelectedCues` |
| Copy | Ctrl+C | `CopySelectedCues` |
| Paste | Ctrl+V | `PasteCues` |

## Navigation

| Action | Default | Input Map name |
|--------|---------|----------------|
| Select all | Ctrl+A | `SelectAll` |
| Select previous | Up | `SelectPrevious` |
| Select next | Down | `SelectNext` |
| Expand one layer | `=` | `ExpandOneLayer` |
| Collapse one layer | `-` | `CollapseOneLayer` |
| Expand / collapse all | `.` | `ToggleExpandAll` |

## Windows

| Action | Default | Input Map name |
|--------|---------|----------------|
| Settings | Ctrl+, | `ToggleSettings` |
| Log | Ctrl+/ | `ToggleLog` |
| Toggle show mode | Ctrl+Shift+E | `ToggleShowMode` |
| Enter edit mode | Unbound | `EditMode` |
| Enter show mode | Unbound | `ShowMode` |

**Show mode** locks cue and cuelist editing (inspectors hidden, structural edits blocked). `ToggleShowMode` flips the current state. `EditMode` and `ShowMode` enter that state directly — they have no factory keyboard keys, but they are in the Input Map so OSC or MIDI can force edit or show without toggling.

## History

| Action | Default | Input Map name |
|--------|---------|----------------|
| Undo | Ctrl+Z | `Undo` |
| Redo | Ctrl+Shift+Z | `Redo` |

## Per-cue hotkeys

Individual cues can also define a **hotkey trigger** in the shell inspector. That binding is stored **in the showfile** with the cue, independent of the global Input Map. See [Triggers](../fundamentals/triggers.md).

## Related

- [Cue2 Preferences](../settings/cue2-preferences.md)
- [Playback & transport](../fundamentals/playback-transport.md)
- [OSC Input Map](../networking/osc-input-map.md)
- [MIDI Input Map](../networking/midi-input-map.md)
