import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import * as palette from '../constants/palette'

export const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600
}

export const fontFamily = 'Asap'

// Every Typography component accept override through
// this unified interface.
// We could simply use the "style" props but this is better
// to convey intention from the product and not just an
// edge-case -- one time -- style override.
function interpolateCss(baseCss) {
  return ({color, textTransform, fontStyle}) => css`
    ${baseCss}
    ${color && `color: ${color};`}
    ${textTransform && `text-transform: ${textTransform};`}
    ${fontStyle && `font-style: ${fontStyle};`}
  `
}

export const TypographyPropTypes = {
  color: PropTypes.string,
  textTransform: PropTypes.string,
  fontStyle: PropTypes.string
}

// H1

export const h1Css = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.semiBold};
  font-size: 25px;
  line-height: 30px;
  min-height: 32px;
  color: ${palette.darkPrimary};
`

export const H1 = styled.div.attrs({
  'data-andive-type': 'typography'
})`
  ${interpolateCss(h1Css)}
`

// H2

export const h2Css = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.semiBold};
  font-size: 18px;
  line-height: 22px;
  min-height: 24px;
  color: ${palette.darkPrimary};
`

export const H2 = styled.div.attrs({
  'data-andive-type': 'typography'
})`
  ${interpolateCss(h2Css)}
`

// Body1

export const body1Css = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.regular};
  font-size: ${props => props.theme.typography.body1.fontSize}px;
  line-height: 22px;
  min-height: 24px;
  color: ${palette.darkPrimary};
`

export const Body1 = styled.div.attrs({
  'data-andive-type': 'typography'
})`
  ${interpolateCss(body1Css)}
`

// Body2

export const body2Css = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.regular};
  font-size: ${props => props.theme.typography.body2.fontSize}px;
  line-height: 22px;
  min-height: 24px;
  color: ${palette.darkPrimary};
`

export const Body2 = styled.div.attrs({
  'data-andive-type': 'typography'
})`
  ${interpolateCss(body2Css)}
`

// Body3

export const body3Css = css`
  font-family: ${fontFamily};
  font-weight: ${fontWeights.regular};
  font-size: ${props => props.theme.typography.body3.fontSize}px;
  line-height: 20px;
  min-height: 20px;
  color: ${palette.darkPrimary};
`

export const Body3 = styled.div.attrs({
  'data-andive-type': 'typography'
})`
  ${interpolateCss(body3Css)}
`

export const isTypography = elementRef => {
  if (!elementRef || !elementRef.current) {
    return false
  }

  // To keep things simple and have Body1, Body2, etc components easily comparable here,
  // we add a data attribute to identify andive components for specific behaviours.
  return elementRef.current.getAttribute('data-andive-type') === 'typography'
}
