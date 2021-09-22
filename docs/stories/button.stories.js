import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'
import {
  FlatButton,
  Button,
  ButtonGroup,
  VSpace,
  AmbulanceIcon,
  PatientIcon,
  Info,
  MoreIcon,
  EditIcon,
  Typography,
  palette,
  ArrowDownIcon,
  ArrowUpIcon
} from '@ambler/andive'

import Showcase from './showcase'

const CustomButton = styled(Button)`
  button {
    background: midnightblue;
  }
`

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

storiesOf('API|Button', module)
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
  .add('Primary/Main', () => <>
    Salut !
    <ButtonStory variant="primary" />
    </>)
  .add('Default/Secondary', () => <ButtonStory />)
  .add('Flat/Third', () => <ButtonStory variant="flat" />)
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
    </>
  ))
  .add('Button prop : width', () => {
    return (
      <Showcase legend="custom width" style={{display: 'block'}}>
        <Button width={200} label="200px" />
        <Button width={300} label="300px" />
        <Button width={128} label="128px" />
      </Showcase>
    )
  })
  .add('Customize style', () => {
    return <CustomButton label="⚠️" small width={100} />
  })
  .add('Active button', () => {
    return (
      <>
        <FlatButton icon={<MoreIcon />} active />
        <FlatButton icon={<EditIcon />} label="Modifier" active>
          <Typography.Body2 color={palette.mediumBerryBlue}>Modifier</Typography.Body2>
        </FlatButton>
      </>
    )
  })
  .add('Action button', () => {
    return (
      <Showcase legend="Use-case: action button">
        <Button variant="primary" label="action" rightIcon={<ArrowDownIcon />} small mobile />
        <Button variant="primary" label="action" rightIcon={<ArrowUpIcon />} small mobile />
      </Showcase>
    )
  })
