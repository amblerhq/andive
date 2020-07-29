import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import * as palette from '../constants/palette'
import Button from './button'
import {ZIndexes} from '../constants/enum'
import {CloseIcon} from '..'

const MenuFilterRoot = styled.div`
  position: relative;
  z-index: ${props => (props.open ? ZIndexes.MODALS + 1 : undefined)};
`

const Menu = styled.div`
  position: absolute;

  ${props =>
    props.openLeft
      ? css`
          right: 0;
        `
      : undefined}

  display: flex;
  flex-flow column nowrap;

  margin-top: 8px;
  padding: 16px 16px 0 16px;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 ${palette.hexToRGBA(palette.darkPrimary, 0.3)};
  background: white;

  z-index: ${ZIndexes.MODALS + 1};

  ${props =>
    props.mobile &&
    css`
      position: fixed;

      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      padding: 0;
      box-shadow: none;
      border-radius: 0;
      margin-top: 0;
    `};
`

const Actions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  padding: 24px 16px;
`

export const PageOverlay = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.8);
  z-index: ${ZIndexes.MODALS};
`

const MobileHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 2px 5px 0 ${palette.hexToRGBA(palette.darkPrimary, 0.2)};

  padding: 8px 16px;
  height: 56px;
`

function CloseButton(props) {
  return <CloseIcon {...props} />
}

const StickyFooter = styled.div`
  position: fixed;

  top: calc(100% - 88px);
  left: 0;

  width: 100%;
  height: 88px;

  box-shadow: inset 0 1px 0 0 #dddddd;
  background: rgba(255, 255, 255, 0.8);

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  z-index: ${ZIndexes.MODALS + 1};
`

function MenuFilter({label, button, selected, onSave, onClear, onClose, mobile, children, openLeft = false, ...props}) {
  const [open, setOpen] = React.useState(false)
  const onClick = React.useCallback(() => {
    setOpen(prev => !prev)
  }, [setOpen])
  const onCloseAndSave = React.useCallback(() => {
    setOpen(false)
    onSave && onSave()
  }, [setOpen, onSave])
  const onCloseOnly = React.useCallback(() => {
    setOpen(false)
    onClose && onClose()
  })

  return (
    <>
      {open && <PageOverlay onClick={onCloseAndSave} />}
      <MenuFilterRoot open={open}>
        {button &&
          React.cloneElement(button, {
            onClick() {
              onClick()
            },
            active: open
          })}
        {!button && (
          <Button variant="filter" invert={!selected && !open} label={label} onClick={onClick} mobile={mobile} />
        )}
        {open && (
          <Menu openLeft={openLeft} mobile={mobile} {...props}>
            {mobile && (
              <MobileHeader>
                <CloseButton onClick={onCloseOnly} />
                {onClear && <Button variant="flat" label="Effacer" onClick={onClear} />}
              </MobileHeader>
            )}
            {children}
            {mobile
              ? onSave && (
                  <StickyFooter>
                    <Button
                      variant="primary"
                      color={palette.mediumBerryBlue}
                      label="Enregistrer"
                      onClick={onCloseAndSave}
                    />
                  </StickyFooter>
                )
              : (onClear || onSave) && (
                  <Actions>
                    {onClear && (
                      <Button variant="flat" textColor={palette.darkPrimary} label="Effacer" onClick={onClear} />
                    )}
                    {onSave && <Button variant="flat" label="Enregistrer" onClick={onCloseAndSave} />}
                  </Actions>
                )}
          </Menu>
        )}
      </MenuFilterRoot>
    </>
  )
}

MenuFilter.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool,
  onSave: PropTypes.func,
  onClear: PropTypes.func,
  onClose: PropTypes.func,
  mobile: PropTypes.bool,
  children: PropTypes.node,
  openLeft: PropTypes.bool
}

export default MenuFilter
