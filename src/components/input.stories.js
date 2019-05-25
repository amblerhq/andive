import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'

import Input from './input'
import BariatricIcon from './icons/bariatric'

import Showcase from '../stories/showcase'

function DefaultStory() {
  const [value, setValue] = useState('07/12/1993')

  function onChange(ev) {
    setValue(ev.target.value)
  }

  return (
    <Showcase style={{background: 'white'}}>
      <div style={{width: 300}}>
        <Input placeholder={'Adresse de départ...'} value={value} onChange={onChange} />
      </div>
    </Showcase>
  )
}

function WithClearStory() {
  const [value, setValue] = useState('07/12/1993')

  function onChange(ev) {
    setValue(ev.target.value)
  }

  function onClear() {
    setValue('')
  }

  return (
    <Showcase style={{background: 'white'}}>
      <div style={{width: 300}}>
        <Input placeholder={'Date de naissance'} value={value} onChange={onChange} onClear={onClear} />
      </div>
    </Showcase>
  )
}

function WithErrorStory() {
  const [value, setValue] = useState('0142424242')
  const [error, setError] = useState("Le numéro n'est pas celui d'un téléphone mobile")

  function onChange(ev) {
    const nextValue = ev.target.value
    if (!nextValue) {
      setError('Requis')
    } else if (nextValue.length !== 10) {
      setError('Le numéro de téléphone est mal formé')
    } else if (!nextValue.startsWith('07') && !nextValue.startsWith('06')) {
      setError("Le numéro n'est pas celui d'un téléphone mobile")
    } else {
      setError(null)
    }

    setValue(nextValue)
  }

  return (
    <Showcase style={{background: 'white'}}>
      <div style={{width: 300}}>
        <Input placeholder="Numéro de téléphone" value={value} onChange={onChange} error={error} />
      </div>
    </Showcase>
  )
}

function WithFocusStory() {
  const [value, setValue] = useState('07/12/1993')

  function onChange(ev) {
    setValue(ev.target.value)
  }

  return (
    <Showcase style={{background: 'white'}}>
      <div style={{width: 300}}>
        <Input placeholder="Numéro de téléphone" value={value} onChange={onChange} />
      </div>
    </Showcase>
  )
}

storiesOf('Input', module)
  .add('Default', () => <DefaultStory />)
  .add('With clear', () => <WithClearStory />)
  .add('With error', () => <WithErrorStory />)
  .add('With focus', () => <WithFocusStory />)
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
