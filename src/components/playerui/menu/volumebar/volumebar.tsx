import React from 'react'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { VolumeBarProps } from '@/types/player.types'

const thumbstyles = {
  appearance: 'none' as const,
  cursor: 'pointer',
  height: 12,
  width: 12,
  borderRadius: '50%',
  border: '1px solid',
}

const useStyles = makeStyles((theme: Theme) => ({
  volume: {
    zIndex: 100,
    height: 30,
    width: 30,
    marginLeft: 15,
    cursor: 'pointer',
  },
  seeker: {
    zIndex: 100,
    marginLeft: 15,
    background: theme.palette.secondary.dark,
    cursor: 'pointer',
    height: 2,
    width: 60,
    appearance: 'none' as const,
    userSelect: 'none' as const,
    top: 0,
    left: 0,
    transition: 'all 0.1s ease',
    '&::-webkit-slider-thumb': {
      ...thumbstyles,
      background: theme.palette.primary.main,
      borderColor: theme.palette.secondary.dark,
    },
    '&::-moz-range-thumb': {
      ...thumbstyles,
      background: theme.palette.primary.main,
      borderColor: theme.palette.secondary.dark,
    },
    '&::-ms-thumb': {
      ...thumbstyles,
      background: theme.palette.primary.main,
      borderColor: theme.palette.secondary.dark,
    },
    '&:focus': { outline: 'none' },
  },
}))

const Volumebar: React.FC<VolumeBarProps> = ({ setVolume, volume }) => {
  const classes = useStyles()
  return (
    <>
      <input
        className={classes.seeker}
        onChange={setVolume}
        type="range"
        step="any"
        min={0}
        max={1}
        value={volume}
      />
    </>
  )
}

export default Volumebar
