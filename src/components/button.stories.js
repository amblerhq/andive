import React, {useState, useEffect} from 'react'
import {storiesOf} from '@storybook/react'

import Button from './button'
import * as palette from '../constants/palette'
import Showcase from '../stories/showcase'

import AmbulanceIcon from './icons/ambulance'
import VslIcon from './icons/vsl'
import BariatricIcon from './icons/bariatric'
import TpmrIcon from './icons/tpmr'

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

  return children(<Icon color={color} inline />)
}

storiesOf('Button', module)
  .add('Default', () => (
    <>
      <Showcase>
        <Button label={'Je suis fan'} />
      </Showcase>
      <Showcase>
        <Button label={'Enregistrer mes changements'} />
      </Showcase>
    </>
  ))
  .add('Primary', () => (
    <Showcase>
      <Button variant="primary" label={'Je suis fan'} />
    </Showcase>
  ))
  .add('Flat', () => {
    return (
      <Showcase>
        <Button variant="flat" label={'Je suis fan'} />
      </Showcase>
    )
  })
  .add('Invert', () => (
    <>
      <Showcase invert>
        <Button invert label={'Je suis fan'} />
      </Showcase>
      <Showcase invert>
        <Button invert variant="primary" label={'Je suis fan'} />
      </Showcase>
      <Showcase invert>
        <Button invert variant="flat" label={'Je suis fan'} />
      </Showcase>
    </>
  ))
  .add('With right icon', () => (
    <>
      <Showcase>
        <TimedIcon color={palette.lightBeetrootPurple}>
          {icon => <Button label={'VSL / Taxi'} rightIcon={icon} />}
        </TimedIcon>
      </Showcase>
      <Showcase>
        <Button label={'Commander'} rightIcon={<AddressIcon inline color={palette.white} />} variant="primary" />
      </Showcase>
      <Showcase>
        <TimedIcon color={palette.berryBlue}>
          {icon => <Button label={'VSL / Taxi'} rightIcon={icon} variant="flat" />}
        </TimedIcon>
      </Showcase>
      <Showcase>
        <Button label={'Nouvelle commande'} rightIcon={<ArrowIcon inline color={palette.berryBlue} />} variant="flat" />
      </Showcase>
    </>
  ))
  .add('With icon left', () => (
    <>
      <Showcase>
        <TimedIcon color={palette.lightBeetrootPurple}>
          {icon => <Button label={'VSL / Taxi'} leftIcon={icon} />}
        </TimedIcon>
      </Showcase>
      <Showcase>
        <Button label={'Commander'} leftIcon={<NewIcon inline color={palette.white} />} variant="primary" />
      </Showcase>
      <Showcase>
        <TimedIcon color={palette.berryBlue}>
          {icon => <Button label={'VSL / Taxi'} leftIcon={icon} variant="flat" />}
        </TimedIcon>
      </Showcase>
      <Showcase>
        <Button label={'Editer la commande'} leftIcon={<EditIcon inline color={palette.berryBlue} />} variant="flat" />
      </Showcase>
      <Showcase invert>
        <Button
          label={'Déconnexion'}
          leftIcon={<LogoutIcon inline color={palette.lightGrey} />}
          variant="flat"
          textColor={palette.lightGrey}
        />
      </Showcase>
    </>
  ))
  .add('As link', () => {
    return (
      <Showcase>
        <Button
          href={'#'}
          variant="link"
          label={'Commander'}
          rightIcon={<NewIcon inline color={palette.berryBlue} />}
        />
      </Showcase>
    )
  })
  .add('Disabled', () => {
    return (
      <>
        <Showcase>
          <Button label={'Commander'} rightIcon={<NewIcon inline color={palette.lightBeetrootPurple} />} disabled />
        </Showcase>
        <Showcase>
          <Button variant="primary" label={'Commander'} rightIcon={<NewIcon inline color={palette.white} />} disabled />
        </Showcase>
        <Showcase>
          <Button
            variant="flat"
            label={'Commander'}
            rightIcon={<NewIcon inline color={palette.berryBlue} />}
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
          <Button invert disabled label={'Commander'} rightIcon={<NewIcon inline color={palette.white} />} />
        </Showcase>
        <Showcase invert>
          <Button
            invert
            disabled
            variant="primary"
            label={'Commander'}
            rightIcon={<NewIcon inline color={palette.lightBeetrootPurple} />}
          />
        </Showcase>
        <Showcase invert>
          <Button
            invert
            disabled
            variant="flat"
            label={'Commander'}
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
          <Button label={'Commander'} rightIcon={<NewIcon inline color={palette.lightBeetrootPurple} />} loading />
        </Showcase>
        <Showcase>
          <Button variant="primary" label={'Commander'} rightIcon={<NewIcon inline color={palette.white} />} loading />
        </Showcase>
        <Showcase>
          <Button variant="flat" label={'Commander'} rightIcon={<NewIcon inline color={palette.berryBlue} />} loading />
        </Showcase>
      </>
    )
  })
  .add('Invert loading', () => {
    return (
      <>
        <Showcase invert>
          <Button invert loading label={'Commander'} rightIcon={<NewIcon inline color={palette.white} />} />
        </Showcase>
        <Showcase invert>
          <Button
            invert
            loading
            variant="primary"
            label={'Commander'}
            rightIcon={<NewIcon inline color={palette.lightBeetrootPurple} />}
          />
        </Showcase>
        <Showcase invert>
          <Button
            invert
            loading
            variant="flat"
            label={'Commander'}
            rightIcon={<NewIcon inline color={palette.white} />}
          />
        </Showcase>
      </>
    )
  })
