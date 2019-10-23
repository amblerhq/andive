import React from 'react'
import {storiesOf} from '@storybook/react'

import {RideStatus, RideStatusBar, palette} from '..'
import Showcase from './showcase'

storiesOf('RideStatus', module)
  .add('As success', () => {
    return (
      <Showcase>
        <div style={{width: 300, height: 64}}>
          <RideStatus primary="Premier arrivé" color={palette.success} style={{background: 'white'}} />
        </div>
      </Showcase>
    )
  })
  .add('As waiting', () => {
    return (
      <Showcase>
        <div style={{width: 300, height: 64}}>
          <RideStatus primary="En cours..." color={palette.warning} style={{background: 'white'}} />
        </div>
      </Showcase>
    )
  })
  .add('As failure', () => {
    return (
      <Showcase>
        <div style={{width: 300, height: 64}}>
          <RideStatus primary="Dernier arrivé" color={palette.error} style={{background: 'white'}} />
        </div>
      </Showcase>
    )
  })
  .add('With secondary', () => {
    return (
      <Showcase>
        <div style={{width: 300, height: 64}}>
          <RideStatus
            primary="Dernier arrivé"
            secondary="Fan de Phil Collins"
            color={palette.warning}
            style={{background: 'white'}}
          />
        </div>
      </Showcase>
    )
  })
  .add('With italic secondary', () => {
    return (
      <Showcase>
        <div style={{width: 300, height: 64}}>
          <RideStatus
            primary="Dernier arrivé"
            secondary="Fan de Phil Collins"
            secondaryItalic
            color={palette.warning}
            style={{background: 'white'}}
          />
        </div>
      </Showcase>
    )
  })
  .add('With wrapping text', () => {
    return (
      <Showcase style={{height: 200}}>
        <div style={{width: 150, height: 64}}>
          <RideStatus
            primary="Dernier arrivé c'est pas moi"
            secondary="En attente de la confirmation..."
            secondaryItalic
            color={palette.warning}
            style={{background: 'white'}}
          />
        </div>
      </Showcase>
    )
  })
  .add('Bar only', () => {
    return (
      <Showcase>
        <div style={{height: 64, background: 'white'}}>
          <RideStatusBar color={palette.success} />
        </div>
      </Showcase>
    )
  })
