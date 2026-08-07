---
sidebar_label: Showfile format
title: Showfile format
description: .c2 format versioning and migration philosophy.
---

# Showfile format

Cue2 showfiles use extension **`.c2`**.

## Version keys

| Key | Role |
|-----|------|
| `formatVersion` | Integer schema version (current **1**) |
| `appVersion` | Semantic app version of last authoritative save |
| `appVersionFull` | Human-readable version |
| `openedByAppVersion` | Diagnostic when opened without claiming schema |

Migrations run when an older schema is loaded into a newer app that knows how to upgrade. Opening a **newer** schema on an older app may prompt confirmation without rewriting `formatVersion`.

## Related

- [Sessions](../fundamentals/sessions.md)  
- [Versioning](../project/versioning.md)  
