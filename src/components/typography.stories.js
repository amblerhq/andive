import React from 'react'
import {storiesOf} from '@storybook/react'

import Showcase from '../stories/showcase'
import {Typography, palette} from '../index'

const {H1, H2, Body1, Body2, ButtonTextPrimary, ButtonTextSecondary, ActionText} = Typography

storiesOf('Typography', module)
  .add('Library', () => {
    const demoText = 'Le dernier arrivé est fan de Phil Collins'
    return (
      <>
        <Showcase compact legend={'H1'}>
          <H1 style={{background: 'white'}}>{demoText}</H1>
        </Showcase>
        <Showcase compact legend={'H2'}>
          <H2 style={{background: 'white'}}>{demoText}</H2>
        </Showcase>
        <Showcase compact legend={'Body1'}>
          <Body1 style={{background: 'white'}}>{demoText}</Body1>
        </Showcase>
        <Showcase compact legend={'Body2'}>
          <Body2 style={{background: 'white'}}>{demoText}</Body2>
        </Showcase>
        <Showcase compact legend={'ButtonTextPrimary'} invert>
          <ButtonTextPrimary>{demoText}</ButtonTextPrimary>
        </Showcase>
        <Showcase compact legend={'ButtonTextSecondary'}>
          <ButtonTextSecondary style={{background: 'white'}}>{demoText}</ButtonTextSecondary>
        </Showcase>
        <Showcase compact legend={'ActionText'}>
          <ActionText style={{background: 'white'}}>{demoText}</ActionText>
        </Showcase>
      </>
    )
  })
  .add('Style API', () => {
    const demoText = 'Le dernier arrivé est fan de Phil Collins'
    return (
      <>
        <Showcase compact legend={'Body2 in radishRed'}>
          <Body2 color={palette.radishRed} style={{background: 'white'}}>
            {demoText}
          </Body2>
        </Showcase>
        <Showcase compact legend={'Body2 in berryBlue'}>
          <Body2 color={palette.berryBlue} style={{background: 'white'}}>
            {demoText}
          </Body2>
        </Showcase>
        <Showcase compact legend={'Body2 in mediumGrey'}>
          <Body2 color={palette.mediumGrey} style={{background: 'white'}}>
            {demoText}
          </Body2>
        </Showcase>
        <Showcase compact legend={'Body2 in italic'}>
          <Body2 fontStyle="italic" style={{background: 'white'}}>
            {demoText}
          </Body2>
        </Showcase>
        <Showcase compact legend={'H2 in uppercase'}>
          <H2 textTransform="uppercase" style={{background: 'white'}}>
            {demoText}
          </H2>
        </Showcase>
      </>
    )
  })
