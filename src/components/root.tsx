import React from 'react'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    display: 'flex',
    zIndex: -100,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: '#403031',
  },
}))

interface RootProps {
  children: React.ReactNode
}

const Root: React.FC<RootProps> = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

export default Root
