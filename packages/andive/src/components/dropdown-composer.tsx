import React from 'react'
import styled, { css } from 'styled-components'

import { ZIndexes } from '../constants/enum'

const HorizontalVariant = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
}

const VerticalVariant = {
  UP: 'UP',
  DOWN: 'DOWN'
}

 const Overlay = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: transparent;
  z-index: ${ZIndexes.MODALS};
`

const DropdownComposeRoot = styled.div`
  position: relative;
`

const DropdownAnchor = styled.div<{ vertical: keyof typeof VerticalVariant, horizontal: keyof typeof HorizontalVariant }>`
  display: inline-block;
  position: absolute;

  ${props => props.horizontal === 'LEFT' && css`
    right: 0;
  `}

  ${props => props.horizontal === 'RIGHT' && css`
    left: 0;
  `}

  ${props => props.vertical === 'UP' && css`
    bottom: calc(100%);
  `}

  ${props => props.vertical === 'DOWN' && css`
    top: 100%;
  `}

  z-index: ${ZIndexes.MODALS + 1};
`

export function DropdownComposer({ button, dropdown, vertical = 'DOWN', horizontal = 'RIGHT', }: any) {
  const [open, setOpen] = React.useState(false)
  const Dropdown = dropdown
  return (
    <>
      {open && <Overlay onClick={() => setOpen(false)}/>}
      <DropdownComposeRoot>
        {React.cloneElement(button, { onClick() { setOpen(p => !p)}, active: open })}
        {open && <DropdownAnchor vertical={vertical} horizontal={horizontal}>
        <Dropdown onClick={() => setOpen(false)} />
        </DropdownAnchor>}
      </DropdownComposeRoot>
    </>
  )
}

DropdownComposer.HorizontalVariant = HorizontalVariant
DropdownComposer.VerticalVariant = VerticalVariant