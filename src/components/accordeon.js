import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Info from './info'
import ArrowDownIcon from './icons/arrow-down'
import ArrowRightIcon from './icons/arrow-right'
import {mediumGrey} from '../constants/palette'

const Accordeon = styled.div`
  width: 100%;
`

const AccordeonButton = styled.div`
  cursor: pointer;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

function AccordeonComponent({label, openByDefault, icon, children}) {
  const [open, setOpen] = React.useState(openByDefault || false)
  const onClick = React.useCallback(() => {
    setOpen(prev => !prev)
  }, [setOpen])

  return (
    <Accordeon>
      <AccordeonButton onClick={onClick}>
        <Info icon={icon}>
          <Info.Label label={label} />
        </Info>
        {open ? <ArrowDownIcon color={mediumGrey} /> : <ArrowRightIcon color={mediumGrey} />}
      </AccordeonButton>
      {open ? children : null}
    </Accordeon>
  )
}

AccordeonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  openByDefault: PropTypes.bool,
  icon: PropTypes.node,
  children: PropTypes.node
}

export default AccordeonComponent
