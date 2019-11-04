import * as React from 'react'
import styled from 'styled-components'

import Info from './info'
import ArrowDownIcon from './icons/arrow-down'
import ArrowUpIcon from './icons/arrow-up'
import * as palette from '../constants/palette'
import HSpace from './h-space'
import ArrowRightIcon from './icons/arrow-right'
import {Hover, Typography} from '..'
import {ReactNodeLike} from 'prop-types'

const Accordeon = styled.div`
  padding: 8px 8px 8px ${(props: {hasIcon: boolean}) => (props.hasIcon ? 0 : 8)}px;
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

function AccordeonComponent({
  className,
  label,
  openByDefault,
  open,
  onToggle,
  icon,
  iconSize,
  href,
  overflow = 0,
  children
}: Props) {
  const [localOpen, setLocalOpen] = React.useState(openByDefault || false)
  const accordeon = (
    <>
      <Accordeon className={className} hasIcon={Boolean(icon)}>
        <AccordeonButton onClick={href ? undefined : onToggle || (() => setLocalOpen(prev => !prev))}>
          {/* `min-width: 0` is required if the `label` wants to truncate with ellipsis its content. */}
          {icon ? (
            <Info style={{minWidth: 0}}>
              <Info.LabelIcon iconSize={iconSize} icon={icon} label={label} />
            </Info>
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
      </Accordeon>
      {localOpen || open ? children : null}
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Hover overflow={overflow}>{accordeon}</Hover>
      </a>
    )
  }

  return accordeon
}

export default AccordeonComponent
