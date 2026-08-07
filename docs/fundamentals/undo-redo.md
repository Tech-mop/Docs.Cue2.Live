---
sidebar_label: Undo & redo
title: Undo and redo
description: Scoped document history in Cue2.
---

# Undo and redo

Cue2 records **document** edits with a scoped memento system. Playback is never on the stack.

## Shortcuts

| Action | Default |
|--------|---------|
| Undo | Ctrl+Z |
| Redo | Ctrl+Shift+Z |

Depth defaults to **50** steps (configurable in user data; practical range 4–200).

## Scopes

| Scope | Captures | Typical UI refresh |
|-------|----------|--------------------|
| **Cue** | One cue’s serialised data (waveforms stripped) | Shell + inspectors for that cue |
| **Cuelist** | Structure (order, groups, create/delete) | Full shell rebuild; may stop all |
| **Settings** | Only the settings **keys** you changed | Settings panels that care about those keys |

### Settings keys (examples)

`UiScale`, `GoScale`, `WaveformResolution`, `StopFadeDuration`, `MediaBackupEnabled`, `MultiEditEnabled`, `SelectNewCues`, video/audio playback prefs, `CueDefaults`, `AudioDefaults`, `VideoDefaults`, `TextDefaults`, `OscInputMap`, `MidiInputMap`, `AudioPatch` + `AudioDevices`, `Displays`, …

Empty key lists are refused. Full snapshot requires an explicit full-snapshot key when intentional.

## Coalescing

Typing a name or dragging a fader records **one** undo step for the gesture: the first change opens a coalesce session; further events with the same key are ignored until focus exit / mouse-up ends the session.

## What is not tracked

- GO / stop / pause / seek / active instances  
- Keyboard Input Map and locale (app preferences)  
- Pure view state (zoom/pan of editors when not part of show data)

## Related

- [Sessions](./sessions.md)
- [Cue2 Preferences](../settings/cue2-preferences.md)
