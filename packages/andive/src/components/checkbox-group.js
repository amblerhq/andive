import React, {createContext, useEffect, useState, useCallback, useMemo} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {error} from '../constants/palette'
import {Body2} from './typography'

export const CheckboxGroupContext = createContext(null)

const Error = styled(Body2)`
  color: ${error};
  padding: 4px 8px 8px 8px;
`

function CheckboxGroup({children, onChange, value, radio, error, ...props}) {
  const [values, setValues] = useState(value)

  useEffect(() => {
    if (value && value !== values) {
      if (radio) {
        const truthyAmount = Object.keys(value).reduce((count, name) => {
          return (value[name] ? 1 : 0) + count, 0
        })

        if (truthyAmount > 1) {
          throw new Error(
            'When "radio" is true, the <CheckboxGroup /> cannot accept more then 1 selected checkbox at a time.'
          )
        }
      }

      setValues(value)
    }
  }, [value])

  const onCheckboxChange = useCallback(
    name => {
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

  const contextValue = useMemo(() => ({values, onChange: onCheckboxChange, radio}), [values, onCheckboxChange])

  return (
    <div {...props}>
      <CheckboxGroupContext.Provider value={contextValue}>{children}</CheckboxGroupContext.Provider>
      {error && <Error>{error}</Error>}
    </div>
  )
}

CheckboxGroup.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object,
  onChange: PropTypes.func,
  radio: PropTypes.bool,
  error: PropTypes.string
}

export default CheckboxGroup
