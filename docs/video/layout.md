---
sidebar_label: Layout
title: Video layout (expand and stretch)
cue2_version: v0.1.1:StripyHat
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

## Related

- [Video components](./video-components.md)  
