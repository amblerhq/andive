import * as React from 'react'
import styled from 'styled-components'

import Box from './box'
import Icon from './icon'
import ArrowDownIcon from './icons/arrow-down'
import ArrowUpIcon from './icons/arrow-up'
import * as palette from '../constants/palette'
import HSpace from './h-space'
import ArrowRightIcon from './icons/arrow-right'
import {Typography} from '..'
import {ReactNodeLike} from 'prop-types'

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
  align-items: center;

  cursor: pointer;
`

export interface Props {
  className?: string;
  label: string | React.ElementType;
  openByDefault?: boolean;
  open?: any;
  onToggle?: any;
  icon?: ReactNodeLike;
  iconSize?: number;
  href?: string;
  overflow?: number;
  children?: any;
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

function AccordeonComponent({className, label, openByDefault, open, onToggle, icon, iconSize, href, children}: Props) {
  const [localOpen, setLocalOpen] = React.useState(openByDefault || false)
  return (
    <>
      <Accordeon className={className}>
        <OptionalLink href={href}>
          <AccordeonButton onClick={href ? undefined : onToggle || (() => setLocalOpen(prev => !prev))}>
            {/* `min-width: 0` is required if the `label` wants to truncate with ellipsis its content. */}
            {icon ? (
              <Box>
                <Icon icon={icon}>
                  <Box>
                  <Typography.Body1>
                    {label}
                  </Typography.Body1>
                    </Box>
                </Icon>
              </Box>

            ) : (
              <Typography.Body1 style={{minWidth: 0}}>{label}</Typography.Body1>
            )}
            <HSpace px={8} />
            {href ? (
              <ArrowRightIcon color={palette.mediumPrimary} />
            ) : localOpen || open ? (
              <ArrowUpIcon color={palette.mediumPrimary} />
            ) : (
              <ArrowDownIcon color={palette.mediumPrimary} />
            )}
          </AccordeonButton>
        </OptionalLink>
      </Accordeon>
      {localOpen || open ? children : null}
    </>
  )
}

export default AccordeonComponent
