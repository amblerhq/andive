import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {palette, Toast, toastSuccess, Info, QuestionIcon} from '@ambler/andive'

import Showcase from './showcase'

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
          color: invert ? palette.darkPrimary : '#fff',
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
  color: PropTypes.oneOf(Object.keys(palette).map(key => palette[key])),
  invert: PropTypes.bool,
  children: PropTypes.node,
  label: PropTypes.string
}

const Palette = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const ColorRange = ({legend, color}) => {
  return (
    <>
      <Info>
        <Info.Label label={legend} />
      </Info>
      <Palette>
        <Color color={palette[`light${color}`]}>Light</Color>
        <Color color={palette[`medium${color}`]}>Medium</Color>
        <Color color={palette[`dark${color}`]}>Dark</Color>
      </Palette>
    </>
  )
}

ColorRange.propTypes = {
  legend: PropTypes.string,
  color: PropTypes.string
}

storiesOf('Assets|Palette', module)
  .addDecorator(storyFn => {
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
          <Info.Block variant="info" icon={<QuestionIcon />} iconSize={24}>
            <Info.Item item="Click on any color block to copy its value !" />
          </Info.Block>
        </Info>

        <ColorRange legend="Primary" color="Primary" />
        <ColorRange legend="Beetroot Purple" color="BeetrootPurple" />
        <ColorRange legend="Berry Blue" color="BerryBlue" />
        <ColorRange legend="Radish Red" color="RadishRed" />
        <ColorRange legend="Lettuce Green" color="LettuceGreen" />
        <ColorRange legend="Potato Yellow" color="PotatoYellow" />

        <Info>
          <Info.Label label="Semantic colors (background & forground)" />
        </Info>
        <Palette>
          <Color color={palette.mainText}>Main Text</Color>
          <Color color={palette.secondaryText}>Secondary Text</Color>
          <Color color={palette.success}>Success</Color>
          <Color color={palette.successText}>Success Text</Color>
          <Color color={palette.warning} invert>
            Warning
          </Color>
          <Color color={palette.warningText}>Warning Text</Color>
          <Color color={palette.error}>Error</Color>
          <Color color={palette.errorText}>Error Text</Color>
          <Color color={palette.border} invert>
            Border
          </Color>
        </Palette>
      </>
    )
  })
