import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    height: '100%',
    width: '100%',
    border: '1px solid',
    boxSizing: 'border-box' as const,
    wordWrap: 'break-word' as const,
    whiteSpace: 'pre-wrap' as const,
    overflowY: 'auto' as const,
    flexWrap: 'nowrap' as const,
    zIndex: 1,
    borderColor: theme.palette.secondary.light,
    padding: theme.spacing(1),
  },
}))

interface Message {
  id: number
  name: string | number
  text: string
}

interface MessagesProps {
  messages: Message[]
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  const classes = useStyles()
  return (
    <div className={classes.paper}>
      <Grid container direction="column" justifyContent="flex-start">
        {messages.map((message) => (
          <Grid item key={message.id} style={{ maxWidth: '100%', zIndex: 100 }}>
            <Typography variant="overline" color="primary">
              {message.name}:
            </Typography>
            <Typography variant="caption" color="secondary" display="inline">
              {message.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Messages
