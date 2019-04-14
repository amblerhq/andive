import React from 'react'
import {storiesOf} from '@storybook/react'

import Showcase from '../stories/showcase'
import {H1, H2, Body1, Body2, ButtonTextPrimary, ButtonTextSecondary, Body3, Body4} from './typography'

storiesOf('Typography', module).add('Library', () => {
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
      <Showcase compact legend={'Body3'}>
        <Body3 style={{background: 'white'}}>{demoText}</Body3>
      </Showcase>
      <Showcase compact legend={'Body4'}>
        <Body4 style={{background: 'white'}}>{demoText}</Body4>
      </Showcase>
      <Showcase compact legend={'ButtonTextPrimary'} invert>
        <ButtonTextPrimary>{demoText}</ButtonTextPrimary>
      </Showcase>
      <Showcase compact legend={'ButtonTextSecondary'}>
        <ButtonTextSecondary style={{background: 'white'}}>{demoText}</ButtonTextSecondary>
      </Showcase>
    </>
  )
})
