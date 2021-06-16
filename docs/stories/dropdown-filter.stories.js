import React from 'react'
import PropTypes from 'prop-types'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'
import range from 'lodash.range'
import {Checkbox, CheckboxGroup, DropdownFilter, Typography, palette, Info, FlatButton, Status} from '@ambler/andive'

import Showcase from './showcase'

function RandomPageContent() {
  return (
    <>
      {range(42).map(i => (
        <Showcase key={i} variant="compact">
          <Typography.Body2 color={palette.mediumGrey}>{i}</Typography.Body2>
        </Showcase>
      ))}
    </>
  )
}

const StatusCheckboxLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 8px 8px 8px 16px;
`

function StatusCheckbox({label, color, backgroundColor, ...props}) {
  return (
    <>
      <StatusCheckboxLayout>
        <Status primary={label} color={color} backgroundColor={backgroundColor} />
        <Checkbox {...props} />
      </StatusCheckboxLayout>
    </>
  )
}

StatusCheckbox.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
}

const ShowcaseFilter = styled(Showcase)`
  justify-content: start;
`

const DropdownContent = styled.div`
  width: 320px;
`
const DropdownSmallContent = styled.div`
  width: 220px;
`

function StatusFilterStory() {
  const [values, setValues] = React.useState({CONFIRMED: true})
  const selectedValues = Object.keys(values).filter(key => values[key])
  const selected = selectedValues.length > 0
  const label = selected
    ? selectedValues.length === 1
      ? selectedValues[0]
      : `Statuts (${selectedValues.length})`
    : 'Filtrer par statuts'

  return (
    <>
      <ShowcaseFilter legend="Status Filter Desktop">
        <DropdownFilter
          label={label}
          selected={selected}
          title="Filtrer par statut"
          onClear={() => setValues({})}
          onSave={() => null}
        >
          <DropdownContent>
            <CheckboxGroup
              value={values}
              onChange={values_ => {
                setValues(values_)
              }}
            >
              <StatusCheckbox
                name="CONFIRMED"
                label="Réalisé"
                color={palette.darkLettuceGreen}
                backgroundColor={palette.lightLettuceGreen}
              />
              <StatusCheckbox
                name="WAIT_TPTR_APPROVAL"
                label="En attente"
                color={palette.darkPotatoYellow}
                backgroundColor={palette.lightPotatoYellow}
              />
              <StatusCheckbox
                name="BOOKED"
                label="Confirmé"
                color={palette.darkLettuceGreen}
                backgroundColor={palette.lightLettuceGreen}
              />
              <StatusCheckbox
                name="SUPPORT"
                label="Incident signalé"
                color={palette.darkPotatoYellow}
                backgroundColor={palette.lightPotatoYellow}
              />
              <StatusCheckbox
                name="NORIDE"
                label="Non réalisé"
                color={palette.darkRadishRed}
                backgroundColor={palette.lightRadishRed}
              />
            </CheckboxGroup>
          </DropdownContent>
        </DropdownFilter>
      </ShowcaseFilter>
      <ShowcaseFilter legend="Status Filter Mobile">
        <DropdownFilter
          label={label}
          selected={selected}
          onClear={() => setValues({})}
          title="Filtrer par statut"
          onSave={() => null}
          mobile
        >
          <CheckboxGroup
            value={values}
            onChange={values_ => {
              setValues(values_)
            }}
          >
            <StatusCheckbox
              name="CONFIRMED"
              label="Réalisé"
              color={palette.darkLettuceGreen}
              backgroundColor={palette.lightLettuceGreen}
            />
            <StatusCheckbox
              name="WAIT_TPTR_APPROVAL"
              label="En attente"
              color={palette.darkPotatoYellow}
              backgroundColor={palette.lightPotatoYellow}
            />
            <StatusCheckbox
              name="BOOKED"
              label="Confirmé"
              color={palette.darkLettuceGreen}
              backgroundColor={palette.lightLettuceGreen}
            />
            <StatusCheckbox
              name="SUPPORT"
              label="Incident signalé"
              color={palette.darkPotatoYellow}
              backgroundColor={palette.lightPotatoYellow}
            />
            <StatusCheckbox
              name="NORIDE"
              label="Non réalisé"
              color={palette.darkRadishRed}
              backgroundColor={palette.lightRadishRed}
            />
          </CheckboxGroup>
        </DropdownFilter>
      </ShowcaseFilter>
      <RandomPageContent />
    </>
  )
}

function BasicFilterStory() {
  return (
    <>
      <ShowcaseFilter legend="Basic Filter Desktop" invert>
        <DropdownFilter label="23 juin - 4 juil." title="Title">
          <DropdownSmallContent>
            <Info>
              <Info.Label label="A l'Olympiade" />
            </Info>
          </DropdownSmallContent>
        </DropdownFilter>
      </ShowcaseFilter>
      <ShowcaseFilter legend="Basic Filter Mobile" invert>
        <DropdownFilter label="23 juin - 4 juil." title="Title" mobile>
          <Info>
            <Info.Label label="A l'Olympiade" />
          </Info>
        </DropdownFilter>
      </ShowcaseFilter>
      <RandomPageContent />
    </>
  )
}

function SideFilterStory() {
  return (
    <>
      <ShowcaseFilter legend="Open Right (default)" invert>
        <DropdownFilter label="23 juin - 4 juil." openRight onClear={() => null} onSave={() => null}>
          <Info>
            <Info.Label label="A l'Olympiade" />
          </Info>
        </DropdownFilter>
      </ShowcaseFilter>
      <ShowcaseFilter legend="Open Left" invert style={{justifyContent: 'flex-end'}}>
        <DropdownFilter label="23 juin - 4 juil." openLeft onClear={() => null} onSave={() => null}>
          <Info>
            <Info.Label label="A l'Olympiade" />
          </Info>
        </DropdownFilter>
      </ShowcaseFilter>
      <RandomPageContent />
    </>
  )
}

function RenderPropsWithCloseStory() {
  return (
    <>
      <ShowcaseFilter invert>
        <DropdownFilter label="23 juin - 4 juil.">
          {({close}) => <FlatButton label={'Fermer'} onClick={() => close()} />}
        </DropdownFilter>
      </ShowcaseFilter>
      <RandomPageContent />
    </>
  )
}

function ActionsFilterStory() {
  return (
    <>
      <ShowcaseFilter legend="Close Desktop" invert>
        <DropdownFilter label="23 juin - 4 juil.">
          {({close}) => <FlatButton label={'Fermer'} onClick={() => close()} />}
        </DropdownFilter>
      </ShowcaseFilter>
      <ShowcaseFilter legend="Close Mobile" invert>
        <DropdownFilter label="23 juin - 4 juil." mobile />
      </ShowcaseFilter>
      <RandomPageContent />
      <ShowcaseFilter legend="Clear Filter Desktop" invert>
        <DropdownFilter label="23 juin - 4 juil." title="Title" onClear={() => null}>
          <DropdownSmallContent>
            <Info>
              <Info.Label label="A l'Olympiade" />
            </Info>
          </DropdownSmallContent>
        </DropdownFilter>
      </ShowcaseFilter>
      <ShowcaseFilter legend="Clear Filter Mobile" invert>
        <DropdownFilter label="23 juin - 4 juil." title="Title" onClear={() => null} mobile>
          <Info>
            <Info.Label label="A l'Olympiade" />
          </Info>
        </DropdownFilter>
      </ShowcaseFilter>
      <ShowcaseFilter legend="Save Filter Desktop" invert>
        <DropdownFilter label="23 juin - 4 juil." title="Title" onSave={() => null}>
          <DropdownSmallContent>
            <Info>
              <Info.Label label="A l'Olympiade" />
            </Info>
          </DropdownSmallContent>
        </DropdownFilter>
      </ShowcaseFilter>
      <ShowcaseFilter legend="Save Filter Mobile" invert>
        <DropdownFilter label="23 juin - 4 juil." title="Title" onSave={() => null} mobile>
          <Info>
            <Info.Label label="A l'Olympiade" />
          </Info>
        </DropdownFilter>
      </ShowcaseFilter>
      <ShowcaseFilter legend="Clear and Save Filter Desktop" invert>
        <DropdownFilter label="23 juin - 4 juil." title="Title" onSave={() => null} onClear={() => null}>
          <DropdownSmallContent>
            <Info>
              <Info.Label label="A l'Olympiade" />
            </Info>
          </DropdownSmallContent>
        </DropdownFilter>
      </ShowcaseFilter>
      <ShowcaseFilter legend="Clear and Save Filter Mobile" invert>
        <DropdownFilter label="23 juin - 4 juil." title="Title" onSave={() => null} onClear={() => null} mobile>
          <Info>
            <Info.Label label="A l'Olympiade" />
          </Info>
        </DropdownFilter>
      </ShowcaseFilter>
      <RandomPageContent />
    </>
  )
}

storiesOf('API|DropdownFilter', module)
  .add('Basic Filter', () => <BasicFilterStory />)
  .add('Status Filter', () => <StatusFilterStory />)
  .add('Side Filter', () => <SideFilterStory />)
  .add('Actions Filter', () => <ActionsFilterStory />)
