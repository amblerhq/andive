import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'

import Input from './input'
import BariatricIcon from './icons/bariatric'

import Showcase from '../stories/showcase'

function WithClearStory() {
  const [value, setValue] = useState('07/12/1993')

  function onChange(ev) {
    setValue(ev.target.value)
  }

  function onClear() {
    setValue('')
  }

  return <Input placeholder={'Date de naissance'} value={value} onChange={onChange} onClear={onClear} />
}

storiesOf('Input', module)
  .add('Default', () => (
    <Showcase style={{background: 'white'}}>
      <Input placeholder={'Adresse de départ...'} value="" onChange={() => {}} />
    </Showcase>
  ))
  .add('With clear', () => (
    <Showcase style={{background: 'white'}}>
      <WithClearStory />
    </Showcase>
  ))
  .add('With error', () => (
    <Showcase style={{background: 'white'}}>
      <Input
        placeholder={'Numéro de téléphone'}
        value={'0142424242'}
        onChange={() => {}}
        error={`Le numéro n'est pas celui d'un téléphone mobile`}
      />
    </Showcase>
  ))
  .add('With icon', () => (
    <Showcase style={{background: 'white'}}>
      <Input
        icon={<BariatricIcon circle circleColor={'white'} />}
        placeholder={'Numéro de téléphone'}
        value={'Bariatrique'}
        onChange={() => {}}
        onClear={() => {}}
      />
    </Showcase>
  ))
