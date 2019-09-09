import React from 'react'
import {storiesOf} from '@storybook/react'

import {Title} from '..'
import Showcase from './showcase'

storiesOf('Title', module).add('Default', () => {
  return (
    <Showcase legend="Title">
      <Title title={'Détail de votre commande'} style={{background: 'white'}} />
    </Showcase>
  )
})
