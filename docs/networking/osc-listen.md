---
sidebar_label: OSC listen
title: OSC listen
description: Enable inbound OSC and monitor traffic.
---

# OSC listen

Turn on listening in **Settings → OSC listen**. Choose bind address/port as exposed by the UI.

<!-- IMAGE: networking/osc-listen.png
     Caption: OSC listen settings and message log.
-->
![OSC listen](/img/docs/networking/osc-listen.png)

Inbound messages are matched against:

1. Input Map bindings  
2. Built-in command handlers  
3. Per-cue OSC triggers  

Use the log/monitor to confirm paths and arguments.

## Related

- [OSC Input Map](./osc-input-map.md)  
- [Command reference](./osc-command-reference.md)  
