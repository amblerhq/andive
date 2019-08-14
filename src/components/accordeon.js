import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Info from './info'
import ArrowDownIcon from './icons/arrow-down'
import ArrowUpIcon from './icons/arrow-up'
import * as palette from '../constants/palette'
import HSpace from './h-space'

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

function AccordeonComponent({label, openByDefault, icon, iconSize, children}) {
  const [open, setOpen] = React.useState(openByDefault || false)
  const onClick = React.useCallback(() => {
    setOpen(prev => !prev)
  }, [setOpen])

  return (
    <Accordeon>
      <AccordeonButton onClick={onClick}>
        <Info icon={icon} iconSize={iconSize}>
          <Info.Label label={label} />
        </Info>
        <HSpace px={8} />
        {open ? <ArrowUpIcon color={palette.mediumPrimary} /> : <ArrowDownIcon color={palette.mediumPrimary} />}
      </AccordeonButton>
      {open ? children : null}
    </Accordeon>
  )
}

AccordeonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  openByDefault: PropTypes.bool,
  icon: PropTypes.node,
  iconSize: PropTypes.number,
  children: PropTypes.node
}

export default AccordeonComponent
