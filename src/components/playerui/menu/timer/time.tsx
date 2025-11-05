import React from 'react'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import getTimeFromSeconds from './timefromseconds'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    zIndex: 200,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    cursor: 'default',
  },
  time: {
    fontFamily: 'Digital7',
    fontSize: 28,
    color: theme.palette.primary.light,
    opacity: 0.6,
    textShadow: `
      0 0 5px ${theme.palette.primary.light},
      0 0 10px ${theme.palette.primary.light},
      0 0 20px ${theme.palette.primary.light},
      0 0 40px ${theme.palette.primary.main},
      0 0 80px ${theme.palette.primary.main},
      0 0 90px ${theme.palette.primary.main},
      0 0 20px ${theme.palette.primary.main},
      0 0 30px ${theme.palette.primary.main}`,
  },
  dots: {
    fontFamily: 'Digital7',
    fontSize: 30,
    zIndex: 200,
    color: theme.palette.secondary.main,
    textShadow: `
      0 0 5px ${theme.palette.secondary.main},
      0 0 10px ${theme.palette.secondary.main},
      0 0 20px ${theme.palette.secondary.main},
      0 0 40px ${theme.palette.secondary.main},
      0 0 80px ${theme.palette.secondary.main},
      0 0 90px ${theme.palette.secondary.main},
      0 0 30px ${theme.palette.secondary.main},
      0 0 20px ${theme.palette.secondary.main}`,
  },
}))

interface TimeProps {
  played: number
  duration: number
}

const Time: React.FC<TimeProps> = ({ played, duration }) => {
  const classes = useStyles()
  const playedtimeset = getTimeFromSeconds(played)
  const durationtimeset = getTimeFromSeconds(duration)
  return (
    <div className={classes.container}>
      <span className={classes.time}>
        {`${playedtimeset.hours >= 10 ? playedtimeset.hours : `0${playedtimeset.hours}`}`}
      </span>
      <span className={classes.dots}>:</span>
      <span className={classes.time}>
        {`${
          playedtimeset.minutes >= 10
            ? playedtimeset.minutes
            : `0${playedtimeset.minutes}`
        }`}
      </span>
      <span className={classes.dots}>:</span>
      <span className={classes.time}>
        {`${
          playedtimeset.seconds >= 10
            ? playedtimeset.seconds
            : `0${playedtimeset.seconds}`
        }`}
      </span>
      <span className={classes.dots} style={{ fontSize: 20 }}>
        /
      </span>
      <span className={classes.time}>
        {`${
          durationtimeset.hours >= 10
            ? durationtimeset.hours
            : `0${durationtimeset.hours}`
        }`}
      </span>
      <span className={classes.dots}>:</span>
      <span className={classes.time}>
        {`${
          durationtimeset.minutes >= 10
            ? durationtimeset.minutes
            : `0${durationtimeset.minutes}`
        }`}
      </span>
      <span className={classes.dots}>:</span>
      <span className={classes.time}>
        {`${
          durationtimeset.seconds >= 10
            ? durationtimeset.seconds
            : `0${durationtimeset.seconds}`
        }`}
      </span>
    </div>
  )
}

export default Time
