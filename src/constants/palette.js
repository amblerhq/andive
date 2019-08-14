function hexToRGBA(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
}

export const white = '#ffffff'
export const whiteAlpha = alpha => hexToRGBA(white, alpha)
export const lightGrey = '#dddddd'
export const lightGreyAlpha = alpha => hexToRGBA(lightGrey, alpha)
export const mediumGrey = '#708c91'
export const mediumGreyAlpha = alpha => hexToRGBA(mediumGrey, alpha)
export const darkGrey = '#054752'
export const darkGreyAlpha = alpha => hexToRGBA(darkGrey, alpha)
export const darkGreyShade = darkGreyAlpha(0.2)
export const black = '#000000'
export const blackAlpha = alpha => hexToRGBA(black, alpha)

export const berryBlue = '#00aff5'
export const berryBlueAlpha = alpha => hexToRGBA(berryBlue, alpha)
export const lettuceGreen = '#5dd167'
export const lettuceGreenAlpha = alpha => hexToRGBA(lettuceGreen, alpha)
export const beetrootPurple = '#55468c'
export const beetrootPurpleAlpha = alpha => hexToRGBA(beetrootPurple, alpha)
export const lightBeetrootPurple = '#5E48AF'
export const lightBeetrootPurpleAlpha = alpha => hexToRGBA(lightBeetrootPurple, alpha)
export const radishRed = '#f53f5b'
export const radishRedAlpha = alpha => hexToRGBA(radishRed, alpha)
export const potatoYellow = '#e9e163'
export const potatoYellowAlpha = alpha => hexToRGBA(potatoYellow, alpha)
export const grapeYellow = '#625d11'
export const grapeYellowAlpha = alpha => hexToRGBA(grapeYellow, alpha)
export const grapeRed = '#a61b30'
export const grapeRedAlpha = alpha => hexToRGBA(grapeRed, alpha)
export const grapeGreen = '#0c7615'
export const grapeGreenAlpha = alpha => hexToRGBA(grapeGreen, alpha)

export const warning = potatoYellow
export const warningText = grapeYellow
export const error = radishRed
export const errorText = grapeRed
export const success = lettuceGreen
export const successText = grapeGreen
