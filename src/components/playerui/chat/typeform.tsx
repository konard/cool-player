import React, { useState } from 'react'
import { TextField, Grid, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomTextField = styled(TextField)(({ theme }) => ({
  zIndex: 50,
  height: '100%',
  '& .MuiOutlinedInput-root': {
    height: '100%',
    background: 'transparent',
    '& fieldset': {
      borderColor: theme.palette.secondary.light,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.dark,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main,
    },
  },
}))

interface TypeformProps {
  addMessage: (text: string) => void
}

const Typeform: React.FC<TypeformProps> = ({ addMessage }) => {
  const [textvalue, setTextvalue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextvalue(e.target.value)
  }

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault()
    addMessage(textvalue)
    setTextvalue('')
  }

  return (
    <Grid
      container
      style={{ height: '100%', zIndex: 50 }}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item style={{ width: '100%', height: '70%' }}>
        <CustomTextField
          type="text"
          fullWidth
          margin="none"
          variant="outlined"
          multiline
          rows={4}
          maxRows={4}
          placeholder="your message here"
          value={textvalue}
          onChange={onChange}
        />
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ width: '100%', height: '30%' }}
      >
        <Button
          style={{ zIndex: 50, height: 36, width: '50%' }}
          variant="contained"
          color="secondary"
          onClick={handleAddMessage}
        >
          Send
        </Button>
      </Grid>
    </Grid>
  )
}

export default Typeform
