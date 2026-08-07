---
sidebar_label: Armed & status
title: Armed and status behaviour
cue2_version: v0.1:StripyHat
description: Arming, skip-if-disarmed, and issue indicators.
---

# Armed and status behaviour

## Armed

| State | GO behaviour |
|-------|----------------|
| Armed | Plays content (after pre-wait) |
| Disarmed | Does not play content; advances playhead |

Triggers (hotkey, OSC, MIDI, clock) also require armed.

## Skip if disarmed

When disarmed **and** skip-if-disarmed is true, playhead advancement after a prior GO **bypasses** this cue instead of standing on it.

## Only one active instance

When true, a new GO hard-stops existing instances of that cue before starting another.

## Issue indicators

Shell rows can show an issue icon when media or routing is incomplete. Fix the inspector fields; the marker clears when healthy.
