import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {H1} from './typography'

const Dialog = styled(H1)`
  display: block;

  padding: 8px;
  width: 300px;

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
  dialog: PropTypes.string.isRequired,
  invert: PropTypes.bool
}

export default DialogComponent
