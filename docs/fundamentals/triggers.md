---
sidebar_label: Triggers
title: Triggers
cue2_version: v0.1:StripyHat
description: Hotkey, OSC, MIDI, and wall-clock triggers on cues.
---

# Triggers

Besides the global GO action, each cue can define **triggers** that start it when armed.

All triggers below require the cue to be **armed** to fire.

## Hotkey

| Field | Meaning |
|-------|---------|
| Enabled | Master switch |
| Key + modifiers | Ctrl / Shift / Alt / Meta + key |

Stored on the cue in the showfile. Independent of the app Input Map.

## OSC trigger

| Field | Meaning |
|-------|---------|
| Enabled | Master switch |
| Address | Exact path match (case-sensitive), e.g. `/my/cue` |

When OSC listen is active and a message matches, the cue GOs. This is separate from:

- [OSC Input Map](../networking/osc-input-map.md) (app actions)  
- [Built-in OSC commands](../networking/osc-command-reference.md) (`/GoNum`, etc.)

## MIDI trigger

| Field | Meaning |
|-------|---------|
| Enabled | Master switch |
| Message type | Note On, Note Off, Control Change, Program Change |
| Channel | 1–16, or any |
| Data1 | Note / CC / program number |
| Match value | Optional exact Data2 (velocity / CC value) |
| Device filter | Optional session input device name |

See [Cue MIDI triggers](../networking/cue-midi-triggers.md).

## Wall clock

| Field | Meaning |
|-------|---------|
| Enabled | Master switch |
| Time of day | Local time |
| Weekdays | Bitmask of days (default every day) |

When local time crosses the target on an enabled weekday, the cue GOs.

## Related

- [OSC overview](../networking/osc-overview.md)
- [MIDI overview](../networking/midi-overview.md)
- [Armed & status](../reference/armed-and-status.md)
