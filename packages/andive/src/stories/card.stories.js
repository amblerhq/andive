import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'

import Showcase from './showcase'
import {Card} from '..'

const Container = styled.div`
  width: 50%;
`

const dummyText = 'This is a simple card. Cards are used in the app (trips, BRs) bo (Mission, MFU/MT details...)'

function DefaultCard() {
  return (
    <Showcase>
      <Container>
        <Card title="Default card">{dummyText}</Card>
      </Container>
    </Showcase>
  )
}

storiesOf('Card', module).add('Default', () => <DefaultCard />)
