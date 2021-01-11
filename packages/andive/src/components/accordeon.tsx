import * as React from 'react'
import styled from 'styled-components'

import ArrowDownIcon from './icons/arrow-down'
import ArrowUpIcon from './icons/arrow-up'
import * as palette from '../constants/palette'
import ArrowRightIcon from './icons/arrow-right'
import Box from './box'

const Accordeon = styled.div`
  padding: 8px;

  &:hover {
    background: ${props => props.theme.hover.backgroundColor};
    border-radius: ${props => props.theme.hover.borderRadius}px;
  }
`

const AccordeonButton = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;

  cursor: pointer;
`

export interface Props {
  className?: string
  open?: any
  openByDefault?: boolean
  onToggle?: any
  header?: React.ReactNode
  children?: any
  href?: string
}

function OptionalLink({href, children}) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return children
}

const Flex = styled.div`
  flex: 1;
`

const IconBox = styled(Box)`
  width: auto;
`

function AccordeonComponent({className, header, openByDefault, open, onToggle, href, children}: Props) {
  const [localOpen, setLocalOpen] = React.useState(openByDefault || false)
  const showChildren = localOpen || open
  return (
    <>
      <Accordeon className={className}>
        <OptionalLink href={href}>
          <AccordeonButton onClick={href ? undefined : onToggle || (() => setLocalOpen(prev => !prev))}>
            {header && <Flex>{header}</Flex>}
            <IconBox>
              {href ? (
                <ArrowRightIcon color={palette.mediumPrimary} />
              ) : showChildren ? (
                <ArrowUpIcon color={palette.mediumPrimary} />
              ) : (
                <ArrowDownIcon color={palette.mediumPrimary} />
              )}
            </IconBox>
          </AccordeonButton>
        </OptionalLink>
      </Accordeon>
      {showChildren && children}
    </>
  )
}

export default AccordeonComponent
