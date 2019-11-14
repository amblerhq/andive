import React from 'react'
import styled, {css} from 'styled-components'

import * as palette from '../constants/palette'

const rootCss = css`
  background: white;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${palette.hexToRGBA(palette.lightPrimary)};
`

const CardRoot = styled.div`
  ${rootCss}
`

export interface Props {
  component: React.ElementType;
  children?: any;
}

const computeCard = component => {
  return component
    ? styled(component)`
        ${rootCss}
      `
    : CardRoot
}

function Card({component, children}: Props) {
  const ComputedCard = React.useMemo(() => computeCard(component), [component])
  return <ComputedCard>{children}</ComputedCard>
}

export default Card
