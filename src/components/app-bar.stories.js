import React from 'react'
import styled from 'styled-components'
import {storiesOf} from '@storybook/react'
import range from 'lodash.range'

import Showcase from '../stories/showcase'
import {H1, Body3} from './typography'
import AppBar from './app-bar'
import Button from './button'

import BackIcon from './icons/back'
import LogoutIcon from './icons/logout'
import AmbulanceIcon from './icons/ambulance'
import VslIcon from './icons/vsl'
import LogoSvg from '../../img/logo.svg'
import {mediumGrey} from '../constants/palette'

function RandomPageContent() {
  return (
    <>
      <div style={{height: 16}} />
      {range(42).map(i => (
        <Showcase key={i} variant="compact">
          <Body3>{i}</Body3>
        </Showcase>
      ))}
    </>
  )
}

const Title = styled(H1)`
  width: 100%;
  text-align: center;
`

const Container = styled.div`
  min-height: 64px;
  padding: 0 16px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

storiesOf('AppBar', module)
  .add('Default', () => (
    <>
      <AppBar height={64}>
        <Container>
          <Title>Détail de la commande</Title>
        </Container>
      </AppBar>

      <RandomPageContent />
    </>
  ))
  .add('With icon', () => (
    <>
      <AppBar height={64}>
        <Container>
          <Button variant="flat" leftIcon={<BackIcon inline />} style={{marginLeft: 24}} />
          <Title>Détails de la commande</Title>
        </Container>
      </AppBar>
      <RandomPageContent />
    </>
  ))
  .add('App header', () => (
    <>
      <AppBar height={64}>
        <Container style={{justifyContent: 'space-between'}}>
          <LogoSvg width={135} height={35} />
          <Button
            variant="link"
            href="https://www.ambler.fr"
            textColor={mediumGrey}
            leftIcon={<LogoutIcon inline color={mediumGrey} />}
            label={'Déconnexion'}
          />
        </Container>
      </AppBar>
      <RandomPageContent />
    </>
  ))
  .add('With scrolling section', () => {
    return (
      <>
        <AppBar height={64}>
          <Container style={{justifyContent: 'space-between'}}>
            <LogoSvg width={135} height={35} />
            <Button
              variant="link"
              href="https://www.ambler.fr"
              textColor={mediumGrey}
              leftIcon={<LogoutIcon inline color={mediumGrey} />}
              label={'Déconnexion'}
            />
          </Container>
          <AppBar.Sticky height={72} fadeOffset={128}>
            <marquee direction="right">
              <Container style={{height: 72}}>
                <div style={{transform: 'rotateY(180deg)'}}>💨</div>
                <AmbulanceIcon />
                <div style={{width: '100vw'}} />
                <div style={{transform: 'rotateY(180deg)'}}>💨</div> <VslIcon />
              </Container>
            </marquee>
          </AppBar.Sticky>
        </AppBar>
        <RandomPageContent />
      </>
    )
  })
