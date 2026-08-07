---
sidebar_label: Formats & metadata
title: Formats and metadata
description: Container/codec practical notes and metadata fields.
---

# Formats and metadata

## Formats

Cue2 decodes through **FFmpeg**, so practical format support is “what your bundled FFmpeg build can open.” Common PCM, compressed, and many broadcast/web formats work; exotic codecs require a build that includes them.

Always test show-critical codecs on the **playback machine** with the **same** Cue2 build.

## Metadata fields

| Field | Use |
|-------|-----|
| Duration | Waveform bounds, clamps for start/end |
| Channels | Routing matrix width |
| Sample rate | Display; resampler path as implemented |
| Bit depth | Display |
| Codec / format | Display and diagnostics |

Metadata is stored on the component when loaded in the inspector and serialised in the showfile for faster reopen.

## Related

- [Audio components](./audio-components.md)  
- [Licensing](../getting-started/licensing.md)  
