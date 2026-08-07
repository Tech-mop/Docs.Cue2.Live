---
sidebar_label: OSC Input Map
title: OSC Input Map
cue2_version: v0.1:StripyHat
description: Map OSC addresses to project actions.
---

# OSC Input Map

Show-scoped map from OSC address patterns to **Input Map actions** (Go, SaveSession, Undo, …).

<!-- IMAGE: networking/osc-input-map.png
     Caption: OSC Input Map rows.
-->
![OSC Input Map](/img/docs/networking/osc-input-map.png)

| Field | Meaning |
|-------|---------|
| Has binding | Enabled |
| Address | Case-sensitive path |
| Match args | When true, argument string must match |
| Args display | Serialized args for matching |

History key: `OscInputMap`.

## Related

- [Keyboard shortcuts](../getting-started/keyboard-shortcuts.md) (same action names)  
