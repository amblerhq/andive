import React from 'react'
import {storiesOf} from '@storybook/react'

import Dropdown from './dropdown'
import Showcase from '../stories/showcase'
import ArrowDownIcon from './icons/arrow-down'

function ControlledDropdown() {
  const [value, setValue] = React.useState('')

  return (
    <Dropdown
      value={value}
      onChange={ev => setValue(ev.target.value)}
      label={'Es-tu FOO ?'}
      placeholder={'Choisir'}
      options={['FOO', 'BAR', 'BAZ']}
      optionFormat={opt => (opt === 'FOO' ? 'je suis FOO' : `Je ne suis pas FOO mais ${opt}`)}
      icon={<ArrowDownIcon inline />}
      style={{background: 'white'}}
    />
  )
}

storiesOf('Dropdown', module)
  .add('Default', () => (
    <Showcase>
      <Dropdown
        label={'Aller'}
        placeholder={'Choisir le type de demande...'}
        options={['Prise en charge le...', 'Arrivée au RDV le...']}
        style={{background: 'white'}}
      />
    </Showcase>
  ))
  .add('Disabled', () => (
    <Showcase>
      <Dropdown
        label={'Aller'}
        placeholder={'Choisir le type de demande...'}
        options={['Prise en charge le...', 'Arrivée au RDV le...']}
        disabled
        style={{background: 'white'}}
      />
    </Showcase>
  ))
  .add('With icon', () => (
    <Showcase>
      <Dropdown
        label={'Aller'}
        placeholder={'Choisir le type de demande...'}
        options={['Prise en charge le...', 'Arrivée au RDV le...']}
        icon={<ArrowDownIcon inline />}
        style={{background: 'white'}}
      />
    </Showcase>
  ))
  .add('With option format', () => {
    return (
      <Showcase>
        <Dropdown
          label={'1 ou 2 ?'}
          placeholder={'Choisir un chiffre'}
          options={[1, 2]}
          optionFormat={opt => (opt === 1 ? 'Un' : 'Deux')}
          icon={<ArrowDownIcon inline />}
          style={{background: 'white'}}
        />
      </Showcase>
    )
  })
  .add('Controlled', () => {
    return (
      <Showcase>
        <ControlledDropdown />
      </Showcase>
    )
  })
  .add('Ride Input Like', () => (
    <Showcase>
      <Dropdown
        fullWidth
        label={'Aller'}
        placeholder={'Choisir le type de demande...'}
        options={['Prise en charge le...', 'Arrivée au RDV le...']}
        style={{background: 'white'}}
      />
      <Dropdown fullWidth label={'Date'} placeholder={'Date'} options={["Aujourd'hui"]} style={{background: 'white'}} />
      <Dropdown
        fullWidth
        label={'Heure'}
        disabled
        placeholder={'Heure'}
        options={['12:00', '13:00', '14:00', '15:00', '16:00', '17:00']}
        style={{background: 'white'}}
      />
    </Showcase>
  ))
