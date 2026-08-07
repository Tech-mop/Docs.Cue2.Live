---
sidebar_label: Playback preferences
title: Audio playback preferences
cue2_version: v0.1:StripyHat
description: Latency modes, de-click, and master volume.
---

# Audio playback preferences

Show-scoped audio present tuning lives under audio settings (and related general/show prefs).

## Latency mode

Soft presets map to concrete buffer targets used by standalone audio and video-embedded audio fill threads:

| Mode | Target buffer | Low-water | Prefetch | Intent |
|------|---------------|-----------|----------|--------|
| **Prefer low latency** | 50 ms | 25 ms | 400 ms | Snappier present; more underrun risk under load |
| **Balanced** (default) | 100 ms | 50 ms | 800 ms | Historical default balance |
| **Prefer stability** | 220 ms | 110 ms | 1400 ms | Glitch-resistant multi-cue playback |

### Ring capacity

Decoder PCM ring size (ms) is derived as:

```text
clamp( max(400, PrefetchMs × 2, TargetBufferMs × 3) , 400 , 10000 )
```

Example: Prefer stability → prefetch 1400 ms → recommended ring **2800 ms**.

## De-click

Raised-cosine ramp after start/seek. The present tuning struct accepts **0–100 ms**; show settings expose a practical UI range with default **8 ms** (min 0, max 50 in settings constants).

## Master volume

Session master gain (linear, default **1.0**). Applied in the mix stage for all cues. Mute may exist as runtime-only UI depending on build — master is the show-scoped scalar.

## Related

- [Technical: decode & buffers](./technical-decode-and-buffers.md)  
- [Settings → Audio](../settings/audio.md)  
