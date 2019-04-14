import React from 'react'
import styled from 'styled-components'
import {storiesOf} from '@storybook/react'
import range from 'lodash.range'

import Showcase from '../stories/showcase'
import {H1} from './typography'
import AppBar from './app-bar'

import Link from './link'
import BackIcon from './icons/back'
import LogoutIcon from './icons/logout'
import LogoSvg from '../../img/logo.svg'

function RandomPageContent() {
  return range(42).map(i => <Showcase key={i} variant="compact" />)
}

const Title = styled(H1)`
  width: 100%;
  text-align: center;
`

const Container = styled.div`
  height: 100%;
  max-width: 1108px;

  display: flex;

  flex-flow: row nowrap;
  padding: 0 16px;
  margin: 0 16px;
`

storiesOf('AppBar', module)
  .add('Sticky', () => (
    <>
      <AppBar sticky>
        <Container style={{justifyContent: 'center', alignItems: 'center'}}>
          <H1>Détail de la commande</H1>
        </Container>
      </AppBar>

      <RandomPageContent />
    </>
  ))
  .add('Relative', () => (
    <>
      <AppBar>
        <Container style={{justifyContent: 'center', alignItems: 'center'}}>
          <H1>Détail de la commande</H1>
        </Container>
      </AppBar>

      <RandomPageContent />
    </>
  ))
  .add('With icon', () => (
    <>
      <AppBar sticky>
        <Container style={{alignItems: 'center'}}>
          <BackIcon style={{marginLeft: 24}} />
          <Title>Détails de la commande</Title>
        </Container>
      </AppBar>
      <RandomPageContent />
    </>
  ))
  .add('App header', () => (
    <>
      <AppBar sticky>
        <Container style={{justifyContent: 'space-between', alignItems: 'center'}}>
          <LogoSvg width={135} height={35} />
          <Link extend={<a href="https://www.ambler.fr" />} icon={<LogoutIcon inline />} label={'Déconnexion'} invert />
        </Container>
      </AppBar>
      <RandomPageContent />
    </>
  ))
