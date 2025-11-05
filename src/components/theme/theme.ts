import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: '#69f0c7' },
      secondary: { main: '#37015c' },
    },
  })
)

export default theme
