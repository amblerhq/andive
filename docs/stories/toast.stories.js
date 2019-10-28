import React from 'react'
import {storiesOf} from '@storybook/react'
import {AmbulanceIcon, Button, Toast, toastInfo, toastSuccess, toastError} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('API|Toast', module)
  .addDecorator(storyFn => {
    return (
      <>
        <Toast />
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
