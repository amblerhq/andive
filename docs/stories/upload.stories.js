import React from 'react'
import {storiesOf} from '@storybook/react'

import {Upload, Card, Typography, VSpace} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('API|Upload', module).add('Library', () => {
  return (
    <>
      <Showcase legend={'Default'}>
        <Card>
          <Typography.Body2>Facture</Typography.Body2>
          <VSpace px={8} />
          <Upload onChange={() => alert('onChange')} onDrag={() => alert('onDrag')} />
        </Card>
      </Showcase>
      <Showcase legend={'Without onDrag handler'}>
        <Card>
          <Typography.Body2>Facture</Typography.Body2>
          <VSpace px={8} />
          <Upload onChange={() => alert('onChange')} />
        </Card>
      </Showcase>
      <Showcase legend={'Error'}>
        <Card>
          <Typography.Body2>Facture</Typography.Body2>
          <VSpace px={8} />
          <Upload onChange={() => alert('onChange')} onDrag={() => alert('onDrag')} error="Une erreur est survenue" />
        </Card>
      </Showcase>
      <Showcase legend={'Loading'}>
        <Card>
          <Typography.Body2>Facture</Typography.Body2>
          <Upload onChange={() => alert('onChange')} onDrag={() => alert('onDrag')} loading />
        </Card>
      </Showcase>
      <Showcase legend={'Mobile'}>
        <Card>
          <Typography.Body2>Facture</Typography.Body2>
          <VSpace px={8} />
          <Upload onChange={() => alert('onChange')} onDrag={() => alert('onDrag')} mobile />
        </Card>
      </Showcase>
    </>
  )
})
