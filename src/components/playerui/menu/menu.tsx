import React from 'react'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import Time from './timer/time'
import Volumebar from './volumebar/volumebar'
import Coolbutton from './buttons/coolbutton'
import Fullscreenicon from './buttons/fscreenicon'
import Pauseicon from './buttons/pauseicon'
import Playicon from './buttons/playicon'
import Volumeicon from './buttons/volumeicon'
import { MenuProps } from '@/types/player.types'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
}))

const Menu: React.FC<MenuProps> = ({
  isPlaying,
  onPlayPause,
  onPlay,
  onPause,
  isMuted,
  toggleMuted,
  setVolume,
  volume,
  setFullscreen,
  isFullscreen,
  played,
  duration,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Coolbutton onClick={onPlay}>
        <Playicon />
      </Coolbutton>
      <Coolbutton onClick={onPause}>
        <Pauseicon />
      </Coolbutton>
      <Time played={played} duration={duration} />
      <Coolbutton onClick={toggleMuted}>
        <Volumeicon />
      </Coolbutton>
      <Coolbutton onClick={setFullscreen}>
        <Fullscreenicon />
      </Coolbutton>
    </div>
  )
}

export default Menu
