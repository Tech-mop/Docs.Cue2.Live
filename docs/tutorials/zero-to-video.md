---
sidebar_label: Zero to video
title: Tutorial — Zero to video
description: Configure a layer, add video, and play to an output window.
---

# Zero to video

Show a video (or still image) on a house output.

## What you need

- A video file or image  
- At least one display you can use for output  

## Steps

### 1. Configure canvas and a layer

1. Open **Settings → Canvas editor**.  
2. Confirm **canvas size** (default 1920×1080).  
3. Ensure a **screen** (output window) exists and is positioned on the canvas.  
4. Add a **target layer** if none exists; note its name/id.  
5. Optionally enable the **test pattern** to verify alignment, then disable it.

<!-- IMAGE: tutorials/zero-to-video-01-canvas.png
     Caption: Canvas editor with one screen and one layer.
-->
![Canvas with layer](/img/docs/tutorials/zero-to-video-01-canvas.png)

### 2. Add media

New session (if needed). Drop a video file on the cuelist, or add a video component manually.

### 3. Target the layer

In the **Video** inspector:

1. Confirm the file path.  
2. Set **target layer** to the layer you created (not “No Output”).  
3. Leave layout at defaults (letterbox-style fit) unless you need fill/stretch.

<!-- IMAGE: tutorials/zero-to-video-02-cue.png
     Caption: Video component targeted to a layer.
-->
![Video component](/img/docs/tutorials/zero-to-video-02-cue.png)

### 4. Show the output window

Output windows are created for configured screens. Bring the output to the correct monitor (fullscreen as needed for the venue).

### 5. GO

Select the cue → **Space**.

<!-- IMAGE: tutorials/zero-to-video-03-output.png
     Caption: Output window displaying video.
-->
![Video on output](/img/docs/tutorials/zero-to-video-03-output.png)

## Still images

Images use the same video component path. Instead of in/out points, set a **hold duration** (`0` means until stopped).

## What you learned

- Canvas → screen → layer graph  
- Video components must target a layer  
- Outputs are separate from the editor window  

## Next steps

- [Canvas, screens & layers](../video/canvas-screens-layers.md)  
- [Layout](../video/layout.md)  
- [Decode & present (technical)](../video/technical-decode-and-present.md)  
