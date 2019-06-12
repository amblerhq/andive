import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {ZIndexes} from '../constants/enum'
import Button from './button'
import Menu from './menu'

const Dropdown = styled.div`
  position: absolute;
  left: -8px;
  top: 48px;

  min-width: 320px;

  z-index: ${ZIndexes.ABSOLUTE};

  margin-bottom: ${props => props.bottomFootprint || 0}px;
`

const DropdownMenuLayout = styled.div`
  position: relative;
`

function DropdownMenu({children, label, onClick, value, valueToString = x => x, ...props}) {
  const [open, setOpen] = React.useState(false)

  const onItemClick = id => {
    setOpen(false)
    onClick(id)
  }

  return (
    <DropdownMenuLayout>
      <Button onClick={() => setOpen(prev => !prev)} label={value ? valueToString(value) : label} {...props} />
      {open && (
        <Dropdown>
          <Menu onClick={onItemClick}>{children}</Menu>
        </Dropdown>
      )}
    </DropdownMenuLayout>
  )
}

DropdownMenu.Option = Menu.Option
DropdownMenu.OptionGroup = Menu.OptionGroup

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  valueToString: PropTypes.func
}

export default DropdownMenu
