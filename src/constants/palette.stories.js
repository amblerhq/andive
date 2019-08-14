import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import Showcase from '../stories/showcase'

import {initializeQueue} from '../components/toast'
import {palette, Toast, toastSuccess, Info} from '../index'
const ColorHex = styled.div`
  text-transform: lowercase;
`

const ColorName = styled.div`
  text-transform: uppercase;
  text-align: center;
`

function Color({children, color, label, invert}) {
  return (
    <CopyToClipboard text={color}>
      <Showcase
        onClick={() => toastSuccess(`"${color}" in your clipboard !`)}
        variant="squared"
        style={{
          backgroundColor: color,
          color: invert ? palette.darkGrey : '#fff',
          cursor: 'pointer',
          justifyContent: 'space-around'
        }}
      >
        <ColorName>{children}</ColorName>
        <ColorHex>{label || color}</ColorHex>
      </Showcase>
    </CopyToClipboard>
  )
}

Color.propTypes = {
  color: PropTypes.oneOf(Object.keys(palette).map(key => palette[key])).isRequired,
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired,
  label: PropTypes.string
}

const Palette = styled.div`
  display: flex;
  flex-flow: row wrap;
`

storiesOf('Palette', module)
  .addDecorator(storyFn => {
    initializeQueue()
    return (
      <>
        <Toast />
        {storyFn()}
      </>
    )
  })
  .add('Library', () => {
    return (
      <>
        <Info>
          <Info.Label label="White to black gradients" />
        </Info>
        <Palette>
          <Color color={palette.white} invert>
            White
          </Color>
          <Color color={palette.lightGrey} invert>
            Light grey
          </Color>
          <Color color={palette.mediumGrey}>Medium grey</Color>
          <Color color={palette.darkGrey}>Dark grey</Color>
          <Color color={palette.black}>Black</Color>
        </Palette>

        <Info>
          <Info.Label label="White to black gradients (alpha)" />
        </Info>
        <Palette>
          <Color color={palette.whiteAlpha(0.6)} invert>
            White
          </Color>
          <Color color={palette.lightGreyAlpha(0.6)} invert>
            Light grey
          </Color>
          <Color color={palette.mediumGreyAlpha(0.6)}>Medium grey</Color>
          <Color color={palette.darkGreyAlpha(0.6)}>Dark grey</Color>
          <Color color={palette.blackAlpha(0.6)}>Black</Color>
        </Palette>

        <Info>
          <Info.Label label="Color palette" />
        </Info>
        <Palette>
          <Color color={palette.grapeGreen}>Grape Green</Color>
          <Color color={palette.lettuceGreen}>Lettuce Green</Color>
          <Color color={palette.berryBlue}>Berry Blue</Color>
          <Color color={palette.lightBeetrootPurple}>Light Beetroot Purple</Color>
          <Color color={palette.beetrootPurple}>Beetroot Purple</Color>
          <Color color={palette.grapeRed}>Grape Red</Color>
          <Color color={palette.radishRed}>Radish Red</Color>
          <Color color={palette.grapeYellow}>Grape Yellow</Color>
          <Color color={palette.potatoYellow} invert>
            Potato Yellow
          </Color>
        </Palette>

        <Info>
          <Info.Label label="Color palette (alpha)" />
        </Info>
        <Palette>
          <Color color={palette.lettuceGreenAlpha(0.6)}>Lettuce Green</Color>
          <Color color={palette.berryBlueAlpha(0.6)}>Berry Blue</Color>
          <Color color={palette.lightBeetrootPurpleAlpha(0.6)}>Light Beetroot Purple</Color>
          <Color color={palette.beetrootPurpleAlpha(0.6)}>Beetroot Purple</Color>
          <Color color={palette.radishRedAlpha(0.6)}>Radish Red</Color>
          <Color color={palette.potatoYellowAlpha(0.6)} invert>
            Potato Yellow
          </Color>
        </Palette>

        <Info>
          <Info.Label label="Semantic colors (background & forground)" />
        </Info>
        <Palette>
          <Color color={palette.success}>Success</Color>
          <Color color={palette.successText}>Success Text</Color>
          <Color color={palette.warning} invert>
            Warning
          </Color>
          <Color color={palette.warningText}>Warning Text</Color>
          <Color color={palette.error}>Error</Color>
          <Color color={palette.errorText}>Error Text</Color>
        </Palette>
      </>
    )
  })
