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
import HistoryIcon from './icons/history'
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
import CheckIcon from './icons/check'
import WarningIcon from './icons/warning'
import MapIcon from './icons/map'
import ForbiddenIcon from './icons/forbidden'
import MfIcon from './icons/mf'
import MfuIcon from './icons/mfu'
import MtIcon from './icons/mt'
import RidesIcon from './icons/rides'
import OrdersIcon from './icons/orders'
import DashboardIcon from './icons/dashboard'
import BurgerIcon from './icons/burger'
import IncidentIcon from './icons/incident'

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
  SeatedIcon,
  LyingIcon,
  CloseIcon,
  RightArrowIcon,
  LeftArrowIcon,
  DownArrowIcon,
  UpArrowIcon,
  LogoutIcon,
  HistoryIcon,
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
  CheckIcon,
  WarningIcon,
  ForbiddenIcon,
  IncidentIcon,
  MfIcon,
  MfuIcon,
  MtIcon,
  RidesIcon,
  OrdersIcon,
  DashboardIcon,
  EditIcon,
  BackIcon,
  BurgerIcon,
  RadioOn,
  RadioOff,
  CheckboxOn,
  CheckboxOff
]

function TimedColor({interval, colors, children}) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    function tick() {
      setIndex(prev => (prev >= colors.length - 1 ? 0 : prev + 1))
    }

    const handle = setInterval(tick, interval || 1000)

    return () => {
      clearInterval(handle)
    }
  }, [setIndex])

  const color = colors[index % icons.length]

  return children(color)
}

storiesOf('Icon', module)
  .add('All', () => {
    return (
      <>
        <TimedColor
          interval={5000}
          colors={[
            palette.mediumLettuceGreen,
            palette.mediumPrimary,
            palette.successText,
            palette.errorText,
            palette.warningText
          ]}
        >
          {color => (
            <Icons>
              {icons.map((Icon, index) => {
                return (
                  <Showcase key={index} variant="squared" size={160} legend={Icon.name}>
                    <Icon color={color} />
                  </Showcase>
                )
              })}
            </Icons>
          )}
        </TimedColor>
      </>
    )
  })
  .add('With circle', () => (
    <Icons>
      <Showcase variant="squared">
        <Icon circle circleColor="white">
          <MedicalFacilitySvg />
        </Icon>
      </Showcase>
      <Showcase variant="squared">
        <Icon circle circleColor={palette.mediumBeetrootPurple} color="white">
          <MedicalFacilitySvg />
        </Icon>
      </Showcase>
    </Icons>
  ))
  .add('With color', () => (
    <Icons>
      <Showcase variant="squared">
        <AddressIcon color={palette.mediumBerryBlue} />
      </Showcase>
      <Showcase variant="squared">
        <AddressIcon color={palette.mediumRadishRed} />
      </Showcase>
      <Showcase variant="squared">
        <AddressIcon color={palette.mediumLettuceGreen} />
      </Showcase>
      <Showcase variant="squared" invert>
        <AddressIcon color={palette.mediumPotatoYellow} />
      </Showcase>
      <Showcase variant="squared" invert>
        <AddressIcon color={palette.white} />
      </Showcase>
    </Icons>
  ))
  .add('Inline', () => (
    <Showcase>
      En concert à {"l'"}Olympiade
      <Icon inline color={palette.lightRadishRed}>
        <AddressSvg />
      </Icon>
      dès 2020 !
    </Showcase>
  ))
