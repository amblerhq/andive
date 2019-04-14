import React from 'react'
import {storiesOf} from '@storybook/react'
import Showcase from '../stories/showcase'

import Dialog from './dialog'
import DialogTitle from './dialog-title'

storiesOf('Dialog', module)
  .add('Default', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <div style={{background: 'white'}}>
          <Dialog dialog={'Cliquez "Je suis fan" pour activer les notifications'} />
        </div>
      </Showcase>
    )
  })
  .add('Invert', () => {
    return (
      <Showcase invert>
        <Dialog dialog={'Cliquez "Je suis fan" pour activer les notifications'} invert />
      </Showcase>
    )
  })
  .add('Title', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <div style={{background: 'white'}}>
          <DialogTitle dialog={'Êtes-vous sûr de vouloir annuler cette commande?'} />
        </div>
      </Showcase>
    )
  })
  .add('Invert title', () => {
    return (
      <Showcase invert>
        <div style={{width: 332}}>
          <DialogTitle dialog={'Êtes-vous sûr de vouloir annuler cette commande?'} invert />
        </div>
      </Showcase>
    )
  })
