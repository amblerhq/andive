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
import RightArrowIcon from './icons/arrow-right'
import LeftArrowIcon from './icons/arrow-left'
import DownArrowIcon from './icons/arrow-down'
import UpArrowIcon from './icons/arrow-up'
import LogoutIcon from './icons/logout'
import HistoricIcon from './icons/historic'
import MedicalFacilityIcon, {MedicalFacilitySvg} from './icons/medical-facility'
import AddressIcon, {AddressSvg} from './icons/address'
import CheckboxOn from './icons/checkbox-on'
import CheckboxOff from './icons/checkbox-off'
import NewIcon from './icons/new'
import RadioOn from './icons/radio-on'
import RadioOff from './icons/radio-off'
import CancelIcon from './icons/cancel'
import FlagIcon from './icons/flag'
import QuestionIcon from './icons/question'
import Art80Icon from './icons/art80'
import CerfaIcon from './icons/cerfa'
import PatientIcon from './icons/patient'
import DelegateIcon from './icons/delegate'
import ExportIcon from './icons/export'
import KebabIcon from './icons/kebab'

import Icon from './icon'
import Showcase from '../stories/showcase'
import * as palette from '../constants/palette'
import MapIcon from './icons/map'

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const icons = [
  AmbulanceIcon,
  VslIcon,
  TpmrIcon,
  BariatricIcon,
  SeatedIcon,
  LyingIcon,
  CloseIcon,
  RightArrowIcon,
  LeftArrowIcon,
  DownArrowIcon,
  UpArrowIcon,
  LogoutIcon,
  HistoricIcon,
  MedicalFacilityIcon,
  AddressIcon,
  NewIcon,
  CancelIcon,
  FlagIcon,
  QuestionIcon,
  Art80Icon,
  CerfaIcon,
  PatientIcon,
  DelegateIcon,
  MapIcon,
  ExportIcon,
  KebabIcon
]

const blueIcons = [EditIcon, BackIcon, RadioOn, RadioOff, CheckboxOn, CheckboxOff]

storiesOf('Icon', module)
  .add('All', () => {
    return (
      <>
        <Icons>
          {icons.map((Icon, index) => {
            return (
              <Showcase key={index} variant="squared" size={160} legend={Icon.name}>
                <Icon color={palette.darkGrey} />
              </Showcase>
            )
          })}
        </Icons>
        <Icons>
          {blueIcons.map((Icon, index) => {
            return (
              <Showcase key={index} variant="squared" size={160} legend={Icon.name}>
                <Icon />
              </Showcase>
            )
          })}
        </Icons>
      </>
    )
  })

  .add('Default', () => (
    <Showcase variant="squared">
      <Icon>
        <MedicalFacilitySvg />
      </Icon>
    </Showcase>
  ))
  .add('With circle', () => (
    <Icons>
      <Showcase variant="squared">
        <Icon circle circleColor="white">
          <MedicalFacilitySvg />
        </Icon>
      </Showcase>
      <Showcase variant="squared">
        <Icon circle circleColor={palette.beetrootPurple} color="white">
          <MedicalFacilitySvg />
        </Icon>
      </Showcase>
    </Icons>
  ))
  .add('Colored', () => (
    <Icons>
      <Showcase variant="squared" legend={'berryBlue'}>
        <AddressIcon color={palette.berryBlue} />
      </Showcase>
      <Showcase variant="squared" legend={'radishRed'}>
        <AddressIcon color={palette.radishRed} />
      </Showcase>
      <Showcase variant="squared" legend={'lettuceGreen'}>
        <AddressIcon color={palette.lettuceGreen} />
      </Showcase>
      <Showcase variant="squared" invert legend={'potatoYellow'}>
        <AddressIcon color={palette.potatoYellow} />
      </Showcase>
      <Showcase variant="squared" invert legend={'potatoYellow'}>
        <AddressIcon color={palette.white} />
      </Showcase>
    </Icons>
  ))
  .add('Inline', () => (
    <Showcase>
      {"En concert à l'Olympiade"}
      <Icon inline color={palette.radishRed}>
        <AddressSvg />
      </Icon>
      dès 2020 !
    </Showcase>
  ))
