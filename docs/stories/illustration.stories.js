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
  SleepingBellIllustration,
  RingingBellIllustration,
  CFacilityIllustration,
  GhtFacilityIllustration,
  ChFacilityIllustration,
  GpFacilityIllustration,
  CancelIllustration,
  TaxiIllustration,
  DirectorIllustration,
  EmptyStretcherIllustration,
  HeadphonesIllustration,
  WatchIllustration,
  NurseIllustration,
  MaintenanceIllustration,
  CheckIllustration
} from '@ambler/andive'

import Showcase from './showcase'

const Story = styled.div`
    display: flex;
    flex-flow row wrap;
`

storiesOf('Assets|Illustrations', module).add('Library', () => {
  return (
    <Story>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<NurseIllustration />">
        <NurseIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<MaintenanceIllustration />">
        <MaintenanceIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<DirectorIllustration />">
        <DirectorIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<WatchIllustration />">
        <WatchIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<HeadphonesIllustration />">
        <HeadphonesIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<EmptyStretcherIllustration />">
        <EmptyStretcherIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<TaxiIllustration />">
        <TaxiIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<CancelIllustration />">
        <CancelIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<GpFacilityIllustration />">
        <GpFacilityIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<ChFacilityIllustration />">
        <ChFacilityIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<CFacilityIllustration />">
        <CFacilityIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<GhtFacilityIllustration />">
        <GhtFacilityIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<RingingBellIllustration />">
        <RingingBellIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<SleepingBellIllustration />">
        <SleepingBellIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<TooLateIllustration />">
        <TooLateIllustration />
      </Showcase>
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<EmptyIllustration />">
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
      <Showcase variant="squared" size={400} style={{background: 'white'}} legend="<CheckIllustration />">
        <CheckIllustration />
      </Showcase>
    </Story>
  )
})
