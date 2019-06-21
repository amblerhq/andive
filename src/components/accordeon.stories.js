import React from 'react'
import {storiesOf} from '@storybook/react'
import Showcase from '../stories/showcase'

import {Accordeon, Info, palette, Art80Icon, PatientIcon} from '..'

storiesOf('Accordeon', module)
  .add('Default', () => {
    const icon = <Art80Icon circle circleColor={palette.beetrootPurple} />

    return (
      <Showcase>
        <div style={{background: 'white', width: '100%'}}>
          <Accordeon icon={icon} iconSize={32} label="CERFA n° 11574*04 à fournir au transporteur">
            <Info>
              <Info.Label label="de Phil Colins !" />
            </Info>
          </Accordeon>
        </div>
      </Showcase>
    )
  })
  .add('Open by default', () => {
    const icon = <PatientIcon circle circleColor={palette.beetrootPurple} />

    return (
      <Showcase>
        <div style={{background: 'white'}}>
          <Accordeon icon={icon} iconSize={32} openByDefault label="T'es fan">
            <Info>
              <Info.Label label="de Phil Colins !" />
            </Info>
          </Accordeon>
        </div>
      </Showcase>
    )
  })
