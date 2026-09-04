export const SHOT_DURATION = 15 // seconds

export const SHOT_STATUS = {
  DRAFT: 'draft',
  READY: 'ready',
  QUEUED: 'queued',
  GENERATING: 'generating',
  COMPLETED: 'completed',
  FAILED: 'failed'
}

export const AUDIO_TRACK_TYPES = {
  DIALOGUE: 'dialogue',
  VOICE: 'voice',
  MUSIC: 'music',
  AMBIENT: 'ambient',
  SFX: 'sfx'
}

export const EXPORT_FORMATS = {
  MP4: 'mp4',
  WEBM: 'webm'
}

export const RESOLUTIONS = ['720p', '1080p', '2K', '4K']
export const ASPECT_RATIOS = ['16:9', '9:16', '1:1', '4:3']