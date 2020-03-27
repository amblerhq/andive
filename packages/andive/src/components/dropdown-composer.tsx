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

  background: rgba(255, 255, 255, 0.8);
  z-index: ${ZIndexes.MODALS};
`

const DropdownComposeRoot = styled.div`
  position: relative;
`

const DropdownAnchor = styled.div<{ vertical: keyof typeof VerticalVariant, horizontal: keyof typeof HorizontalVariant  }>`
  display: inline-block;
  position: absolute;

  ${props => props.horizontal === 'LEFT' && css`
    right: 8px;
  `}

  ${props => props.horizontal === 'RIGHT' && css`
    left: 8px;
  `}

  ${props => props.vertical === 'UP' && css`
    bottom: calc(100%);
  `}

  ${props => props.vertical === 'DOWN' && css`
    top: 100%;
  `}

  z-index: ${ZIndexes.MODALS + 1};
`

export function DropdownComposer({ button, dropdown, withOverlay, vertical = 'DOWN', horizontal = 'RIGHT', }: any) {
  const [open, setOpen] = React.useState(false)
  
  return (
    <>
      {withOverlay && open && <Overlay onClick={() => setOpen(false)}/>}
      <DropdownComposeRoot>
        {React.cloneElement(button, { onClick() { setOpen(p => !p) }})}
        {open && <DropdownAnchor vertical={vertical} horizontal={horizontal}>
        {dropdown}
        </DropdownAnchor>}
      </DropdownComposeRoot>
    </>
  )
}

DropdownComposer.HorizontalVariant = HorizontalVariant
DropdownComposer.VerticalVariant = VerticalVariant