import React from 'react'
import {storiesOf} from '@storybook/react'

import {Accordeon, Info, palette, Art80Icon, PatientIcon} from '..'
import Showcase from './showcase'
import QuestionIcon from '../components/icons/question'

function ControlledStory() {
  const icon = <Art80Icon circle circleColor={palette.mediumBeetrootPurple} />
  const [open, setToggle] = React.useState(false)

  return (
    <Showcase>
      <div style={{background: 'white'}}>
        <Accordeon
          open={open}
          onToggle={() => setToggle(prev => !prev)}
          icon={icon}
          iconSize={32}
          label="CERFA n° 11574*04 à fournir au transporteur"
        >
          <Info>
            <Info.Label label="de Phil Colins !" />
          </Info>
        </Accordeon>
      </div>
      <div style={{padding: 8}}>{open ? 'Is open 👍' : 'Is closed 👎'}</div>
    </Showcase>
  )
}

storiesOf('Accordeon', module)
  .add('Uncontrolled', () => {
    const icon = <Art80Icon circle circleColor={palette.mediumBeetrootPurple} />

    return (
      <Showcase>
        <div style={{background: 'white'}}>
          <Accordeon icon={icon} iconSize={32} label="CERFA n° 11574*04 à fournir au transporteur">
            <Info>
              <Info.Label label="de Phil Colins !" />
            </Info>
          </Accordeon>
        </div>
      </Showcase>
    )
  })
  .add('Controlled', () => <ControlledStory />)
  .add('Open by default', () => {
    const icon = <PatientIcon circle circleColor={palette.mediumBeetrootPurple} color="white" />

    return (
      <Showcase>
        <div style={{background: 'white'}}>
          <Accordeon icon={icon} iconSize={32} openByDefault label="T'es fan">
            <Info>
              <Info.Label label="de Phil Colins !" />
            </Info>
          </Accordeon>
        </div>
      </Showcase>
    )
  })
  .add('As link', () => {
    const icon = <QuestionIcon circle color={palette.darkPrimary} />

    return (
      <Showcase>
        <div style={{background: 'white'}}>
          <Accordeon icon={icon} iconSize={32} label="Toujours fan" href="https://fr.wikipedia.org/wiki/Phil_Collins" />
        </div>
      </Showcase>
    )
  })
