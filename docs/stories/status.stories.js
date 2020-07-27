import React from 'react'
import {storiesOf} from '@storybook/react'
import {TripStatus, Box, palette} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('Next|Status', module).add(`How it's built`, () => {
  return (
    <>
      <Showcase legend="Statuses">
        <div style={{display: 'flex', flexFlow: 'column nowrap', width: 300}}>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus
              status={'Confirmé'}
              color={palette.darkLettuceGreen}
              backgroundColor={palette.lightLettuceGreen}
            />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus
              status={'Réalisé'}
              color={palette.darkLettuceGreen}
              backgroundColor={palette.lightLettuceGreen}
            />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus status={'Annulé'} color={palette.darkRadishRed} backgroundColor={palette.lightRadishRed} />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus status={'Non réalisé'} color={palette.darkRadishRed} backgroundColor={palette.lightRadishRed} />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus
              status={'Incident signalé'}
              color={palette.darkPotatoYellow}
              backgroundColor={palette.lightPotatoYellow}
            />
          </Box>
        </div>
      </Showcase>
      <Showcase legend="Missing props">
        <div style={{display: 'flex', flexFlow: 'column nowrap', width: 300}}>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus color={palette.darkLettuceGreen} backgroundColor={palette.lightLettuceGreen} />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus status={'Confirmé'} backgroundColor={palette.lightLettuceGreen} />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <TripStatus status={'Confirmé'} color={palette.darkLettuceGreen} />
          </Box>
        </div>
      </Showcase>
    </>
  )
})
