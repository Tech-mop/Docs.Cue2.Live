---
sidebar_label: FAQ
title: FAQ
cue2_version: v0.1:StripyHat
description: Short answers to common questions.
---

# FAQ

### Why is there no sound?

Assign a patch or direct device, open the device, check master/volume, confirm the cue is armed. See [Audio troubleshooting](../audio/troubleshooting.md).

### Why is the output black?

Assign a target layer, ensure an output window is visible, check opacity. Use the canvas test pattern to verify screens.

### Can one cue play audio and video together?

Yes — add both components to the same shell.

### Does undo affect playback?

No. Undo restores document state only.

### Are keyboard shortcuts saved in the show?

No. They are app preferences. Per-cue hotkeys **are** saved in the show.

### How do I make a show portable?

Enable media backup and copy the whole show folder. See [Media backup](../tutorials/media-backup.md).

### What media formats does Cue2 support?

File dialogs and drag-and-drop accept a wide set of **extensions** (audio, video, still image). Decode is via **FFmpeg**, so the real codec must be present in the bundled libraries. Full lists and caveats:

- [Audio formats & metadata](../audio/formats-and-metadata.md)
- [Video formats & images](../video/formats-and-images.md)

Always test show-critical media on the playback machine with the same Cue2 build.

### Where is the OSC list?

[OSC command reference](../networking/osc-command-reference.md).
