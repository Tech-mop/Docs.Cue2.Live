---
sidebar_label: OSC overview
title: OSC overview
description: Layers of OSC control in Cue2.
---

# OSC overview

Cue2 uses OSC in four complementary ways:

```text
1. OSC Input Map     → app actions (Go, Save, Undo…)
2. Built-in commands → /GoNum, /StopSelected, /Layer/…, queries…
3. Per-cue triggers  → exact address GO on a shell
4. OSC send comps    → cues emit messages on named connections
```

Enable **OSC listen** for inbound control. Configure **connections** for outbound.

## Factory Input Map paths (subset)

| Action | Default path |
|--------|--------------|
| Go | `/Go` |
| Stop all | `/StopAll` |
| Pause all | `/PauseAll` |
| Resume all | `/ResumeAll` |
| Select all | `/SelectAll` |
| Select next/previous | `/SelectNext`, `/SelectPrevious` |
| Save | `/Save` |
| Undo / Redo | `/Undo`, `/Redo` |

## Related

- [Command reference](./osc-command-reference.md)  
- [Remote GO tutorial](../tutorials/osc-go.md)  
