import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'

import AmbulanceIcon from './icons/ambulance'
import VslIcon from './icons/vsl'
import TpmrIcon from './icons/tpmr'
import BariatricIcon from './icons/bariatric'
import SeatedIcon from './icons/seated'
import LyingIcon from './icons/lying'
import EditIcon from './icons/edit'
import BackIcon from './icons/back'
import CloseIcon from './icons/close'
import ArrowIcon from './icons/arrow'
import LogoutIcon from './icons/logout'
import HistoricIcon from './icons/historic'
import MedicalFacilityIcon, {MedicalFacilitySvg} from './icons/medical-facility'
import AddressIcon from './icons/address'
import CheckIcon from './icons/check'
import UncheckIcon from './icons/uncheck'

import Icon from './icon'
import Showcase from '../stories/showcase'

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Spacing = styled.div`
  flex: 1;
  flex-basis: 100%;
`

storiesOf('Icon', module)
  .add('Default', () => (
    <Showcase variant="squared">
      <Icon>
        <MedicalFacilitySvg />
      </Icon>
    </Showcase>
  ))
  .add('With circle', () => (
    <Showcase variant="squared">
      <Icon circle circleColor={'white'}>
        <MedicalFacilitySvg />
      </Icon>
    </Showcase>
  ))
  .add('Inline', () => (
    <Showcase variant="squared">
      <Icon inline>
        <MedicalFacilitySvg />
      </Icon>
    </Showcase>
  ))
  .add('Library', () => {
    return (
      <Icons>
        <Showcase variant="squared" legend="Ambulance">
          <AmbulanceIcon />
        </Showcase>
        <Showcase variant="squared" legend="VSL">
          <VslIcon />
        </Showcase>
        <Showcase variant="squared" legend="TPMR">
          <TpmrIcon />
        </Showcase>
        <Showcase variant="squared" legend="Bariatric">
          <BariatricIcon />
        </Showcase>
        <Showcase variant="squared" legend="Lying">
          <LyingIcon />
        </Showcase>
        <Showcase variant="squared" legend="Seated">
          <SeatedIcon />
        </Showcase>
        <Showcase variant="squared" legend="MedicalFacility">
          <MedicalFacilityIcon />
        </Showcase>
        <Spacing />
        <Showcase variant="squared" legend="Edit">
          <EditIcon />
        </Showcase>
        <Showcase variant="squared" legend="Back">
          <BackIcon />
        </Showcase>
        <Showcase variant="squared" legend="Close">
          <CloseIcon />
        </Showcase>
        <Showcase variant="squared" legend="Arrow">
          <ArrowIcon />
        </Showcase>
        <Showcase variant="squared" legend="Logout">
          <LogoutIcon />
        </Showcase>
        <Showcase variant="squared" legend="Address">
          <AddressIcon />
        </Showcase>
        <Showcase variant="squared" legend="Historic">
          <HistoricIcon />
        </Showcase>
        <Showcase variant="squared" legend="Check">
          <CheckIcon />
        </Showcase>
        <Showcase variant="squared" legend="Uncheck">
          <UncheckIcon />
        </Showcase>
      </Icons>
    )
  })
