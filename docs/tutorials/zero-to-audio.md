---
sidebar_label: Zero to audio
title: Tutorial — Zero to audio
description: Create a session, add an audio file, assign output, and GO.
---

# Zero to audio

Play a sound file with a single GO.

## What you need

- Cue2 running  
- An audio file (WAV, AIFF, MP3, etc. — anything FFmpeg can decode)  
- A working output device on your machine  

## Steps

### 1. Start a new session

File → **New Session** (or pick New from the launcher).

<!-- IMAGE: tutorials/zero-to-audio-01-empty.png
     Caption: Empty cuelist ready for media.
-->
![Empty session](/img/docs/tutorials/zero-to-audio-01-empty.png)

### 2. Add a file

Drag the audio file onto the cuelist (or create a cue and assign the file in the Audio inspector).

Cue2 creates a cue shell with an **audio component**, reads metadata, and can generate a waveform.

<!-- IMAGE: tutorials/zero-to-audio-02-dropped.png
     Caption: Cue after dropping an audio file.
-->
![Audio cue created](/img/docs/tutorials/zero-to-audio-02-dropped.png)

### 3. Assign audio output

Open the **Audio** inspector tab.

1. Open **Settings → Audio output patch** if you have no patch yet.  
2. Ensure the destination device is available/open.  
3. On the component, choose a **patch** (preferred) or **direct output** device.

<!-- IMAGE: tutorials/zero-to-audio-03-patch.png
     Caption: Audio component with output assigned.
-->
![Output assigned](/img/docs/tutorials/zero-to-audio-03-patch.png)

Without an assigned output, the cue will not be heard.

### 4. GO

Select the cue and press **Space** (or click GO).

Watch the **active cues** area for progress. Adjust volume on the component if needed.

<!-- IMAGE: tutorials/zero-to-audio-04-playing.png
     Caption: Cue playing in the active list.
-->
![Playing audio cue](/img/docs/tutorials/zero-to-audio-04-playing.png)

### 5. Stop

Press **Escape** (Stop all) or stop from the active list.

## What you learned

- Dropping media creates components on shells  
- Audio needs a patch or direct device  
- GO / Stop all drive transport  

## Next steps

- [Audio components](../audio/audio-components.md)  
- [Output patches](../audio/output-patches.md)  
- [Audio routing tutorial](./audio-routing.md)  
- [Technical signal path](../audio/technical-signal-path.md)  
