

import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    Green: {
      "500": "#a6b727",
      "300": "#9ec901",
    },
    Red: {
      "800": "#980606",
      "500": "#cd0303",
      "300": "#f72323"
    },
    Blue: {
      "900": "#1d253a"
    }
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  fonts: {
    heading: 'roboto, sans-serif',
    body: 'roboto", sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black.200'
      }
    }
  }
})