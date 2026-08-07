---
sidebar_label: Control components
title: Control components
description: Transport and automation actions targeting other cues.
---

# Control components

A **control component** runs when its parent cue fires and applies an action to a **target cue** (or a layer, for translate).

## Actions

| Action | Effect |
|--------|--------|
| **GO** | Start the target cue’s sequence |
| **Pause** | Pause a playing instance |
| **Stop** | Stop a playing instance |
| **Resume** | Resume a paused instance |
| **Start now** | Skip continue/follow lead-in and pre-wait |
| **Fade** | Animate one property — see [Fades](./fades.md) |
| **Seek** | Seek media — see [Seek](./seek.md) |
| **Translate layer** | Animate layer geometry — see [Layer translate](./layer-translate.md) |

## Targeting

Resolve order:

1. **Target cue id** if set  
2. Else **target cue number**  

Multiple control components on one shell run independently (parallel intents).

## Related

- [Control cues tutorial](../tutorials/control-cues.md)  
- [Playback transport](../fundamentals/playback-transport.md)  
