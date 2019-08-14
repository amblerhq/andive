import React, {useState, useEffect} from 'react'
import {storiesOf} from '@storybook/react'

import Button from './button'
import * as palette from '../constants/palette'
import Showcase from '../stories/showcase'

import AmbulanceIcon from './icons/ambulance'
import VslIcon from './icons/vsl'
import BariatricIcon from './icons/bariatric'
import TpmrIcon from './icons/tpmr'
import PatientIcon from './icons/patient'

import EditIcon from './icons/edit'
import LogoutIcon from './icons/logout'
import ArrowIcon from './icons/arrow-right'
import NewIcon from './icons/new'
import AddressIcon from './icons/address'

const icons = [AmbulanceIcon, VslIcon, BariatricIcon, TpmrIcon]

function TimedIcon({interval, color, children}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
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

storiesOf('Button', module)
  .add('Showcase', () => (
    <>
      <Showcase legend="Desktop">
        <Button label="Je suis fan" />
        <div style={{width: 32}} />
        <Button variant="primary" label="Je suis fan" />
        <div style={{width: 32}} />
        <Button disabled variant="primary" label="Je suis fan" />
        <div style={{width: 32}} />
        <Button loading variant="primary" label="Je suis fan" />
        <div style={{width: 32}} />
        <Button variant="primary" label="Je suis fan" rightIcon={<PatientIcon color="white" size={24} />} />
      </Showcase>
      <Showcase legend="Mobile">
        <Button mobile label="Je suis fan" />
        <div style={{width: 32}} />
        <Button mobile variant="primary" label="Je suis fan" />
        <div style={{width: 32}} />
        <Button mobile disabled variant="primary" label="Je suis fan" />
        <div style={{width: 32}} />
        <Button mobile loading variant="primary" label="Je suis fan" />
        <div style={{width: 32}} />
        <Button mobile variant="primary" label="Je suis fan" rightIcon={<PatientIcon color="white" size={24} />} />
      </Showcase>
    </>
  ))
  .add('Default', () => (
    <>
      <Showcase legend="Default (desktop)">
        <Button label="Je suis fan" />
        <div style={{width: 32}} />
        <Button label="Enregistrer mes changements" />
      </Showcase>
      <Showcase legend="Default (mobile)">
        <Button label="Je suis fan" mobile />
        <div style={{width: 32}} />
        <Button label="Enregistrer mes changements" mobile />
      </Showcase>
    </>
  ))
  .add('Primary', () => (
    <>
      <Showcase legend="Default (desktop)">
        <Button variant="primary" label="Je suis fan" />
        <div style={{width: 32}} />
        <Button variant="primary" label="Enregistrer mes changements" />
      </Showcase>
      <Showcase legend="Default (mobile)">
        <Button variant="primary" label="Je suis fan" mobile />
        <div style={{width: 32}} />
        <Button variant="primary" label="Enregistrer mes changements" mobile />
      </Showcase>
    </>
  ))
  .add('Flat', () => {
    return (
      <Showcase>
        <Button variant="flat" label="Je suis fan" />
      </Showcase>
    )
  })
  .add('Filter', () => (
    <>
      <Showcase legend="Filter (desktop)">
        <Button variant="filter" label="Filtrer par Statuts" />
      </Showcase>
      <Showcase legend="Filter (mobile)">
        <Button variant="filter" label="Filtrer par Statuts" mobile />
      </Showcase>
    </>
  ))
  .add('Invert', () => (
    <>
      <Showcase invert>
        <Button invert label="Je suis fan" />
      </Showcase>
      <Showcase invert>
        <Button invert variant="primary" label="Je suis fan" />
      </Showcase>
      <Showcase invert>
        <Button invert variant="flat" label="Je suis fan" />
      </Showcase>
      <Showcase invert>
        <Button invert variant="filter" label="Je suis fan" />
      </Showcase>
    </>
  ))
  .add('With right icon', () => (
    <>
      <Showcase>
        <TimedIcon interval={5000} color={palette.mediumBeetrootPurple}>
          {icon => <Button label="Tap" rightIcon={icon} />}
        </TimedIcon>
      </Showcase>
      <Showcase>
        <Button label="Commander" rightIcon={<AddressIcon color={palette.white} />} variant="primary" />
      </Showcase>
      <Showcase>
        <TimedIcon interval={5000} color={palette.mediumBerryBlue}>
          {icon => <Button label="Tap" rightIcon={icon} variant="flat" />}
        </TimedIcon>
      </Showcase>
      <Showcase>
        <Button
          label={'Nouvelle commande'}
          rightIcon={<ArrowIcon inline color={palette.mediumBerryBlue} />}
          variant="flat"
        />
      </Showcase>
    </>
  ))
  .add('With icon left', () => (
    <>
      <Showcase>
        <TimedIcon interval={5000} color={palette.mediumBeetrootPurple}>
          {icon => <Button label="Tap" leftIcon={icon} />}
        </TimedIcon>
      </Showcase>
      <Showcase>
        <Button label="Commander" leftIcon={<NewIcon inline color={palette.white} />} variant="primary" />
      </Showcase>
      <Showcase>
        <TimedIcon interval={5000} color={palette.mediumBerryBlue}>
          {icon => <Button label="Tap" leftIcon={icon} variant="flat" />}
        </TimedIcon>
      </Showcase>
      <Showcase>
        <Button
          label="Editer la commande"
          leftIcon={<EditIcon inline color={palette.mediumBerryBlue} />}
          variant="flat"
        />
      </Showcase>
      <Showcase invert>
        <Button
          label="Déconnexion"
          leftIcon={<LogoutIcon color={palette.white} />}
          variant="flat"
          textColor={palette.white}
        />
      </Showcase>
    </>
  ))
  .add('Disabled', () => {
    return (
      <>
        <Showcase>
          <Button label="Commander" rightIcon={<NewIcon inline color={palette.mediumBeetrootPurple} />} disabled />
        </Showcase>
        <Showcase>
          <Button variant="primary" label="Commander" rightIcon={<NewIcon inline color={palette.white} />} disabled />
        </Showcase>
        <Showcase>
          <Button
            variant="flat"
            label="Commander"
            rightIcon={<NewIcon inline color={palette.mediumBerryBlue} />}
            disabled
          />
        </Showcase>
      </>
    )
  })
  .add('Invert disabled', () => {
    return (
      <>
        <Showcase invert>
          <Button invert disabled label="Commander" rightIcon={<NewIcon inline color={palette.white} />} />
        </Showcase>
        <Showcase invert>
          <Button
            invert
            disabled
            variant="primary"
            label="Commander"
            rightIcon={<NewIcon inline color={palette.mediumBeetrootPurple} />}
          />
        </Showcase>
        <Showcase invert>
          <Button
            invert
            disabled
            variant="flat"
            label="Commander"
            rightIcon={<NewIcon inline color={palette.white} />}
          />
        </Showcase>
      </>
    )
  })
  .add('Loading', () => {
    return (
      <>
        <Showcase>
          <Button label="Commander" rightIcon={<NewIcon inline color={palette.mediumBeetrootPurple} />} loading />
        </Showcase>
        <Showcase>
          <Button variant="primary" label="Commander" rightIcon={<NewIcon inline color={palette.white} />} loading />
        </Showcase>
        <Showcase>
          <Button
            variant="flat"
            label="Commander"
            rightIcon={<NewIcon inline color={palette.mediumBerryBlue} />}
            loading
          />
        </Showcase>
      </>
    )
  })
  .add('Invert loading', () => {
    return (
      <>
        <Showcase invert>
          <Button invert loading label="Commander" rightIcon={<NewIcon inline color={palette.white} />} />
        </Showcase>
        <Showcase invert>
          <Button
            invert
            loading
            variant="primary"
            label="Commander"
            rightIcon={<NewIcon inline color={palette.mediumBeetrootPurple} />}
          />
        </Showcase>
        <Showcase invert>
          <Button
            invert
            loading
            variant="flat"
            label="Commander"
            rightIcon={<NewIcon inline color={palette.white} />}
          />
        </Showcase>
      </>
    )
  })
