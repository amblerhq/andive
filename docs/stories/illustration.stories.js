import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'
import {
  SuccessIllustration,
  DirectionIllustration,
  DoctorIllustration,
  ErrorIllustration,
  HospitalIllustration,
  OrderOnlineIllustration,
  PatientIllustration,
  StandardIllustration
} from '@ambler/andive'

import Showcase from './showcase'

const Story = styled.div`
    display: flex;
    flex-flow row wrap;
`

storiesOf('API|Illustration', module).add('Library', () => {
  return (
    <Story>
      <Showcase variant="squared" size={400} invert legend="Success">
        <SuccessIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Error">
        <ErrorIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Direction">
        <DirectionIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Doctor">
        <DoctorIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Hospital">
        <HospitalIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="OrderOnline">
        <OrderOnlineIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Patient">
        <PatientIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="Standard">
        <StandardIllustration />
      </Showcase>
    </Story>
  )
})
