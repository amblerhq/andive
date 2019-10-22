import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Info from './info'
import ArrowDownIcon from './icons/arrow-down'
import ArrowUpIcon from './icons/arrow-up'
import * as palette from '../constants/palette'
import HSpace from './h-space'
import ArrowRightIcon from './icons/arrow-right'
import {Hover, Typography} from '..'

const Accordeon = styled.div`
  padding: 8px 8px 8px ${props => (props.hasIcon ? 0 : 8)}px;
`

const AccordeonButton = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`

function AccordeonComponent({label, openByDefault, open, onToggle, icon, iconSize, href, overflow = 0, children}) {
  const [localOpen, setLocalOpen] = React.useState(openByDefault || false)

  const accordeon = (
    <>
      <Accordeon hasIcon={Boolean(icon)}>
        <AccordeonButton onClick={href ? undefined : onToggle || (() => setLocalOpen(prev => !prev))}>
          {icon ? (
            <Info>
              <Info.LabelIcon iconSize={iconSize} icon={icon} label={label} />
            </Info>
          ) : (
            <Typography.Body1>{label}</Typography.Body1>
          )}
          <HSpace px={8} />
          {href ? (
            <ArrowRightIcon color={palette.mediumPrimary} />
          ) : localOpen || open ? (
            <ArrowUpIcon color={palette.mediumPrimary} />
          ) : (
            <ArrowDownIcon color={palette.mediumPrimary} />
          )}
        </AccordeonButton>
      </Accordeon>
      {localOpen || open ? children : null}
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Hover overflow={overflow}>{accordeon}</Hover>
      </a>
    )
  }

  return accordeon
}

AccordeonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  openByDefault: PropTypes.bool,
  icon: PropTypes.node,
  iconSize: PropTypes.number,
  children: PropTypes.node,
  overflow: PropTypes.number
}

export default AccordeonComponent
