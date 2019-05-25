import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import Showcase from '../stories/showcase'

import {initializeQueue} from '../components/toast'
import {palette, Toast, toastSuccess} from '../index'
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
        style={{backgroundColor: color, color: invert ? palette.darkGrey : '#fff', cursor: 'pointer'}}
      >
        <ColorHex>{label || color}</ColorHex>
        <ColorName>{children}</ColorName>
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
        <Palette>
          <Color color={palette.white} invert>
            White
          </Color>
          <Color color={palette.lightGrey} invert>
            Light grey
          </Color>
          <Color label={'Alpha 20%'} color={palette.darkGreyShade} invert>
            Dark grey shade
          </Color>
          <Color color={palette.mediumGrey}>Medium grey</Color>
          <Color color={palette.darkGrey}>Dark grey</Color>
          <Color color={palette.black}>Black</Color>
        </Palette>
        <Palette>
          <Color color={palette.lettuceGreen}>Lettuce Green</Color>
          <Color color={palette.berryBlue}>Berry Blue</Color>
          <Color color={palette.lightBeetrootPurple}>Light Beetroot Purple</Color>
          <Color color={palette.beetrootPurple}>Beetroot Purple</Color>
          <Color color={palette.radishRed}>Radish Red</Color>
          <Color color={palette.potatoYellow} invert>
            Potato Yellow
          </Color>
        </Palette>
        <Palette>
          <Color color={palette.success}>Success</Color>
          <Color color={palette.warning} invert>
            Warning
          </Color>
          <Color color={palette.error}>Error</Color>
        </Palette>
      </>
    )
  })
