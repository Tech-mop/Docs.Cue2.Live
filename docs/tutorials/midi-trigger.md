---
sidebar_label: MIDI trigger a cue
title: Tutorial — MIDI trigger a cue
description: Start a cue from a MIDI note or CC.
---

# MIDI trigger a cue

## Steps

1. **Settings → MIDI**: open the session input device you will use.  
2. Select a cue → **Shell** inspector → MIDI trigger.  
3. Enable the trigger.  
4. Choose message type (e.g. Note On), channel, and note number.  
5. Leave “match value” off unless you need exact velocity/CC value.  
6. Optionally filter to one device name.  
7. Arm the cue and send MIDI from your controller.

<!-- IMAGE: tutorials/midi-trigger-01.png
     Caption: MIDI trigger fields on a cue shell.
-->
![MIDI trigger setup](/img/docs/tutorials/midi-trigger-01.png)

## Learn more

- [Triggers](../fundamentals/triggers.md)  
- [MIDI overview](../networking/midi-overview.md)  
