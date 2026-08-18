---
sidebar_label: MIDI overview
title: MIDI overview
cue2_version: v0.1:StripyHat
description: Session devices, maps, triggers, and output.
---

# MIDI overview

```text
Session MIDI inputs  → Input Map (app actions)
                     → Per-cue MIDI triggers (GO)

Session MIDI outputs ← MIDI output components
                     ← Panic (All Notes/Sound Off)
```

Open devices in **Settings → MIDI** before the show. Device names are machine-specific — reselect after moving shows.

MIDI hardware I/O works on **Windows, macOS, and Linux**. Cue2 loads RtMidi natives at runtime (`rtmidi.dll` / `librtmidi.dylib` / `librtmidi.so`). Linux needs system ALSA (`libasound.so.2`).

Cue2 does not play Standard MIDI Files as audio. `.mid` / `.midi` files are not media components — they are unrelated to this device I/O path.

## Related

- [MIDI Input Map](./midi-input-map.md)  
- [Cue MIDI triggers](./cue-midi-triggers.md)  
- [MIDI output components](../control/midi-output.md)  
