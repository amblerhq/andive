import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Body1} from './typography'

const Dialog = styled(Body1)`
  padding: 8px;

  text-align: center;
`

function DialogComponent({dialog, invert, ...props}) {
  const style = {}

  if (invert) {
    style.color = 'white'
  }

  return (
    <Dialog style={style} {...props}>
      {dialog}
    </Dialog>
  )
}

DialogComponent.propTypes = {
  dialog: PropTypes.string,
  invert: PropTypes.bool
}

export default DialogComponent
