---
sidebar_class_name: hidden
unlisted: true
title: Image checklist
description: Maintainer list of documentation screenshots to capture.
---

# Image checklist

Add PNG (or SVG) files under `static/img/docs/…` matching the paths below. Until a file exists, the page still builds; the image will 404 until you drop it in.

| ID | Path under `static/img/docs/` | Page | Shot notes |
|----|-------------------------------|------|------------|
| GS-01 | `getting-started/launcher.png` | install | Launcher / open recent |
| GS-02 | `getting-started/first-time.png` | install | First-time language welcome |
| MW-01 | `fundamentals/main-window-annotated.png` | main-window | Full main window, labels optional |
| MW-02 | `fundamentals/inspector-tabs.png` | inspector | Inspector with tab strip visible |
| CL-01 | `fundamentals/cuelist-columns.png` | cuelist | Cuelist header + a few shells |
| T-AUD-01 | `tutorials/zero-to-audio-01-empty.png` | zero-to-audio | Empty session |
| T-AUD-02 | `tutorials/zero-to-audio-02-dropped.png` | zero-to-audio | Audio cue after drop |
| T-AUD-03 | `tutorials/zero-to-audio-03-patch.png` | zero-to-audio | Audio output assigned |
| T-AUD-04 | `tutorials/zero-to-audio-04-playing.png` | zero-to-audio | Active cue / GO |
| T-VID-01 | `tutorials/zero-to-video-01-canvas.png` | zero-to-video | Canvas editor with layer |
| T-VID-02 | `tutorials/zero-to-video-02-cue.png` | zero-to-video | Video component targeted |
| T-VID-03 | `tutorials/zero-to-video-03-output.png` | zero-to-video | Output window playing |
| T-TXT-01 | `tutorials/zero-to-text-01.png` | zero-to-text | Text on layer |
| T-SEQ-01 | `tutorials/cue-sequences-01.png` | cue-sequences | Two cues with Continue/Follow |
| T-GRP-01 | `tutorials/groups-01.png` | groups-and-nesting | Nested group |
| T-AUD-R-01 | `tutorials/audio-routing-01.png` | audio-routing | Patch + cue matrix |
| T-CAN-01 | `tutorials/multi-screen-01.png` | multi-screen-canvas | Two screens on canvas |
| T-OSC-01 | `tutorials/osc-go-01.png` | osc-go | OSC listen enabled |
| T-MIDI-01 | `tutorials/midi-trigger-01.png` | midi-trigger | Cue MIDI trigger fields |
| T-CTL-01 | `tutorials/control-cues-01.png` | control-cues | Control component card |
| T-BKP-01 | `tutorials/media-backup-01.png` | media-backup | Show folder with Audio/ |
| AUD-01 | `audio/waveform-inspector.png` | audio-components | Waveform with in/out |
| AUD-02 | `audio/output-patch-matrix.png` | output-patches | Full patch matrix |
| AUD-03 | `audio/cue-routing-matrix.png` | routing-matrix | Per-cue routing |
| VID-01 | `video/canvas-editor.png` | canvas-screens-layers | Canvas stage |
| VID-02 | `video/layout-modes.png` | layout | Fit / fill / stretch examples |
| VID-03 | `video/layer-properties.png` | canvas-screens-layers | Layer pos/size |
| NET-01 | `networking/osc-listen.png` | osc-listen | Listen panel + log |
| NET-02 | `networking/osc-input-map.png` | osc-input-map | Input map rows |
| SET-01 | `settings/settings-tree.png` | settings/index | Settings window tree |

When you add an image, keep filenames stable so markdown links do not break.
