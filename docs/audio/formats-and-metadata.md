---
sidebar_label: Formats & metadata
title: Formats and metadata
cue2_version: v0.1:StripyHat
description: Audio extensions aligned with Cue2’s FFmpeg 8.x natives, plus metadata fields.
---

# Formats and metadata

## How support works

Cue2 decodes audio through **FFmpeg** shared libraries loaded at runtime from `bin/{platform}/` (see packaging notes in the app repo). File browsers and drag-and-drop only accept extensions listed in `GlobalData.AudioFileFilters`. Opening still requires a demuxer **and** decoder for the real container/codec inside the file.

### What FFmpeg this project actually ships

| Location | What it is today |
|----------|------------------|
| `bin/macos/` | FFmpeg **8.x** dylibs (often **Homebrew**-built / absolute install names; full GPL feature set when deps resolve) |
| `bin/win64/` (and other Windows/Linux trees) | FFmpeg **8.x** shared libs (full build with GPL options; e.g. libdav1d, many native decoders) |

Cue2’s *licensing intent* for redistribution is **LGPL-compatible** dynamic linking (see [Licensing](../getting-started/licensing.md)). The accept lists below match **demuxers/decoders present in the full FFmpeg 8.x builds currently in `bin/`**, verified against that class of build—not a theoretical “every format FFmpeg has ever supported,” and not a pure minimal LGPL matrix.

Always test show-critical codecs on the **playback machine** with the **same** Cue2 build.

**Not audio media here:** MIDI (`.mid` / `.midi`) uses the [MIDI](../networking/midi-overview.md) subsystem.

## Accepted audio extensions

These extensions appear in the audio file dialog and are classified as **Audio** on drop (checked before video/image). Lists stay **disjoint** from video/image so drop routing stays unambiguous.

| Category | Extensions |
|----------|------------|
| **PCM / lossless** | `.wav`, `.wave`, `.w64`, `.aiff`, `.aif`, `.aifc`, `.flac`, `.alac`, `.ape`, `.wv`, `.tta`, `.caf` |
| **Lossy / common delivery** | `.mp3`, `.mp2`, `.mpa`, `.aac`, `.m4a`, `.m4b`, `.ogg`, `.oga`, `.opus`, `.wma`, `.spx` |
| **Broadcast / surround elementary** | `.ac3`, `.eac3`, `.ec3`, `.dts`, `.dtshd`, `.truehd`, `.thd`, `.mlp` |
| **Other / speech / DSD** | `.mka`, `.au`, `.snd`, `.ra`, `.amr`, `.awb`, `.gsm`, `.3ga`, `.voc`, `.dsf` |

### Intentionally omitted (not realistic for this build’s open path)

| Extension / family | Why |
|--------------------|-----|
| Bare `.pcm` | Raw PCM needs sample format/rate options; `avformat` cannot probe from path alone |
| `.bwf` / `.rf64` as separate types | No dedicated demuxers in this build; Broadcast Wave / RF64 are normally still **`.wav`** |
| `.dff` | No DFF demuxer in this FFmpeg; use **`.dsf`** when DSD is required |
| Audio-only `.mp4` / `.mkv` / `.webm` | Those extensions are **video** filters; use `.m4a` / `.mka` or a video component with audio |

### Practical notes

| Topic | Guidance |
|-------|----------|
| **Prefer for shows** | WAV / AIFF / CAF / FLAC when scrub reliability and low surprise matter |
| **Multi-channel** | Channel count from metadata drives the cue routing matrix width |
| **Containers vs codecs** | Extension ≠ codec (e.g. `.m4a` may be AAC or ALAC). Check the log if open fails |
| **DSD (`.dsf`)** | Demuxer present; conversion path depends on the build—validate before a show |

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
- [Video formats & images](../video/formats-and-images.md)
- [Licensing](../getting-started/licensing.md)
- [Audio troubleshooting](./troubleshooting.md)
