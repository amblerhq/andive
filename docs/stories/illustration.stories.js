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
  StandardIllustration,
  TooLateIllustration,
  EmptyIllustration,
  SleepingBellIllustration
} from '@ambler/andive'

import Showcase from './showcase'

const Story = styled.div`
    display: flex;
    flex-flow row wrap;
`

storiesOf('Assets|Illustrations', module)
  .add('New 👀', () => {
    return (
      <Story>
        <Showcase variant="squared" size={400} legend="<TooLateIllustration />">
          <TooLateIllustration />
        </Showcase>
        <Showcase variant="squared" size={400} legend="<EmptyIllustration />">
          <EmptyIllustration />
        </Showcase>
      </Story>
    )
  })
  .add('Library', () => {
    return (
      <Story>
        <Showcase variant="squared" size={400} legend="<TooLateIllustration />">
          <TooLateIllustration />
        </Showcase>
        <Showcase variant="squared" size={400} legend="<EmptyIllustration />">
          <EmptyIllustration />
        </Showcase>
        <Showcase variant="squared" size={400} invert legend="<SuccessIllustration />">
          <SuccessIllustration />
        </Showcase>
        <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<ErrorIllustration />">
          <ErrorIllustration />
        </Showcase>
        <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<DirectionIllustration />">
          <DirectionIllustration />
        </Showcase>
        <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<DoctorIllustration />">
          <DoctorIllustration />
        </Showcase>
        <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<HospitalIllustration />">
          <HospitalIllustration />
        </Showcase>
        <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<OrderOnlineIllustration />">
          <OrderOnlineIllustration />
        </Showcase>
        <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<PatientIllustration />">
          <PatientIllustration />
        </Showcase>
        <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<StandardIllustration />">
          <StandardIllustration />
        </Showcase>
        <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<SleepingBellIllustration />">
          <SleepingBellIllustration />
        </Showcase>
      </Story>
    )
  })
