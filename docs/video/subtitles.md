---
sidebar_label: Subtitles
title: Subtitles
description: Text-based subtitle tracks and sidecar files.
---

# Subtitles

Cue2 can load **text-based** subtitle / caption data:

- Embedded subtitle streams in a container (via FFmpeg)  
- External sidecar files (`.srt`, `.vtt`, `.ass`, …) parsed as text  

Bitmap subtitle codecs are **not** supported.

## Presentation

Cues are loaded into timed entries, then queried against the **presentation clock** (`GetTextAtUs`). Display is tied to the video’s media time, not wall clock.

## Related

- [Decode & present](./technical-decode-and-present.md)  
