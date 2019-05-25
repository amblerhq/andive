import React, {createContext, useEffect, useState, useCallback, useMemo} from 'react'
import PropTypes from 'prop-types'

export const CheckboxGroupContext = createContext(null)

function CheckboxGroup({children, onChange, value, radio, ...props}) {
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
    </div>
  )
}

CheckboxGroup.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  radio: PropTypes.bool
}

export default CheckboxGroup
