import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import range from 'lodash.range'
import styled from 'styled-components'

import Showcase from '../stories/showcase'
import {Body3} from './typography'

import Modal from './modal'
import Button from './button'

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
          <Body3>{i}</Body3>
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

storiesOf('Modal', module).add('Default', () => (
  <>
    <SimpleModal />
    <RandomPageContent />
  </>
))
