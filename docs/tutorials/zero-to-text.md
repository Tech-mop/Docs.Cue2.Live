---
sidebar_label: Zero to text
title: Tutorial — Zero to text
cue2_version: v0.1:StripyHat
description: Display a text overlay on a video layer.
---

# Zero to text

Put readable text on a target layer.

## Steps

1. Ensure a **target layer** exists ([canvas editor](../settings/canvas-editor.md)).  
2. Create a cue (Ctrl+N).  
3. Add a **Text** component (Text inspector).  
4. Enter content. Optionally enable **BBCode** for rich markup.  
5. Assign the **target layer**.  
6. Set **duration** (seconds), or `0` to hold until stop.  
7. Adjust font size, colour, outline, margins, and alignment for readability.  
8. GO.

<!-- IMAGE: tutorials/zero-to-text-01.png
     Caption: Text component fields and output preview.
-->
![Text overlay setup](/img/docs/tutorials/zero-to-text-01.png)

## Tips

- Use outline and contrast colours over bright video.  
- Prefer system font family names that exist on the playback machine, or embed a font file path for consistency.  
- Stack text and video by using separate layers or the same layer depending on draw order in your layout.

## Learn more

- [Text overlays](../video/text-overlays.md)  
- [Canvas, screens & layers](../video/canvas-screens-layers.md)  
