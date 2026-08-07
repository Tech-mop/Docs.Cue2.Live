---
sidebar_label: Technical — Display graph
title: Technical — Display graph
description: Canvas to screens to layers to textures.
---

# Technical — Display graph

## Objects

```text
Canvas
  size: Vector2I
  testPattern: bool

VideoOutputDevice (Window)
  shows intersection of canvas with its screen rect
  vsync / background from show prefs

VideoTargetLayer
  id, name, rect, locked
  hosts TextureRect (video) and/or text controls
```

## Draw path

1. Decoder presents a frame into a texture.  
2. `VideoComponent.ApplyTextureLayout` sets expand/stretch on the layer’s `TextureRect`.  
3. When expand is `IgnoreSize`, the rect fills the layer host.  
4. Each output window composites the canvas region it owns.  

## OSC / control mutation

`/Layer/{id}/pos` and `/size` (and control **Translate layer**) mutate layer geometry if **unlocked**. Locked layers reject OSC moves.

## Restore / undo

Displays settings restore runs `DisplaysManager.LoadFromData`, recreating windows. UI must rebuild by id after settings history restore.

## Related

- [Canvas, screens & layers](./canvas-screens-layers.md)  
- [Layer translate](../control/layer-translate.md)  
