import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'
import {
  palette,
  Box,
  Card,
  FlatButton,
  AccountIcon,
  FleetIcon,
  AmbulanceIcon,
  VslIcon,
  TpmrIcon,
  BariatricIcon,
  SeatedIcon,
  LyingIcon,
  EditIcon,
  BackIcon,
  CloseIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  LogoutIcon,
  HistoryIcon,
  MedicalFacilityIcon,
  AddressIcon,
  CheckboxOnIcon,
  CheckboxOffIcon,
  NewIcon,
  RadioOnIcon,
  RadioOffIcon,
  CancelIcon,
  FlagIcon,
  QuestionIcon,
  Art80Icon,
  CerfaIcon,
  PatientIcon,
  DelegateIcon,
  ExportIcon,
  CheckIcon,
  WarningIcon,
  MapIcon,
  ForbiddenIcon,
  MfIcon,
  MfuIcon,
  MtIcon,
  RidesIcon,
  OrdersIcon,
  DashboardIcon,
  BurgerIcon,
  IncidentIcon,
  PassengerIcon,
  AddressRemoveIcon,
  PatientAddIcon,
  PatientRemoveIcon,
  EuroIcon,
  InvoiceIcon,
  FlatrateSt1Icon,
  FlatrateSt2Icon,
  FlatrateSt3Icon,
  FlatrateTsIcon,
  FlatrateTdIcon,
  TrashIcon,
  DragIcon,
  AgreementIcon,
  TaskIcon,
  PhoneIcon,
  MoreIcon,
  SearchIcon,
  BookIcon,
  PrebookIcon,
  ConnectAsIcon,
  GyroIcon,
  PickUpIcon,
  DropOffIcon,
  DropdownArrowIcon,
  FilterIcon,
  ResetIcon,
  Typography,
  Info,
  InfosIcon,
  PostponeIcon,
  UnlockIcon,
  RegulatorIcon,
  UnpoolIcon,
  BellWithCircleBadgeIcon,
  BellIcon,
  VerifiedIcon,
  DoctorIcon,
  AmblerIcon,
  SendIcon,
  PlusIcon,
  ReorderIcon,
  EyeIcon,
  PdfIcon
} from '@ambler/andive'

import Showcase from './showcase'

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
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  LogoutIcon,
  HistoryIcon,
  MedicalFacilityIcon,
  AddressIcon,
  AddressRemoveIcon,
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
  RadioOnIcon,
  RadioOffIcon,
  CheckboxOnIcon,
  CheckboxOffIcon,
  PassengerIcon,
  PatientAddIcon,
  PatientRemoveIcon,
  EuroIcon,
  InvoiceIcon,
  FlatrateSt1Icon,
  FlatrateSt2Icon,
  FlatrateSt3Icon,
  FlatrateTsIcon,
  FlatrateTdIcon,
  TrashIcon,
  DragIcon,
  AgreementIcon,
  TaskIcon,
  AccountIcon,
  FleetIcon,
  PhoneIcon,
  MoreIcon,
  SearchIcon,
  ConnectAsIcon,
  PrebookIcon,
  BookIcon,
  GyroIcon,
  PickUpIcon,
  DropOffIcon,
  DropdownArrowIcon,
  FilterIcon,
  ResetIcon,
  InfosIcon,
  PostponeIcon,
  UnlockIcon,
  RegulatorIcon,
  UnpoolIcon,
  BellWithCircleBadgeIcon,
  BellIcon,
  VerifiedIcon,
  DoctorIcon,
  AmblerIcon,
  SendIcon,
  PlusIcon,
  ReorderIcon,
  EyeIcon
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

const newIcons = [{Icon: PdfIcon}, {Icon: EyeIcon}, {Icon: PlusIcon}, {Icon: ReorderIcon}, {Icon: SendIcon}]
const updatedIcons = []

storiesOf('Assets|Icons', module)
  .add('New 👀', () => {
    return (
      <>
        {newIcons.length ? (
          <>
            <Info>
              <Typography.Body1>Newly added icons</Typography.Body1>
            </Info>
            <Icons>
              {newIcons.map(config => (
                <Showcase
                  key={config.Icon && config.Icon.name}
                  variant="squared"
                  size={160}
                  invert={config.invert}
                  legend={config.Icon && config.Icon.name}
                >
                  <config.Icon />
                </Showcase>
              ))}
            </Icons>
          </>
        ) : null}
        {updatedIcons.length ? (
          <>
            <Info>
              <Typography.Body1>Recently updated icons</Typography.Body1>
            </Info>
            <Icons>
              {updatedIcons.map(config => (
                <Showcase
                  key={config.Icon && config.Icon.name}
                  variant="squared"
                  size={160}
                  invert={config.invert}
                  legend={config.Icon && config.Icon.name}
                >
                  <config.Icon />
                </Showcase>
              ))}
            </Icons>
          </>
        ) : null}
      </>
    )
  })
  .add('Library', () => {
    return (
      <>
        <TimedColor interval={5000} colors={[palette.darkPrimary, palette.mediumBerryBlue]}>
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
        <MedicalFacilityIcon circle circleColor="white" />
      </Showcase>
      <Showcase variant="squared">
        <AmbulanceIcon circle circleColor={palette.mediumBeetrootPurple} color="white" />
      </Showcase>
      {[EuroIcon, ForbiddenIcon, FlatrateSt1Icon, FlatrateSt2Icon, FlatrateSt3Icon, FlatrateTsIcon, FlatrateTdIcon].map(
        (Icon, index) => (
          <Showcase variant="squared" key={index}>
            <Icon circle circleColor={palette.mediumBeetrootPurple} color="white" />
          </Showcase>
        )
      )}
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
      <Showcase variant="squared" invert>
        <MtIcon color="grey" />
      </Showcase>
    </Icons>
  ))
  .add('Inline', () => (
    <Showcase>
      En concert à {"l'"}Olympiade
      <AddressIcon inline color={palette.lightRadishRed} />
      dès 2020 !
    </Showcase>
  ))
  .add('In FlatButton', () => {
    return (
      <Box style={{display: 'flex'}}>
        <Box style={{width: 300}}>
          <Card>
            <Box>
              <Typography.Body1>Size of 16px</Typography.Body1>
            </Box>
            {icons
              .filter(Icon => Icon.size === 16)
              .map(Icon => {
                return <FlatButton key={Icon.name} label="Button" icon={<Icon color={palette.lightBerryBlue} />} />
              })}
          </Card>
        </Box>
        <Box style={{width: 300}}>
          <Card>
            <Box>
              <Typography.Body1>Size of 24px</Typography.Body1>
            </Box>
            {icons
              .filter(Icon => Icon.size === 24)
              .map(Icon => {
                return <FlatButton key={Icon.name} label="Button" color={palette.lightBerryBlue} icon={<Icon />} />
              })}
          </Card>
        </Box>
      </Box>
    )
  })
