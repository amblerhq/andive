import React from 'react'
import {storiesOf} from '@storybook/react'

import Showcase from '../stories/showcase'
import AmbulanceIcon from './icons/ambulance'
import Button from './button'
import ToastContainer, {toastInfo, toastSuccess, toastError, initializeQueue} from './toast'

storiesOf('Toast', module)
  .addDecorator(storyFn => {
    initializeQueue()
    return (
      <>
        <ToastContainer />
        {storyFn()}
      </>
    )
  })
  .add('Info', () => (
    <Showcase>
      <Button onClick={() => toastInfo('Je suis fan')} label="Click me" />
    </Showcase>
  ))
  .add('Success', () => (
    <Showcase>
      <Button onClick={() => toastSuccess('Je suis fan')} label="Click me" />
    </Showcase>
  ))
  .add('Error', () => (
    <Showcase>
      <Button onClick={() => toastError('Je suis fan')} label="Click me" />
    </Showcase>
  ))
  .add('With icon', () => (
    <Showcase>
      <Button onClick={() => toastError('Je suis fan', <AmbulanceIcon color={'white'} />)} label="Click me" />
    </Showcase>
  ))
