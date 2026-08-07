---
sidebar_label: Timing
title: Timing model
cue2_version: v0.1:StripyHat
description: Pre-wait, content duration, post-wait, and totals.
---

# Timing model

Every cue uses the same timing skeleton:

```text
|---- Pre-wait ----|======== Content ========|·· Post-wait ··|
                   ^                         ^
                   content phase starts      content completes
```

| Segment | Meaning |
|---------|---------|
| **Pre-wait** | Delay after the cue starts before components enter the content phase |
| **Content duration** | How long the content phase lasts (media, children, holds) |
| **Post-wait** | Used when **arming the next** cue in Continue/Follow — not a silent tail that blocks the operator by default |
| **Total duration** | Aggregate used in UI; looping audio may report open-ended totals |

## Where duration comes from

| Source | Behaviour |
|--------|-----------|
| Audio | `(end − start) × play count` (open-ended if looping) |
| Video | In/out span or loop/play count; **still images** use a user **hold duration** (`0` = until stopped) |
| Text | User duration (`0` = until stopped) |
| Control / OSC / MIDI / cue light | Typically instantaneous or fade-length based |
| Children | Nested cues contribute to parent duration calculations |

## Waveforms and the timeline

The **Timeline** inspector draws components on a time axis. Optional **timeline waveforms** are a show setting (default on). Waveform peak resolution is a general setting (default **4096** bins) and affects display, not playback quality.

## Related

- [Cue sequences](./cue-sequences.md)
- [Audio components](../audio/audio-components.md)
- [Video components](../video/video-components.md)
