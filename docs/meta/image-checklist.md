---
sidebar_class_name: hidden
unlisted: true
title: Image checklist
cue2_version: v0.1.1:StripyHat
description: Maintainer list of documentation screenshots to capture.
---

import Head from '@docusaurus/Head';

<Head>
  <meta name="robots" content="noindex, nofollow" />
</Head>

# Image checklist

Add PNG (or SVG) files under `static/img/docs/…` matching the paths below. Until a file exists, the page still builds; the image will 404 until you drop it in.

| ID | Path under `static/img/docs/` | Page | Shot notes |
|----|-------------------------------|------|------------|
| GS-02 | `getting-started/first-time.png` | install | First-time language welcome |
| MW-01 | `fundamentals/main-window-annotated.png` | main-window | Full main window, labels optional |
| MW-02 | `fundamentals/inspector-tabs.png` | inspector | Inspector with tab strip visible |
| CL-01 | `fundamentals/cuelist-columns.png` | cuelist | Cuelist header + a few shells |
| T-AUD-01 | `tutorials/zero-to-audio-01-empty.png` | zero-to-audio | Empty session |
| T-AUD-02 | `tutorials/zero-to-audio-02-drop.gif` | zero-to-audio | Drag audio from Finder onto cuelist |
| T-AUD-04 | `tutorials/zero-to-audio-04-go.gif` | zero-to-audio | GO — active cues progress |
| T-VID-01 | `tutorials/zero-to-video-01-canvas.png` | zero-to-video | Canvas editor with layer |
| T-VID-02 | `tutorials/zero-to-video-02-cue.png` | zero-to-video | Video component targeted |
| T-TXT-01 | `tutorials/zero-to-text-01.png` | zero-to-text | Text on layer |
| T-AUD-R-01 | `tutorials/audio-routing-01.png` | audio-routing | Patch + cue matrix |
| T-CTL-01 | `tutorials/control-cues-01.png` | control-cues | Control component card |
| T-BKP-01 | `tutorials/media-backup-01.png` | media-backup | Show folder with Audio/ |
| AUD-01 | `audio/waveform-inspector.png` | audio-components | Waveform with in/out |
| AUD-02 | `audio/output-patch-matrix.png` | output-patches | Full patch matrix |
| AUD-03 | `audio/cue-routing-matrix.png` | routing-matrix | Per-cue routing |
| VID-01 | `video/canvas-editor.png` | canvas-screens-layers | Canvas stage |
| NET-01 | `networking/osc-listen.png` | osc-listen | Listen panel + log |
| NET-02 | `networking/osc-input-map.png` | osc-input-map | Input map rows |
| SET-01 | `settings/settings-tree.png` | settings/index | Settings window tree |

When you add an image, keep filenames stable so markdown links do not break.
