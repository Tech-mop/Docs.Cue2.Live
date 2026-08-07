---
sidebar_label: OSC send
title: OSC send components
cue2_version: v0.1:StripyHat
description: Fire OSC messages from cues on named connections.
---

# OSC send components

Sends one OSC message when the cue executes.

| Field | Notes |
|-------|-------|
| Connection | Named show OSC connection id |
| Address | Path starting with `/` |
| Args text | Space-separated values, e.g. `1 0.5 "hello" true` |

Empty args send a path with no arguments. The connection object must resolve at fire time.

## Related

- [OSC connections](../networking/osc-connections.md)  
- [OSC overview](../networking/osc-overview.md)  
