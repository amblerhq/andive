import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import range from 'lodash.range'
import styled from 'styled-components'
import {Typography, Modal, Button, palette, Info, VSpace} from '@ambler/andive'

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

const TransparentModal = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Showcase>
        <Button label="Click me" onClick={() => setShow(true)} />
      </Showcase>
      <Modal show={show} onClose={() => setShow(false)} transparent>
        <Info>
          <Typography.H1>Retirer Phil Collins de ...</Typography.H1>
        </Info>
        <VSpace $px={16} />
        <Button label="Aller et 1er Retour" variant="primary" onClick={() => setShow(false)} />
        <VSpace $px={8} />
        <Button label="1er Retour" variant="primary" onClick={() => setShow(false)} />
      </Modal>
    </>
  )
}

storiesOf('API|Modal', module)
  .add('Default', () => (
    <>
      <SimpleModal />
      <RandomPageContent />
    </>
  ))
  .add('Transparent', () => (
    <>
      <TransparentModal />
      <RandomPageContent />
    </>
  ))
