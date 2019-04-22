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
import LogoutIcon from './icons/logout'
import HistoricIcon from './icons/historic'
import MedicalFacilityIcon, {MedicalFacilitySvg} from './icons/medical-facility'
import AddressIcon, {AddressSvg} from './icons/address'
import CheckIcon from './icons/check'
import UncheckIcon from './icons/uncheck'
import NewIcon from './icons/new'

import Icon from './icon'
import Showcase from '../stories/showcase'
import * as palette from '../constants/palette'

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const icons = [
  AmbulanceIcon,
  VslIcon,
  TpmrIcon,
  BariatricIcon,
  CloseIcon,
  RightArrowIcon,
  LeftArrowIcon,
  DownArrowIcon,
  LogoutIcon,
  HistoricIcon,
  MedicalFacilityIcon,
  AddressIcon,
  NewIcon
]

const blueIcons = [SeatedIcon, LyingIcon, EditIcon, CheckIcon, UncheckIcon, BackIcon]

storiesOf('Icon', module)
  .add('All', () => {
    return (
      <>
        <Icons>
          {icons.map((Icon, index) => {
            return (
              <Showcase key={index} variant="squared" size={160} legend={Icon.name}>
                <Icon color={palette.lightBeetrootPurple} />
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
    <Showcase variant="squared">
      <Icon circle circleColor={'white'}>
        <MedicalFacilitySvg />
      </Icon>
    </Showcase>
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
