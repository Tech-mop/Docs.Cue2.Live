---
sidebar_label: Groups
title: Groups and hierarchy
cue2_version: v0.1:StripyHat
description: Nesting cues under group shells.
---

# Groups and hierarchy

## What is a group?

A **group** is a cue shell whose **child cues** nest underneath it in the cuelist. Groups organise large lists, roll up duration, and collapse detail you do not need mid-show.

```text
1.0  Open
2.0  Act I group          ← parent shell
  2.1  Lights fade
  2.2  Music in
  2.3  Video look
3.0  Interval
```

## Creating a group

1. Select one or more cues.  
2. **Edit → Group Selected** (default Ctrl+G).  
3. Cue2 inserts a new group shell at the anchor position and reparents the selection.

Drag-and-drop of multiple files can optionally wrap them in one group (file drop options).

## Expand and collapse

| Action | Default shortcut |
|--------|------------------|
| Expand one layer | `=` |
| Collapse one layer | `-` |
| Expand / collapse all | `.` |

Collapsed groups hide nested shells in the list without deleting them.

## Duration

A parent’s content duration accounts for **children** as part of the hierarchy model. Exact rollup follows the playback engine’s rules for nested active cues — treat the timeline inspector as ground truth for complex nests.

## Nesting and sequences

**Continue / Follow** chain to the **next sibling at the same nesting level**, not into or out of arbitrary parents automatically. Design sequences with hierarchy in mind. See [Cue sequences](./cue-sequences.md).

## Related

- [Groups tutorial](../tutorials/groups-and-nesting.md)
- [Cuelist](./cuelist.md)
