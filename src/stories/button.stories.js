import React from 'react'
import {storiesOf} from '@storybook/react'

import {
  Button,
  ButtonGroup,
  AmbulanceIcon,
  ArrowRightIcon,
  NewIcon,
  AddressIcon,
  BariatricIcon,
  PatientIcon,
  TpmrIcon,
  EditIcon,
  LogoutIcon,
  VslIcon,
  palette,
  Info
} from '..'
import Showcase from './showcase'
import VSpace from '../components/v-space'

const icons = [AmbulanceIcon, VslIcon, BariatricIcon, TpmrIcon]

function TimedIcon({interval, color, children}) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    function tick() {
      setIndex(index + 1)
    }

    const handle = setInterval(tick, interval || 1000)

    return () => {
      clearInterval(handle)
    }
  }, [index, setIndex])

  const Icon = icons[index % icons.length]

  return children(<Icon color={color} />)
}

function ButtonStory(props) {
  return (
    <>
      <Info>
        <Info.Label label="Desktop" />
      </Info>
      <Showcase legend="Default (desktop)">
        <ButtonGroup>
          <Button {...props} label="Je suis fan" />
          <Button {...props} label="Enregistrer mes changements" />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Disabled (desktop)">
        <ButtonGroup>
          <Button {...props} disabled label="Je suis fan" />
          <Button {...props} disabled label="Enregistrer mes changements" />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Loading (desktop)">
        <ButtonGroup>
          <Button {...props} loading label="Je suis fan" />
          <Button {...props} loading label="Enregistrer mes changements" />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Invert (desktop)" invert>
        <ButtonGroup>
          <Button {...props} invert label="Je suis fan" />
          <Button {...props} invert label="Enregistrer mes changements" />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Invert & Disabled (desktop)" invert>
        <ButtonGroup>
          <Button {...props} invert disabled label="Je suis fan" />
          <Button {...props} invert disabled label="Enregistrer mes changements" />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Invert & Loading (desktop)" invert>
        <ButtonGroup>
          <Button {...props} invert loading label="Je suis fan" />
          <Button {...props} invert loading label="Enregistrer mes changements" />
        </ButtonGroup>
      </Showcase>
      <Info>
        <Info.Label label="Mobile" />
      </Info>
      <Showcase legend="Default (mobile)">
        <ButtonGroup>
          <Button {...props} label="Je suis fan" mobile />
          <Button {...props} label="Enregistrer mes changements" mobile />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Disabled (mobile)">
        <ButtonGroup>
          <Button {...props} mobile disabled label="Je suis fan" />
          <Button {...props} mobile disabled label="Enregistrer mes changements" />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Loading (mobile)">
        <ButtonGroup>
          <Button {...props} loading label="Je suis fan" mobile />
          <Button {...props} loading label="Enregistrer mes changements" mobile />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Invert (mobile)" invert>
        <ButtonGroup>
          <Button {...props} invert label="Je suis fan" mobile />
          <Button {...props} invert label="Enregistrer mes changements" mobile />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Invert & Disabled (mobile)" invert>
        <ButtonGroup>
          <Button {...props} mobile invert disabled label="Je suis fan" />
          <Button {...props} mobile invert disabled label="Enregistrer mes changements" />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Invert & Loading (mobile)" invert>
        <ButtonGroup>
          <Button {...props} invert loading label="Je suis fan" mobile />
          <Button {...props} invert loading label="Enregistrer mes changements" mobile />
        </ButtonGroup>
      </Showcase>
    </>
  )
}

storiesOf('Button', module)
  .add('Showcase', () => (
    <>
      <Showcase legend="Desktop">
        <ButtonGroup>
          <Button label="Je suis fan" />
          <Button variant="primary" label="Je suis fan" />
          <Button disabled variant="primary" label="Je suis fan" />
          <Button loading variant="primary" label="Je suis fan" />
          <Button variant="primary" label="Je suis fan" rightIcon={<PatientIcon color="white" size={24} />} />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Mobile">
        <ButtonGroup>
          <Button mobile label="Je suis fan" />
          <Button mobile variant="primary" label="Je suis fan" />
          <Button mobile disabled variant="primary" label="Je suis fan" />
          <Button mobile loading variant="primary" label="Je suis fan" />
          <Button mobile variant="primary" label="Je suis fan" rightIcon={<PatientIcon color="white" size={24} />} />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Mobile inverted" invert>
        <ButtonGroup>
          <Button invert mobile label="Je suis fan" />
          <Button invert mobile variant="primary" label="Je suis fan" />
          <Button invert mobile disabled variant="primary" label="Je suis fan" />
          <Button invert mobile loading variant="primary" label="Je suis fan" />
          <Button
            invert
            mobile
            variant="primary"
            label="Je suis fan"
            rightIcon={<PatientIcon color="white" size={24} />}
          />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Use-case: footer actions">
        <ButtonGroup>
          <Button label="action" />
          <Button label="action" variant="primary" />
        </ButtonGroup>
      </Showcase>
    </>
  ))
  .add('Primary/Main', () => <ButtonStory variant="primary" />)
  .add('Default/Secondary', () => <ButtonStory />)
  .add('Flat/Third', () => <ButtonStory variant="flat" />)
  .add('Filter', () => <ButtonStory variant="filter" />)
  .add('With icon', () => (
    <>
      <Info>
        <Info.Label label="Desktop" />
      </Info>
      <Showcase legend="Primary/Main">
        <ButtonGroup>
          <Button variant="primary" label="Ambulance" leftIcon={<AmbulanceIcon />} />
          <Button variant="primary" label="Ambulance" rightIcon={<AmbulanceIcon />} />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Default/Secondary">
        <ButtonGroup>
          <Button label="Ambulance" leftIcon={<AmbulanceIcon />} />
          <Button label="Ambulance" rightIcon={<AmbulanceIcon />} />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Flat/Third">
        <ButtonGroup>
          <Button variant="flat" label="Ambulance" leftIcon={<AmbulanceIcon />} />
          <Button variant="flat" label="Ambulance" rightIcon={<AmbulanceIcon />} />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Flat/Third">
        <ButtonGroup>
          <Button variant="filter" label="Ambulance" leftIcon={<AmbulanceIcon />} />
          <Button variant="filter" label="Ambulance" rightIcon={<AmbulanceIcon />} />
        </ButtonGroup>
      </Showcase>
      <Info>
        <Info.Label label="Mobile" />
      </Info>
      <Showcase legend="Primary/Main">
        <ButtonGroup>
          <Button mobile variant="primary" label="Ambulance" leftIcon={<AmbulanceIcon />} />
          <Button mobile variant="primary" label="Ambulance" rightIcon={<AmbulanceIcon />} />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Default/Secondary">
        <ButtonGroup>
          <Button mobile label="Ambulance" leftIcon={<AmbulanceIcon />} />
          <Button mobile label="Ambulance" rightIcon={<AmbulanceIcon />} />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Flat/Third">
        <ButtonGroup>
          <Button mobile variant="flat" label="Ambulance" leftIcon={<AmbulanceIcon />} />
          <Button mobile variant="flat" label="Ambulance" rightIcon={<AmbulanceIcon />} />
        </ButtonGroup>
      </Showcase>
      <Showcase legend="Flat/Third">
        <ButtonGroup>
          <Button mobile variant="filter" label="Ambulance" leftIcon={<AmbulanceIcon />} />
          <Button mobile variant="filter" label="Ambulance" rightIcon={<AmbulanceIcon />} />
        </ButtonGroup>
      </Showcase>
    </>
  ))
  .add('Rules', () => {
    return (
      <>
        {/* Min-width === 200px */}
        <Info>
          <Info.Block variant="info">
            <Info.Item item="Minimum width is 200px" />
          </Info.Block>
          <VSpace px={16} />
          <div style={{width: 200, border: '2px solid black', borderBottom: 'none', height: 4}} />
        </Info>
        <Button label="action" variant="primary" />
        <VSpace px={32} />

        {/* If used together, both button have the same (biggest of two) size */}
        <Info>
          <Info.Block variant="info">
            <Info.Item item="Main and Secondary button have the same size if used together (largest button size)" />
          </Info.Block>
          <VSpace px={16} />
        </Info>
        <ButtonGroup minWidth={276}>
          <Button label="nop" />
          <Button label="fantastic, incredible, magic" variant="primary" />
        </ButtonGroup>
        <VSpace px={32} />

        {/* If used together, both button have the same (biggest of two) size */}
        <Info>
          <Info.Block variant="info">
            <Info.Item item="Horizontal spacing between buttons is 32px excluding the 8px standard margins (until the screen size or use case doesn’t allow it)" />
          </Info.Block>
          <VSpace px={16} />
        </Info>
        <ButtonGroup>
          <Button label="action" />
          <Button label="action" variant="primary" />
        </ButtonGroup>
        <VSpace px={32} />
      </>
    )
  })
