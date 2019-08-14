import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Body1, TypographyPropTypes} from '../typography'

const LabelIcon = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const Label = styled(Body1)`
  padding-left: 8px;
`

const IconWrapper = styled.div`
  width: ${props => props.iconSize}px;
`

export default function LabelIconComponent({className, icon, iconSize = 24, label, ...typographyProps}) {
  return (
    <LabelIcon className={className}>
      {icon ? <IconWrapper iconSize={iconSize}>{icon}</IconWrapper> : null} <Label {...typographyProps}>{label}</Label>
    </LabelIcon>
  )
}

LabelIconComponent.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  iconSize: PropTypes.number,
  label: PropTypes.string.isRequired,
  ...TypographyPropTypes
}
