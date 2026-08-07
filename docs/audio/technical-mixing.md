---
sidebar_label: Technical — Mixing
title: Technical — Mixing engine
description: AudioMixMatrix rules for volume, pan, routing, and patches.
---

# Technical — Mixing engine

`AudioMixMatrix` is a pure float PCM utility (no Godot/SDL dependency) used by live playback.

## Per-sample signal flow

```text
source[frame, ch]
  × componentVolume
  × masterVolume
  × panGain[ch]          // stereo only
  → route through CuePatch matrix into bus gains
  → map buses through AudioOutputPatch to device channels
  → sum into output[frame, outCh]
```

## Pan

Equal-power stereo balance; see [Levels, pan & fades](./levels-and-fades.md). `GetInputPanGain` returns 1 for non-stereo layouts.

## Routing matrix

When a `CuePatch` is present, source channels are combined into patch buses by the matrix coefficients. Missing routing falls back to straightforward channel mapping behaviour defined in the mix implementation.

## Output patch vs direct

| Mode | Behaviour |
|------|-----------|
| **Patch** | Uses patch id/object to map logical outs to device channels by name |
| **Direct** | Writes to the named device stream’s channels without patch object mapping |
| **Neither** | No audible output (assignment incomplete) |

## Multi-cue summing

Each active playback mixes into shared device buffers. There is no automatic bus compressor — peak management is operator-side (levels, fewer simultaneous cues, headroom).

## Control interaction

Runtime fades from control components / OSC adjust effective levels on active instances. Programmed component volume remains the document value unless the inspector commits a change.

## Related

- [Signal path](./technical-signal-path.md)  
- [Cue routing matrix](./routing-matrix.md)  
