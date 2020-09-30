import React from 'react'
import {storiesOf} from '@storybook/react'
import {BariatricIcon, Input, VSpace, Box} from '@ambler/andive'
import styled from 'styled-components'

import Showcase from './showcase'

function DefaultStory() {
  const [value, setValue] = React.useState('07/12/1993')

  function onChange(ev) {
    setValue(ev.target.value)
  }

  return (
    <>
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input placeholder={'Adresse de départ...'} value={value} onChange={onChange} />
        </div>
      </Showcase>
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input small placeholder={'Adresse de départ...'} value={value} onChange={onChange} />
        </div>
      </Showcase>
    </>
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
    <>
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input placeholder={'Date de naissance'} value={value} onChange={onChange} onClear={onClear} />
        </div>
      </Showcase>
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input small placeholder={'Date de naissance'} value={value} onChange={onChange} onClear={onClear} />
        </div>
      </Showcase>
    </>
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
    <>
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input placeholder="Numéro de téléphone" value={value} onChange={onChange} error={error} />
        </div>
      </Showcase>
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input small placeholder="Numéro de téléphone" value={value} onChange={onChange} error={error} />
        </div>
      </Showcase>
    </>
  )
}

function WithReactNodeAsErrorMessage() {
  const [value, setValue] = React.useState('0142424242')
  // const [error, setError] = React.useState("Le numéro n'est pas celui d'un téléphone mobile")

  return (
    <Showcase>
      <div style={{width: 300, background: 'white'}}>
        <Input
          placeholder="Numéro de téléphone"
          value={value}
          onChange={ev => {
            setValue(ev.target.value)
          }}
          error={
            <>
              Ce numéro est déjà attribué <a href="#">à cet utilisateur</a>
            </>
          }
        />
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
    <>
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input disabled placeholder="Numéro de téléphone" value={value} onChange={onChange} />
        </div>
      </Showcase>
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input small disabled placeholder="Numéro de téléphone" value={value} onChange={onChange} />
        </div>
      </Showcase>
    </>
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
    <>
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
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input
            icon={<BariatricIcon circle circleColor={'white'} />}
            placeholder="Type de véhicule"
            value={value}
            onChange={onChange}
            onClear={onClear}
            small
          />
        </div>
      </Showcase>
    </>
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
    <>
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
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input
            style={{height: 128}}
            placeholder="Commentaire..."
            value={value}
            onChange={onChange}
            onClear={onClear}
            textarea
            small
          />
        </div>
      </Showcase>
    </>
  )
}

function WithLoaderStory() {
  const [value, setValue] = React.useState('')

  function onChange(ev) {
    setValue(ev.target.value)
  }
  function onClear() {}

  return (
    <>
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input placeholder="Commentaire..." value={value} onChange={onChange} onClear={onClear} loading />
        </div>
      </Showcase>
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <Input small placeholder="Commentaire..." value={value} onChange={onChange} onClear={onClear} loading />
        </div>
      </Showcase>
    </>
  )
}

const BaseInput = styled.input``
const BaseTextarea = styled.textarea``

function CustomInput({inputRef, textarea, ...props}) {
  const Input = textarea ? BaseTextarea : BaseInput

  return (
    <div>
      <Input ref={inputRef} {...props} />
    </div>
  )
}

function WithExposedRef() {
  const customInputRef = React.useRef(null)
  const nativeInputRef = React.useRef(null)
  const textAreaRef = React.useRef(null)

  return (
    <Showcase>
      <Box>
        <CustomInput name="native" placeholder="Native" inputRef={el => (nativeInputRef.current = el)} />
        <VSpace px={8} />
        <button onClick={() => nativeInputRef.current.focus()}>Focus</button>
      </Box>

      <Box>
        <CustomInput name="native2" placeholder="Native2" textarea inputRef={el => (textAreaRef.current = el)} />
        <VSpace px={8} />
        <button onClick={() => textAreaRef.current.focus()}>Focus</button>
      </Box>

      <Box>
        <Input name="andive" placeholder="Andive" inputRef={el => (customInputRef.current = el)} />
        <VSpace px={8} />
        <button onClick={() => customInputRef.current.focus()}>Focus</button>
      </Box>
    </Showcase>
  )
}

storiesOf('API|Input', module)
  .add('Default', () => <DefaultStory />)
  .add('With clear', () => <WithClearStory />)
  .add('With error', () => <WithErrorStory />)
  .add('With ReactNode error', () => <WithReactNodeAsErrorMessage />)
  .add('With disabled', () => <WithDisabledStory />)
  .add('With icon', () => <WithIconStory />)
  .add('As text area', () => <AsTextAreaStory />)
  .add('With loader', () => <WithLoaderStory />)
  .add('Expose ref', () => <WithExposedRef />)
