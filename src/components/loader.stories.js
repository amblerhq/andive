import React from 'react'
import {storiesOf} from '@storybook/react'
import range from 'lodash.range'

import Showcase from '../stories/showcase'
import {Body3} from './typography'

import Loader from './loader'
import * as palette from '../constants/palette'

function RandomPageContent() {
  return (
    <>
      {range(42).map(i => (
        <Showcase key={i} variant="compact">
          <Body3>{i}</Body3>
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
        <Loader inline color={palette.radishRed} />
      </Showcase>
      <Showcase variant="squared">
        <Loader inline color={palette.lettuceGreen} />
      </Showcase>
      <Showcase variant="squared">
        <Loader inline color={palette.darkGrey} />
      </Showcase>
    </>
  ))
