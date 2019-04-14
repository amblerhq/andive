import React from 'react'
import {storiesOf} from '@storybook/react'

import Direction from './direction'
import Showcase from '../stories/showcase'

storiesOf('Direction', module)
  .add('Origin', () => (
    <Showcase>
      <Direction style={{background: 'white'}}>
        <Direction.Origin name="Ambler" address="24 Quai charles pasqua, Levalois-Perret" />
      </Direction>
    </Showcase>
  ))
  .add('Destination', () => (
    <Showcase>
      <Direction style={{background: 'white'}}>
        <Direction.Destination name="Phil" address="Appart de Phil, Dives-sur-mer" />
      </Direction>
    </Showcase>
  ))
  .add('Trip', () => (
    <Showcase>
      <Direction style={{background: 'white'}}>
        <Direction.Origin name="Ambler" address="24 Quai charles pasqua, Levalois-Perret" />
        <Direction.Destination name="Phil" address="Appart de Phil, Dives-sur-mer" />
      </Direction>
    </Showcase>
  ))
