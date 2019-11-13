import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'

import Showcase from './showcase'
import {Card, Info, VSpace} from '@ambler/andive'

const Container = styled.div`
  width: 50%;
`

const labelText = 'This is a simple card.'

const itemText =
  'Cards are non-clickable. They group information together and often have buttons that allow the user to perform actions (edit, add items, etc.)'

function DefaultCard() {
  return (
    <Showcase>
      <Container>
        <Card title="Default card">
          <Info>
            <Info.Label label={labelText} />
            <VSpace px={16} />
            <Info.Item item={itemText} />
          </Info>
        </Card>
      </Container>
    </Showcase>
  )
}

storiesOf('Card', module).add('Default', () => <DefaultCard />)
