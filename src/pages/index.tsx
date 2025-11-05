import React, { useState, useRef } from 'react'
import { Grid } from '@mui/material'
import Root from '@/components/root'
import ReactPlayer from 'react-player'
import Controlpanel from '@/components/playerui/playerui'
import screenfull from 'screenfull'
import { PlayerState } from '@/types/player.types'

const Coolplayer: React.FC = () => {
  const [state, setState] = useState<PlayerState>({
    isInterface: true,
    isFullscreen: false,
    isPlaying: true,
    isMuted: true,
    isSeeking: false,
    volume: 0.4,
    played: 0,
    loaded: 0,
    duration: 0,
  })

  const playerRef = useRef<ReactPlayer>(null)

  const toggleInterface = () => {
    setState((prev) => ({ ...prev, isInterface: true }))
  }

  const onPlayPause = () => {
    setState((prev) => ({ ...prev, isPlaying: !prev.isPlaying }))
  }

  const onPlay = () => {
    setState((prev) => ({ ...prev, isPlaying: true }))
  }

  const onPause = () => {
    setState((prev) => ({ ...prev, isPlaying: false }))
  }

  const toggleMuted = () => {
    setState((prev) => ({ ...prev, isMuted: !prev.isMuted }))
  }

  const setVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, volume: parseFloat(e.target.value) }))
  }

  const setFullscreen = () => {
    if (screenfull.isEnabled) {
      const element = document.getElementById('fullscreendiv')
      if (element) {
        screenfull.toggle(element)
        setState((prev) => ({ ...prev, isFullscreen: !prev.isFullscreen }))
      }
    }
  }

  const onSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, played: Math.floor(parseFloat(e.target.value)) }))
  }

  const onSeekMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, isSeeking: true }))
  }

  const onSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, isSeeking: false }))
    if (playerRef.current) {
      playerRef.current.seekTo(
        parseFloat((e.target as HTMLInputElement).value)
      )
    }
  }

  const onDuration = (duration: number) => {
    console.log('onDuration', duration)
    setState((prev) => ({ ...prev, duration }))
  }

  const onProgress = (progress: {
    playedSeconds: number
    loadedSeconds: number
  }) => {
    if (!state.isSeeking) {
      setState((prev) => ({
        ...prev,
        played: Math.floor(progress.playedSeconds),
        loaded: Math.floor(progress.loadedSeconds),
      }))
    }
  }

  const {
    isPlaying,
    volume,
    isMuted,
    played,
    loaded,
    duration,
    isFullscreen,
    isInterface,
  } = state

  return (
    <Root>
      <Grid
        style={{ height: '100%', width: '100%', position: 'relative' }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          container
          style={{ position: 'absolute', height: '100%', width: '100%' }}
        >
          <div
            id="fullscreendiv"
            style={{ height: '100%', width: '100%', position: 'relative' }}
            onClick={toggleInterface}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                zIndex: 11,
                position: 'absolute',
              }}
              onClick={onPlayPause}
              onDoubleClick={setFullscreen}
            />
            <ReactPlayer
              ref={playerRef}
              style={{ zIndex: -1, position: 'absolute' }}
              height="100%"
              width="100%"
              url="https://www.youtube.com/watch?v=2uQzojftb5M"
              playing={isPlaying}
              volume={volume}
              muted={isMuted}
              onPlay={onPlay}
              onPause={onPause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={(e) => console.log('onSeek', e)}
              onEnded={() => console.log('onEnded')}
              onError={(e) => console.log('onError', e)}
              onProgress={onProgress}
              onDuration={onDuration}
            />
            <Controlpanel
              isInterface={isInterface}
              onPlayPause={onPlayPause}
              onPlay={onPlay}
              onPause={onPause}
              onSeekMouseDown={onSeekMouseDown}
              onSeekChange={onSeekChange}
              onSeekMouseUp={onSeekMouseUp}
              toggleMuted={toggleMuted}
              setVolume={setVolume}
              setFullscreen={setFullscreen}
              isFullscreen={isFullscreen}
              isPlaying={isPlaying}
              isMuted={isMuted}
              played={played}
              loaded={loaded}
              duration={duration}
              volume={volume}
            />
          </div>
        </Grid>
      </Grid>
    </Root>
  )
}

export default Coolplayer
