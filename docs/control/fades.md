---
sidebar_label: Fades
title: Control fades
cue2_version: v0.1:StripyHat
description: Fade volume, opacity, pan, or a matrix cell.
---

# Control fades

**Fade** control components animate **one** property. Use multiple components for parallel fades.

## Properties

| Property | Domain |
|----------|--------|
| **Volume** | Audio and/or video embedded audio |
| **Opacity** | Video (0–100% UI space) |
| **Pan** | Stereo pan −1…1 |
| **Routing matrix** | Single crosspoint cell |

## Modes

| Mode | Meaning |
|------|---------|
| **Absolute** | Fade to a specified level |
| **Relative** | Fade by an offset from the current level |

Duration is part of the component configuration (seconds).

## Related

- [Levels, pan & fades](../audio/levels-and-fades.md)  
