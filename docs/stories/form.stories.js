import React from 'react'
import {storiesOf} from '@storybook/react'
import {Card, Dropdown, Select, Input, NativeCheckbox, Button, Autocomplete, HSpace, VSpace, Info} from '@ambler/andive'

import Showcase from './showcase'

const db = [
  {
    id: '1',
    mainText: 'Paris'
  },
  {
    id: '2',
    mainText: 'Talence'
  },
  {id: '3', mainText: 'Bordeaux'},
  {
    id: '4',
    mainText: 'Nogent-sur-Marne'
  }
]

function useSuggestions(currentValue, hasRawString = false) {
  const [input, setInput] = React.useState('')
  const onSearch = React.useCallback(value => {
    setInput(value)
  })

  const suggestions = React.useMemo(() => {
    let pattern = new RegExp(input, 'i')

    if (currentValue && pattern.test(currentValue.mainText)) {
      return []
    }

    return db.filter(item => pattern.test(item.mainText)).map(item => (hasRawString ? item.mainText : item))
  }, [input, currentValue])

  return [suggestions, onSearch]
}

const defaultValues = {
  phoneType: '',
  gender: '',
  firstname: 'Phil',
  lastname: 'Colins',
  city: {
    id: 0,
    mainText: 'Dives-sur-Mer'
  },
  isAccompanied: false,
  isCold: false
}

function ReactStory() {
  function reducer(prevState, action) {
    if (action.type === 'onChange') {
      return {
        ...prevState,
        values: {
          ...prevState.values,
          [action.name]: action.value
        }
      }
    }
  }
  const [variable, setVariable] = React.useState(null)
  const [{values}, dispatch] = React.useReducer(reducer, {values: defaultValues})
  const [suggestions, onSearch] = useSuggestions(values.city)

  function handleChange(ev) {
    dispatch({
      type: 'onChange',
      name: ev.target.name,
      value: ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
    })
  }

  function handleClear(name) {
    return () => {
      dispatch({
        type: 'onChange',
        name,
        value: ''
      })
    }
  }

  return (
    <Showcase>
      <Card>
        <form
          onSubmit={ev => {
            ev.preventDefault()
            setVariable(values)
          }}
        >
          <Autocomplete
            placeholder="City"
            name="city"
            value={values.city}
            onChange={item => dispatch({type: 'onChange', name: 'city', value: item})}
            onSearch={onSearch}
            suggestions={suggestions}
          />
          <Input
            placeholder="Firstname"
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
            onClear={handleClear('firstname')}
          />
          <Input
            placeholder="Firstname"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            onClear={handleClear('lastname')}
          />
          <Dropdown
            label="Gender"
            placeholder="Gender"
            name="gender"
            value={values.gender}
            options={['Male', 'Female', 'Other']}
          />
          <div style={{padding: 8}}>
            <Select
              label="Phone Type"
              placeholder="Phone Type"
              name="phoneType"
              value={values.phoneType}
              options={['Mobile', 'Home Line']}
            />
          </div>
          <NativeCheckbox
            label="Is Accompanied ?"
            name="isAccompanied"
            checked={values.isAccompanied}
            onChange={handleChange}
          />
          <NativeCheckbox radio label="Is cold ?" name="isCold" checked={values.isCold} onChange={handleChange} />
          <Button type="submit" label="Test" mobile small />
        </form>
      </Card>
      <HSpace px={16} />
      <Card>
        <Info>
          <Info.Block variant="info">
            <Info.Label label="Form submit values" />
          </Info.Block>
          <VSpace px={8} />
          <pre style={{padding: 8, background: '#fafafa', borderRadius: 4}}>
            {JSON.stringify(variable || {}, null, 2)}
          </pre>
        </Info>
      </Card>
    </Showcase>
  )
}

function FormikStory() {
  return (
    <Showcase>
      <Card>TODO</Card>
    </Showcase>
  )
}

storiesOf('Form|Interoperability', module)
  .add('React', () => <ReactStory />)
  .add('Formik v2', () => <FormikStory />)
