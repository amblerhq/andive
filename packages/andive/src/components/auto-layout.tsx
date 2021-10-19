import styled from 'styled-components'
import * as palette from '../constants/palette'

const horizontalMargins = 32
const columnGutter = 8
const mobileBreakpoint = 768 - 1
const desktopMaxWidth = 1440

export const NColumnLayout = styled.div<{$childCount?: number}>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  /* On mobile, the layout is a reversed mono-column. */
  @media screen and (max-width: ${mobileBreakpoint}px) {
    flex-flow: column-reverse nowrap;
  }

  /*
    All direct children elements (Card, div, etc) must have a 8px bottom margin to space
    them properly on mobile when the stack on top of each other.
  */
  & > * {
    margin-bottom: 8px;
  }

  /*
    On desktop, the children have a gap of 8px in between them.
    This CSS is not necessary on mobile (and harmfull on ie11) so we remove it.
  */
  @media screen and (min-width: ${mobileBreakpoint + 1}px) {
    & > * {
      /* ie11 doesn't parse the "flex:" shorthand correctly. */
      flex-grow: 0px;
      flex-shrink: 0px;
      flex-basis: calc(${({$childCount}) => 100 / ($childCount || 2)}% - ${columnGutter / 2}px);
    }
  }
`

export const CenteredPageLayout = styled.div`
  max-width: ${desktopMaxWidth}px;
  width: 100%;

  /* Center the element horizontally on the page */
  margin-left: auto;
  margin-right: auto;

  padding-right: ${horizontalMargins / 2}px;
  padding-left: ${horizontalMargins / 2}px;
`

type AutoLayoutDir = {$column?: boolean; $row?: boolean}
const getFlexDirection = (props: AutoLayoutDir) => {
  if (props.$column) {
    return 'flex-direction: column'
  }

  if (props.$row) {
    return 'flex-direction: row'
  }

  return undefined
}

type AutoLayoutWrap = {$wrap?: boolean; $nowrap?: boolean}
const getFlexWrap = (props: AutoLayoutWrap) => {
  if (props.$wrap) {
    return 'flex-wrap: wrap'
  }

  if (props.$nowrap) {
    return 'flex-wrap: nowrap'
  }

  return undefined
}

type AutoLayoutGap = {$gap?: string}
const getGap = (props: AutoLayoutGap & AutoLayoutDir) => {
  if (props.$gap) {
    if (props.$column) {
      return `
        & > *:not(:first-child) {
          margin-top: calc(${props.$gap} / 2);
        }
        & > *:not(:last-child) {
          margin-bottom: calc(${props.$gap} / 2);
        }
      `
    }

    if (props.$row) {
      return `
        & > *:not(:first-child) {
          margin-left: calc(${props.$gap} / 2);
        }
        & > *:not(:last-child) {
          margin-right: calc(${props.$gap} / 2);
        }
      `
    }
  }
  return undefined
}

type AutoLayoutCard = {$card?: 'squared' | 'rounded'}
const getCard = (props: AutoLayoutCard) => {
  if (props.$card === 'squared') {
    return `
      border: 1px solid ${palette.border};
      border-radius: 8px;
      background: white;
    `
  }

  if (props.$card === 'rounded') {
    return `
      border: 1px solid ${palette.border};
      border-radius: 16px;
      background: white;
    `
  }

  return undefined
}

type AutoLayoutPadding = {$p?: string}
const getPadding = (props: AutoLayoutPadding) => {
  if (props.$p) {
    return `padding: ${props.$p};`
  }

  return undefined
}

type AutoLayoutMargin = {$m?: string}
const getMargin = (props: AutoLayoutMargin) => {
  if (props.$m) {
    return `margin: ${props.$m};`
  }

  return undefined
}

type AutoLayoutJustifyContent = {$justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'}
const getJustifyContent = (props: AutoLayoutJustifyContent) => {
  if (props.$justify) {
    return `justify-content: ${props.$justify};`
  }

  return undefined
}

type AutoLayoutAlignItems = {$align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'}
const getAlignItems = (props: AutoLayoutAlignItems) => {
  if (props.$align) {
    return `align-items: ${props.$align};`
  }

  return undefined
}

type AutoLayoutFlex = {$flex?: string}
const getFlex = (props: AutoLayoutFlex) => {
  if (props.$flex) {
    return `
      flex: ${props.$flex};
    `
  }

  return undefined
}

type AutoLayoutBackgroundColor = {$bgColor?: string}
const getBackgroundColor = (props: AutoLayoutBackgroundColor) => {
  if (props.$bgColor) {
    return `
      background-color: ${props.$bgColor};
    `
  }

  return undefined
}

type AutoLayoutBorderRadius = {$borderRadius?: string}
const getBorderRadius = (props: AutoLayoutBorderRadius) => {
  if (props.$borderRadius) {
    return `
      border-radius: ${props.$borderRadius};
    `
  }

  return undefined
}

type AutoLayoutDisplay = {$display?: 'flex' | 'block' | 'inline-block' | 'inline'}
const getDisplay = (props: AutoLayoutDisplay) => {
  if (props.$display) {
    return `
      display: ${props.$display};
    `
  }

  return undefined
}

type AutoLayoutOverflow = {$overflow?: 'auto' | 'hidden' | 'scroll' | 'visible'}
const getOverflow = (props: AutoLayoutOverflow) => {
  if (props.$overflow) {
    return `
      overflow: ${props.$overflow};
    `
  }

  return undefined
}

type AutoLayoutMaxWidth = {$maxWidth?: string}
const getMaxWidth = (props: AutoLayoutMaxWidth) => {
  if (props.$maxWidth) {
    return `
      max-width: ${props.$maxWidth};
    `
  }

  return undefined
}

type AutoLayoutProps = AutoLayoutDir &
  AutoLayoutGap &
  AutoLayoutCard &
  AutoLayoutPadding &
  AutoLayoutMargin &
  AutoLayoutJustifyContent &
  AutoLayoutAlignItems &
  AutoLayoutFlex &
  AutoLayoutWrap &
  AutoLayoutBackgroundColor &
  AutoLayoutBorderRadius &
  AutoLayoutDisplay &
  AutoLayoutOverflow &
  AutoLayoutMaxWidth

export const AutoLayout = styled.div<AutoLayoutProps>`
  display: flex;

  ${getFlexDirection};
  ${getFlexWrap};
  ${getJustifyContent};
  ${getAlignItems};
  ${getGap};
  ${getCard};
  ${getPadding};
  ${getMargin};
  ${getFlex};
  ${getBackgroundColor};
  ${getBorderRadius};
  ${getDisplay};
  ${getOverflow};
  ${getMaxWidth};
`
