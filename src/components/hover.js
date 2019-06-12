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
      left: ${props => (props.padding ? -(props.padding + 8) : -8)}px;
      top: -8px;

      content: '';
      background: #fafafa;
      width: calc(100% + ${props => (props.padding ? props.padding * 2 + 16 : 16)}px);
      height: ${props => props.height + 16}px;
    }
  }
`

function Hover({padding, children}) {
  const ref = React.useRef(null)
  const rect = useElementRect(ref)

  return (
    <HoverLayout padding={padding} height={rect && rect.height}>
      <div ref={ref}>{children}</div>
    </HoverLayout>
  )
}

Hover.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.number
}

export default Hover
