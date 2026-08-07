---
sidebar_label: Technical — Decode & buffers
title: Technical — Decode and buffers
cue2_version: v0.1:StripyHat
description: Prefetch, ring sizing, fill thresholds, and underruns.
---

# Technical — Decode and buffers

## Prefetch

After open or seek, the decoder primes **PrefetchMs** of PCM (mode-dependent: 400 / 800 / 1400 ms). This reduces the chance that the first GO or a scrub finds an empty ring.

## Ring sizing formula

```text
RecommendedRingMs = clamp(
  max(400, PrefetchMs * 2, TargetBufferMs * 3),
  400,
  10_000
)
```

| Mode | Prefetch | Target | Recommended ring |
|------|----------|--------|------------------|
| Prefer low latency | 400 | 50 | max(400, 800, 150) → **800 ms** |
| Balanced | 800 | 100 | max(400, 1600, 300) → **1600 ms** |
| Prefer stability | 1400 | 220 | max(400, 2800, 660) → **2800 ms** |

## Fill loop mental model

```text
loop:
  if sdl_queued_ms < LowWaterMs:
      mix frames from ring into sdl until ~TargetBufferMs queued
  sleep / wait for callback cadence
```

If the ring cannot supply samples (decode too slow, disk stall, CPU spike), the SDL queue drains → **underrun**.

## De-click ramp

On start/seek, a raised-cosine ramp of **DeclickRampMs** (0 disables) suppresses clicks from discontinuous PCM. This is orthogonal to fade-in duration on the component.

## Waveform generation

Waveform peaks are generated asynchronously (`MediaEngine` single-flight jobs, limited concurrency) for UI only. They are stripped from undo snapshots and regenerated on demand after restore.

## Failure modes

| Symptom | Likely stage |
|---------|----------------|
| Silence, no error | No device/patch; muted master; volume 0 |
| Startup media failure | FFmpeg natives missing |
| Crackles under load | Target buffer too small; raise stability |
| Delay after GO | Large prefetch + large device buffer; or pre-wait |
| Seek click | De-click 0 with discontinuous content |

## Related

- [Signal path](./technical-signal-path.md)  
- [Playback preferences](./playback-preferences.md)  
