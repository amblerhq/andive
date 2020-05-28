import React from 'react'
import { Box, Card, Typography, VSpace, palette } from '@ambler/andive'
import styled from 'styled-components'
import { NavMenu } from './nav-menu'

// TODO: The container is the central column layout primitive.
const Container = styled.div`
  width: 100%;
  max-width: 600px;

  margin: 0 auto;
`

const Layer = styled.div<{ direction?: 'row' | 'column' }>`
  width: 100%;

  display: flex;
  flex-flow: ${props => props.direction || 'column'} nowrap;
`

export function GardenTitle(props) {
  return (
    <Container>
      <Box>
        <Typography.H1>{props.children}</Typography.H1>
      </Box>
      <VSpace px={32} />
    </Container>
  )
}

export function GardenDescription(props) {
  return (
    <Container>
      <Box>
        <Typography.Body1>{props.children}</Typography.Body1>
      </Box>
      <VSpace px={16} />
    </Container>
  )
}

export function GardenContainer(props) {
  return (
    <Container>
      <VSpace px={32} />
      {props.title ? (
        <Box>
          <Typography.Body2 color={palette.secondaryText}>
            {props.title}
          </Typography.Body2>
        </Box>
      ) : null}
      <Card>{props.children}</Card>
    </Container>
  )
}

export function Garden(props) {
  return (
    <Layer direction="row">
      <NavMenu />
      <Layer>{props.children}</Layer>
    </Layer>
  )
}
Garden.Title = GardenTitle
Garden.Description = GardenDescription
Garden.Container = GardenContainer
