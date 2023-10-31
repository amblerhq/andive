import React, {DOMAttributes} from 'react'
import styled, {css} from 'styled-components'

import {body2Css} from './typography'
import * as palette from '../constants/palette'
import FilterIcon from './icons/filter'

const FilterButtonRoot = styled(({active, backgroundColor, ...props}) => <button {...props} />)<{
  active?: boolean
  backgroundColor?: string
}>`
  outline: none;
  border: none;
  background: ${({active, backgroundColor}) =>
    backgroundColor || (active ? palette.mediumBerryBlue : palette.darkGrey)};
  border-radius: 16px;
  cursor: pointer;
  height: 40px;
  min-width: 40px;
  padding: 8px;
  display: flex;
  align-items: center;

  ${({active}) =>
    active &&
    css`
      *[data-andive-type='typography'],
      svg {
        color: ${palette.white};
      }
    `}

  &:hover {
    background-color: ${({active}) => (active ? palette.darkBerryBlue : palette.lightPrimary)};
  }
`

const FilterText = styled(({active, color, ...props}) => <div {...props} />)<{
  active?: boolean
  color?: string
}>`
  ${body2Css};
  color: ${({active, color}) => color || (active ? palette.white : palette.secondaryText)};
  padding: 0 8px;
`

interface FilterButtonProps {
  className?: string
  label?: string | JSX.Element
  onClick?: DOMAttributes<HTMLButtonElement>['onClick']
  color?: string
  active?: boolean
  icon?: JSX.Element
}

export const FilterButton = ({active, color, onClick, className, label, icon, ...buttonProps}: FilterButtonProps) => {
  return (
    <FilterButtonRoot onClick={onClick} className={className} active={active} {...buttonProps}>
      {icon !== null && (icon ? React.cloneElement(icon, {color}) : <FilterIcon color={color} />)}
      {label && (
        <FilterText active={active} color={color}>
          {label}
        </FilterText>
      )}
    </FilterButtonRoot>
  )
}
