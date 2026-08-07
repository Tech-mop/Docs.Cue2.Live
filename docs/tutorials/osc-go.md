---
sidebar_label: Remote GO with OSC
title: Tutorial — Remote GO with OSC
description: Enable OSC listen and fire GO from the network.
---

# Remote GO with OSC

## Steps

1. **Settings → OSC listen**: enable listening on the desired port.  
2. Confirm the machine firewall allows UDP/TCP as configured.  
3. Select a cue in Cue2.  
4. From any OSC client on the network, send a factory Input Map path such as **`/Go`** (see [OSC Input Map](../networking/osc-input-map.md)).  
5. Alternatively send a built-in such as **`/GoSelected`** or **`/GoNum 1`** (argument forms supported by the command parser).

<!-- IMAGE: tutorials/osc-go-01.png
     Caption: OSC listen panel with recent messages.
-->
![OSC listen](/img/docs/tutorials/osc-go-01.png)

## Tips

- Prefer **Input Map** for app-wide actions and **built-ins** for cue-addressed control.  
- Per-cue OSC triggers use exact address match on the shell.  
- Use `/ping` → expect `/pong` style query behaviour where implemented.

## Learn more

- [OSC overview](../networking/osc-overview.md)  
- [OSC command reference](../networking/osc-command-reference.md)  
