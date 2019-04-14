import React from 'react'
import {storiesOf} from '@storybook/react'

import Dropdown from './dropdown'
import Showcase from '../stories/showcase'
import ArrowDownIcon from './icons/arrow-down'

storiesOf('Dropdown', module)
  .add('Default', () => (
    <Showcase>
      <Dropdown
        item={'Aller'}
        label={'Choissir le type de demande...'}
        options={['Prise en charge le...', 'Arrivée au RDV le...']}
        style={{background: 'white'}}
      />
    </Showcase>
  ))
  .add('Disabled', () => (
    <Showcase>
      <Dropdown
        item={'Aller'}
        label={'Choissir le type de demande...'}
        options={['Prise en charge le...', 'Arrivée au RDV le...']}
        disabled
        style={{background: 'white'}}
      />
    </Showcase>
  ))
  .add('With icon', () => (
    <Showcase>
      <Dropdown
        item={'Aller'}
        label={'Choissir le type de demande...'}
        options={['Prise en charge le...', 'Arrivée au RDV le...']}
        icon={<ArrowDownIcon inline />}
        style={{background: 'white'}}
      />
    </Showcase>
  ))
  .add('Ride Input Like', () => (
    <Showcase>
      <Dropdown
        fullWidth
        item={'Aller'}
        label={'Choissir le type de demande...'}
        options={['Prise en charge le...', 'Arrivée au RDV le...']}
        style={{background: 'white'}}
      />
      <Dropdown fullWidth item={'Date'} label={'Date'} options={["Aujourd'hui"]} style={{background: 'white'}} />
      <Dropdown
        fullWidth
        item={'Heure'}
        disabled
        label={'Heure'}
        options={['12:00', '13:00', '14:00', '15:00', '16:00', '17:00']}
        style={{background: 'white'}}
      />
    </Showcase>
  ))
