---
sidebar_label: Cue library
title: Cue library
description: User-scoped library of reusable cues.
---

# Cue library

The **cue library** stores reusable cue entries on **this machine**, not inside the showfile.

## Location

Library root: engine user data under the Cue2 library path (`user://library/` resolved to an absolute folder). A marker file identifies the format. Default folders are created automatically.

## What you can do

- Save the current cue (or selection workflow) into a library folder  
- Browse library entries in the **Library** inspector  
- Load an entry into the current session as a new cue  
- Optionally package media with library entries depending on manager options  

## Library vs show

| | Library | Showfile |
|--|---------|----------|
| Scope | Per user/machine | Per show |
| Moves with show folder? | No | Yes (if you copy it) |
| Undo | Library ops are separate from show history patterns | Document undo applies to show |

## Related

- [Cues](./cues.md)
- [Sessions](./sessions.md)
