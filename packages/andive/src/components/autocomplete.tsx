import React from 'react'
import styled from 'styled-components'

import * as palette from '../constants/palette'
import {ZIndexes} from '../constants/enum'
import {Input} from './input'
import {Hover} from './hover'
import {Body1} from './typography'
import Box from './box'

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

const AutocompleteRoot = styled.div`
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

const Suggestions = styled(({bottomFootprint, ...props}) => <div {...props} />)`
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

export interface AutocompleteProps<T> {
  /**
   * The "value" of the autocomplete is the Object either selected in suggestions or provided by the parent component.
   */
  value: T
  /**
   * The "onChange" function is called when a suggestion is selected. Its the callee responsability to handle the
   * update of the "value" prop accordingly.
   */
  onChange: (nextInput: T | null) => void
  /**
   * The "onSearch" method is called with the updated <Input /> content. When a user select a suggestion it is also called
   * with a "null" value.
   */
  onSearch: (input: string | null) => void
  /**
   * Customize the JSX rendered for each suggestion item.
   */
  renderSuggestion?: (item: T, index: number, length: number) => React.ReactNode
  /**
   * Customize the JSX rendered for each favorite item.
   */
  renderFavorite?: (item: T, index: number, length: number) => React.ReactNode
  /**
   * Customize how an item is rendered in the input.
   */
  renderInputValue?: (item: T) => string
  /**
   * The list of suggestions returns by the data source after "onSearch" has been called. It must always be an array and if
   * it has no elements then the autocomplete does not display the suggestion div bellow the input.
   */
  suggestions: T[]
  /**
   * The list of favorites to display when the user click on the autocomplete and the input is empty.
   */
  favorites?: T[]
  /**
   * When true, any input value is a valid value. Therefore the "onChange" is called as if the user selected an item in
   * the suggestion list.
   */
  freeInput?: boolean
  /**
   * Control when to show suggestions according to the search result and the input value. Default behavior is to wait for at
   * least 3 characters. Still, whatever function you pass, it also checks if the suggestion list has at least 1 element.
   * To show a list on focus, use the `favorites` prop.
   */
  canShowSuggestions?: (suggestions: T[], input: string) => boolean
  bottomFootprint?: number
  name?: string // * This is an Input allowed prop. Used by formik to track which input is touched.
  error?: React.ReactNode
  inputRef?: React.MutableRefObject<HTMLInputElement>
  noHintError?: React.ReactNode
  onBlur?: (ev: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (ev: React.FocusEvent<HTMLInputElement>) => void
  disabled?: boolean
}
export function Autocomplete<T>({
  value,
  onChange,
  onSearch,
  renderSuggestion = item => (
    <Hover>
      <Box>
        <Body1>{String(item)}</Body1>
      </Box>
    </Hover>
  ),
  renderFavorite = item => (
    <Hover>
      <Box>
        <Body1>{String(item)}</Body1>
      </Box>
    </Hover>
  ),
  renderInputValue = item => String(item),
  suggestions = [],
  favorites = [],
  freeInput,
  canShowSuggestions = (_suggestions, input) => input.length >= 3,
  bottomFootprint,
  inputRef,
  noHintError,
  onBlur,
  onFocus,
  ...props
}: AutocompleteProps<T>) {
  const [input, setInput] = React.useState('')
  const [unstable, setUnstable] = React.useState(false)
  const [focus, setFocus] = React.useState(false)
  const showSuggestions =
    suggestions && suggestions.length > 0 && input.length > 0 && canShowSuggestions(suggestions, input)
  const showFavorites = favorites && favorites.length > 0 && focus && !input

  const onUpdate = React.useCallback(
    (nextInput: string) => {
      setInput(nextInput)
      onSearch(nextInput || null)

      if (freeInput) {
        // When we use freeInput, T = string.
        const nextValue: T = nextInput as any
        onChange(nextValue)
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
    (item: T) => {
      onChange(item)
      onSearch(null)
      setInput(mapValueToInput(item))
      setUnstable(false)
    },
    [onChange, onSearch, mapValueToInput]
  )

  return (
    <AutocompleteRoot>
      <Input
        inputRef={inputRef}
        onChange={ev => {
          onUpdate(ev.target.value)
        }}
        onClear={() => {
          onUpdate('')
          onChange(null)
        }}
        onBlur={(ev: React.FocusEvent<HTMLInputElement>) => {
          setFocus(false)
          onSearch(null)
          if (onBlur) {
            onBlur(ev)
          }
        }}
        onFocus={(ev: React.FocusEvent<HTMLInputElement>) => {
          setFocus(true)
          if (unstable && input) {
            onSearch(input)
          }
          if (onFocus) {
            onFocus(ev)
          }
        }}
        value={input}
        {...props}
      />

      {(showFavorites || showSuggestions || noHintError) && (
        <Suggestions bottomFootprint={bottomFootprint}>
          <SuggestionsUl>
            {showSuggestions &&
              suggestions.map((item, index) => {
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
            {showFavorites &&
              favorites.map((item, index) => {
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
            {noHintError && <SuggestionLi>{noHintError}</SuggestionLi>}
          </SuggestionsUl>
        </Suggestions>
      )}
    </AutocompleteRoot>
  )
}
