---
sidebar_label: Playback & transport
title: Active cues and transport
cue2_version: v0.1:StripyHat
description: GO, stop, pause, load, seek, and active instances.
---

# Active cues and transport

## GO

**GO** starts the selected/playhead cue sequence:

1. Honour armed state (disarmed → advance without content).  
2. Run pre-wait.  
3. Start components (audio/video/text/… and fire-and-forget OSC/MIDI/control).  
4. Apply Continue/Follow arming for the next sibling as configured.

Default shortcut: **Space**. Also available from the header GO control and Playback menu.

## Stop

| Action | Behaviour |
|--------|-----------|
| **Stop all** | Stops active cues; audio/video may use the show **stop fade** duration (default **2.5 s**) |
| **Hard stop** | Immediate stop (available via OSC and some UI paths) |

## Pause / resume

**Pause all** / **Resume all** affect active instances. Individual pause/resume also exists via control components and OSC.

## Start now

**Start now** skips continue/follow lead-in and pre-wait so a waiting instance begins content immediately (control component and OSC).

## Load / preload

**Load** prepares media without starting the cue (standby / reduce GO latency). Available via OSC (`/Load…`, `/cue/…/load`) and integrated preload behaviour when focusing/upcoming cues.

## Seek

Seek moves the playhead of playing audio/video content (absolute or relative). Exposed via control components and OSC (`/Seek…`, `/SeekRel…`).

## Multiple instances

By default, GOing a cue again can start **another concurrent instance**. Enable **Only one active instance** on the shell to hard-stop previous instances first.

## Active cues panel

Running and armed-incoming cues list here with progress and quick controls. This panel is live state — **not** undoable.

## Related

- [Cue sequences](./cue-sequences.md)
- [Control components](../control/control-components.md)
- [OSC command reference](../networking/osc-command-reference.md)
