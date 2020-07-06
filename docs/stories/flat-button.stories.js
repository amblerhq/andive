import React from 'react'
import {storiesOf} from '@storybook/react'
import {FlatButton, MoreIcon, MapIcon} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('Next|FlatButton', module)
  .add('Label only', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton label="Carte" />
        </div>
      </Showcase>
    )
  })
  .add('Icon only', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton icon={<MoreIcon />} />
        </div>
      </Showcase>
    )
  })
  .add('Icon + Label', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton icon={<MapIcon />} label="Carte" />
        </div>
      </Showcase>
    )
  })
  .add('Active', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton icon={<MapIcon />} label="Carte" active />
        </div>
      </Showcase>
    )
  })
  .add('Disabled', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MapIcon />}
            label="Carte"
            disabled
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Reverse + Icon', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton icon={<MapIcon />} label="Carte" reverse />
        </div>
      </Showcase>
    )
  })
