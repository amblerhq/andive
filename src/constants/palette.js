// Raw color palette

export const white = '#ffffff'
export const black = '#000000'

export const lightPrimary = '#dddddd'
export const mediumPrimary = '#708c91'
export const darkPrimary = '#054752'

export const lightGrey = '#fafafa'
export const mediumGrey = '#ededed'
export const darkGrey = '#dddddd'

export const darkLettuceGreen = '#0c7615'
export const mediumLettuceGreen = '#5dd167'
export const lightLettuceGreen = '#9ee3a4'

export const darkRadishRed = '#a61b30'
export const mediumRadishRed = '#f53f5b'
export const lightRadishRed = '#f98c9d'

export const darkPotatoYellow = '#625d11'
export const mediumPotatoYellow = '#e9e163'
export const lightPotatoYellow = '#f2eda1'

export const darkBeetrootPurple = '#55468c'
export const mediumBeetrootPurple = '#5e48af'
export const lightBeetrootPurple = '#7056ce'

export const darkBerryBlue = '#00a3e4'
export const mediumBerryBlue = '#00aff5'
export const lightBerryBlue = '#1dbeff'

// Semantic color palette

export const mainText = darkPrimary
export const secondaryText = mediumPrimary
export const warning = mediumPotatoYellow
export const warningText = darkPotatoYellow
export const error = mediumRadishRed
export const errorText = darkRadishRed
export const success = mediumLettuceGreen
export const successText = darkLettuceGreen
export const border = mediumGrey

export function hexToRGBA(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha || alpha === 0) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
}
