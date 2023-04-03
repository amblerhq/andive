import React from 'react'
import styled, {css} from 'styled-components'
import OutsideClickHandler from 'react-outside-click-handler'

import * as palette from '../constants/palette'
import Button from './button'
import {H2} from './typography'
import {ZIndexes} from '../constants/enum'
import {CloseIcon} from '..'
import {FilterButton} from './filter-button'

const MenuFilterRoot = styled.div<{open?: boolean}>`
  position: relative;
  z-index: ${props => (props.open ? ZIndexes.MODALS + 1 : undefined)};
`

const Menu = styled.div<{openLeft?: boolean; mobile?: boolean}>`
  position: absolute;

  ${props =>
    props.openLeft
      ? css`
          right: 0;
        `
      : undefined}

  display: flex;
  flex-flow: column nowrap;

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

  padding: 24px 8px;
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
  justify-content: center;
  align-items: center;

  box-shadow: 0 2px 5px 0 ${palette.hexToRGBA(palette.darkPrimary, 0.2)};
  position: relative;
  padding: 8px 16px;
  height: 56px;
  min-height: 56px;
`

const MobileHeaderIconRight = styled.div`
  position: absolute;
  right: 16px;
`

const MobileActions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 8px;
`

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

interface MenuFilterProps {
  className?: string
  label?: string
  title?: string
  button?: JSX.Element
  selected?: boolean
  mobile?: boolean
  onSave?: () => void
  onClear?: () => void
  onClose?: () => void
  children: React.ReactNode
  openLeft?: boolean
  transparent?: boolean
  openByDefault?: boolean
}

export function DropdownFilter({
  className,
  label,
  title,
  button,
  selected,
  onSave,
  onClear,
  onClose,
  mobile,
  children,
  openLeft = false,
  transparent = false,
  openByDefault = false
}: MenuFilterProps) {
  const [open, setOpen] = React.useState(openByDefault)
  const onClick = React.useCallback(() => {
    setOpen(prev => !prev)
  }, [setOpen])
  const onCloseAndSave = React.useCallback(() => {
    setOpen(false)
    if (onSave) {
      onSave()
    }
  }, [setOpen, onSave])
  const onCloseOnly = React.useCallback(() => {
    setOpen(false)
    if (onClose) {
      onClose()
    }
  }, [])

  return (
    <>
      {open && !transparent && <PageOverlay />}
      <MenuFilterRoot open={open}>
        {button &&
          React.cloneElement(button, {
            onClick() {
              onClick()
            },
            active: open || selected
          })}
        {!button && <FilterButton active={selected || open} label={label} onClick={onClick} />}
        {open && (
          <OutsideClickHandler onOutsideClick={onCloseAndSave}>
            <Menu className={className} openLeft={openLeft} mobile={mobile}>
              {mobile && (
                <MobileHeader>
                  {title && <H2>{title}</H2>}
                  <MobileHeaderIconRight>
                    <CloseIcon onClick={onCloseOnly} color={palette.darkBerryBlue} />
                  </MobileHeaderIconRight>
                </MobileHeader>
              )}
              {mobile && onClear && (
                <MobileActions>
                  <Button variant="flat" label="Tout effacer" onClick={onClear} />
                </MobileActions>
              )}
              {typeof children === 'function' ? children({close: onCloseOnly}) : children}

              {mobile
                ? onSave && (
                    <StickyFooter>
                      <Button variant="primary" label="Enregistrer" onClick={onCloseAndSave} />
                    </StickyFooter>
                  )
                : (onClear || onSave) && (
                    <Actions>
                      {onClear && (
                        <Button variant="flat" textColor={palette.darkPrimary} label="Tout effacer" onClick={onClear} />
                      )}
                      {onSave && <Button variant="flat" label="Enregistrer" onClick={onCloseAndSave} />}
                    </Actions>
                  )}
            </Menu>
          </OutsideClickHandler>
        )}
      </MenuFilterRoot>
    </>
  )
}
