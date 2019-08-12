import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Body1} from '../typography'

const LabelIcon = styled.div`
  height: 32px;
  width: 100%;

  display: flex;
  flex-flow: row nowrap;

  align-items: center;
`

const Label = styled(Body1)`
  padding-left: 8px;
`

export default function LabelIconComponent({icon, label, ...props}) {
  return (
    <LabelIcon {...props}>
      {icon} <Label>{label}</Label>
    </LabelIcon>
  )
}

LabelIconComponent.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired
}
