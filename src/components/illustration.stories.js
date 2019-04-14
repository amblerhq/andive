import React from 'react'
import {storiesOf} from '@storybook/react'

import Success from './illustrations/success'
import Direction from './illustrations/direction'
import Doctor from './illustrations/doctor'
import Error from './illustrations/error'
import Hospital from './illustrations/hospital'
import OrderOnline from './illustrations/order-online'
import Patient from './illustrations/patient'
import Standard from './illustrations/standard'

import Showcase from '../stories/showcase'

import styled from 'styled-components'

const Story = styled.div`
    display: flex;
    flex-flow row wrap;
`

storiesOf('Illustration', module).add('Library', () => {
  return (
    <Story>
      <Showcase variant="squared" size={400} invert legend="Success">
        <Success />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Direction">
        <Direction />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Doctor">
        <Doctor />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Error">
        <Error />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Hospital">
        <Hospital />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="OrderOnline">
        <OrderOnline />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Patient">
        <Patient />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Standard">
        <Standard />
      </Showcase>
    </Story>
  )
})
