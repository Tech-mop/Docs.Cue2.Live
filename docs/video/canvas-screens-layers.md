---
sidebar_label: Canvas, screens & layers
title: Canvas, screens, and layers
cue2_version: v0.1:StripyHat
description: Virtual stage, output windows, and target layers.
---

# Canvas, screens, and layers

## Hierarchy

```text
Canvas (pixel size, test pattern flag)
├── Screen / VideoOutputDevice (window on a monitor, region on canvas)
└── Target layers (rect, name, lock) — draw targets for video/text
```

<!-- IMAGE: video/canvas-editor.png
     Caption: Canvas editor stage with screens and layers.
-->
![Canvas editor](/img/docs/video/canvas-editor.png)

## Canvas

- Default size **1920×1080**.  
- **Test pattern** draws a full-canvas alignment grid; each screen shows its intersection so multi-projector edges can be aligned.  

## Screens

Each screen corresponds to an **output window** managed by the displays system. Position the screen rectangle on the canvas to choose which stage region that window shows.

## Layers

| Property | Role |
|----------|------|
| Id | Target for components and OSC `/Layer/{id}/…` |
| Name | Operator label |
| Position / size | Geometry on the canvas |
| Locked | Blocks interactive and OSC moves |

Control components can **translate** layer geometry over time. OSC can set pos/size when unlocked.

<!-- IMAGE: video/layer-properties.png
     Caption: Layer property fields.
-->
![Layer properties](/img/docs/video/layer-properties.png)

## Related

- [Display graph (technical)](./technical-display-graph.md)  
- [Canvas editor settings](../settings/canvas-editor.md)  
