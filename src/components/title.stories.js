import React from 'react'
import {storiesOf} from '@storybook/react'

import Title from './title'
import Showcase from '../stories/showcase'

storiesOf('Title', module).add('Default', () => {
  return (
    <Showcase legend="Title" style={{background: '#eee'}}>
      <Title title={'Détail de votre commande'} style={{background: 'white'}} />
    </Showcase>
  )
})
