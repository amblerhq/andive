import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'

import Checkbox from './checkbox'
import Showcase from '../stories/showcase'

function ControlledCheckbox(props) {
  const [value, setValue] = useState(false)

  function onClick() {
    setValue(!value)
  }

  return <Checkbox label="Bariatrique" value={value} onClick={onClick} {...props} />
}

storiesOf('Checkbox', module)
  .add('False', () => (
    <Showcase>
      <Checkbox label="Bariatrique" value={false} style={{background: 'white'}} />
    </Showcase>
  ))
  .add('True', () => (
    <Showcase>
      <Checkbox label="Bariatrique" value={true} style={{background: 'white'}} />
    </Showcase>
  ))
  .add('Controlled', () => (
    <Showcase>
      <ControlledCheckbox style={{background: 'white'}} />
    </Showcase>
  ))
