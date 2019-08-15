import React from 'react'
import {storiesOf} from '@storybook/react'

import {Checkbox, CheckboxGroup} from '..'
import Showcase from './showcase'

function ControlledCheckbox(props) {
  const [checked, setChecked] = React.useState(false)

  const onChange = React.useCallback(() => {
    setChecked(prev => !prev)
  })

  return (
    <div style={{background: 'white'}}>
      <Checkbox label="Bariatrique" checked={checked} onChange={onChange} {...props} />
      <div style={{padding: 8}}>checked: {checked ? 'true' : 'false'}</div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function CheckboxGroupStory({radio}) {
  const [values, setValues] = React.useState({a: true})

  return (
    <div style={{background: 'white', width: 300}}>
      <CheckboxGroup
        value={values}
        onChange={values_ => {
          setValues(values_)
        }}
        radio={radio}
      >
        <Checkbox label="A" name="a" style={{background: 'white'}} />
        <Checkbox label="B" name="b" style={{background: 'white'}} />
        <Checkbox label="C" name="c" style={{background: 'white'}} />
      </CheckboxGroup>
      <pre style={{padding: 8}}>values: {JSON.stringify(values, null, 2)}</pre>
    </div>
  )
}

function CheckboxGroupWithErrorStory() {
  const [values, setValues] = React.useState({a: true})
  const [error, setError] = React.useState('')

  function validate(values_) {
    if (Object.keys(values_).filter(key => values_[key]).length < 2) {
      setError('Choissiez au moins 2 options')
    } else {
      setError('')
    }
  }

  React.useEffect(() => {
    validate(values)
  }, [values])

  return (
    <div style={{background: 'white', width: 300}}>
      <CheckboxGroup
        value={values}
        onChange={values_ => {
          setValues(values_)
        }}
        error={error}
      >
        <Checkbox label="A" name="a" style={{background: 'white'}} />
        <Checkbox label="B" name="b" style={{background: 'white'}} />
        <Checkbox label="C" name="c" style={{background: 'white'}} />
      </CheckboxGroup>
      <pre style={{padding: 8}}>values: {JSON.stringify(values, null, 2)}</pre>
    </div>
  )
}

function UpdateableCheckboxGroupStory() {
  const [values, setValues] = React.useState({a: true})

  React.useEffect(() => {
    let int = setInterval(() => {
      const newValues = ['a', 'b', 'c']
        .filter(() => Math.random() > 0.5)
        .reduce((values, val) => ({...values, [val]: true}), {})
      setValues(newValues)
    }, 1500)
    return () => {
      clearInterval(int)
    }
  }, [])

  return (
    <div style={{background: 'white', width: 300}}>
      <pre style={{padding: 8}}>values: {JSON.stringify(values, null, 2)}</pre>
      <CheckboxGroup
        value={values}
        onChange={values_ => {
          setValues(values_)
        }}
      >
        <Checkbox label="A" name="a" style={{background: 'white'}} />
        <Checkbox label="B" name="b" style={{background: 'white'}} />
        <Checkbox label="C" name="c" style={{background: 'white'}} />
      </CheckboxGroup>
    </div>
  )
}

storiesOf('Checkbox', module)
  .add('False', () => (
    <Showcase>
      <Checkbox label="Bariatrique" checked={false} onChange={() => null} style={{background: 'white'}} />
    </Showcase>
  ))
  .add('True', () => (
    <Showcase>
      <Checkbox label="Bariatrique" checked={true} onChange={() => null} style={{background: 'white'}} />
    </Showcase>
  ))
  .add('Controlled', () => (
    <Showcase>
      <ControlledCheckbox style={{background: 'white'}} />
    </Showcase>
  ))
  .add('Checkbox Group', () => (
    <Showcase>
      <CheckboxGroupStory />
    </Showcase>
  ))
  .add('Checkbox Group with error', () => (
    <Showcase>
      <CheckboxGroupWithErrorStory />
    </Showcase>
  ))
  .add('Checkbox Group / Updated from above', () => (
    <Showcase>
      <UpdateableCheckboxGroupStory />
    </Showcase>
  ))
  .add('Radio Group', () => (
    <Showcase>
      <CheckboxGroupStory radio />
    </Showcase>
  ))
