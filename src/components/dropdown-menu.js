import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'
import posed, {PoseGroup} from 'react-pose'
import OutsideClickHandler from 'react-outside-click-handler'

import {ZIndexes} from '../constants/enum'
import useElementRect from '../lib/use-element-rect'

import * as palette from '../constants/palette'
import Button from './button'
import Menu from './menu'
import {body1Css} from './typography'

const Dropdown = styled(
  posed.div({
    enter: {
      opacity: 1,
      transition: {
        duration: 150,
        type: 'tween'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 150,
        type: 'tween'
      }
    }
  })
)`
  position: absolute;
  left: -24px;
  top: 40px;

  ${({fullWidth, buttonLeft}) =>
    fullWidth &&
    css`
      left: -${buttonLeft}px;
      width: 100vw;
    `}


  z-index: ${ZIndexes.ABSOLUTE};

  margin-bottom: ${props => props.bottomFootprint || 0}px;
`

const DropdownMenuLayout = styled.div`
  position: relative;
`

// This is not a real button but a fake select.
const DropdownButton = styled(Button)`
  > div {
    ${body1Css};
    color: ${palette.mediumBerryBlue};
  }
`

function DropdownMenu({
  children,
  label,
  onClick,
  value,
  valueToString = x => x,
  threshold = 640,
  bottomFootprint,
  ...props
}) {
  const [open, setOpen] = React.useState(false)
  const [fullWidth, setFullWidth] = React.useState(false)

  const dropdownRef = React.useRef(null)
  const buttonRef = React.useRef(null)
  const menuRef = React.useRef(null)

  const dropdownRect = useElementRect(dropdownRef)
  const buttonRect = useElementRect(buttonRef)

  const buttonLeft = buttonRect ? buttonRect.x : 0

  const onOpen = React.useCallback(() => {
    setOpen(true)
  })

  const onClose = React.useCallback(() => {
    setOpen(false)
  })

  const onItemClick = React.useCallback(
    id => {
      onClose()
      onClick(id)
    },
    [onClick]
  )

  const onResize = React.useCallback(
    throttle(() => {
      if (!open) {
        return
      }

      if (fullWidth) {
        if (window.innerWidth > threshold) {
          setFullWidth(false)
        }
      } else {
        if (window.innerWidth <= threshold) {
          setFullWidth(true)
        }
      }
    }, 500),
    [dropdownRect, open, fullWidth, threshold]
  )

  React.useEffect(() => {
    if (open) {
      onResize()
    }
  }, [open])

  React.useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return (
    <DropdownMenuLayout {...props}>
      <DropdownButton ref={buttonRef} onClick={onOpen} label={value ? valueToString(value) : label} variant="flat" />
      {open && (
        <OutsideClickHandler onOutsideClick={onClose}>
          <PoseGroup>
            <Dropdown key="dropdown" ref={dropdownRef} buttonLeft={buttonLeft} fullWidth={fullWidth}>
              <Menu ref={menuRef} onClick={onItemClick} bottomFootprint={bottomFootprint}>
                {children}
              </Menu>
            </Dropdown>
          </PoseGroup>
        </OutsideClickHandler>
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
  valueToString: PropTypes.func,
  threshold: PropTypes.number,
  bottomFootprint: PropTypes.number
}

export default DropdownMenu
