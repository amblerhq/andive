import React from 'react'
import {storiesOf} from '@storybook/react'
import Showcase from '../stories/showcase'

import DropdownMenu from './dropdown-menu'
import Info from './info'

function artistToString(artistType) {
  switch (artistType) {
    case 'PHIL_C':
      return 'Phil Collins'
    case 'DAFT_P':
      return 'Daft Punk'
    case 'CHARLES_A':
      return 'Charles Aznavour'
    case 'JUSTICE':
      return 'Justice'
    default:
      return 'Jean Undefined'
  }
}

function DefaultStory() {
  const [value, setValue] = React.useState('')
  const onClick = React.useCallback(id => setValue(id))

  return (
    <Showcase size={600}>
      <DropdownMenu
        label="Quel est ton artiste préféré ?"
        onClick={onClick}
        valueToString={artistToString}
        value={value}
      >
        <DropdownMenu.OptionGroup label="Chanteur">
          <DropdownMenu.Option id={'PHIL_C'}>
            <Info>
              <Info.Label label={artistToString('PHIL_C')} />
            </Info>
          </DropdownMenu.Option>
          <DropdownMenu.Option id={'CHARLES_A'}>
            <Info>
              <Info.Label label={artistToString('CHARLES_A')} />
            </Info>
          </DropdownMenu.Option>
        </DropdownMenu.OptionGroup>
        <DropdownMenu.OptionGroup label="Groupe">
          <DropdownMenu.Option id={'DAFT_P'}>
            <Info>
              <Info.Label label={artistToString('DAFT_P')} />
            </Info>
          </DropdownMenu.Option>
          <DropdownMenu.Option id={'JUSTICE'}>
            <Info>
              <Info.Label label={artistToString('JUSTICE')} />
            </Info>
          </DropdownMenu.Option>
        </DropdownMenu.OptionGroup>
      </DropdownMenu>
    </Showcase>
  )
}

storiesOf('DropdownMenu', module).add('Default', () => <DefaultStory />)
