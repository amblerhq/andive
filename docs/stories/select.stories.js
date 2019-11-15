import React from 'react'
import {storiesOf} from '@storybook/react'
import {ArrowDownIcon, Select} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('API|Select', module)
  .add('Default label', () => (
    <Showcase>
      <Select label="Téléphone" options={['Mobile', 'Fixe']} style={{background: 'white'}} />
    </Showcase>
  ))
  .add('Empty is an option', () => (
    <Showcase>
      <Select label="Téléphone" placeholder="Aucun" options={['Mobile', 'Fixe', '']} style={{background: 'white'}} />
    </Showcase>
  ))
  .add('With icon', () => (
    <Showcase>
      <Select
        label="Téléphone"
        options={['Choissez une date...', 'Arrivée à destination à...']}
        icon={<ArrowDownIcon inline />}
        style={{background: 'white'}}
      />
    </Showcase>
  ))
  .add('With error', () => (
    <Showcase>
      <Select
        label="Téléphone"
        options={['Choissez une date...', 'Arrivée à destination à...']}
        icon={<ArrowDownIcon inline />}
        style={{background: 'white'}}
        error="Requis"
      />
    </Showcase>
  ))
