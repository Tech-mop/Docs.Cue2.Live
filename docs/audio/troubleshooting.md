---
sidebar_label: Troubleshooting
title: Audio troubleshooting
cue2_version: v0.1:StripyHat
description: Common audio problems and fixes.
---

# Audio troubleshooting

| Problem | Checks |
|---------|--------|
| **No sound** | Component has patch or direct device; device open; master/volume &gt; 0; OS mixer not muted; cue armed |
| **Wrong outputs** | Patch matrix mapping; cue routing matrix; correct device names after moving machines |
| **Crackles / dropouts** | Set latency mode to Prefer stability; reduce simultaneous heavy decodes; check disk I/O |
| **Late GO** | Pre-wait; large buffers; cold decode — use Load/preload; Prefer low latency only if stable |
| **Clicks on start/seek** | Increase de-click ms; avoid zero-length artistic fade with discontinuous edits |
| **Missing file** | Check File Presence; media backup paths; relative vs absolute paths |
| **FFmpeg errors in log** | Natives missing or architecture mismatch — reinstall package |

## Related

- [Playback preferences](./playback-preferences.md)  
- [Technical decode & buffers](./technical-decode-and-buffers.md)  
