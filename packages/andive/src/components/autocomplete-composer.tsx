import React from 'react'
import styled from 'styled-components'

import {Input} from './input'
import {Hover} from './hover'
import {Body1} from './typography'
import Box from './box'
import {DropdownComposer} from './dropdown-composer'
import {DropdownBase} from './dropdown-base'
import * as palette from '../constants/palette'

export const Divider = styled.div`
  width: calc(100% - 16px);
  height: 1px;
  background: ${palette.border};
  margin: 8px;
`

export const FullWidthDivider = styled.div`
  width: calc(100% + 16px);
  height: 1px;
  background: ${palette.border};
  margin: 8px 0;

  position: relative;
  left: -8px;
`

const Suggestion = styled.div`
  position: relative;
  cursor: pointer;
`

const CustomDropdownBase = styled(DropdownBase)`
  overflow-y: auto;
  max-height: 300px;
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

export function AutocompleteComposer<T>({
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
    <DropdownComposer<T>
      initialState={suggestions.length > 0}
      render={({setOpen}) => (
        <Input
          inputRef={inputRef}
          onChange={ev => onUpdate(ev.target.value)}
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
            setOpen(false)
          }}
          onFocus={(ev: React.FocusEvent<HTMLInputElement>) => {
            setFocus(true)
            setOpen(true)
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
      )}
      dropdown={({onClick}) => {
        return suggestions.length > 0 || noHintError ? (
          <CustomDropdownBase>
            {suggestions.length > 0 &&
              suggestions.map((item, index) => {
                return (
                  <Suggestion
                    key={index}
                    onMouseDown={() => {
                      if (onClick) {
                        onClick(item)
                      }
                      onSelectItem(item)
                    }}
                  >
                    {renderSuggestion(item, index, suggestions.length)}
                    {(index !== suggestions.length - 1 || noHintError) && <Divider />}
                  </Suggestion>
                )
              })}
            {noHintError && <Suggestion>{noHintError}</Suggestion>}
          </CustomDropdownBase>
        ) : (
          <></>
        )
      }}
    />
  )
}
