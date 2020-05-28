import React from 'react'
import { Box } from '@ambler/andive'

import { Garden } from '../components/garden'

export default function Home() {
  return (
    <Garden>
      <Garden.Title>Andive</Garden.Title>
      <Garden.Description>
        Style <div /> the Ambler way
      </Garden.Description>
      <Garden.Container>
        <Box>Welcome to the new Andive's Gardenbook</Box>
      </Garden.Container>
    </Garden>
  )
}
