import React from 'react'
import {storiesOf} from '@storybook/react'
import {FlatButton, MoreIcon, MapIcon, TrashIcon, palette} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('Next|FlatButton', module)
  .addParameters({component: FlatButton})
  .add('Label only', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            label="Carte"
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Icon only', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MoreIcon />}
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Icon + Label', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MapIcon />}
            label="Carte"
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Active', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MapIcon />}
            label="Carte"
            active
            onClick={() => {
              alert('On click triggered')
            }}
          />
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
          <FlatButton
            icon={<MapIcon />}
            label="Carte"
            reverse
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Loading', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MapIcon />}
            label="Carte"
            loading
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Color', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<TrashIcon />}
            label="Supprimer"
            color={palette.error}
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
