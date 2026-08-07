---
sidebar_label: Embedded audio
title: Embedded audio on video
cue2_version: v0.1:StripyHat
description: Playing audio streams attached to video components.
---

# Embedded audio on video

When a video file contains audio and **use embedded audio** is enabled (default for new components), Cue2 plays that audio through the **same audio present path** as standalone audio components: latency mode, de-click, master volume, and patch/direct assignment rules as configured on the component.

## Tips

- Route embedded audio to the same patch as your music cues for consistent FOH behaviour.  
- Disable embedded audio when a separate audio component should carry the track (avoid double playback).  

## Related

- [Audio signal path](../audio/technical-signal-path.md)  
- [Video components](./video-components.md)  
