import React from 'react'
import {storiesOf} from '@storybook/react'
import range from 'lodash.range'

import {Typography, palette} from '../index'
import Showcase from '../stories/showcase'

import Loader from './loader'

function RandomPageContent() {
  return (
    <>
      {range(42).map(i => (
        <Showcase key={i} variant="compact">
          <Typography.Body2 color={palette.mediumGrey}>{i}</Typography.Body2>
        </Showcase>
      ))}
    </>
  )
}

storiesOf('Loader', module)
  .add('Default', () => (
    <>
      <Loader />
      <RandomPageContent />
    </>
  ))
  .add('Inline', () => (
    <>
      <Showcase>
        <Loader inline />
      </Showcase>
      <RandomPageContent />
    </>
  ))
  .add('Color', () => (
    <>
      <Showcase variant="squared">
        <Loader inline color={palette.mediumRadishRed} />
      </Showcase>
      <Showcase variant="squared">
        <Loader inline color={palette.mediumLettuceGreen} />
      </Showcase>
      <Showcase variant="squared">
        <Loader inline color={palette.darkPrimary} />
      </Showcase>
    </>
  ))
