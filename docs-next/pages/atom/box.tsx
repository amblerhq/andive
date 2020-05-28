import React from 'react'
import { Box, Typography, palette } from '@ambler/andive'

import { Garden } from '../../components/garden'

export default function Stories() {
  return (
    <Garden>
      <Garden.Title>Box</Garden.Title>
      <Garden.Description>
        Creates a group of components with a 8px padding shell.
      </Garden.Description>
      <Garden.Container title="Single text">
        <Box>
          <Typography.Body1>Andive is Ambler's design system</Typography.Body1>
        </Box>
      </Garden.Container>
      <Garden.Container title="Information group">
        <Box>
          <Typography.Body1>Some information</Typography.Body1>
          <Typography.Body2 color={palette.secondaryText}>
            Some sub-information
          </Typography.Body2>
          <Typography.Body3 color={palette.secondaryText}>
            Other sub-information
          </Typography.Body3>
        </Box>
      </Garden.Container>
    </Garden>
  )
}
