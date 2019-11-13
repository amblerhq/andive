import React from 'react'
import {storiesOf} from '@storybook/react'
import {Dialog, DialogTitle} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('API|Dialog', module)
  .add('Default', () => {
    return (
      <Showcase size={555}>
        <Dialog dialog={'Cliquez "Je suis fan" pour activer les notifications'} />
      </Showcase>
    )
  })
  .add('Invert', () => {
    return (
      <Showcase invert size={555}>
        <Dialog dialog={'Cliquez "Je suis fan" pour activer les notifications'} invert />
      </Showcase>
    )
  })
  .add('Title', () => {
    return (
      <Showcase size={555}>
        <DialogTitle dialog={'Êtes-vous sûr de vouloir annuler cette commande?'} />
      </Showcase>
    )
  })
  .add('Invert title', () => {
    return (
      <Showcase invert size={555}>
        <DialogTitle dialog={'Êtes-vous sûr de vouloir annuler cette commande?'} invert />
      </Showcase>
    )
  })
