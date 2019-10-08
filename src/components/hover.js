import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {ZIndexes} from '../constants/enum'
import useElementRect from '../lib/use-element-rect'

const HoverLayout = styled.div`
  position: relative;
  z-index: ${ZIndexes.ABSOLUTE};

  :hover {
    ::before {
      z-index: -1;

      position: absolute;

      left: ${({overflow, padding}) => (padding ? -(padding + overflow) : -overflow)}px;
      top: -${props => props.overflow}px;
      width: calc(100% + ${props => (props.padding ? props.padding * 2 + props.overflow * 2 : props.overflow * 2)}px);
      height: ${props => props.height + props.overflow * 2}px;

      content: '';
      background: #fafafa;
    }
  }
`

function Hover({overflow = 8, padding, children}) {
  const ref = React.useRef(null)
  const rect = useElementRect(ref)

  return (
    <HoverLayout overflow={overflow} padding={padding} height={rect && rect.height}>
      <div ref={ref}>{children}</div>
    </HoverLayout>
  )
}

Hover.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.number,
  overflow: PropTypes.number
}

export default Hover
