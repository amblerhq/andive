import React from 'react'
import {storiesOf} from '@storybook/react'
import {Provider, createClient, useQuery} from 'urql'

import * as palette from '../constants/palette'
import Showcase from '../stories/showcase'
import Autocomplete, {Suggestion} from './autocomplete'
import MedicalFacilityIcon from './icons/medical-facility'
import AddressIcon from './icons/address'
import Info from './info'

const FakeList = () => (
  <>
    <div
      style={{
        height: 64,
        margin: 8,
        background: palette.lightGrey,
        borderRadius: 8
      }}
    />
    <div
      style={{
        height: 64,
        margin: 8,
        background: palette.lightGrey,
        borderRadius: 8
      }}
    />
    <div
      style={{
        height: 64,
        margin: 8,
        background: palette.lightGrey,
        borderRadius: 8
      }}
    />
  </>
)

const db = [
  {
    id: '1',
    mainText: 'Clinique du Louvre',
    secondaryText: "17 Rue des Prêtres Saint-Germain l'Auxerrois 75001 Paris"
  },
  {
    id: '2',
    mainText: 'Maison de Santé Protestante de Bordeaux Bagatelle',
    secondaryText: 'Route de Toulouse, Talence, France'
  },
  {id: '3', mainText: 'Maison de Santé Marie Galène', secondaryText: 'Rue Kléber Caud, Bordeaux, France'},
  {
    id: '4',
    mainText: 'Maison de Santé de Nogent sur Marne',
    secondaryText: 'Rue de Plaisance, Nogent-sur-Marne, France'
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

    return db
      .filter(item => pattern.test([item.mainText, item.secondaryText].join('.*')))
      .map(item => (hasRawString ? item.mainText : item))
  }, [input, currentValue])

  return [suggestions, onSearch]
}

function DefaultStory() {
  const [item, setItem] = React.useState(null)
  const onChange = React.useCallback(value => {
    setItem(value)
  })
  const [suggestions, onSearch] = useSuggestions(item)

  return (
    <Showcase style={{background: 'white'}}>
      <div style={{width: 600}}>
        <pre style={{padding: '4px 24px', overflow: 'auto'}}>{item ? JSON.stringify(item) : 'No selection'}</pre>
        <Autocomplete
          placeholder="Adresse de départ"
          value={item}
          onChange={onChange}
          onSearch={onSearch}
          suggestions={suggestions}
        />
        <FakeList />
      </div>
    </Showcase>
  )
}

// Initial value story.

function InitialValueStory() {
  const [item, setItem] = React.useState({
    id: '4',
    mainText: 'Maison de Santé de Nogent sur Marne',
    secondaryText: 'Rue de Plaisance, Nogent-sur-Marne, France'
  })
  const onChange = React.useCallback(value => {
    setItem(value)
  })
  const [suggestions, onSearch] = useSuggestions(item)

  return (
    <Showcase style={{background: 'white'}}>
      <div style={{width: 600}}>
        <pre style={{padding: '4px 24px', overflow: 'auto'}}>{item ? JSON.stringify(item) : 'No selection'}</pre>
        <Autocomplete
          placeholder="Adresse de départ"
          value={item}
          onChange={onChange}
          onSearch={onSearch}
          suggestions={suggestions}
          errorMessage="Vous devez choisir une adresse"
        />
        <FakeList />
      </div>
    </Showcase>
  )
}

// With favorites story.

const favorites = [
  {
    id: '1',
    mainText: 'Clinique du Louvre',
    secondaryText: "17 Rue des Prêtres Saint-Germain l'Auxerrois 75001 Paris"
  },
  {
    id: '2',
    mainText: 'Maison de Santé Protestante de Bordeaux Bagatelle',
    secondaryText: 'Route de Toulouse, Talence, France'
  }
]

function WithFavoritesStory() {
  const [item, setItem] = React.useState(null)
  const onChange = React.useCallback(value => {
    setItem(value)
  })
  const [suggestions, onSearch] = useSuggestions(item)

  return (
    <Showcase style={{background: 'white'}}>
      <div style={{width: 600}}>
        <pre style={{padding: '4px 24px', overflow: 'auto'}}>{item ? JSON.stringify(item) : 'No selection'}</pre>
        <Autocomplete
          placeholder="Adresse de départ"
          value={item}
          onChange={onChange}
          onSearch={onSearch}
          suggestions={suggestions}
          favorites={favorites}
          errorMessage="Vous devez choisir une adresse"
        />
        <FakeList />
      </div>
    </Showcase>
  )
}

// With GraphQL data source story.

const client = createClient({
  url: 'https://swapi.graph.cool/'
})

const useSwapi = query => {
  const [res] = useQuery({
    query: `
      query Planets($query: String!) {
        allPlanets(filter: {name_contains: $query }) {
          id
          name
          films {
            title
          }
        }
      }
  `,
    variables: {
      query
    },
    requestPolicy: 'network-only'
  })

  if (!query || query.length < 3) {
    return []
  }

  const suggestions =
    (res.data &&
      res.data.allPlanets.map(item => ({
        id: item.id,
        mainText: item.name,
        secondaryText: item.films
          .map(f => f.title)
          .filter(Boolean)
          .join(', ')
      }))) ||
    []

  return suggestions
}

function WithGraphqlQueryStory() {
  const [item, setItem] = React.useState(null)
  const onChange = React.useCallback(value => {
    setItem(value)
  })

  const [query, setQuery] = React.useState()
  const onSearch = React.useCallback(inputValue => {
    setQuery(inputValue)
  })

  const suggestions = useSwapi(query)

  return (
    <Showcase style={{background: 'white'}}>
      <div style={{width: 600}}>
        <pre style={{padding: '4px 24px', overflow: 'auto'}}>{item ? JSON.stringify(item) : 'No selection'}</pre>
        <Autocomplete
          placeholder="Planète de départ"
          value={item}
          onChange={onChange}
          onSearch={onSearch}
          suggestions={suggestions}
          errorMessage="Vous devez choisir une planète"
        />
        <FakeList />
      </div>
    </Showcase>
  )
}

// With custom suggestion.

function WithCustomSuggestion() {
  const [item, setItem] = React.useState(null)
  const onChange = React.useCallback(value => {
    setItem(value)
  })
  const [suggestions, onSearch] = useSuggestions(item)

  const renderSuggestion = React.useCallback((item, index, length) => {
    const icon = item.mainText.startsWith('Maison') ? <MedicalFacilityIcon circle /> : <AddressIcon circle />
    return (
      <Suggestion index={index} length={length} icon={icon}>
        <Info icon={icon}>
          <Info.Label label={item.mainText} />
        </Info>
      </Suggestion>
    )
  })

  return (
    <Showcase style={{background: 'white'}}>
      <div style={{width: 600}}>
        <pre style={{padding: '4px 24px', overflow: 'auto'}}>{item ? JSON.stringify(item) : 'No selection'}</pre>
        <Autocomplete
          placeholder="Adresse de départ"
          value={item}
          onChange={onChange}
          onSearch={onSearch}
          suggestions={suggestions}
          errorMessage="Vous devez choisir une adresse"
          renderSuggestion={renderSuggestion}
        />
        <FakeList />
      </div>
    </Showcase>
  )
}

// With custom suggestion.

function WithFreeInputValue() {
  const [item, setItem] = React.useState('')
  const onChange = React.useCallback(value => {
    setItem(value)
  })
  const [suggestions, onSearch] = useSuggestions(item, true)

  const renderSuggestion = React.useCallback((item, index, length) => {
    return (
      <Suggestion index={index} length={length}>
        <Info>
          <Info.Item item={item} />
        </Info>
      </Suggestion>
    )
  })

  return (
    <Showcase style={{background: 'white'}}>
      <div style={{width: 600}}>
        <pre style={{padding: '4px 24px', overflow: 'auto'}}>{item ? JSON.stringify(item) : 'No selection'}</pre>
        <Autocomplete
          placeholder="Adresse de départ"
          value={item}
          onChange={onChange}
          onSearch={onSearch}
          suggestions={suggestions}
          renderSuggestion={renderSuggestion}
          renderInputValue={item => item}
          freeInput
        />
        <FakeList />
      </div>
    </Showcase>
  )
}

storiesOf('Autocomplete', module)
  .add('Default', () => <DefaultStory />)
  .add('With initial value', () => <InitialValueStory />)
  .add('With favorites', () => <WithFavoritesStory />)
  .add('With GraphQL query as source', () => (
    <Provider value={client}>
      <WithGraphqlQueryStory />
    </Provider>
  ))
  .add('With custom suggestion', () => <WithCustomSuggestion />)
  .add('With free input value', () => <WithFreeInputValue />)
