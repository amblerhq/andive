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

  display: flex;
  flex-flow column nowrap;

  width: 320px;

  margin-top: 8px;
  padding: 16px 16px 0 16px;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 ${palette.darkGreyAlpha(0.3)};
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

const PageOverlay = styled.div`
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

  box-shadow: 0 2px 5px 0 ${palette.darkGreyAlpha(0.2)};

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

function MenuFilter({label, selected, onSave, onClear, mobile, children}) {
  const [open, setOpen] = React.useState(false)
  const onClick = React.useCallback(() => {
    setOpen(prev => !prev)
  }, [setOpen])
  const onCloseAndSave = React.useCallback(() => {
    setOpen(false)
    onSave && onSave()
  }, [setOpen, onSave])

  return (
    <>
      {open && <PageOverlay onClick={onCloseAndSave} />}
      <MenuFilterRoot open={open}>
        <Button variant="filter" invert={selected || open ? false : true} label={label} onClick={onClick} />
        {open && (
          <Menu mobile={mobile}>
            {mobile && (
              <MobileHeader>
                <CloseButton onClick={() => setOpen(false)} />
                <Button variant="flat" label="Effacer" onClick={onClear} />
              </MobileHeader>
            )}
            {children}
            {mobile ? (
              <StickyFooter>
                <Button variant="primary" color={palette.berryBlue} label="Enregistrer" onClick={onCloseAndSave} />
              </StickyFooter>
            ) : (
              <Actions>
                <Button variant="flat" textColor={palette.darkGrey} label="Effacer" onClick={onClear} />
                <Button variant="flat" label="Enregistrer" onClick={onCloseAndSave} />
              </Actions>
            )}
          </Menu>
        )}
      </MenuFilterRoot>
    </>
  )
}

MenuFilter.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onSave: PropTypes.func,
  onClear: PropTypes.func,
  mobile: PropTypes.bool,
  children: PropTypes.node
}

export default MenuFilter
