import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import * as palette from '../constants/palette'
import {ZIndexes} from '../constants/enum'
import useElementRect from '../lib/use-element-rect'
import Input from './input'
import HistoryIcon from './icons/historic'
import Info from './info'

const Divider = styled.div`
  width: calc(100% + 16px);
  height: 1px;
  background: #eee;
  margin: 8px 0;

  position: relative;
  left: -8px;
`

const Hover = styled.div`
  :hover {
    ::before {
      content: '';
      background: #fafafa;
      width: calc(100% + 16px);
      height: ${props => props.height + 16}px;

      position: absolute;
      left: -8px;
      top: -8px;
    }
  }
`

export function Suggestion({item, index, length, icon}) {
  const ref = React.useRef(null)
  const rect = useElementRect(ref)
  return (
    <>
      <Hover height={rect && rect.height}>
        <Info ref={ref} icon={icon}>
          <Info.Label label={item.mainText} />
          {item.secondaryText && <Info.Item item={item.secondaryText} />}
        </Info>
      </Hover>
      {index !== length - 1 && <Divider />}
    </>
  )
}

Suggestion.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  icon: PropTypes.node
}

const Autocomplete = styled.div`
  position: relative;
`

const Suggestions = styled.ul`
  box-sizing: border-box;
  list-style: none;

  position: absolute;

  width: calc(100% - 16px);
  margin: 8px;
  padding: 8px;

  background: white;
  border: 1px solid ${palette.lightGrey};
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 ${palette.darkGrey}44;

  /* To crop the child suggestion :hover effect */
  overflow: hidden;

  z-index: ${ZIndexes.ABSOLUTE};
`

const SuggestionLi = styled.li`
  position: relative;

  cursor: pointer;
`

const AutocompleteInput = styled(Input)`
  border: 1px solid ${props => (props.unstable ? palette.berryBlue : 'transparent')};
`

const defaultRenderSuggestion = (item, index, length) => (
  <Suggestion item={item} index={index} length={length} icon={<HistoryIcon circle />} />
)
const defaultRenderInputValue = item => [item.mainText, item.secondaryText].filter(Boolean).join(', ')

function AutocompleteComponent({
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
  mapItemToIcon,
  errorMessage,
  ...props
}) {
  const [input, setInput] = React.useState('')
  const [unstable, setUnstable] = React.useState(false)
  const [focus, setFocus] = React.useState(false)
  const showSuggestions = suggestions && suggestions.length > 0 && input.length >= 3
  const showFavorites = favorites && favorites.length > 0 && focus && !input

  const onUpdate = React.useCallback(
    nextInput => {
      setInput(nextInput)
      onSearch(nextInput || null)
      setUnstable(nextInput ? nextInput !== input : false)
    },
    [onSearch, input]
  )

  function mapValueToInput(value) {
    return value ? renderInputValue(value) : ''
  }

  // If the value changes, we want to initialize the input to match the value.
  React.useEffect(() => {
    setInput(mapValueToInput(value))
    setUnstable(false)
  }, [value])

  const showError = errorMessage && unstable && !focus

  return (
    <Autocomplete>
      <AutocompleteInput
        icon={mapItemToIcon && value ? mapItemToIcon(value) : null}
        error={showError ? errorMessage : null}
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
          if (value) {
            setInput(mapValueToInput(value))
            setUnstable(false)
          }
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
        <Suggestions>
          {suggestions.map((item, index) => {
            return (
              <SuggestionLi
                key={item.id}
                onMouseDown={() => {
                  onChange(item)
                  onSearch(null)
                }}
              >
                {renderSuggestion(item, index, suggestions.length)}
              </SuggestionLi>
            )
          })}
        </Suggestions>
      )}
      {showFavorites && (
        <Suggestions>
          {favorites.map((item, index) => {
            return (
              <SuggestionLi
                key={item.id}
                onMouseDown={() => {
                  onChange(item)
                  onSearch(null)
                }}
              >
                {renderFavorite(item, index, favorites.length)}
              </SuggestionLi>
            )
          })}
        </Suggestions>
      )}
    </Autocomplete>
  )
}

AutocompleteComponent.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  favorites: PropTypes.array,
  renderSuggestion: PropTypes.func,
  renderFavorite: PropTypes.func,
  renderInputValue: PropTypes.func,
  mapItemToIcon: PropTypes.func,
  errorMessage: PropTypes.string
}

export default AutocompleteComponent
