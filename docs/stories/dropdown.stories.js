import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  Info,
  Button,
  ArrowDownIcon,
  Dropdown,
  DropdownBase,
  DropdownComposer,
  Typography,
  MoreIcon,
  TrashIcon,
  EditIcon
} from '@ambler/andive'
import styled from 'styled-components'

import Showcase from './showcase'

function ControlledDropdown() {
  const [value, setValue] = React.useState('')

  return (
    <Dropdown
      value={value}
      onChange={ev => setValue(ev.target.value)}
      label={'Es-tu FOO ?'}
      placeholder={'Choisir'}
      options={['FOO', 'BAR', 'BAZ']}
      optionFormat={opt => (opt === 'FOO' ? 'je suis FOO' : `Je ne suis pas FOO mais ${opt}`)}
      icon={<ArrowDownIcon inline />}
      style={{background: 'white'}}
    />
  )
}

const LargeDropdownBase = styled(DropdownBase)`
  width: 300px;
`

storiesOf('API|Dropdown', module)
  .add('New 👀', () => {
    const Dropdown = ({onClick}) => (
      <LargeDropdownBase oncLick={onClick}>
        <Info>
          <Typography.Body1>Ambulance</Typography.Body1>
          <Typography.Body2>Une ambulance est un véhicule spécialement adapté et aménagé pour...</Typography.Body2>
        </Info>
      </LargeDropdownBase>
    )

    return (
      <>
        <Showcase legend="DropdownBase">
          <Dropdown />
        </Showcase>

        <Showcase legend="DropdownBase controlled">
          <DropdownComposer
            withOverlay
            button={<Button label="Open and spread top-left" variant="filter" invert />}
            dropdown={Dropdown}
            horizontal={DropdownComposer.HorizontalVariant.LEFT}
            vertical={DropdownComposer.VerticalVariant.UP}
          />
          <DropdownComposer
            withOverlay
            button={<Button label="Open and spread top-right" variant="filter" invert />}
            dropdown={Dropdown}
            horizontal={DropdownComposer.HorizontalVariant.RIGHT}
            vertical={DropdownComposer.VerticalVariant.UP}
          />
          <DropdownComposer
            withOverlay
            button={<Button label="Open and spread bottom-left" variant="filter" invert />}
            dropdown={Dropdown}
            horizontal={DropdownComposer.HorizontalVariant.LEFT}
            vertical={DropdownComposer.VerticalVariant.DOWN}
          />
          <DropdownComposer
            withOverlay
            button={<Button label="Open and spread bottom-right" variant="filter" invert />}
            dropdown={Dropdown}
            horizontal={DropdownComposer.HorizontalVariant.RIGHT}
            vertical={DropdownComposer.VerticalVariant.DOWN}
          />
        </Showcase>
        <Showcase legend="More Menu">
          <DropdownComposer
            withOverlay
            button={<Button variant="flat" leftIcon={<MoreIcon />} />}
            vertical={DropdownComposer.VerticalVariant.UP}
            dropdown={({onClick}) => (
              <DropdownBase>
                <Button variant="flat" leftIcon={<EditIcon />} label="Editer" fill onClick={onClick} />
                <Button
                  variant="flat"
                  leftIcon={<TrashIcon />}
                  textColor="red"
                  label="Supprimer"
                  fill
                  onClick={onClick}
                />
              </DropdownBase>
            )}
          />
        </Showcase>
      </>
    )
  })
  .add('Default', () => (
    <Showcase>
      <Dropdown
        label="Aller"
        placeholder="Choisir le type de demande..."
        options={['Prise en charge le...', 'Arrivée au RDV le...']}
        style={{background: 'white'}}
      />
    </Showcase>
  ))
  .add('Empty is an option', () => (
    <Showcase>
      <Dropdown label="Téléphone" placeholder="Aucun" options={['Mobile', 'Fixe', '']} style={{background: 'white'}} />
    </Showcase>
  ))
  .add('Disabled', () => (
    <>
      <Showcase>
        <Dropdown
          label="Aller"
          placeholder="Choisir le type de demande..."
          options={['Prise en charge le...', 'Arrivée au RDV le...']}
          disabled
          style={{background: 'white'}}
        />
      </Showcase>
      <Showcase>
        <Dropdown
          label="Aller"
          placeholder="Choisir le type de demande..."
          options={['Prise en charge le...', 'Arrivée au RDV le...']}
          disabled
          value="Désactivé, mais visible"
          style={{background: 'white'}}
        />
      </Showcase>
    </>
  ))
  .add('With icon', () => (
    <Showcase>
      <Dropdown
        label="Aller"
        placeholder="Choisir le type de demande..."
        options={['Prise en charge le...', 'Arrivée au RDV le...']}
        icon={<ArrowDownIcon inline />}
        style={{background: 'white'}}
      />
    </Showcase>
  ))
  .add('With option format', () => {
    return (
      <Showcase>
        <Dropdown
          label={'Fan ou pas ?'}
          placeholder={'Fais ton choix'}
          options={['0', '1']}
          optionFormat={opt => (opt === '0' ? 'Non' : 'Oui')}
          icon={<ArrowDownIcon inline />}
          style={{background: 'white'}}
        />
      </Showcase>
    )
  })
  .add('Controlled', () => {
    return (
      <Showcase>
        <ControlledDropdown />
      </Showcase>
    )
  })
  .add('Ride Input Like', () => (
    <Showcase>
      <Dropdown
        fullWidth
        label="Aller"
        placeholder="Choisir le type de demande..."
        options={['Prise en charge le...', 'Arrivée au RDV le...']}
        style={{background: 'white'}}
      />
      <Dropdown fullWidth label={'Date'} placeholder={'Date'} options={["Aujourd'hui"]} style={{background: 'white'}} />
      <Dropdown
        fullWidth
        label={'Heure'}
        disabled
        placeholder={'Heure'}
        options={['12:00', '13:00', '14:00', '15:00', '16:00', '17:00']}
        style={{background: 'white'}}
      />
    </Showcase>
  ))
