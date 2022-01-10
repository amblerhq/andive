import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'
import posed, {PoseGroup} from 'react-pose'
import OutsideClickHandler from 'react-outside-click-handler'

import {ZIndexes} from '../constants/enum'
import useElementRect from '../lib/use-element-rect'

import Button from './button'
import Menu from './menu'

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

  ${({openVariant}) => {
    if (openVariant === OpenVariant.LEFT) {
      return css`
        right: 0;
      `
    }

    if (openVariant === OpenVariant.RIGHT) {
      return css`
        left: -20px;
      `
    }

    if (openVariant === OpenVariant.UP) {
      return css`
        bottom: 0;
      `
    }

    throw new Error(`openVariant prop (${openVariant}) of type oneOf(OpenVariant) is not valid`)
  }}

  ${({fullWidth, buttonLeft}) =>
    fullWidth &&
    css`
      left: ${-buttonLeft + 8}px;
      width: 100vw;
    `}

  z-index: ${ZIndexes.ABSOLUTE};
  margin-bottom: ${props => props.bottomFootprint || 0}px;
`

const DropdownMenuLayout = styled.div`
  position: relative;
`

const DefaultButton = styled(Button)`
  padding-left: 0;
  padding-right: 0;
`

const defaultButton = React.forwardRef((props, ref) => <DefaultButton ref={ref} variant="flat" {...props} />)

const OpenVariant = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
  UP: 'UP'
}

function DropdownMenu({
  className,
  children,
  label,
  onClick,
  value,
  valueToString = x => x,
  threshold = 640,
  bottomFootprint,
  buttonComponent = defaultButton,
  openVariant = OpenVariant.RIGHT,
  loading = false,
  noScroll = false,
  defaultOpen = false
}) {
  // Don't allow to open the dropdownMenu by default when component mount if value is defined
  const [open, setOpen] = React.useState(value ? false : defaultOpen)
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
      onClick && onClick(id)
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

  // ? Resize on open.
  React.useEffect(() => {
    if (open) {
      onResize()
    }
  }, [open])

  // ? Resize on window size change.
  React.useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  const ButtonComponent = buttonComponent

  return (
    <DropdownMenuLayout className={className}>
      <ButtonComponent
        ref={buttonRef}
        onClick={onOpen}
        label={value ? valueToString(value) : label}
        loading={loading}
      />
      {open && (
        <OutsideClickHandler onOutsideClick={onClose}>
          <PoseGroup>
            <Dropdown
              key="dropdown"
              ref={dropdownRef}
              buttonLeft={buttonLeft}
              fullWidth={fullWidth}
              openVariant={openVariant}
            >
              <Menu
                ref={menuRef}
                onClick={onItemClick}
                bottomFootprint={bottomFootprint}
                mobile={fullWidth}
                noScroll={noScroll}
              >
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
DropdownMenu.OpenVariant = OpenVariant
DropdownMenu.DropDown = Dropdown

DropdownMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
  valueToString: PropTypes.func,
  threshold: PropTypes.number,
  bottomFootprint: PropTypes.number,
  buttonComponent: PropTypes.elementType,
  loading: PropTypes.bool,
  noScroll: PropTypes.bool,
  openVariant: PropTypes.oneOf(Object.keys(OpenVariant))
}

export default DropdownMenu
