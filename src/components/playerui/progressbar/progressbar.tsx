import React, { useState } from 'react'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material'
import { ProgressbarProps, ProgressValues } from '@/types/player.types'

const normalize = (value: number, max: number): number => (value * 100) / max

const thumbstyles = {
  zIndex: 200,
  appearance: 'none' as const,
  cursor: 'pointer',
  height: 12,
  width: 12,
  borderRadius: '50%',
  border: 'none',
  transition: 'all 0.3s ease',
}

const useStyles = makeStyles((theme: Theme) => ({
  seeker: {
    position: 'relative' as const,
    background: 'transparent',
    boxSizing: 'border-box' as const,
    cursor: 'pointer',
    height: 6,
    width: '100%',
    appearance: 'none' as const,
    userSelect: 'none' as const,
    zIndex: 100,
    '&::-webkit-slider-thumb': {
      ...thumbstyles,
      boxShadow: `0 0 8px 3px ${theme.palette.primary.dark},
      inset 0 0 6px 4px ${theme.palette.primary.light}`,
      background: theme.palette.primary.main,
      '&:hover': {
        boxShadow: `0 0 15px 5px ${theme.palette.primary.dark},
      inset 0 0 10px 5px ${theme.palette.primary.light}`,
      },
    },
    '&::-moz-range-thumb': {
      ...thumbstyles,
      boxShadow: `0 0 8px 3px ${theme.palette.primary.dark},
      inset 0 0 6px 4px ${theme.palette.primary.light}`,
      background: theme.palette.primary.main,
      '&:hover': {
        boxShadow: `0 0 15px 5px ${theme.palette.primary.dark},
      inset 0 0 10px 5px ${theme.palette.primary.light}`,
      },
    },
    '&::-ms-thumb': {
      ...thumbstyles,
      boxShadow: `0 0 8px 3px ${theme.palette.primary.dark},
      inset 0 0 6px 4px ${theme.palette.primary.light}`,
      background: theme.palette.primary.main,
      '&:hover': {
        boxShadow: `0 0 15px 5px ${theme.palette.primary.dark},
      inset 0 0 10px 5px ${theme.palette.primary.light}`,
      },
    },
    '&:focus': { outline: 'none' },
  },
  played: {
    zIndex: 90,
    background: theme.palette.primary.main,
    borderRadius: 10,
    height: 2,
    width: (values: ProgressValues) => `${normalize(values.played, values.duration)}%`,
  },
  loaded: {
    borderRadius: 10,
    zIndex: 89,
    background: theme.palette.secondary.dark,
    height: 2,
    width: (values: ProgressValues) => `${normalize(values.loaded, values.duration)}%`,
    opacity: 0.7,
  },
  none: {
    borderRadius: 10,
    zIndex: 88,
    background: theme.palette.secondary.light,
    height: 2,
    width: '100%',
    opacity: 0.7,
  },
}))

const Progressbar: React.FC<ProgressbarProps> = ({ values, ...props }) => {
  const [isHovered, setHover] = useState(false)
  const classes = useStyles(values)
  return (
    <>
      <Grid item container style={{ position: 'absolute' }}>
        <input
          onMouseDown={props.onSeekMouseDown}
          onChange={props.onSeekChange}
          onMouseUp={props.onSeekMouseUp}
          className={classes.seeker}
          type="range"
          step="any"
          min={0}
          max={values.duration}
          value={values.played}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </Grid>
      <Grid item container style={{ position: 'absolute' }}>
        <div
          className={classes.played}
          style={{ height: isHovered ? 4 : 2, opacity: isHovered ? 1 : 0.7 }}
        />
      </Grid>
      <Grid item container style={{ position: 'absolute' }}>
        <div
          className={classes.loaded}
          style={{ height: isHovered ? 4 : 2, opacity: isHovered ? 1 : 0.7 }}
        />
      </Grid>
      <Grid item container style={{ position: 'absolute' }}>
        <div
          className={classes.none}
          style={{ height: isHovered ? 4 : 2, opacity: isHovered ? 1 : 0.7 }}
        />
      </Grid>
    </>
  )
}

export default Progressbar
