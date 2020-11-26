import React from 'react'
import {storiesOf} from '@storybook/react'
import {FilterButton, palette, MoreIcon} from '@ambler/andive'
import styled from 'styled-components'

import Showcase from './showcase'

const Container = styled.div`
  background-color: ${({backgroundColor}) => backgroundColor || palette.white};
  width: 300px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`

storiesOf('Next|FilterButton', module)
  .addParameters({component: FilterButton})
  .add('With label', () => {
    return (
      <Showcase>
        <Container>
          <FilterButton
            label="Filtrer"
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </Container>
      </Showcase>
    )
  })
  .add('Active', () => {
    return (
      <Showcase>
        <Container>
          <FilterButton
            label="Options (2)"
            active
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </Container>
      </Showcase>
    )
  })
  .add('Icon only', () => {
    return (
      <Showcase>
        <Container>
          <FilterButton
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </Container>
      </Showcase>
    )
  })
  .add('With custom icon', () => {
    return (
      <Showcase>
        <Container>
          <FilterButton
            icon={<MoreIcon />}
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </Container>
      </Showcase>
    )
  })
  .add('With no icon', () => {
    return (
      <Showcase>
        <Container>
          <FilterButton
            icon={null}
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </Container>
      </Showcase>
    )
  })
  .add('Custom colors', () => {
    return (
      <Showcase>
        <Container backgroundColor={palette.mediumGrey}>
          <FilterButton
            label="Filtrer"
            backgroundColor={palette.white}
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </Container>
      </Showcase>
    )
  })
