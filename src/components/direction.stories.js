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
  .add('Origin with time', () => (
    <Showcase>
      <Direction style={{background: 'white'}}>
        <Direction.Origin name="Ambler" address="24 Quai charles pasqua, Levalois-Perret" time={'11:27'} />
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
  .add('Destination with time', () => (
    <Showcase>
      <Direction style={{background: 'white'}}>
        <Direction.Destination name="Phil" address="Appart de Phil, Dives-sur-mer" time={'~14:10'} />
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
  .add('Trip with time', () => (
    <Showcase>
      <Direction style={{background: 'white'}}>
        <Direction.Origin name="Ambler" address="24 Quai charles pasqua, Levalois-Perret" time={'12:25'} />
        <Direction.Destination name="Phil" address="Appart de Phil, Dives-sur-mer" time={'~14:30'} />
      </Direction>
    </Showcase>
  ))
  .add('Trip with shared time', () => (
    <Showcase>
      <Direction time={'Heure inconnue'} style={{background: 'white'}}>
        <Direction.Origin name="Ambler" address="24 Quai charles pasqua, Levalois-Perret" />
        <Direction.Destination name="Phil" address="Appart de Phil, Dives-sur-mer" />
      </Direction>
    </Showcase>
  ))
