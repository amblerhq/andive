import React from 'react'
import styled from 'styled-components'
import ArrowUpIcon from './icons/arrow-up'
import {mediumPrimary} from '../constants/palette'

const StyledCollapsible = styled.div``
const StyledCollapsibleTrigger = styled.button`
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
const StyledCollapsibleContent = styled.div``

// Exports
export const Collapsible = StyledCollapsible
export const CollapsibleTrigger = StyledCollapsibleTrigger
export const CollapsibleContent = StyledCollapsibleContent

const StyledTriggerWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
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

const AndiveCollapsible = React.forwardRef<HTMLInputElement, AndiveCollapsibleProps>(
  ({trigger, children, ...props}, forwardedRef) => {
    const [open, setOpen] = React.useState(props.defaultOpen || false)

    return (
      <Collapsible {...props} data-state={open ? 'open' : 'closed'} ref={forwardedRef}>
        <CollapsibleTrigger type="button" onClick={() => setOpen(open => !open)}>
          <StyledTriggerWrapper>
            {trigger}
            <StyledIconWrapper>
              <StyledArrowUpIcon color={mediumPrimary} />
            </StyledIconWrapper>
          </StyledTriggerWrapper>
        </CollapsibleTrigger>
        <CollapsibleContent>{open && children}</CollapsibleContent>
      </Collapsible>
    )
  }
)

export default AndiveCollapsible
