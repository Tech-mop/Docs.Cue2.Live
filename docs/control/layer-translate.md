---
sidebar_label: Layer translate
title: Translate layer
description: Animate canvas layer position and size from a control component.
---

# Translate layer

Animates a **target layer**’s position and/or size over a duration. Useful for simple moves without external video servers.

- Layer must exist in the canvas configuration.  
- Locked layers should be unlocked before automation, or moves will fail.  
- OSC can also set absolute pos/size instantly: `/Layer/{id}/pos`, `/Layer/{id}/size`.  

## Related

- [Canvas, screens & layers](../video/canvas-screens-layers.md)  
