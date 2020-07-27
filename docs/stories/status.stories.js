import React from 'react'
import {storiesOf} from '@storybook/react'
import {Typography, TripStatus, Box, palette} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('Next|Status', module).add(`How it's built`, () => {
  return (
    <>
      <Showcase legend="Statuses">
        <div style={{display: 'flex', flexFlow: 'column nowrap', width: 300}}>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus color={palette.darkLettuceGreen} backgroundColor={palette.lightLettuceGreen}>
              Confirmé
            </TripStatus>
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus color={palette.darkLettuceGreen} backgroundColor={palette.lightLettuceGreen}>
              Réalisé
            </TripStatus>
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus color={palette.darkRadishRed} backgroundColor={palette.lightRadishRed}>
              Annulé
            </TripStatus>
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus color={palette.darkRadishRed} backgroundColor={palette.lightRadishRed}>
              Non réalisé
            </TripStatus>
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus color={palette.darkRadishRed} backgroundColor={palette.lightRadishRed}>
              <>
                <Typography.Body2 color={palette.darkRadishRed}>Transport non réalisé</Typography.Body2>
                <Typography.Body2 color={palette.darkRadishRed}>{`Responsabilité de l'établissement`}</Typography.Body2>
              </>
            </TripStatus>
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus color={palette.darkPotatoYellow} backgroundColor={palette.lightPotatoYellow}>
              Incident signalé
            </TripStatus>
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus color={palette.darkPotatoYellow} backgroundColor={palette.lightPotatoYellow}>
              <>
                <Typography.Body2 color={palette.darkPotatoYellow}>Transport non réalisé</Typography.Body2>
                <Typography.Body2 color={palette.darkPotatoYellow}>
                  En attente de réponse du transporteur
                </Typography.Body2>
              </>
            </TripStatus>
          </Box>
        </div>
      </Showcase>
      <Showcase legend="Missing props">
        <div style={{display: 'flex', flexFlow: 'column nowrap', width: 300}}>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus color={palette.darkLettuceGreen} backgroundColor={palette.lightLettuceGreen} />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus backgroundColor={palette.lightLettuceGreen}>Confirmé</TripStatus>
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus color={palette.darkLettuceGreen}>Confirmé</TripStatus>
          </Box>
        </div>
      </Showcase>
    </>
  )
})
