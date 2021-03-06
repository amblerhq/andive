import React from 'react'
import {storiesOf} from '@storybook/react'
import {Status, Box, palette} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('Next|Status', module).add(`How it's built`, () => {
  return (
    <>
      <Showcase legend="Statuses">
        <div style={{display: 'flex', flexFlow: 'column nowrap', width: 300}}>
          <Box style={{background: 'white', width: 300}}>
            <Status primary={'Confirmé'} color={palette.darkLettuceGreen} backgroundColor={palette.lightLettuceGreen} />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <Status primary={'Réalisé'} color={palette.darkLettuceGreen} backgroundColor={palette.lightLettuceGreen} />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <Status primary={'Annulé'} color={palette.darkRadishRed} backgroundColor={palette.lightRadishRed} />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <Status primary={'Non réalisé'} color={palette.darkRadishRed} backgroundColor={palette.lightRadishRed} />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <Status
              primary={'Transport non réalisé'}
              secondary={`Responsabilité de l'établissement`}
              color={palette.darkRadishRed}
              backgroundColor={palette.lightRadishRed}
            />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <Status
              primary="Incident signalé"
              color={palette.darkPotatoYellow}
              backgroundColor={palette.lightPotatoYellow}
            />
          </Box>
          <Box style={{background: 'white', width: 300}}>
            <Status
              primary="Transport non réalisé"
              secondary="En attente de réponse du transporteur"
              color={palette.darkPotatoYellow}
              backgroundColor={palette.lightPotatoYellow}
            />
          </Box>
        </div>
      </Showcase>
    </>
  )
})
