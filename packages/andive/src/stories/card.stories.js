import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'

import Showcase from './showcase'
import {Card} from '..'

const Container = styled.div`
  width: 30%;
`

const dummyText =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'

function DefaultCard() {
  return (
    <Showcase>
      <Container>
        <Card title="Default card">{dummyText}</Card>
      </Container>
    </Showcase>
  )
}

function CardWithShadow() {
  return (
    <Showcase>
      <Container>
        <Card title="Card with shadow" shadow={true}>
          {dummyText}
        </Card>
      </Container>
    </Showcase>
  )
}

function CardWithFullWidthDivider() {
  return (
    <Showcase>
      <Container>
        <Card fullWidthDivider title="Card with full width divider">
          {dummyText}
        </Card>
      </Container>
    </Showcase>
  )
}

storiesOf('Card', module)
  .add('Default', () => <DefaultCard />)
  .add('With shadow', () => <CardWithShadow />)
  .add('With full width divider', () => <CardWithFullWidthDivider />)
