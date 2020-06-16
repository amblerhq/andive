import React from 'react'
import {storiesOf} from '@storybook/react'
import {DropdownMenu, Info, Button, ZIndexes} from '@ambler/andive'

import Showcase from './showcase'

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

const PrimaryButton = React.forwardRef((props, ref) => <Button ref={ref} variant="primary" small mobile {...props} />)

function DefaultStory() {
  const [value, setValue] = React.useState('')
  const onClick = React.useCallback(id => setValue(id))

  return (
    <Showcase size={600}>
      <div>
        <Info>
          <Info.Label label="Quel est ton artiste préféré ?" />
        </Info>
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
      </div>
    </Showcase>
  )
}

const range = n => [...new Array(n).keys()]

function LongStory({noScroll = false}) {
  const [value, setValue] = React.useState('')
  const onClick = React.useCallback(id => setValue(id))

  return (
    <>
      <Showcase size={600}>
        <div>
          <Info>
            <Info.Label label="Quel est ton artiste préféré ?" />
          </Info>
          <DropdownMenu
            label="Quel est ton artiste préféré ?"
            onClick={onClick}
            valueToString={artistToString}
            value={value}
            noScroll={noScroll}
          >
            {range(42).map(i => {
              return (
                <DropdownMenu.OptionGroup key={i} label={`Groupe ${i}`}>
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
              )
            })}
          </DropdownMenu>
        </div>
      </Showcase>
      <FakeList nth={42} />
    </>
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
          <DropdownMenu.Option id={'PHIL_C'}>
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
  const [loading, setLoading] = React.useState(true)
  const onClick = React.useCallback(id => {
    setLoading(id !== 'PHIL_C')
    setValue(id)
  })

  return (
    <>
      <Info>
        <Info.Block variant="info">
          <Info.Label label="Not choosing phil collins will pass `loading` to the 2nd Dropdown component" />
        </Info.Block>
      </Info>
      <Showcase size={600}>
        <DropdownMenu
          buttonComponent={PrimaryButton}
          label="Quel est ton artiste préféré ?"
          onClick={onClick}
          valueToString={artistToString}
          value={value}
        >
          <DropdownMenu.Option id={'PHIL_C'}>
            <Info>
              <Info.Label label={artistToString('PHIL_C')} />
            </Info>
          </DropdownMenu.Option>
          <DropdownMenu.Option id={'DAFT_P'}>
            <Info>
              <Info.Label label={artistToString('DAFT_P')} />
            </Info>
          </DropdownMenu.Option>
        </DropdownMenu>
        <DropdownMenu
          buttonComponent={PrimaryButton}
          label="Quel est ton artiste préféré ?"
          onClick={onClick}
          valueToString={artistToString}
          value={value}
          loading={loading}
        >
          <DropdownMenu.OptionGroup label="Chanteur">
            <DropdownMenu.Option id={'JUSTICE'}>
              <Info>
                <Info.Label label={artistToString('JUSTICE')} />
              </Info>
            </DropdownMenu.Option>
          </DropdownMenu.OptionGroup>
        </DropdownMenu>
      </Showcase>
    </>
  )
}

function WithOpenVariantLeft() {
  return (
    <Showcase style={{justifyContent: 'flex-end'}}>
      <DropdownMenu
        buttonComponent={PrimaryButton}
        label="Save"
        valueToString={artistToString}
        openVariant={DropdownMenu.OpenVariant.LEFT}
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

function WithOpenVariantUp() {
  return (
    <Showcase>
      <div
        style={{
          height: 72,
          width: '100%',
          position: 'fixed',
          top: 'calc(100% - 72px)',
          left: 0,
          background: '#8EFFC1',
          zIndex: ZIndexes.FIXED
        }}
      >
        <DropdownMenu
          buttonComponent={PrimaryButton}
          bottomFootprint={72}
          label="Save"
          valueToString={artistToString}
          openVariant={DropdownMenu.OpenVariant.UP}
          mobile
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
      </div>
    </Showcase>
  )
}

storiesOf('API|DropdownMenu', module)
  .add('Default', () => <DefaultStory />)
  .add('With many options', () => <LongStory />)
  .add('With many options (no scroll)', () => <LongStory noScroll />)
  .add('With Footer', () => <WithFooterStory />)
  .add('Navigate should scroll to top', () => <ScrollToStory />)
  .add('With disabled options', () => <WithDisabledOptions />)
  .add('With custom button', () => <WithCustomButton />)
  .add('Should not leave viewport', () => <WithOpenVariantLeft />)
  .add('Opening up in a footer', () => <WithOpenVariantUp />)
