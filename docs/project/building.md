---
sidebar_label: Building from source
title: Building from source
cue2_version: v0.1:StripyHat
description: High-level notes for compiling Cue2.
---

# Building from source

Cue2 targets **Godot 4.6 Mono** with a C# project (`Cue2.csproj`).

## Typical steps

1. Install Godot 4.6.x **.NET** build and a compatible .NET SDK.  
2. Clone the application repository.  
3. Ensure platform **FFmpeg/SDL natives** are present under `bin/` (or as required by `NativeLibPaths`).  
4. Open the project in Godot or build with `dotnet build`.  
5. For exports, copy natives after Godot export using the packaging scripts under `tools/` — Godot does not embed FFmpeg into a single binary.

See the application README and `docs/export-packaging.md` in the app repo for authoritative detail.

## Related

- [System requirements](../getting-started/system-requirements.md)  
- [Licensing](../getting-started/licensing.md)  
