---
sidebar_label: Output patches
title: Audio output patches
description: Map logical patch outputs to physical devices.
---

# Audio output patches

An **output patch** is a reusable mapping from logical patch channels/buses to one or more physical audio devices and their channels. Cues target patches (or direct devices); patches own the hardware map for the show.

## UI location

**Settings → Audio output patch** (matrix editor).

<!-- IMAGE: audio/output-patch-matrix.png
     Caption: Full audio output patch matrix.
-->
![Output patch matrix](/img/docs/audio/output-patch-matrix.png)

## Concepts

| Term | Meaning |
|------|---------|
| **Patch** | Named table of output channels and device mappings |
| **Device** | SDL-visible output opened for the session |
| **Direct output** | Cue points at a device name without going through a patch object |

Patches are part of **show settings** and participate in undo when you change them (`AudioPatch` / `AudioDevices` history keys). Restoring patches recreates patch objects and reopens listed devices — UI must not keep stale references.

## Workflow

1. Open devices you need for the venue.  
2. Create a patch sized for your bus count.  
3. Assign each patch output cell to device channels.  
4. Point audio (and video-embedded audio) components at the patch.  
5. Save the show so the map travels with the `.c2`.

## Related

- [Cue routing matrix](./routing-matrix.md)  
- [Audio settings](../settings/audio-output-patch.md)  
- [Technical mixing](./technical-mixing.md)  
