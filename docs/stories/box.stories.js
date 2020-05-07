import React from 'react'
import {storiesOf} from '@storybook/react'
import {Box, Info} from '@ambler/andive'

import Showcase from './showcase'

const shortLabel = 'Fan de Phil Collins'

storiesOf('API|Box', module).add('Default', () => {
  return (
    <>
      <Showcase>
        <Box style={{background: 'white'}}>
          <Info.Label label={shortLabel} />
        </Box>
      </Showcase>
    </>
  )
})
