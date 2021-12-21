import React from 'react'
import styled, {keyframes} from 'styled-components'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import ArrowUpIcon from './icons/arrow-up'
import {mediumPrimary} from '../constants/palette'

const open = keyframes({
  from: {height: 0},
  to: {height: 'var(--radix-collapsible-content-height)'}
})

const close = keyframes({
  from: {height: 'var(--radix-collapsible-content-height)'},
  to: {height: 0}
})

const StyledCollapsible = styled(CollapsiblePrimitive.Root)``
const StyledCollapsibleTrigger = styled(CollapsiblePrimitive.Trigger)`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.hover.backgroundColor};
  }
  &:focus-visible {
    box-shadow: ${props => props.theme.focus.outlineColor} 0px 0px 0px 2px;
  }
`
const StyledCollapsibleContent = styled(CollapsiblePrimitive.Content)`
  overflow: hidden;

  &[data-state='open'] {
    animation: ${open} 300ms ease-out;
  }
  &[data-state='closed'] {
    animation: ${close} 300ms ease-out;
  }
`

// Exports
export const Collapsible = StyledCollapsible
export const CollapsibleTrigger = StyledCollapsibleTrigger
export const CollapsibleContent = StyledCollapsibleContent

const StyledTriggerWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
`

const StyledIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
`

const StyledArrowUpIcon = styled(ArrowUpIcon)`
  transition: transform 300ms ease-out;

  [data-state='closed'] & {
    transform: rotate(-180deg);
  }
`

type AndiveCollapsibleProps = {
  trigger: React.ReactNode
  children: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
}

const AndiveCollapsible: React.FC<AndiveCollapsibleProps> = ({trigger, children, ...props}) => (
  <Collapsible {...props}>
    <CollapsibleTrigger>
      <StyledTriggerWrapper>
        {trigger}
        <StyledIconWrapper>
          <StyledArrowUpIcon color={mediumPrimary} />
        </StyledIconWrapper>
      </StyledTriggerWrapper>
    </CollapsibleTrigger>
    <CollapsibleContent>{children}</CollapsibleContent>
  </Collapsible>
)

export default AndiveCollapsible
