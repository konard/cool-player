export interface PlayerState {
  isInterface: boolean
  isFullscreen: boolean
  isPlaying: boolean
  isMuted: boolean
  isSeeking: boolean
  volume: number
  played: number
  loaded: number
  duration: number
}

export interface ProgressValues {
  played: number
  loaded: number
  duration: number
}

export interface ProgressbarProps {
  onSeekMouseDown: (e: React.MouseEvent<HTMLInputElement>) => void
  onSeekChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSeekMouseUp: (e: React.MouseEvent<HTMLInputElement>) => void
  values: ProgressValues
}

export interface MenuProps {
  setFullscreen: () => void
  isFullscreen: boolean
  isMuted: boolean
  toggleMuted: () => void
  isPlaying: boolean
  onPlayPause: () => void
  onPlay: () => void
  onPause: () => void
  setVolume: (e: React.ChangeEvent<HTMLInputElement>) => void
  volume: number
  played: number
  duration: number
}

export interface ControlpanelProps {
  onSeekMouseDown: (e: React.MouseEvent<HTMLInputElement>) => void
  onSeekChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSeekMouseUp: (e: React.MouseEvent<HTMLInputElement>) => void
  isInterface: boolean
  onPlayPause: () => void
  onPlay: () => void
  onPause: () => void
  toggleMuted: () => void
  setVolume: (e: React.ChangeEvent<HTMLInputElement>) => void
  setFullscreen: () => void
  isFullscreen: boolean
  isPlaying: boolean
  isMuted: boolean
  played: number
  loaded: number
  duration: number
  volume: number
}

export interface VolumeBarProps {
  setVolume: (e: React.ChangeEvent<HTMLInputElement>) => void
  volume: number
}

export interface CoolButtonProps {
  onClick: () => void
  children: React.ReactNode
}
