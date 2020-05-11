import React from 'react'
import {storiesOf} from '@storybook/react'
import {Box, Typography} from '@ambler/andive'

import Showcase from './showcase'

const shortLabel = 'Fan de Phil Collins'

storiesOf('API|Box', module).add('Default', () => {
  return (
    <Showcase>
      <Box style={{background: 'white'}}>
        <Typography.Body1>{shortLabel}</Typography.Body1>
      </Box>
    </Showcase>
  )
})
