---
sidebar_label: Cues
title: Cues (shells)
description: Anatomy of a Cue2 cue shell and its components.
---

# Cues (shells)

In Cue2, a **cue** is a shell: timing, identity, triggers, and zero or more **components**.

## Why “shell”?

Many tools map “one cue type” to “one media type.” Cue2 instead lets a single list row own **mixed components** that share waits, follow mode, and triggers. The shell is the programmable event; components are the payloads.

```text
Cue #12  "Storm sting"
├── Shell: pre 0.0 · follow Continue · armed · hotkey F5
├── Audio component → patch "FOH" · file thunder.wav
├── OSC component → /lx/go 12
└── Control component → Fade opacity on cue #11
```

## Shell properties

| Property | Description |
|----------|-------------|
| **Id** | Internal integer, stable in the session for OSC/control targeting |
| **Number** | Display number (string), used by operators and `/GoNum` style commands |
| **Name** | Display name |
| **Colour** | List colour strip |
| **Pre-wait** | Seconds after start before content phase |
| **Post-wait** | Seconds used when arming the next cue in a sequence |
| **Follow** | `None` / `Continue` / `Follow` — [details](./cue-sequences.md) |
| **Armed** | Disarmed cues do not play content on GO |
| **Skip if disarmed** | When disarmed, playhead may skip over this cue |
| **Only one active instance** | If true, a new GO hard-stops prior instances of this cue |
| **Notes** | Free-text operator notes |
| **Memo** | When true, the shell row emphasises notes instead of standard fields |
| **Expanded** | Whether child cues are shown in the list |

## Creating cues

- **Edit → Create Cue** (default Ctrl+N)  
- Drag-and-drop media files onto the cuelist (creates components automatically; multi-file drop can wrap in a group)  
- Paste / duplicate  
- Load from the [cue library](./library.md)

New cues receive [cue defaults](../settings/cue-defaults.md) and [component defaults](../settings/component-defaults.md) from show settings.

## Components on a cue

Add and remove components from the inspector (Audio, Video, Text, Connection, Control tabs as appropriate). A cue with **no** components still participates in sequences and can carry notes, waits, and triggers.

| Component | Manual |
|-----------|--------|
| Audio | [Audio components](../audio/audio-components.md) |
| Video / image | [Video components](../video/video-components.md) |
| Text | [Text overlays](../video/text-overlays.md) |
| Control | [Control components](../control/control-components.md) |
| OSC send | [OSC send](../control/osc-send.md) |
| MIDI out | [MIDI output](../control/midi-output.md) |
| Cue light | [Cue lights](../control/cue-lights.md) |

## Related

- [Inspector](./inspector.md)
- [Triggers](./triggers.md)
- [Component types](../reference/component-types.md)
