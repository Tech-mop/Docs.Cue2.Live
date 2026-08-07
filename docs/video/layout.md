---
sidebar_label: Layout
title: Video layout (expand and stretch)
description: How frames fill the layer rectangle.
---

# Video layout (expand and stretch)

Layout uses Godot `TextureRect` **ExpandMode** and **StretchMode** on the layer host (with clipping for covered modes).

## Defaults

| Property | Default |
|----------|---------|
| Expand | `IgnoreSize` (fill host rect) |
| Stretch | `KeepAspectCentered` (letterbox / pillarbox style fit) |

## Common looks

| Look | Typical stretch |
|------|-----------------|
| Fit (letterbox) | Keep aspect centered |
| Fill / cover | Keep aspect covered |
| Stretch / distort | Scale |

Legacy showfiles may still store Fit/Fill/Stretch presets; they migrate to expand+stretch pairs.

<!-- IMAGE: video/layout-modes.png
     Caption: Same frame shown as fit, fill, and stretch on a layer.
-->
![Layout mode comparison](/img/docs/video/layout-modes.png)

## Related

- [Video components](./video-components.md)  
