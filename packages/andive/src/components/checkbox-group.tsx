import React from 'react'
import styled from 'styled-components'

import * as palette from '../constants/palette'
import {Body3} from './typography'
import Box from './box'

export const CheckboxGroupContext = React.createContext<{
  values: CheckboxGroupValue
  onChange: (name: string) => void
  radio: boolean
} | null>(null)

const ErrorMessage = styled(Body3)`
  padding: 8px 16px;
  color: ${palette.darkRadishRed};
  background-color: ${palette.lightRadishRed};
  border-radius: 4px;

  & a {
    text-decoration: underline;
    color: ${palette.darkRadishRed};
  }
`

const FlexBox = styled(Box)`
  display: flex;
`

export interface CheckboxGroupValue {
  [name: string]: boolean
}
interface CheckboxGroupProps {
  children: React.ReactNode
  value: CheckboxGroupValue
  onChange: (values: CheckboxGroupValue) => void
  radio?: boolean
  error?: string
  className?: string
}
export function CheckboxGroup({className, children, onChange, value, radio, error}: CheckboxGroupProps) {
  const [values, setValues] = React.useState(value)

  React.useEffect(() => {
    if (value && value !== values) {
      if (radio) {
        const truthyAmount = Object.keys(value).reduce<number>((count, name) => {
          return (value[name] ? 1 : 0) + count
        }, 0)

        if (truthyAmount > 1) {
          throw new Error(
            'When "radio" is true, the <CheckboxGroup /> cannot accept more then 1 selected checkbox at a time.'
          )
        }
      }

      setValues(value)
    }
  }, [value])

  const onCheckboxChange = React.useCallback(
    (name: string) => {
      const nextValues = radio
        ? {[name]: true}
        : {
            ...values,
            [name]: !values[name]
          }

      setValues(nextValues)
      onChange(nextValues)
    },
    [values]
  )

  const contextValue = React.useMemo(
    () => ({
      values,
      onChange: onCheckboxChange,
      radio: radio || false
    }),
    [values, onCheckboxChange]
  )

  return (
    <div className={className}>
      <CheckboxGroupContext.Provider value={contextValue}>{children}</CheckboxGroupContext.Provider>
      {error && (
        <FlexBox>
          <ErrorMessage>{error}</ErrorMessage>
        </FlexBox>
      )}
    </div>
  )
}
