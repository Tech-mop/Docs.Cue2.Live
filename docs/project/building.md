---
sidebar_label: Building from source
title: Building from source
cue2_version: v0.1:StripyHat
description: High-level notes for compiling Cue2.
---

# Building from source

Cue2 targets **Godot 4.7.1 Mono** with a C# project (`Cue2.csproj`).

## Typical steps

1. Install Godot 4.7.1 **.NET** build and a compatible .NET 8 SDK.  
2. Clone the application repository.  
3. Ensure platform natives are present under `bin/{win64,winarm64,macos,linux64,linuxarm64}/`:
   - **FFmpeg** shared libraries (decode)
   - **RtMidi** (`rtmidi.dll` / `librtmidi.dylib` / `librtmidi.so`)
   - Rebuild RtMidi with `python tools/build-rtmidi-natives.py` if those files are missing  
4. Open the project in Godot or build with `dotnet build`.  
5. For exports, copy natives after Godot export using `tools/copy-natives-for-export.ps1` or `tools/copy-natives-for-export.sh` — Godot does not embed FFmpeg or RtMidi into a single binary.

See the application README and `docs/export-packaging.md` in the app repo for authoritative detail.

## Related

- [System requirements](../getting-started/system-requirements.md)  
- [Licensing](../getting-started/licensing.md)  
