import React from 'react'
import {storiesOf} from '@storybook/react'

import {ZIndexes} from '../constants/enum'
import Showcase from './showcase'
import {DropdownMenu, Info, Button} from '..'

const FakeList = ({nth}) =>
  [...new Array(nth).keys()].map(i => {
    return (
      <div
        key={i}
        style={{
          height: 64,
          margin: 8,
          background: '#eee',
          borderRadius: 8
        }}
      />
    )
  })

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

function WithFooterStory() {
  const [value, setValue] = React.useState('')
  const onClick = React.useCallback(id => setValue(id))

  return (
    <Showcase size={600}>
      <DropdownMenu
        label="Quel est ton artiste préféré ?"
        onClick={onClick}
        valueToString={artistToString}
        value={value}
        bottomFootprint={80}
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
      <div
        style={{
          height: 72,
          width: '100%',
          position: 'fixed',
          top: 'calc(100% - 72px)',
          left: 0,
          background: '#4404',
          zIndex: ZIndexes.FIXED
        }}
      />
    </Showcase>
  )
}

function ScrollToStory() {
  return (
    <>
      <Showcase size={600}>
        <DropdownMenu
          label="Quel est ton artiste préféré ?"
          onClick={() => {}}
          valueToString={artistToString}
          bottomFootprint={80}
        >
          <DropdownMenu.Option id={'DAFT_P'}>
            <Info>
              <Info.Label label={artistToString('DAFT_P')} />
            </Info>
          </DropdownMenu.Option>
          <DropdownMenu.Option id={'DAFT_P'}>
            <Info>
              <Info.Label label={artistToString('DAFT_P')} />
            </Info>
          </DropdownMenu.Option>
          <DropdownMenu.Option id={'DAFT_P'}>
            <Info>
              <Info.Label label={artistToString('DAFT_P')} />
            </Info>
          </DropdownMenu.Option>
          <DropdownMenu.Option id={'DAFT_P'}>
            <Info>
              <Info.Label label={artistToString('DAFT_P')} />
            </Info>
          </DropdownMenu.Option>
          <DropdownMenu.OptionGroup label="Groupe">
            <DropdownMenu.Option id={'JUSTICE'}>
              <Info>
                <Info.Label label={artistToString('JUSTICE')} />
              </Info>
            </DropdownMenu.Option>
          </DropdownMenu.OptionGroup>
        </DropdownMenu>
        <div
          style={{
            height: 72,
            width: '100%',
            position: 'fixed',
            top: 'calc(100% - 72px)',
            left: 0,
            background: '#4404',
            zIndex: ZIndexes.FIXED
          }}
        />
      </Showcase>
      <FakeList nth={5} />
    </>
  )
}

function WithDisabledOptions() {
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
          <DropdownMenu.Option disabled id={'PHIL_C'}>
            <Info>
              <Info.Label label={artistToString('PHIL_C')} />
            </Info>
          </DropdownMenu.Option>
          <DropdownMenu.Option disabled id={'CHARLES_A'}>
            <Info>
              <Info.Label label={artistToString('CHARLES_A')} />
            </Info>
          </DropdownMenu.Option>
        </DropdownMenu.OptionGroup>
        <DropdownMenu.OptionGroup label="Groupe">
          <DropdownMenu.Option disabled id={'DAFT_P'}>
            <Info>
              <Info.Label label={artistToString('DAFT_P')} />
            </Info>
          </DropdownMenu.Option>
          <DropdownMenu.Option disabled id={'JUSTICE'}>
            <Info>
              <Info.Label label={artistToString('JUSTICE')} />
            </Info>
          </DropdownMenu.Option>
        </DropdownMenu.OptionGroup>
      </DropdownMenu>
    </Showcase>
  )
}

function WithCustomButton() {
  const [value, setValue] = React.useState('')
  const onClick = React.useCallback(id => setValue(id))

  return (
    <Showcase size={600}>
      <DropdownMenu
        buttonComponent={props => <Button variant="flat" {...props} />}
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

storiesOf('DropdownMenu', module)
  .add('Default', () => <DefaultStory />)
  .add('With Footer', () => <WithFooterStory />)
  .add('Navigate should scroll to top', () => <ScrollToStory />)
  .add('With disabled options', () => <WithDisabledOptions />)
  .add('With custom button', () => <WithCustomButton />)
