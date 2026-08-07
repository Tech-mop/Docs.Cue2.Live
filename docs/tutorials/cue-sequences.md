---
sidebar_label: Building a sequence
title: Tutorial — Building a sequence
cue2_version: v0.1:StripyHat
description: Chain cues with Continue and Follow.
---

# Building a sequence

Chain three cues so one GO runs the lot.

## Steps

1. Create three cues: A, B, C (empty shells are fine).  
2. On **A**, set **Follow = Continue**, **Post-wait = 1.0**.  
3. On **B**, set **Follow = Follow**, **Post-wait = 0**.  
4. On **C**, leave **Follow = None**.  
5. Optionally give A and B short pre-waits so you can see the active list timers.  
6. Select **A** and GO.

<!-- IMAGE: tutorials/cue-sequences-01.png
     Caption: Three cues with Continue / Follow modes visible.
-->
![Sequence modes in the cuelist](/img/docs/tutorials/cue-sequences-01.png)

## Observe

- After A’s pre-wait, B is armed with a 1 s lead-in, then B’s content runs.  
- When B’s content ends, C starts immediately.  

## Learn more

- [Cue sequences (reference)](../fundamentals/cue-sequences.md)  
- [Timing model](../fundamentals/timing.md)  
