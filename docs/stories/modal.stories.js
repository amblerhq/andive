import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import range from 'lodash.range'
import styled from 'styled-components'
import {Typography, Modal, Button, palette} from '@ambler/andive'

import Showcase from './showcase'

const Center = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`

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

const SimpleModal = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Showcase>
        <Button label="Click me" onClick={() => setShow(true)} />
      </Showcase>
      <Modal show={show}>
        <Center>
          <Button invert label="Close me" onClick={() => setShow(false)} />
        </Center>
      </Modal>
    </>
  )
}

storiesOf('API|Modal', module).add('Default', () => (
  <>
    <SimpleModal />
    <RandomPageContent />
  </>
))
