import React from 'react'
import {storiesOf} from '@storybook/react'
import range from 'lodash.range'
import {Typography, Hover, palette, Info} from '@ambler/andive'

import Showcase from './showcase'

function RandomPageContent() {
  return (
    <>
      {range(3).map(i => (
        <Showcase key={i} variant="compact">
          <Typography.Body2 color={palette.mediumGrey}>{i}</Typography.Body2>
        </Showcase>
      ))}
    </>
  )
}

storiesOf('API|Hover', module).add('Some text', () => (
  <>
    <div style={{margin: 64}}>
      <div style={{padding: 32}}>
        <Hover>
          <Info>
            <Info.Label label="Some text" />
          </Info>
        </Hover>
      </div>
    </div>
    <RandomPageContent />
  </>
))
