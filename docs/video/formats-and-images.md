---
sidebar_label: Formats & images
title: Formats and still images
description: Practical codec notes and image hold behaviour.
---

# Formats and still images

## Motion video

Decoded via FFmpeg. Prefer show-critical codecs tested on the playback hardware. High bitrate 4K multi-layer looks need Prefer performance or stronger machines.

## Still images

Images use the **video component** path with `IsImage = true`:

- No start/end scrub of a timeline  
- **Duration** is a hold time; **0** means until the cue/component is stopped  
- Layout and opacity behave like video  

## Related

- [Video components](./video-components.md)  
