---
sidebar_label: Video components
title: Video components
cue2_version: v0.1:StripyHat
description: Movies and still images as cue components.
---

# Video components

A **video component** presents motion video or a **still image** on a **target layer**.

## Fields

| Field | Video | Still image |
|-------|-------|-------------|
| File | Movie path | Image path |
| Start / end | In/out points (end −1 = EOF) | N/A — use duration |
| Duration / hold | From in/out × play count | User hold; **0 = until stopped** |
| Target layer | Layer id (**−1 = no output**) | Same |
| Expand / stretch | Layout modes | Same |
| Opacity | 0–1 | Same |
| Loop / play count | Yes | As applicable |
| Use embedded audio | Optional | Usually N/A |

## No output

`TargetLayerId = -1` means the component will not draw on house outputs. Assign a layer from the canvas configuration.

## Related

- [Layout](./layout.md)  
- [Canvas, screens & layers](./canvas-screens-layers.md)  
