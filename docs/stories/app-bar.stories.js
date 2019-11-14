import React from 'react'
import styled from 'styled-components'
import {storiesOf} from '@storybook/react'
import range from 'lodash.range'
import {AppBar, Button, BackIcon, LogoutIcon, AmbulanceIcon, VslIcon, Typography, palette} from '@ambler/andive'

import Showcase from './showcase'

function RandomPageContent({nth = 3}) {
  return (
    <>
      <div style={{height: 16}} />
      {range(nth).map(i => (
        <Showcase key={i} variant="compact" style={{background: 'white'}}>
          <Typography.Body2 color={palette.mediumGrey}>{i}</Typography.Body2>
        </Showcase>
      ))}
    </>
  )
}

const Title = styled(Typography.H1)`
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

storiesOf('API|AppBar', module)
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
          <AmbulanceIcon />
          <Button
            variant="flat"
            textColor={palette.mediumPrimary}
            leftIcon={<LogoutIcon inline color={palette.mediumPrimary} />}
            label="Déconnexion"
          />
        </Container>
      </AppBar>
      <RandomPageContent />
    </>
  ))
  .add('With scrolling', () => {
    return (
      <>
        <AppBar height={64} scrollable fadeOffset={128}>
          <Container style={{justifyContent: 'space-between'}}>
            <AmbulanceIcon />
            <Button
              variant="flat"
              textColor={palette.mediumPrimary}
              leftIcon={<LogoutIcon inline color={palette.mediumPrimary} />}
              label="Déconnexion"
            />
          </Container>
        </AppBar>
        <RandomPageContent nth={10} />
      </>
    )
  })
  .add('With scrolling section', () => {
    return (
      <>
        <AppBar height={64}>
          <Container style={{justifyContent: 'space-between'}}>
            <AmbulanceIcon />
            <Button
              variant="flat"
              textColor={palette.mediumPrimary}
              leftIcon={<LogoutIcon inline color={palette.mediumPrimary} />}
              label="Déconnexion"
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
        <RandomPageContent nth={10} />
      </>
    )
  })
