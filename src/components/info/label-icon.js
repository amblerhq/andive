import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import {Body1, TypographyPropTypes} from '../typography'

const LabelIcon = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;

  ${props =>
    props.stickyIcon &&
    css`
      position: relative;
      padding-left: ${props => props.iconSize}px;
    `}
`

const Label = styled(Body1)`
  padding-left: 8px;
`

const IconWrapper = styled.div`
  width: ${props => props.iconSize}px;

  ${props =>
    props.stickyIcon &&
    css`
      position: absolute;
      top: 0;
      left: 0;
    `}
`

export default function LabelIconComponent({className, icon, iconSize = 24, stickyIcon, label, ...typographyProps}) {
  return (
    <LabelIcon className={className} iconSize={iconSize} stickyIcon={stickyIcon}>
      {icon ? (
        <IconWrapper iconSize={iconSize} stickyIcon={stickyIcon}>
          {icon}
        </IconWrapper>
      ) : null}{' '}
      <Label {...typographyProps}>{label}</Label>
    </LabelIcon>
  )
}

LabelIconComponent.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  iconSize: PropTypes.number,
  stickyIcon: PropTypes.bool,
  label: PropTypes.string.isRequired,
  ...TypographyPropTypes
}
