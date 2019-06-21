import React from 'react'
import {storiesOf} from '@storybook/react'
import Showcase from '../stories/showcase'

import Accordeon from './accordeon'
import Info from './info'
import {palette} from '..'

import Art80Icon from './icons/art80'
import CerfaIcon from './icons/cerfa'

storiesOf('Accordeon', module)
  .add('Default', () => {
    const icon = <Art80Icon circle circleColor={palette.beetrootPurple} />

    return (
      <Showcase>
        <div style={{background: 'white', width: '100%'}}>
          <Accordeon icon={icon} label="Cliques ici si t'es fan">
            <Info>
              <Info.Label label="de Phil Colins !" />
            </Info>
          </Accordeon>
        </div>
      </Showcase>
    )
  })
  .add('Open by default', () => {
    const icon = <CerfaIcon circle circleColor={palette.beetrootPurple} />

    return (
      <Showcase>
        <div style={{background: 'white'}}>
          <Accordeon icon={icon} openByDefault label="T'es fan">
            <Info>
              <Info.Label label="de Phil Colins !" />
            </Info>
          </Accordeon>
        </div>
      </Showcase>
    )
  })
