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

storiesOf('API|Hover', module)
  .add('With margin', () => (
    <>
      <div style={{margin: 64}}>
        <div style={{background: palette.lightBeetrootPurple, padding: 32}}>
          <Hover>
            <Info style={{border: '1px solid orange'}}>
              <Info.Label label="Some text" />
            </Info>
          </Hover>
        </div>
      </div>
      <RandomPageContent />
    </>
  ))
  .add('Without margin', () => (
    <>
      <div style={{margin: 64}}>
        <div style={{background: palette.lightBeetrootPurple, padding: 32}}>
          <Hover overflow={0}>
            <Info style={{border: '1px solid orange'}}>
              <Info.Label label="Some text" />
            </Info>
          </Hover>
        </div>
      </div>
      <RandomPageContent />
    </>
  ))
  .add('With “padding"', () => (
    <>
      <div style={{margin: 64}}>
        <div style={{background: palette.lightBeetrootPurple, padding: 32}}>
          <Hover padding={16}>
            <Info style={{border: '1px solid orange'}}>
              <Info.Label label="Some text" />
            </Info>
          </Hover>
        </div>
      </div>
      <div style={{margin: 64}}>
        <div style={{background: palette.lightBeetrootPurple, padding: 32}}>
          <Hover overflow={0} padding={16}>
            <Info style={{border: '1px solid orange'}}>
              <Info.Label label="Some text" />
            </Info>
          </Hover>
        </div>
      </div>{' '}
      <div style={{margin: 64}}>
        <div style={{background: palette.lightBeetrootPurple, padding: 32}}>
          <Hover overflow={0} padding={32}>
            <Info style={{border: '1px solid orange'}}>
              <Info.Label label="Some text" />
            </Info>
          </Hover>
        </div>
      </div>
      <RandomPageContent />
    </>
  ))
