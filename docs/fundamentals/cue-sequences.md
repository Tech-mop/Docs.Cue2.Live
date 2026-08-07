---
sidebar_label: Cue sequences
title: Cue sequences
cue2_version: v0.1:StripyHat
description: Continue and Follow modes for automatic chaining.
---

# Cue sequences

Cue sequences let one GO start a chain of cues using **follow mode** and **post-wait**.

## Follow modes

| Mode | When the next sibling is armed | Then |
|------|--------------------------------|------|
| **None** | Never automatically | Operator must GO again |
| **Continue** | After this cue’s **pre-wait ends** (content phase starts) | Next waits this cue’s **post-wait**, then starts |
| **Follow** | When this cue’s **content completes** | Next waits this cue’s **post-wait**, then starts |

The “next” cue is always the **next entry at the same nested level** (root order or within a parent’s children).

## Timeline sketch

```text
Cue A  Follow=Continue  post=1.0
Cue B  Follow=Follow    post=0.0
Cue C  Follow=None

GO A:
  |--A pre--|--A content...
            ^ arm B, B waits 1.0s post from A, then B runs
                         ...B content ends
                                    ^ arm C immediately (post 0), C runs
```

## Active list behaviour

Armed “incoming” cues appear in the **active cues** area with a continue/follow lead-in timer before their own pre-wait/content. This makes long chains visible before they fire.

## Post-wait zero

- **Continue** + post-wait `0` → next starts when this cue’s content phase starts (after pre-wait).  
- **Follow** + post-wait `0` → next starts as soon as content completes.

## Design tips

1. Use **Continue** for overlapping stings that should leave together after a shared pre-wait.  
2. Use **Follow** for strictly serial steps (page turns, sequential announcements).  
3. Put **None** on the last cue of a chain.  
4. Remember nesting: siblings only — group boundaries matter.

## Related

- [Timing model](./timing.md)
- [Sequences tutorial](../tutorials/cue-sequences.md)
- [Playback & transport](./playback-transport.md)
