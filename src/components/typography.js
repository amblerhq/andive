import styled, {css} from 'styled-components'

import {berryBlue, darkGrey, mediumGrey, lightBeetrootPurple} from '../constants/palette'

export const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600
}

export const fontFamily = 'Asap'

// H1

export const h1Css = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.semiBold};
  font-size: 25px;
  line-height: 30px;
  min-height: 32px;
  color: ${darkGrey};
`

export const H1 = styled.div`
  ${h1Css}
`

// H2

export const h2Css = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.semiBold};
  text-transform: uppercase;
  font-size: 18px;
  line-height: 22px;
  min-height: 24px;
  color: ${darkGrey};
`

export const H2 = styled.div`
  ${h2Css}
`

// Body1

export const body1Css = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.regular};
  font-size: 18px;
  line-height: 22px;
  min-height: 24px;
  color: ${darkGrey};
`

export const Body1 = styled.div`
  ${body1Css}
`

// Body2

export const body2Css = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.regular};
  font-size: 16px;
  line-height: 22px;
  min-height: 24px;
  color: ${darkGrey};
`

export const Body2 = styled.div`
  ${body2Css}
`

// Body3

export const body3Css = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.regular};
  font-size: 16px;
  min-height: 24px;
  color: ${mediumGrey};
`

export const Body3 = styled.div`
  ${body3Css}
`

// Body4

export const body4Css = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.regular};
  font-size: 16px;
  color: ${darkGrey};
  min-height: 24px;
  font-style: italic;
`

export const Body4 = styled.div`
  ${body4Css}
`

// ButtonTextPrimary

export const buttonTextPrimaryCss = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.medium};
  text-transform: uppercase;
  font-size: 16px;
  line-height: 22px;
  min-height: 24px;
  color: #ffffff;
`

export const ButtonTextPrimary = styled.div`
  ${buttonTextPrimaryCss}
`

// ButtonTextSecondary

export const buttonTextSecondaryCss = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.medium};
  text-transform: uppercase;
  font-size: 16px;
  line-height: 22px;
  min-height: 24px;
  color: ${lightBeetrootPurple};
`

export const ButtonTextSecondary = styled.div`
  ${buttonTextSecondaryCss}
`

// Action

export const actionTextCss = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.regular};
  font-size: 16px;
  line-height: 22px;
  min-height: 24px;
  color: ${berryBlue};
`

export const ActionText = styled.div`
  ${actionTextCss}
`
