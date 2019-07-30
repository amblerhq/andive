import React from 'react'
import {storiesOf} from '@storybook/react'
import range from 'lodash.range'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {Checkbox, CheckboxGroup, DropdownFilter, Typography, palette, RideStatus, Info} from '../index'
import Showcase from '../stories/showcase'

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

const RideStatusCheckboxLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

function RideStatusCheckbox({label, color, ...props}) {
  return (
    <RideStatusCheckboxLayout>
      <RideStatus primary={label} color={color} />
      <Checkbox {...props} />
    </RideStatusCheckboxLayout>
  )
}

RideStatusCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

const ShowcaseFilter = styled(Showcase)`
  justify-content: start;
`

function RideStatusStory() {
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
      <ShowcaseFilter>
        <DropdownFilter label={label} selected={selected} onClear={() => setValues({})}>
          <CheckboxGroup
            value={values}
            onChange={values_ => {
              setValues(values_)
            }}
          >
            <RideStatusCheckbox name="CONFIRMED" label="Réalisé" color={palette.success} />
            <RideStatusCheckbox name="BOOKED" label="Confirmé" color={palette.success} />
            <RideStatusCheckbox name="SUPPORT" label="Incident signalé" color={palette.warning} />
            <RideStatusCheckbox name="WAIT_TPTR_APPROVAL" label="En attente" color={palette.warning} />
            <RideStatusCheckbox name="CANCELED" label="Annulé" color={palette.error} />
            <RideStatusCheckbox name="NORIDE" label="Non réalisé" color={palette.error} />
          </CheckboxGroup>
        </DropdownFilter>
      </ShowcaseFilter>
      <RandomPageContent />
    </>
  )
}

function MobileFilterStory() {
  return (
    <>
      <ShowcaseFilter>
        <DropdownFilter label="23 juin - 4 juil." mobile>
          <Info>
            <Info.Label label="A l'Olympiade" />
          </Info>
        </DropdownFilter>
      </ShowcaseFilter>
      <RandomPageContent />
    </>
  )
}

storiesOf('DropdownFilter', module)
  .add('Ride Status Filter', () => <RideStatusStory />)
  .add('Mobile Filter', () => <MobileFilterStory />)