import React from 'react'
import {storiesOf} from '@storybook/react'
import {Info, RideStatus, RideStatusBar, palette, Typography, HSpace, AlertIcon, Accordeon} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('API|RideStatus', module)
  .add('As success', () => {
    return (
      <Showcase>
        <div style={{width: 300, height: 64}}>
          <RideStatus primary="Premier arrivé" color={palette.success} style={{background: 'white'}} />
        </div>
      </Showcase>
    )
  })
  .add('As waiting', () => {
    return (
      <Showcase>
        <div style={{width: 300, height: 64}}>
          <RideStatus primary="En cours..." color={palette.warning} style={{background: 'white'}} />
        </div>
      </Showcase>
    )
  })
  .add('As failure', () => {
    return (
      <Showcase>
        <div style={{width: 300, height: 64}}>
          <RideStatus primary="Dernier arrivé" color={palette.error} style={{background: 'white'}} />
        </div>
      </Showcase>
    )
  })
  .add('With secondary', () => {
    return (
      <Showcase>
        <div style={{width: 300, height: 64}}>
          <RideStatus
            primary="Dernier arrivé"
            secondary="Fan de Phil Collins"
            color={palette.warning}
            style={{background: 'white'}}
          />
        </div>
      </Showcase>
    )
  })
  .add('With italic secondary', () => {
    return (
      <Showcase>
        <div style={{width: 300, height: 64}}>
          <RideStatus
            primary="Dernier arrivé"
            secondary="Fan de Phil Collins"
            secondaryItalic
            color={palette.warning}
            style={{background: 'white'}}
          />
        </div>
      </Showcase>
    )
  })
  .add('With wrapping text', () => {
    return (
      <Showcase style={{height: 200}}>
        <div style={{width: 150, height: 64}}>
          <RideStatus
            primary="Dernier arrivé c'est pas moi"
            secondary="En attente de la confirmation..."
            secondaryItalic
            color={palette.warning}
            style={{background: 'white'}}
          />
        </div>
      </Showcase>
    )
  })
  .add('Bar only', () => {
    return (
      <Showcase>
        <div style={{height: 64, background: 'white'}}>
          <RideStatusBar color={palette.success} />
        </div>
      </Showcase>
    )
  })
  .add('With custom elements', () => {
    const label = (
      <RideStatus
        primary={<Typography.Body1>Test</Typography.Body1>}
        secondary={
          <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
            <AlertIcon inline />
            <HSpace px={8} />
            <Typography.Body1 style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              Test test test Test test test
            </Typography.Body1>
          </div>
        }
        color={palette.warning}
        style={{background: 'white'}}
      />
    )

    return (
      <>
        <Showcase>{label}</Showcase>
        <Showcase>
          <div style={{display: 'flex', flexFlow: 'column nowrap', background: 'white'}}>
            <Accordeon label={label}>
              <Info>
                <Info.Label label="Fan" />
              </Info>
            </Accordeon>
          </div>
        </Showcase>
      </>
    )
  })
