import React from 'react'
import {storiesOf} from '@storybook/react'
import {BariatricIcon, Input} from '@ambler/andive'

import Showcase from './showcase'

function DefaultStory() {
  const [value, setValue] = React.useState('07/12/1993')

  function onChange(ev) {
    setValue(ev.target.value)
  }

  return (
    <Showcase>
      <div style={{width: 300, background: 'white'}}>
        <Input placeholder={'Adresse de départ...'} value={value} onChange={onChange} />
      </div>
    </Showcase>
  )
}

function WithClearStory() {
  const [value, setValue] = React.useState('07/12/1993')

  function onChange(ev) {
    setValue(ev.target.value)
  }

  function onClear() {
    setValue('')
  }

  return (
    <Showcase>
      <div style={{width: 300, background: 'white'}}>
        <Input placeholder={'Date de naissance'} value={value} onChange={onChange} onClear={onClear} />
      </div>
    </Showcase>
  )
}

function WithErrorStory() {
  const [value, setValue] = React.useState('0142424242')
  const [error, setError] = React.useState("Le numéro n'est pas celui d'un téléphone mobile")

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
    <Showcase>
      <div style={{width: 300, background: 'white'}}>
        <Input placeholder="Numéro de téléphone" value={value} onChange={onChange} error={error} />
      </div>
    </Showcase>
  )
}

function WithDisabledStory() {
  const [value, setValue] = React.useState('07/12/1993')

  function onChange(ev) {
    setValue(ev.target.value)
  }

  return (
    <Showcase>
      <div style={{width: 300, background: 'white'}}>
        <Input disabled placeholder="Numéro de téléphone" value={value} onChange={onChange} />
      </div>
    </Showcase>
  )
}

function WithIconStory() {
  const [value, setValue] = React.useState('Bariatrique')

  function onChange(ev) {
    setValue(ev.target.value)
  }

  function onClear() {
    setValue('')
  }

  return (
    <Showcase>
      <div style={{width: 300, background: 'white'}}>
        <Input
          icon={<BariatricIcon circle circleColor={'white'} />}
          placeholder="Type de véhicule"
          value={value}
          onChange={onChange}
          onClear={onClear}
        />
      </div>
    </Showcase>
  )
}

function AsTextAreaStory() {
  const [value, setValue] = React.useState('')

  function onChange(ev) {
    setValue(ev.target.value)
  }

  function onClear() {
    setValue('')
  }

  return (
    <Showcase>
      <div style={{width: 300, background: 'white'}}>
        <Input
          style={{height: 128}}
          placeholder="Commentaire..."
          value={value}
          onChange={onChange}
          onClear={onClear}
          textarea
        />
      </div>
    </Showcase>
  )
}

function WithLoaderStory() {
  const [value, setValue] = React.useState('')

  function onChange(ev) {
    setValue(ev.target.value)
  }
  function onClear() {}

  return (
    <Showcase>
      <div style={{width: 300, background: 'white'}}>
        <Input placeholder="Commentaire..." value={value} onChange={onChange} onClear={onClear} loading />
      </div>
    </Showcase>
  )
}

storiesOf('API|Input', module)
  .add('Default', () => <DefaultStory />)
  .add('With clear', () => <WithClearStory />)
  .add('With error', () => <WithErrorStory />)
  .add('With disabled', () => <WithDisabledStory />)
  .add('With icon', () => <WithIconStory />)
  .add('As text area', () => <AsTextAreaStory />)
  .add('With loader', () => <WithLoaderStory />)
