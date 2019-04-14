import React from 'react'
import {css, createGlobalStyle} from 'styled-components'
import {Helmet} from 'react-helmet'
import 'resize-observer-polyfill'

import {fontFamily} from './typography'

export const baselineCss = css`
  box-sizing: border-box;
  font-family: ${fontFamily};

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`

const BaselineCSS = createGlobalStyle`
    html, body {
      ${baselineCss}
    }
`

export default function Baseline() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Asap" />
      </Helmet>
      <BaselineCSS />
    </>
  )
}
