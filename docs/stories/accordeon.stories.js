import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'
import {
  Accordeon,
  Info,
  Art80Icon,
  PatientIcon,
  QuestionIcon,
  palette,
  Typography,
  AlertIcon,
  HSpace,
  Box,
  Icon
} from '@ambler/andive'

import Showcase from './showcase'

const FlexBox = styled(Box)`
  display: flex;
`

storiesOf('API|Accordeon', module)
  .add('Default', () => {
    return (
      <Showcase>
        <div style={{background: 'white'}}>
          <Accordeon
            header={
              <Box>
                <Typography.Body1>CERFA n° 11574*04 à fournir au transporteur</Typography.Body1>
              </Box>
            }
          >
            <Box>
              <Typography.Body1>de Phil Colins !</Typography.Body1>
            </Box>
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
          <Accordeon
            header={
              <Icon icon={icon}>
                <Typography.Body1>CERFA n° 11574*04 à fournir au transporteur</Typography.Body1>
              </Icon>
            }
          >
            <Box>
              <Typography.Body1>de Phil Colins !</Typography.Body1>
            </Box>
          </Accordeon>
        </div>
      </Showcase>
    )
  })
  .add('Controlled', () => {
    const icon = <Art80Icon circle circleColor={palette.mediumBeetrootPurple} />
    const [open, setToggle] = React.useState(false)

    return (
      <>
        <Showcase>
          <div style={{background: 'white'}}>
            <Accordeon
              open={open}
              onToggle={() => setToggle(prev => !prev)}
              header={
                <Icon icon={icon}>
                  <Typography.Body1>CERFA n° 11574*04 à fournir au transporteur</Typography.Body1>
                </Icon>
              }
            >
              <Box>
                <Typography.Body1>de Phil Colins !</Typography.Body1>
              </Box>
            </Accordeon>
          </div>
        </Showcase>
        <div style={{padding: 8}}>{open ? 'Is open 👍' : 'Is closed 👎'}</div>
      </>
    )
  })
  .add('Open by default', () => {
    const icon = <PatientIcon circle circleColor={palette.mediumBeetrootPurple} color="white" />

    return (
      <Showcase>
        <div style={{background: 'white'}}>
          <Accordeon
            openByDefault
            header={
              <Icon icon={icon}>
                <Typography.Body1>T&apos;es un fan</Typography.Body1>
              </Icon>
            }
          >
            <Box>
              <Typography.Body1>de Phil Colins !</Typography.Body1>
            </Box>
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
    const label = 'Atchoum, Dormeur, Grincheux, Joyeux, Prof, Simplet, Timide'
    return (
      <Showcase>
        <div style={{background: 'white', width: 500}}>
          <Accordeon
            header={
              <>
                <Box>
                  <Typography.Body1>Mme Blanche NEIGE</Typography.Body1>
                </Box>
                <FlexBox>
                  <AlertIcon />
                  <HSpace px={8} />
                  <Typography.Body2 color={palette.secondaryText}>{label}</Typography.Body2>
                </FlexBox>
              </>
            }
          >
            <Box>
              <Typography.Body1>et les septs nains</Typography.Body1>
            </Box>
          </Accordeon>
        </div>
      </Showcase>
    )
  })
