import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import CheckIcon from './icons/check'
import UncheckIcon from './icons/uncheck'
import {Body1} from './typography'

const Checkbox = styled.div`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: 8px;

  display: flex;
  align-items: center;

  cursor: pointer;
`

const Label = styled(Body1)`
  padding-left: 12px;

  /* Match Icon height */
  line-height: 24px;
`

function CheckboxComponent({label, value, onClick, fullWidth, ...props}) {
  const Icon = value ? CheckIcon : UncheckIcon

  return (
    <Checkbox fullWidth={fullWidth} onClick={onClick} {...props}>
      <Icon inline />
      <Label>{label}</Label>
    </Checkbox>
  )
}

CheckboxComponent.propTypes = {
  value: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  fullWidth: PropTypes.bool
}

export default CheckboxComponent
