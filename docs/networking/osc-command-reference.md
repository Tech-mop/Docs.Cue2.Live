---
sidebar_label: OSC command reference
title: OSC command reference
cue2_version: v0.1:StripyHat
description: Built-in OSC commands and hierarchical aliases.
---

# OSC command reference

Built-in handlers are registered in Cue2’s OSC listen path. App-wide Input Map actions also have factory OSC addresses and may be rebound in the [OSC Input Map](./osc-input-map.md).

Argument forms often accept either OSC args or path suffixes (e.g. `/GoNum/1.2` style patterns where documented in-app). Prefer testing against the live log.

## Input Map defaults

These addresses fire the same project actions as the keyboard Input Map (`Go`, `StopAll`, `EditMode`, …). They are show-scoped and can be rebound or cleared.

| Address | Action |
|---------|--------|
| `/Go` | GO selected / playhead |
| `/StopAll` | Stop all |
| `/PauseAll` | Pause all |
| `/ResumeAll` | Resume all |
| `/SelectAll` | Select all cues |
| `/SelectNext` | Select next cue |
| `/SelectPrevious` | Select previous cue |
| `/Save` | Save session |
| `/Undo` | Undo |
| `/Redo` | Redo |
| `/EditMode` | Enter edit mode (unlock cue editing) |
| `/ShowMode` | Enter show mode (lock cue editing) |

## Selection

| Pattern | Description |
|---------|-------------|
| `/SelectID [id\|/###]` | Select by id |
| `/SelectNum [num\|/###]` | Select by number |
| `/SelectName [name\|/###]` | Select by name |
| `/SelectSelected` | Documents selection scope (no-op) |
| `/Playhead [num\|/###]` | Move playhead to number |
| `/Back` | Select previous cue |

## Cue GO

| Pattern | Description |
|---------|-------------|
| `/GoID …` | GO by id |
| `/GoNum …` | GO by number |
| `/GoName …` | GO by name |
| `/GoSelected` | GO selected cue(s) |

## Cue control

| Pattern | Description |
|---------|-------------|
| `/StopID … [fade]` | Stop by id |
| `/StopNum …` | Stop by number |
| `/StopName …` | Stop by name |
| `/StopSelected [fade]` | Stop selected |
| `/HardStopID …` | Hard stop by id |
| `/HardStopSelected` | Hard stop selected |
| `/StopAllHard` | Hard stop all playing |
| `/PauseID\|Num\|Name\|Selected` | Pause |
| `/ResumeID\|Num\|Name\|Selected` | Resume |
| `/StartNowID\|Num\|Name\|Selected` | Skip waits |
| `/TogglePauseSelected` | Toggle pause on selected |

## Seek

| Pattern | Description |
|---------|-------------|
| `/SeekID {id} {sec}` | Absolute seek |
| `/SeekRelID {id} {sec}` | Relative seek |
| `/SeekNum` / `/SeekRelNum …` | By cue number |

## Levels

| Pattern | Description |
|---------|-------------|
| `/VolumeID {id} {0-1} [sec]` | Audio volume with optional fade |
| `/OpacityID {id} {0-1} [sec]` | Video opacity with optional fade |
| `/VolumeNum` / `/OpacityNum …` | By cue number |

## Arm

| Pattern | Description |
|---------|-------------|
| `/ArmID\|Num\|Name\|Selected` | Arm |
| `/DisarmID\|Num\|Name\|Selected` | Disarm |
| `/ToggleArmID\|Selected` | Toggle arm |

## Load (preload)

| Pattern | Description |
|---------|-------------|
| `/LoadID\|Num\|Name\|Selected` | Preload media without GO |
| `/cue/…/load` | Hierarchical alias |

## Layer

| Pattern | Description |
|---------|-------------|
| `/Layer/{id}/pos {x} {y}` | Set layer position |
| `/Layer/{id}/size {w} {h}` | Set layer size |

Locked layers reject changes.

## Queries

| Pattern | Description |
|---------|-------------|
| `/ping` | Reply `/pong` |
| `/playhead` | Reply playhead id/num/name |
| `/active` | Reply active cue ids |
| `/cue/status [id]` | Reply cue status |

## Hierarchical aliases

| Pattern | Description |
|---------|-------------|
| `/cue/by_id/{id}/start\|stop\|…` | By id |
| `/cue/by_num/{num}/start\|stop\|…` | By number |
| `/cue/selected/start\|stop\|…` | Selected |
| `/cue/active/pause\|stop` | All active |

## MIDI

| Pattern | Description |
|---------|-------------|
| `/MidiPanic` | All Notes/Sound Off via MIDI manager |

## Related

- [OSC overview](./osc-overview.md)  
- [OSC listen](./osc-listen.md)  
