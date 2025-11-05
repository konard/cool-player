import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Messages from './messages'
import Typeform from './typeform'

interface Message {
  id: number
  name: string | number
  text: string
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: 'prodesigner666',
      text: 'yo guys seems like you know nothing about design',
    },
    { id: 2, name: 'katya', text: 'how dare you' },
    { id: 3, name: 'valera', text: 'stfu kid' },
  ])

  const addMessage = (textvalue: string) => {
    setMessages([
      ...messages,
      { id: Math.random(), name: Math.random(), text: textvalue },
    ])
  }

  return (
    <Grid
      item
      container
      style={{
        position: 'relative',
        height: '100%',
        width: 300,
        zIndex: 50,
        marginRight: 30,
        filter: 'blur(3px)',
      }}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid
        item
        style={{
          height: '85%',
          width: '100%',
        }}
      >
        <Messages messages={messages} />
      </Grid>
      <Grid
        item
        style={{
          height: '14.5%',
          width: '100%',
        }}
      >
        <Typeform addMessage={addMessage} />
      </Grid>
    </Grid>
  )
}

export default Chat
