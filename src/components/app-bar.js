import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import {darkGreyShade} from '../constants/palette'
import {ZIndexes} from '../constants/enum'

function stickyAppBar({sticky}) {
  if (!sticky) {
    return ''
  }

  return css`
    position: fixed;
    top: 0;
    left: 0;

    z-index: ${ZIndexes.FIXED};

    box-shadow: 0 2px 5px 0 ${darkGreyShade};
  `
}

const AppBar = styled.div`
  height: 64px;
  width: 100%;

  background-color: #fff;

  ${stickyAppBar}
`

const AppBarFootprint = styled.div`
  height: 64px;
`

export default function AppBarComponent({children, sticky, ...props}) {
  return (
    <>
      {sticky && <AppBarFootprint />}
      <AppBar sticky={sticky} {...props}>
        {children}
      </AppBar>
    </>
  )
}

AppBarComponent.propTypes = {
  children: PropTypes.node,
  sticky: PropTypes.bool
}
