import React from 'react'
import {storiesOf} from '@storybook/react'
import {Info, Menu} from '@ambler/andive'

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

function DefaultStory() {
  const [instrument, setInstrument] = React.useState(null)

  return (
    <Showcase>
      <div style={{display: 'flex', flexFlow: 'column nowrap', width: 300}}>
        <div style={{padding: 8}}>Picked instrument: {instrument || 'none'}</div>
        <Menu onClick={id => setInstrument(id)}>
          <Menu.Option id="triangle">
            <Info>
              <Info.Label label="Triangle" />
            </Info>
          </Menu.Option>
          <Menu.OptionGroup label="Cuivre">
            <Menu.Option id="trompette">
              <Info>
                <Info.Label label="Trompette" />
              </Info>
            </Menu.Option>
            <Menu.Option id="tuba">
              <Info>
                <Info.Label label="Tuba" />
              </Info>
            </Menu.Option>
            <Menu.Option id="cor">
              <Info>
                <Info.Label label="Cor" />
              </Info>
            </Menu.Option>
            <Menu.Option id="trombone">
              <Info>
                <Info.Label label="Trombone" />
              </Info>
            </Menu.Option>
          </Menu.OptionGroup>
          <Menu.OptionGroup label="Corde">
            <Menu.Option id="guitare">
              <Info>
                <Info.Label label="Guitare" />
              </Info>
            </Menu.Option>
            <Menu.Option id="basse">
              <Info>
                <Info.Label label="Basse" />
              </Info>
            </Menu.Option>
            <Menu.Option id="balalaïka">
              <Info>
                <Info.Label label="Balalaïka" />
              </Info>
            </Menu.Option>
            <Menu.Option id="cithare">
              <Info>
                <Info.Label label="Cithare" />
              </Info>
            </Menu.Option>
          </Menu.OptionGroup>
        </Menu>
      </div>
    </Showcase>
  )
}

function DeepStory() {
  const [depth, setDepth] = React.useState(null)

  return (
    <Showcase>
      <div style={{display: 'flex', flexFlow: 'column nowrap', width: 600}}>
        {typeof depth === 'string' ? (
          <div style={{padding: 8}}>Got to depth {depth}</div>
        ) : (
          <div style={{padding: 8}}>Keep diving !</div>
        )}
        <Menu
          onClick={id => {
            setDepth(id)
          }}
        >
          <Menu.OptionGroup label="Deep">
            <Menu.Option id="0">
              <Info>
                <Info.Label label="Scuba Divers" />
              </Info>
            </Menu.Option>
            <Menu.OptionGroup label="Deeper">
              <Menu.Option id="-1">
                <Info>
                  <Info.Label label="Submarine" />
                </Info>
              </Menu.Option>
              <Menu.OptionGroup label="Deeperer">
                <Menu.Option id="-2">
                  <Info>
                    <Info.Label label="Water" />
                  </Info>
                </Menu.Option>
                <Menu.OptionGroup label="Deepererer">
                  <Menu.Option id="-3">
                    <Info>
                      <Info.Label label="Water" />
                    </Info>
                  </Menu.Option>
                  <Menu.OptionGroup label="Too Deep">
                    <Menu.Option id="-4">
                      <Info>
                        <Info.Label label="Wierd Fishs" />
                      </Info>
                    </Menu.Option>
                    <Menu.OptionGroup label="Bottom deep">
                      <Menu.Option id="-5">
                        <Info>
                          <Info.Label label="Mariana Trench" />
                        </Info>
                      </Menu.Option>
                    </Menu.OptionGroup>
                  </Menu.OptionGroup>
                </Menu.OptionGroup>
              </Menu.OptionGroup>
            </Menu.OptionGroup>
          </Menu.OptionGroup>
        </Menu>
      </div>
    </Showcase>
  )
}

function ScrollToStory() {
  return (
    <>
      <Showcase>
        <Menu onClick={() => {}}>
          {[...new Array(10).keys()].map(i => {
            return (
              <Menu.Option key={i} id={`padding-${i}`}>
                <Info>
                  <Info.Label label={String(i)} />
                </Info>
              </Menu.Option>
            )
          })}

          <Menu.OptionGroup label="Should scroll">
            <Menu.Option id="A">
              <Info>
                <Info.Label label="A" />
              </Info>
            </Menu.Option>
            <Menu.Option id="B">
              <Info>
                <Info.Label label="B" />
              </Info>
            </Menu.Option>
          </Menu.OptionGroup>
        </Menu>
      </Showcase>
      <FakeList nth={5} />
    </>
  )
}

storiesOf('API|Menu', module)
  .add('Default', () => <DefaultStory />)
  .add('Deep', () => <DeepStory />)
  .add('OptionGroup navigate trigger scrollTo', () => <ScrollToStory />)
