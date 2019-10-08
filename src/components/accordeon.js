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
  padding: 8px 16px 8px 8px;
`

const AccordeonButton = styled.div`
  cursor: pointer;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

function AccordeonComponent({label, openByDefault, icon, iconSize, href, children}) {
  const [open, setOpen] = React.useState(openByDefault || false)
  const onClick = React.useCallback(() => {
    setOpen(prev => !prev)
  }, [setOpen])

  const accordeon = (
    <Accordeon>
      <AccordeonButton onClick={href ? undefined : onClick}>
        <Info icon={icon} iconSize={iconSize}>
          <Info.Label label={label} />
        </Info>
        <HSpace px={8} />
        {href ? (
          <ArrowRightIcon color={palette.mediumPrimary} />
        ) : open ? (
          <ArrowUpIcon color={palette.mediumPrimary} />
        ) : (
          <ArrowDownIcon color={palette.mediumPrimary} />
        )}
      </AccordeonButton>
      {open ? children : null}
    </Accordeon>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Hover overflow={0}>{accordeon}</Hover>
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
  children: PropTypes.node
}

export default AccordeonComponent
