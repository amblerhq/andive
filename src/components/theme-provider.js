import React from 'react'
import {ThemeProvider} from 'styled-components'
import PropTypes from 'prop-types'

export const defaultTheme = {
  typography: {
    body1: {
      fontSize: 18
    },
    body2: {
      fontSize: 16
    },
    body3: {
      fontSize: 14
    }
  },
  padding: 8
}

export default function AmblerThemeProvider({theme = defaultTheme, children}) {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  )
}

AmblerThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired
}
