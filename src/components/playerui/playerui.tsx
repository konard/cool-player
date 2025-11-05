import React from 'react'
import { Grid } from '@mui/material'
import Progressbar from './progressbar/progressbar'
import Menu from './menu/menu'
import Chat from './chat/chat'
import { ControlpanelProps } from '@/types/player.types'

const Controlpanel: React.FC<ControlpanelProps> = ({
  onSeekMouseDown,
  onSeekChange,
  onSeekMouseUp,
  isInterface,
  onPlayPause,
  onPlay,
  onPause,
  toggleMuted,
  setVolume,
  setFullscreen,
  isFullscreen,
  isPlaying,
  isMuted,
  played,
  loaded,
  duration,
  volume,
}) => {
  return (
    <Grid
      item
      container
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        transition: 'all 0.3s ease',
        opacity: isInterface ? 1 : 0,
      }}
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid
        item
        style={{
          height: 20,
          width: '100%',
        }}
      />
      <Grid
        item
        container
        style={{ width: '100%', position: 'relative', height: '70%' }}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <Chat />
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        style={{
          height: 70,
          width: '100%',
        }}
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ width: '95%', height: '20%', position: 'relative' }}
        >
          <Progressbar
            onSeekMouseDown={onSeekMouseDown}
            onSeekChange={onSeekChange}
            onSeekMouseUp={onSeekMouseUp}
            values={{ played, loaded, duration }}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            width: '100%',
            height: '80%',
          }}
        >
          <Menu
            setFullscreen={setFullscreen}
            isFullscreen={isFullscreen}
            isMuted={isMuted}
            toggleMuted={toggleMuted}
            isPlaying={isPlaying}
            onPlayPause={onPlayPause}
            onPlay={onPlay}
            onPause={onPause}
            setVolume={setVolume}
            volume={volume}
            played={played}
            duration={duration}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Controlpanel
