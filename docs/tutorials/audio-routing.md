---
sidebar_label: Routing audio
title: Tutorial — Audio routing
cue2_version: v0.1:StripyHat
description: Output patches and per-cue routing matrix.
---

# Audio routing

## Steps

### 1. Build a patch

1. **Settings → Audio output patch**.  
2. Create or select a patch.  
3. Map patch **buses/outputs** to device channels.  
4. Open the required audio devices for the session.

<!-- IMAGE: tutorials/audio-routing-01.png
     Caption: Patch matrix and cue routing side by side if possible.
-->
![Patch and cue routing](/img/docs/tutorials/audio-routing-01.png)

### 2. Assign the cue

On an audio component, set **Patch** to that patch (or use Preferred defaults).

### 3. Shape the cue matrix

Open the cue’s **routing matrix**. Crosspoints send source channels into patch buses. Combined with pan and volume, this is the artistic send stage before the patch maps to hardware.

### 4. GO and verify

Play and confirm each physical output. Use mono stems or channel-check files when tuning multi-channel shows.

## Learn more

- [Output patches](../audio/output-patches.md)  
- [Cue routing matrix](../audio/routing-matrix.md)  
- [Technical mixing](../audio/technical-mixing.md)  
