---
sidebar_label: Formats & images
title: Formats and still images
cue2_version: v0.1:StripyHat
description: Video and image extensions aligned with Cue2’s FFmpeg 8.x natives.
---

# Formats and still images

## How support works

Motion video and still images both use the **video component** pipeline and **FFmpeg** decode (frames to RGBA for present). File dialogs and drag-and-drop use:

| List | Role |
|------|------|
| `GlobalData.VideoFileFilters` | Motion / container media |
| `GlobalData.ImageFileFilters` | Still images (`IsImage = true`) |

Extension accept lists are only a **UI gate**. Decode needs a demuxer/decoder in the loaded FFmpeg natives.

### What FFmpeg this project actually ships

| Location | What it is today |
|----------|------------------|
| `bin/macos/` | FFmpeg **8.x** dylibs (often **Homebrew**-built; full GPL feature set when Homebrew deps resolve) |
| `bin/win64/` (and other trees) | FFmpeg **8.x** shared libs (full GPL-style build; e.g. libdav1d, libjxl, many native codecs) |

Lists below are aligned with **demuxers/decoders available in those full FFmpeg 8.x builds**, not a pure minimal LGPL subset. macOS Homebrew copies are **not portable** until install names/deps are rewritten—see the app repo `docs/export-packaging.md`.

Drop classification order: **audio → video → image**.

## Accepted video extensions

| Category | Extensions |
|----------|------------|
| **Common containers** | `.mp4`, `.m4v`, `.mov`, `.qt`, `.avi`, `.mkv`, `.webm`, `.flv`, `.f4v`, `.wmv`, `.asf`, `.ogv`, `.ogm`, `.rm`, `.rmvb`, `.divx`, `.xvid` |
| **Broadcast / tape / optical / interchange** | `.mpg`, `.mpeg`, `.mpe`, `.m1v`, `.m2v`, `.mp2v`, `.ts`, `.m2ts`, `.m2t`, `.mts`, `.vob`, `.mxf`, `.gxf`, `.lxf`, `.dv`, `.dif` |
| **Mobile / wrappers** | `.3gp`, `.3g2`, `.ismv`, `.y4m` |
| **Elementary / annex-B style** | `.h264`, `.264`, `.h265`, `.hevc`, `.265`, `.av1`, `.ivf` |
| **Legacy Windows TV** | `.wtv` |

### Intentionally omitted or constrained

| Item | Why |
|------|-----|
| `.dvr-ms` | No reliable dedicated demuxer string in this build’s demuxer list (older ASF-era recorder files are hit-or-miss) |
| `.nsv` / `.nut` / `.amv` / `.vro` | Rare for live playback; not prioritised in the accept list |
| Codec ≠ extension | ProRes / DNxHD / Hap usually live inside **MOV/MXF**—use those containers, not a fake extension |

### Practical notes (motion)

| Topic | Guidance |
|-------|----------|
| **Prefer for shows** | Codecs you have tested on the playback machine (H.264/H.265/AV1/VP9, ProRes/DNx in MOV/MXF when present) |
| **4K / multi-layer** | See [Output preferences](./output-preferences.md) |
| **Embedded audio** | [Embedded audio](./embedded-audio.md) |
| **Open failures** | Log shows the FFmpeg error (missing codec, corrupt file, incomplete elementary stream) |

## Accepted still-image extensions

Still images use the **video component** with `IsImage = true`.

| Category | Extensions |
|----------|------------|
| **Widespread** | `.png`, `.apng`, `.jpg`, `.jpeg`, `.jpe`, `.jfif`, `.bmp`, `.gif`, `.webp`, `.tif`, `.tiff`, `.tga`, `.svg` |
| **HDR / film stills** | `.exr`, `.hdr`, `.dpx`, `.dds` |
| **Modern still codecs** | `.avif`, `.jxl`, `.jp2`, `.j2k`, `.jpf` |
| **Netpbm / misc** | `.ico`, `.qoi`, `.pbm`, `.pgm`, `.ppm`, `.pnm`, `.pcx`, `.fits` |

### Intentionally omitted (this FFmpeg build)

| Extension | Why |
|-----------|-----|
| `.heic` / `.heif` | **No HEIF demuxer** in the project’s FFmpeg 8.x builds |
| `.jxr` | No demuxer/decoder path in this build |
| `.psd` | Only a pipe-oriented path; not treated as a reliable still import extension |
| `.cin` | Ambiguous (Phantom Cine vs Cineon); not mapped cleanly—use DPX/EXR for film stills |

### Still-image behaviour

| Behaviour | Detail |
|-----------|--------|
| Timeline | No start/end scrub of a media timeline |
| **Duration** | Hold time in seconds; **0** means until the cue/component is stopped |
| Layout / opacity | Same as motion video |
| Audio / subtitles | Forced off for stills |
| Animated GIF / APNG | Treated as **still holds**, not multi-frame motion video |

## Related

- [Video components](./video-components.md)
- [Audio formats & metadata](../audio/formats-and-metadata.md)
- [Embedded audio](./embedded-audio.md)
- [Subtitles](./subtitles.md)
- [Licensing](../getting-started/licensing.md)
- [Video troubleshooting](./troubleshooting.md)
