---
sidebar_label: Levels, pan & fades
title: Levels, pan, and fades
cue2_version: v0.1:StripyHat
description: Volume, equal-power pan, and fade in/out behaviour.
---

# Levels, pan, and fades

## Volume

Component **volume** is a linear multiplier in **0…1** space (UI may show percentage). It is applied together with the session **master volume** before pan and routing.

Live level changes (and OSC `/Volume…`) can fade over an optional duration without rewriting the programmed component until you commit an edit.

## Pan (equal-power)

For **stereo** sources, pan ∈ **[−1, +1]** uses **equal-power** gains:

- pan ≤ 0 → left = 1, right = cos(−pan · π/2)  
- pan > 0 → left = cos(pan · π/2), right = 1  

Center (`0`) keeps both channels at unity. Non-stereo layouts do not apply pan gains (effective gain 1 per channel).

## Fade in / fade out

| Field | When |
|-------|------|
| **Fade in** | From content start, ramp level up over N seconds |
| **Fade out** | Approaching content end (or stop with fade), ramp down |

Programmed fades are component properties. Transport **stop fade** uses the show-wide **Stop fade duration** (default 2.5 s) for stop-all style actions.

## De-click

Independent of artistic fades, the engine can apply a short **raised-cosine de-click ramp** after start/seek (default **8 ms**; settings UI clamps roughly **0–50 ms**). See [Playback preferences](./playback-preferences.md).

## Related

- [Technical mixing](./technical-mixing.md)  
- [Playback preferences](./playback-preferences.md)  
