import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  Accordeon,
  Info,
  Art80Icon,
  PatientIcon,
  QuestionIcon,
  palette,
  Icon,
  Typography,
  AlertIcon
} from '@ambler/andive'

import Showcase from './showcase'

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
storiesOf('API|Accordeon', module)
  .add('Default', () => {
    return (
      <Showcase>
        <div style={{background: 'white'}}>
          <Accordeon label="CERFA n° 11574*04 à fournir au transporteur">
            <Info>
              <Info.Label label="de Phil Colins !" />
            </Info>
          </Accordeon>
        </div>
      </Showcase>
    )
  })
  .add('Uncontrolled', () => {
    const icon = <Art80Icon circle circleColor={palette.mediumBeetrootPurple} />

    return (
      <Showcase>
        <div style={{background: 'white'}}>
          <Accordeon icon={icon} label="CERFA n° 11574*04 à fournir au transporteur">
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
          <Accordeon icon={icon} openByDefault label="T'es fan">
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
        <Accordeon icon={icon} label="Toujours fan" href="https://fr.wikipedia.org/wiki/Phil_Collins" />
      </Showcase>
    )
  })
  .add('With Icon component (icon + subtext)', () => {
    const label = 'Gênes ou douleurs, Patient agité, Surpoids (< 130kg), Fauteuil Roulant pliable, Isolement septique'
    return (
      <Showcase>
        <div style={{background: 'white', width: 500}}>
          <Accordeon
            header={
              <>
                <Typography.Body1>Mme Jeanne</Typography.Body1>
                <Icon icon={<AlertIcon />}>
                  <Typography.Body2 color={palette.secondaryText}>{label}</Typography.Body2>
                </Icon>
              </>
            }
          >
            <Info>
              <Info.Label label="de Phil Colins !" />
            </Info>
          </Accordeon>
        </div>
      </Showcase>
    )
  })
