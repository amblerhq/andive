// Raw color palette

// ? copied from andive next for compatibility during migration
const amblea = {
  blue: {
    800: '#0c2344',
    700: '#1a4b92',
    600: '#256acf',
    500: '#568cda',
    400: '#87aee5',
    300: '#b8d0f0',
    200: '#e9f0fb'
  },
  grey: {
    800: '#090c11',
    700: '#36404e',
    600: '#63748b',
    500: '#91a7c7',
    400: '#b0c0d7',
    300: '#cfd9e7',
    200: '#eef1f6',
    100: '#f7fcfd'
  },
  pink: {
    800: '#532e3b',
    700: '#b27a8f',
    600: '#ffb6d1',
    500: '#ffc2d9',
    400: '#ffcee1',
    300: '#ffdae9',
    200: '#ffe5ef'
  },
  tea: {
    800: '#013f3b',
    700: '#027f76',
    600: '#02b2a5',
    500: '#3bbfb7',
    400: '#74cdc9',
    300: '#addbdb',
    200: '#e6fffd'
  },
  azure: {
    800: '#45757b',
    700: '#59959d',
    600: '#83d7e1',
    500: '#9ddfe7',
    400: '#b7e7ed',
    300: '#d1eff3',
    200: '#eaf8fa'
  },
  red: {
    700: '#c52323',
    500: '#e18787',
    200: '#fbe9e9'
  },
  orange: {
    700: '#cf7725',
    500: '#e5b587',
    200: '#fff5e1'
  },
  green: {
    700: '#147647',
    500: '#62c193',
    200: '#d4f7e7'
  }
}

export const white = '#ffffff'
export const black = '#000000'

export const lightPrimary = amblea.grey[400] //'#dddddd'
export const mediumPrimary = amblea.grey[600] //'#708c91'
export const darkPrimary = amblea.blue[800] //"#054752'

export const lightGrey = amblea.grey[100] // '#fafafa'
export const mediumGrey = amblea.grey[200] //'#f4f4f4'
export const darkGrey = amblea.grey[200] // '#ededed'

export const darkLettuceGreen = amblea.green[700] // '#0c7615'
export const mediumLettuceGreen = amblea.green[500] // '#5dd167'
export const lightLettuceGreen = amblea.green[200] // '#9ee3a4'

export const darkRadishRed = amblea.red[700] // '#a61b30'
export const mediumRadishRed = amblea.red[700] // '#a61b30'
export const lightRadishRed = amblea.red[200] // '#f98c9d'

export const darkPotatoYellow = amblea.orange[700] // '#625d11'
export const mediumPotatoYellow = amblea.orange[500] // '#e9e163'
export const lightPotatoYellow = amblea.orange[200] // '#f2eda1'

export const darkBeetrootPurple = amblea.blue[600] // '#5e48af'
export const mediumBeetrootPurple = amblea.blue[500] // '#7056ce'
export const lightBeetrootPurple = amblea.blue[200] // '#ece7ff'

export const darkBerryBlue = amblea.tea[600] // '#00a3e4'
export const mediumBerryBlue = amblea.tea[600] // '#00aff5'
export const lightBerryBlue = amblea.tea[200] // '#d3f2ff'

// Semantic color palette

export const mainText = darkPrimary
export const secondaryText = mediumPrimary
export const warning = mediumPotatoYellow
export const warningText = darkPotatoYellow
export const error = mediumRadishRed
export const errorText = darkRadishRed
export const success = mediumLettuceGreen
export const successText = darkLettuceGreen
export const border = lightPrimary

export function hexToRGBA(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha || alpha === 0) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
}
