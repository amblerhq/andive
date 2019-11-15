import React from 'react'
import {storiesOf} from '@storybook/react'
import {Card, Dropdown, Select, Input, NativeCheckbox, Button, Autocomplete, HSpace, VSpace, Info} from '@ambler/andive'
import useForm from 'react-hook-form'

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

function ReactHookFormStory() {
  const {handleSubmit, register, errors, watch, setValue, getValues} = useForm({
    submitFocusError: false,
    reValidateMode: 'onChange',
    defaultValues
  })
  const [variable, setVariable] = React.useState(null)
  const [suggestions, onSearch] = useSuggestions(getValues().city)

  // ! Required for the <Autocomplete /> component.
  React.useEffect(() => {
    register({name: 'city'}, {required: true})
  })

  function setCity(value) {
    setValue('city', value)
  }

  return (
    <Showcase>
      <Card>
        <form
          onSubmit={handleSubmit(data => {
            setVariable(data)
          })}
        >
          <Autocomplete
            placeholder="City"
            name="city"
            value={watch('city')}
            onChange={setCity}
            onSearch={onSearch}
            suggestions={suggestions}
            error={errors.city ? errors.city.type : undefined}
          />
          <Input
            placeholder="Firstname"
            name="firstname"
            inputRef={register({required: true})}
            error={errors.firstname && errors.firstname.type}
          />
          <Input
            placeholder="Firstname"
            name="lastname"
            inputRef={register({required: true})}
            error={errors.lastname && errors.lastname.type}
          />
          <Dropdown
            label="Gender"
            placeholder="Gender"
            name="gender"
            inputRef={register({required: true})}
            error={errors.gender && errors.gender.type}
            options={['Male', 'Female', 'Other']}
          />
          <div style={{padding: 8}}>
            <Select
              label="Phone Type"
              placeholder="Phone Type"
              name="phoneType"
              inputRef={register({required: true})}
              error={errors.phoneType && errors.phoneType.type}
              options={['Mobile', 'Home Line']}
            />
          </div>
          <NativeCheckbox
            label="Is Accompanied ?"
            name="isAccompanied"
            inputRef={register({required: true})}
            error={errors.isAccompanied && errors.isAccompanied.type}
          />
          <NativeCheckbox
            radio
            label="Is cold ?"
            name="isCold"
            inputRef={register({required: true})}
            error={errors.isCold && errors.isCold.type}
          />
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
        <Info>
          <Info.Block variant="error">
            <Info.Label label="Form errors" />
          </Info.Block>
          <VSpace px={8} />
          <pre style={{padding: 8, background: '#fafafa', borderRadius: 4}}>
            {JSON.stringify(errors || {}, (key, value) => (key === 'ref' ? '<circ>' : value), 2)}
          </pre>
        </Info>
      </Card>
    </Showcase>
  )
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
  .add('React Hook Form', () => <ReactHookFormStory />)
  .add('Formik v2', () => <FormikStory />)
