---
sidebar_label: Output preferences
title: Video output preferences
description: Quality mode, preview scale, and vsync.
---

# Video output preferences

## Quality mode (house outputs)

| Mode | Prefetch frames | Low water | Max lateness | Max present/tick | Early tolerance |
|------|-----------------|-----------|--------------|------------------|-----------------|
| **Prefer quality** | 8 | 4 | 40 ms | 6 | 8 ms |
| **Balanced** (default) | 6 | 3 | 80 ms | 4 | 8 ms |
| **Prefer performance** | 3 | 1 | 120 ms | 2 | 12 ms |

- **Lateness:** frames later than max lateness vs the master clock may be dropped.  
- **Early tolerance:** a frame may present slightly early to absorb jitter.  

## Preview quality

Inspector preview scale only: **Full / Half / Quarter**. Never affects house outputs.

## VSync mode (output windows)

| Mode | Intent |
|------|--------|
| **Prefer VSync** (default) | Less tearing, more present latency |
| **Off** | Lower latency, possible tearing |
| **Low latency** | Mailbox/adaptive-style when the backend allows |

## Background colour

Solid colour behind layers on output windows (default black).

## Related

- [Technical decode & present](./technical-decode-and-present.md)  
- [Settings → Video output](../settings/video-output.md)  
