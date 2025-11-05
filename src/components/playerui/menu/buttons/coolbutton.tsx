import React, { useState } from 'react'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { CoolButtonProps } from '@/types/player.types'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    zIndex: 210,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 46,
    height: 46,
    borderRadius: '50%',
    background: 'transparent',
    cursor: 'pointer',
  },
  icon: {
    position: 'absolute',
    zIndex: 200,
    height: 34,
    width: 34,
    fill: theme.palette.secondary.dark,
    stroke: theme.palette.secondary.dark,
    strokeWidth: 2,
    cursor: 'pointer',
    transition: 'all 0.3s ease-out',
  },
  shadowlayer: {
    position: 'absolute',
    zIndex: 200,
    height: 36,
    width: 36,
    borderRadius: '50%',
    opacity: 1,
    boxShadow: `0 0 8px ${theme.palette.secondary.dark},
    0 0 10px 3px ${theme.palette.primary.light}, 0 0 20px ${theme.palette.primary.light}`,
    transition: 'all 0.3s ease-out',
  },
  glowlayer: {
    position: 'absolute',
    zIndex: 100,
    height: 36,
    width: 36,
    borderRadius: '50%',
    boxShadow: `0 -150px 70px -120px teal inset,
    0 -220px 70px -120px yellowgreen inset,
    0 -280px 70px -120px gold inset`,
    animation: '$glow 6s linear infinite',
    filter: 'blur(8px)',
  },
  '@keyframes glow': {
    '50%': {
      background: 'darkviolet',
      boxShadow:
        '0 -140px 70px -120px mediumorchid inset, 0 -210px 70px -120px teal inset, 0 -280px 70px -120px plum inset',
    },
  },
}))

const Coolbutton: React.FC<CoolButtonProps> = ({ onClick, children }) => {
  const [isHovered, setHover] = useState(false)
  const classes = useStyles()
  return (
    <div
      className={classes.container}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseUp={() => setHover(false)}
    >
      <div className={classes.shadowlayer} style={{ opacity: isHovered ? 0.6 : 0 }} />
      <svg
        className={classes.icon}
        style={{ height: isHovered ? 36 : 34, width: isHovered ? 36 : 34 }}
        viewBox="0 0 52 52"
        preserveAspectRatio="xMinYMin meet"
        version="1.1"
      >
        {children}
      </svg>
      <div className={classes.glowlayer} />
    </div>
  )
}

export default Coolbutton
