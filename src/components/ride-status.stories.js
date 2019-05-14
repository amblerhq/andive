import React from 'react'
import {storiesOf} from '@storybook/react'

import RideStatusBar from './ride-status-bar'
import RideStatus from './ride-status'
import {success, warning, error} from '../constants/palette'
import Showcase from '../stories/showcase'

storiesOf('RideStatus', module)
  .add('As success', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <div style={{width: 300, height: 64}}>
          <RideStatus primary={'Premier arrivé'} color={success} style={{background: 'white'}} />
        </div>
      </Showcase>
    )
  })
  .add('As waiting', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <div style={{width: 300, height: 64}}>
          <RideStatus primary={'En cours...'} color={warning} style={{background: 'white'}} />
        </div>
      </Showcase>
    )
  })
  .add('As failure', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <div style={{width: 300, height: 64}}>
          <RideStatus primary={'Dernier arrivé'} color={error} style={{background: 'white'}} />
        </div>
      </Showcase>
    )
  })
  .add('With secondary', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <div style={{width: 300, height: 64}}>
          <RideStatus
            primary={'Dernier arrivé'}
            secondary={'Fan de Phil Collins'}
            color={warning}
            style={{background: 'white'}}
          />
        </div>
      </Showcase>
    )
  })
  .add('With italic secondary', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <div style={{width: 300, height: 64}}>
          <RideStatus
            primary={'Dernier arrivé'}
            secondary={'Fan de Phil Collins'}
            secondaryItalic
            color={warning}
            style={{background: 'white'}}
          />
        </div>
      </Showcase>
    )
  })
  .add('With wrapping text', () => {
    return (
      <Showcase style={{background: '#eee', height: 200}}>
        <div style={{width: 150, height: 64}}>
          <RideStatus
            primary="Dernier arrivé c'est pas moi"
            secondary="En attente de la confirmation..."
            secondaryItalic
            color={warning}
            style={{background: 'white'}}
          />
        </div>
      </Showcase>
    )
  })
  .add('Bar only', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <div style={{height: 64, background: 'white'}}>
          <RideStatusBar color={success} />
        </div>
      </Showcase>
    )
  })
