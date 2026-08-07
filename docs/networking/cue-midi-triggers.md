---
sidebar_label: Cue MIDI triggers
title: Cue MIDI triggers
cue2_version: v0.1:StripyHat
description: Per-cue MIDI patterns that GO a shell.
---

# Cue MIDI triggers

Configured on the shell. Requires armed + enabled + pattern.

| Field | Notes |
|-------|-------|
| Message type | Note On / Off, CC, Program Change |
| Channel | 1–16 or any (0) |
| Data1 | Note/CC/program |
| Match value | Optional exact Data2 |
| Device filter | Optional input name |

## Related

- [Triggers](../fundamentals/triggers.md)  
- [MIDI trigger tutorial](../tutorials/midi-trigger.md)  
