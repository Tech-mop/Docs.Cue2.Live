---
sidebar_label: Sessions & showfiles
title: Sessions and showfiles
cue2_version: v0.1:StripyHat
description: Creating, saving, and moving Cue2 sessions (.c2).
---

# Sessions and showfiles

## New, open, save

| Action | Menu | Notes |
|--------|------|--------|
| New session | File → New Session | Empty cuelist; resets cue id allocator |
| Open | File → Open… | Loads a `.c2` file |
| Save | File → Save | Writes current session |
| Save as | File → Save As… | Choose a new path |

## Showfile format (`.c2`)

Showfiles are versioned dictionaries stamped with:

| Field | Meaning |
|-------|---------|
| `formatVersion` | Schema version for migrations (currently **1**) |
| `appVersion` | Semantic app version that last fully owned the save |
| `appVersionFull` | Human-readable version string |

If you open a file from a **newer** schema than your build understands, Cue2 may warn and ask before loading. Opening without migrating does not claim schema ownership (an `openedByAppVersion` diagnostic may be stored). See [Showfile format](../reference/showfile-format.md).

## What is inside a showfile

- Cuelist structure and every cue’s shell + component data  
- Show settings slices: general scalars, cue/component defaults, audio patches, open devices, displays/canvas, OSC/MIDI **show** input maps, playback prefs  
- Media paths (absolute or show-relative)

**Not** in the showfile:

- Keyboard Input Map (app preference)  
- UI locale  
- User cue **library** (`user://library/`)

## Media paths and portability

By default, **media backup** can copy used audio/video/images into folders next to the showfile and rewrite cues to relative paths such as `Audio/song.wav`. That makes the show folder movable as a unit.

| Tool | Location |
|------|----------|
| Toggle backup | Settings → General → media backup |
| Force copy | Show Files → Copy Media into Show Folder |
| Verify | Show Files → Check File Presence |
| Reveal | Show Files → Open Show Folder |

See [Media backup tutorial](../tutorials/media-backup.md) and [Media backup layout](../reference/media-backup-layout.md).

## Moving a show between machines

1. Prefer a show folder with backup-enabled relative media.  
2. Copy the entire folder.  
3. Open the `.c2` on the destination.  
4. Re-check audio devices, MIDI devices, and display layout — hardware names differ per machine.  
5. Re-open required audio devices and confirm patches.

## Related

- [Undo & redo](./undo-redo.md)
- [General settings](../settings/general.md)
