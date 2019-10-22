import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Info from './info'
import ArrowDownIcon from './icons/arrow-down'
import ArrowUpIcon from './icons/arrow-up'
import * as palette from '../constants/palette'
import HSpace from './h-space'
import ArrowRightIcon from './icons/arrow-right'
import {Hover} from '..'

const Accordeon = styled.div`
  padding: 8px 8px 8px 0px;
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
      <Accordeon>
        <AccordeonButton onClick={href ? undefined : onToggle || (() => setLocalOpen(prev => !prev))}>
          <Info>
            <Info.LabelIcon iconSize={iconSize} icon={icon} label={label} />
          </Info>
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
