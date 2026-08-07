---
sidebar_label: Cue routing matrix
title: Cue routing matrix
cue2_version: v0.1:StripyHat
description: Per-cue source-to-bus matrix before the output patch.
---

# Cue routing matrix

Each audio component can own a **routing matrix** (`CuePatch`): gains from **source channels** (file inputs) into **patch buses**. This is the artistic mults/sends stage.

<!-- IMAGE: audio/cue-routing-matrix.png
     Caption: Per-cue routing matrix in the audio inspector.
-->
![Cue routing matrix](/img/docs/audio/cue-routing-matrix.png)

## Order of operations

```text
decoded PCM
  → component volume × master volume
  → stereo pan (if 2-ch)
  → cue routing matrix   ← this page
  → output patch / direct device map
  → SDL
```

## Editing

- Crosspoint levels are linear gains in the mix engine.  
- Control components can **fade a single matrix cell** over time (`RoutingMatrix` fade property).  
- Matrices serialise with the cue in the showfile.

## Related

- [Technical mixing](./technical-mixing.md)  
- [Control fades](../control/fades.md)  
