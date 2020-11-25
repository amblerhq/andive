import React, {DOMAttributes} from 'react'
import styled, {css} from 'styled-components'

import {body1Css, body3Css} from './typography'
import * as palette from '../constants/palette'
import FilterIcon from './icons/filter'

const FilterButtonRoot = styled(({active, backgroundColor, ...props}) => <button {...props} />)<{
  active?: boolean
  backgroundColor?: string
}>`
  background: ${({active, backgroundColor}) =>
    backgroundColor || (active ? palette.mediumBerryBlue : palette.mediumGrey)};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  height: 40px;
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
    background-color: ${({active}) => (active ? palette.darkBerryBlue : palette.darkGrey)};
  }
`

const FilterText = styled(({active, color, mobile, ...props}) => <div {...props} />)<{
  active?: boolean
  color?: string
  mobile?: boolean
}>`
  ${props => (props.mobile ? body3Css : body1Css)};
  color: ${({active, color}) => color || (active ? palette.white : palette.secondaryText)};
  padding: 0 8px;
`

interface FilterButtonProps {
  className?: string
  label?: string | JSX.Element
  onClick?: DOMAttributes<HTMLButtonElement>['onClick']
  color?: string
  active?: boolean
  mobile?: boolean
}

export const FilterButton = ({active, color, onClick, className, label, mobile, ...buttonProps}: FilterButtonProps) => {
  return (
    <FilterButtonRoot onClick={onClick} className={className} active={active} {...buttonProps}>
      <FilterIcon />
      {label && (
        <FilterText active={active} color={color} mobile={mobile}>
          {label}
        </FilterText>
      )}
    </FilterButtonRoot>
  )
}
