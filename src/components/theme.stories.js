import React from 'react'
import {storiesOf} from '@storybook/react'
import {ThemeContext} from 'styled-components'

import {Info, Typography, palette, Title, ThemeProvider} from '..'
import {defaultTheme} from './theme-provider'

function AndiveShowcase() {
  const theme = React.useContext(ThemeContext)
  return (
    <div style={{display: 'flex', flexFlow: 'row wrap'}}>
      <Info>
        <Typography.Body1>Body1 - {theme.typography.body1.fontSize}</Typography.Body1>
        <Typography.Body2 color={palette.mediumGrey}>Body2 - {theme.typography.body2.fontSize}</Typography.Body2>
        <Typography.Body3 color={palette.mediumGrey}>Body3 - {theme.typography.body3.fontSize}</Typography.Body3>
      </Info>
    </div>
  )
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

storiesOf('Theme', module).add('DefaultTheme', () => {
  const theme = deepCopy(defaultTheme)
  theme.typography.body1.fontSize = 16
  theme.typography.body2.fontSize = 14
  theme.typography.body3.fontSize = 12
  theme.padding = 6

  return (
    <>
      <Title title="Default theme" />
      <Info>
        <pre>{JSON.stringify(defaultTheme, null, 2)}</pre>
      </Info>

      <Title title="Default theme example" />
      <AndiveShowcase />

      <Title title="Custom theme example" />
      <ThemeProvider theme={theme}>
        <AndiveShowcase />
      </ThemeProvider>
    </>
  )
})
