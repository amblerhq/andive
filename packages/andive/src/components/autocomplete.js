import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import * as palette from '../constants/palette'
import {ZIndexes} from '../constants/enum'
import Input from './input'
import HistoryIcon from './icons/history'
import Info from './info'
import Hover from './hover'

export const Divider = styled.div`
  width: calc(100% - 16px);
  height: 1px;
  background: #eee;
  margin: 8px;
`

export const FullWidthDivider = styled.div`
  width: calc(100% + 16px);
  height: 1px;
  background: #eee;
  margin: 8px 0;

  position: relative;
  left: -8px;
`

const Autocomplete = styled.div`
  position: relative;
`

const SuggestionsUl = styled.ul`
  box-sizing: border-box;
  list-style: none;

  padding: 8px;
  margin: 0;

  background: white;
  border: 1px solid ${palette.border};
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 ${palette.darkPrimary}44;

  /* To crop the child suggestion :hover effect */
  overflow: hidden;
`

const Suggestions = styled.div`
  position: absolute;

  width: calc(100% - 16px);
  margin: 0 8px;
  z-index: ${ZIndexes.ABSOLUTE};

  padding-bottom: ${props => props.bottomFootprint || 0}px;
`

const SuggestionLi = styled.li`
  position: relative;

  cursor: pointer;
`

const AutocompleteInput = styled(Input)``

const defaultRenderSuggestion = item => {
  return (
    <Hover>
      <Info icon={<HistoryIcon circle />}>
        <Info.Label label={item.mainText} />
        {item.secondaryText && <Info.Item item={item.secondaryText} />}
      </Info>
    </Hover>
  )
}

const defaultRenderInputValue = item => [item.mainText, item.secondaryText].filter(Boolean).join(', ')
const defaultCanShowSuggestions = (_suggestions, input) => {
  return input.length >= 3
}

const AutocompleteComponent = React.forwardRef(function AutocompleteComponent(
  {
    /**
     * The "value" of the autocomplete is the Object either selected in suggestions or provided by the parent component.
     */
    value,
    /**
     * The "onChange" function is called when a suggestion is selected. Its the callee responsability to handle the
     * update of the "value" prop accordingly.
     */
    onChange,
    /**
     * The "onSearch" method is called with the updated <Input /> content. When a user select a suggestion it is also called
     * with a "null" value.
     */
    onSearch,
    /**
     * Customize the JSX rendered for each suggestion item.
     */
    renderSuggestion = defaultRenderSuggestion,
    /**
     * Customize the JSX rendered for each favorite item.
     */
    renderFavorite = defaultRenderSuggestion,
    /**
     * Customize how an item is rendered in the input. Should map an Object to a string.
     */
    renderInputValue = defaultRenderInputValue,
    /**
     * The list of suggestions returns by the data source after "onSearch" has been called. It must always be an array and if
     * it has no elements then the autocomplete does not display the suggestion div bellow the input.
     */
    suggestions,
    /**
     * The list of favorites to display when the user click on the autocomplete and the input is empty.
     */
    favorites,
    /**
     * When true, any input value is a valid value. Therefore the "onChange" is called as if the user selected an item in
     * the suggestion list.
     */
    freeInput,
    /**
     * Control when to show suggestions according to the search result and the input value. Default behavior is to wait for at
     * least 3 characters. Still, whatever function you pass, it also checks if the suggestion list has at least 1 element.
     * To show a list on focus, use the `favorites` prop.
     */
    canShowSuggestions = defaultCanShowSuggestions,
    bottomFootprint,
    ...props
  },
  ref
) {
  const [input, setInput] = React.useState('')
  const [unstable, setUnstable] = React.useState(false)
  const [focus, setFocus] = React.useState(false)
  const showSuggestions =
    suggestions && suggestions.length > 0 && input.length > 0 && canShowSuggestions(suggestions, input)
  const showFavorites = favorites && favorites.length > 0 && focus && !input

  const onUpdate = React.useCallback(
    nextInput => {
      setInput(nextInput)
      onSearch(nextInput || null)

      if (freeInput) {
        onChange(nextInput)
      } else {
        setUnstable(nextInput ? nextInput !== input : false)
      }
    },
    [onSearch, input]
  )

  const mapValueToInput = React.useCallback(
    value => {
      return value ? renderInputValue(value) : ''
    },
    [renderInputValue]
  )

  // If the value changes, we want to initialize the input to match the value.
  React.useEffect(() => {
    if (focus) {
      return
    }

    setInput(mapValueToInput(value))
    setUnstable(false)
  }, [value, focus, mapValueToInput])

  const onSelectItem = React.useCallback(
    item => {
      onChange(item)
      onSearch(null)
      setInput(mapValueToInput(item))
      setUnstable(false)
    },
    [onChange, onSearch, mapValueToInput]
  )

  return (
    <Autocomplete>
      <AutocompleteInput
        ref={ref}
        onChange={ev => {
          onUpdate(ev.target.value)
        }}
        onClear={() => {
          onUpdate('')
          onChange(null)
        }}
        onBlur={() => {
          setFocus(false)
          onSearch(null)
        }}
        onFocus={() => {
          setFocus(true)
          if (unstable && input) {
            onSearch(input)
          }
        }}
        value={input}
        {...props}
      />
      {showSuggestions && (
        <Suggestions bottomFootprint={bottomFootprint}>
          <SuggestionsUl>
            {suggestions.map((item, index) => {
              return (
                <SuggestionLi
                  key={index}
                  onMouseDown={() => {
                    onSelectItem(item)
                  }}
                >
                  {renderSuggestion(item, index, suggestions.length)}
                  {index !== suggestions.length - 1 && <Divider />}
                </SuggestionLi>
              )
            })}
          </SuggestionsUl>
        </Suggestions>
      )}
      {showFavorites && (
        <Suggestions bottomFootprint={bottomFootprint}>
          <SuggestionsUl>
            {favorites.map((item, index) => {
              return (
                <SuggestionLi
                  key={index}
                  onMouseDown={() => {
                    onSelectItem(item)
                  }}
                >
                  {renderFavorite(item, index, favorites.length)}
                  {index !== favorites.length - 1 && <Divider />}
                </SuggestionLi>
              )
            })}
          </SuggestionsUl>
        </Suggestions>
      )}
    </Autocomplete>
  )
})

AutocompleteComponent.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  favorites: PropTypes.array,
  renderSuggestion: PropTypes.func,
  renderFavorite: PropTypes.func,
  renderInputValue: PropTypes.func,
  canShowSuggestions: PropTypes.func,
  freeInput: PropTypes.bool,
  bottomFootprint: PropTypes.number
}

export default AutocompleteComponent
