import React from 'react'
import {storiesOf} from '@storybook/react'
import {Provider, createClient, useQuery} from 'urql'
import {
  Autocomplete,
  Hover,
  Info,
  MedicalFacilityIcon,
  AddressIcon,
  palette,
  ZIndexes,
  Typography,
  Box,
  Button
} from '@ambler/andive'

import Showcase from './showcase'

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

const renderSuggestion = item => (
  <Hover>
    <Box>
      <Typography.Body1>{item.mainText}</Typography.Body1>
      <Typography.Body2 color={palette.secondaryText}>{item.secondaryText}</Typography.Body2>
    </Box>
  </Hover>
)

const renderInputValue = item => item.mainText + ', ' + item.secondaryText

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
          /* Do not wait for the default "at least 3 characters" to show suggestions. */
          value={item}
          onChange={onChange}
          onSearch={onSearch}
          suggestions={suggestions}
          renderSuggestion={renderSuggestion}
          renderInputValue={renderInputValue}
        />
        <FakeList />
      </div>
    </Showcase>
  )
}

const NoResultHint = () => {
  return (
    <Hover>
      <Box>
        <Typography.Body3 color={palette.mediumPrimary}>
          Vous ne trouvez pas votre adresse dans notre liste ?
        </Typography.Body3>
      </Box>
    </Hover>
  )
}

function WithNoResultHintSuggestionStory() {
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
          /* Do not wait for the default "at least 3 characters" to show suggestions. */
          value={item}
          onChange={onChange}
          onSearch={onSearch}
          suggestions={suggestions}
          renderSuggestion={renderSuggestion}
          renderInputValue={renderInputValue}
          noHintError={<NoResultHint />}
        />
        <FakeList />
      </div>
    </Showcase>
  )
}

// CustomCanShowSuggestion

function CustomCanShowSuggestionStory() {
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
          canShowSuggestions={() => true}
          value={item}
          onChange={onChange}
          onSearch={onSearch}
          suggestions={suggestions}
          renderSuggestion={renderSuggestion}
          renderInputValue={renderInputValue}
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
          renderSuggestion={renderSuggestion}
          renderInputValue={renderInputValue}
          error={item === null ? 'Vous devez choisir une adresse' : undefined}
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
          canShowSuggestions={() => true}
          value={item}
          onChange={onChange}
          onSearch={onSearch}
          suggestions={suggestions}
          favorites={favorites}
          renderSuggestion={renderSuggestion}
          renderFavorite={renderSuggestion}
          renderInputValue={renderInputValue}
          error={item === null ? 'Vous devez choisir une adresse' : undefined}
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

  return [suggestions, res.fetching]
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

  const [suggestions, loading] = useSwapi(query)

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
          renderSuggestion={renderSuggestion}
          renderInputValue={renderInputValue}
          error={item === null ? 'Vous devez choisir une planète' : undefined}
          loading={loading}
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

  const renderSuggestion = React.useCallback(item => {
    const icon = item.mainText.startsWith('Maison') ? <MedicalFacilityIcon circle /> : <AddressIcon circle />
    return (
      <Hover>
        <Info icon={icon}>
          <Info.Label label={item.mainText} />
        </Info>
      </Hover>
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
          renderInputValue={renderInputValue}
          error={item === null ? 'Vous devez choisir une adresse' : undefined}
        />
        <FakeList />
      </div>
    </Showcase>
  )
}

// With free input suggestion.

function WithFreeInputValue() {
  const [item, setItem] = React.useState('')
  const onChange = React.useCallback(value => {
    setItem(value)
  })
  const [suggestions, onSearch] = useSuggestions(item, true)

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
          freeInput
        />
        <FakeList />
      </div>
    </Showcase>
  )
}

// With Footer

function WithFooter() {
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
          /* Do not wait for the default "at least 3 characters" to show suggestions. */
          value={item}
          onChange={onChange}
          onSearch={onSearch}
          suggestions={suggestions}
          renderSuggestion={renderSuggestion}
          renderInputValue={renderInputValue}
          bottomFootprint={80}
        />
        <FakeList />
        <div
          style={{
            height: 72,
            width: '100%',
            position: 'fixed',
            top: 'calc(100% - 72px)',
            left: 0,
            background: '#4404',
            zIndex: ZIndexes.FIXED
          }}
        />
      </div>
    </Showcase>
  )
}

storiesOf('API|Autocomplete', module)
  .add('Default', () => <DefaultStory />)
  .add('With no result hint', () => <WithNoResultHintSuggestionStory />)
  .add('Can show suggestions directly', () => <CustomCanShowSuggestionStory />)
  .add('With initial value', () => <InitialValueStory />)
  .add('With favorites', () => <WithFavoritesStory />)
  .add('With GraphQL query as source', () => (
    <Provider value={client}>
      <WithGraphqlQueryStory />
    </Provider>
  ))
  .add('With custom suggestion', () => <WithCustomSuggestion />)
  .add('With free input value', () => <WithFreeInputValue />)
  .add('With footer', () => <WithFooter />)
  .add('With onBlur', () => {
    const [item, setItem] = React.useState(null)
    const onChange = React.useCallback(value => {
      setItem(value)
    })
    const [suggestions, onSearch] = useSuggestions(item)

    return (
      <Showcase style={{background: 'white'}}>
        <div style={{width: 600}}>
          <Box>
            <Typography.H1>With onBlur prop</Typography.H1>
            <Typography.Body2>
              When passing a `onBlur` prop to the Autocomplete component, you can get the first suggestion, if any, and
              set the Autocomplete value to it.
            </Typography.Body2>
          </Box>
          <Autocomplete
            placeholder="Adresse de départ"
            /* Do not wait for the default "at least 3 characters" to show suggestions. */
            value={item}
            onChange={onChange}
            onSearch={onSearch}
            suggestions={suggestions}
            renderSuggestion={renderSuggestion}
            renderInputValue={renderInputValue}
            onBlur={() => {
              if (suggestions.length > 0) {
                setItem(suggestions[0])
              }
            }}
          />
          <FakeList />
        </div>
      </Showcase>
    )
  })
  .add('Can forwardRef', () => {
    const [item, setItem] = React.useState(null)
    const onChange = React.useCallback(value => {
      setItem(value)
    })
    const [suggestions, onSearch] = useSuggestions(item)

    const inputRef = React.useRef(null)
    const [refValue, setRefValue] = React.useState('')

    React.useEffect(() => {
      if (inputRef.current) {
        setRefValue('Ref captured')
      }

      return () => {}
    }, [])

    return (
      <Showcase style={{background: 'white'}}>
        <div style={{width: 600}}>
          <Box>
            <Typography.H1>Can forwardRef</Typography.H1>
            <Typography.Body2>
              The Autocomplete sub-component Input ref is exposed through the special{' '}
              <span style={{fontWeight: 'bold'}}>ref</span> prop.
            </Typography.Body2>
          </Box>
          {refValue}
          <Autocomplete
            inputRef={el => (inputRef.current = el)}
            placeholder="Adresse de départ"
            /* Do not wait for the default "at least 3 characters" to show suggestions. */
            value={item}
            onChange={onChange}
            onSearch={onSearch}
            suggestions={suggestions}
            renderSuggestion={renderSuggestion}
            renderInputValue={renderInputValue}
          />
          <Button
            label="Use ref to focus autocomplete"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.focus()
              }
            }}
          />
          <FakeList />
        </div>
      </Showcase>
    )
  })
