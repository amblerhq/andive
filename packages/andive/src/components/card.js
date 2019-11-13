import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
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

const computeCard = component => {
  return component
    ? styled(component)`
        ${rootCss}
      `
    : CardRoot
}

function Card({component, children}) {
  const ComputedCard = React.useMemo(() => computeCard(component), [component])
  return <ComputedCard>{children}</ComputedCard>
}

Card.propTypes = {
  children: PropTypes.node,
  component: PropTypes.node
}

export default Card
