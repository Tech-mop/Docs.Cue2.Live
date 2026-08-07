---
sidebar_label: MIDI output
title: MIDI output components
description: Send MIDI channel messages when a cue fires.
---

# MIDI output components

| Field | Notes |
|-------|-------|
| Output device | Must be in session MIDI outputs |
| Message type | Note On / Off, CC, Program Change |
| Channel | 1–16 |
| Data1 | Note / CC / program |
| Data2 | Velocity / value (ignored for Program Change) |
| Note duration | If &gt; 0 on Note On, schedules Note Off after N seconds |

## Related

- [MIDI overview](../networking/midi-overview.md)  
