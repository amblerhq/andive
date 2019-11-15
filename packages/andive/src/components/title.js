import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {H1} from './typography'

const Title = styled(H1)`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: 8px;
`

function TitleComponent({title, fullWidth, ...props}) {
  return (
    <Title fullWidth={fullWidth} {...props}>
      {title}
    </Title>
  )
}

TitleComponent.propTypes = {
  title: PropTypes.string,
  fullWidth: PropTypes.bool
}

export default TitleComponent
