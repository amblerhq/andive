import React from 'react'
import {storiesOf} from '@storybook/react'

import Select from './select'
import Showcase from '../stories/showcase'
import ArrowDownIcon from './icons/arrow-down'

storiesOf('Select', module)
  .add('Default label', () => (
    <Showcase style={{background: '#eee'}}>
      <Select label="Téléphone" options={['Mobile', 'Fixe']} value={''} style={{background: 'white'}} />
    </Showcase>
  ))
  .add('With icon', () => (
    <Showcase style={{background: '#eee'}}>
      <Select
        label="Téléphone"
        options={['Mobile', 'Fixe']}
        icon={<ArrowDownIcon inline />}
        style={{background: 'white'}}
      />
    </Showcase>
  ))
