import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  Info,
  VslIcon,
  AlertIcon,
  Typography,
  Box,
  Icon,
  palette,
  AmbulanceIcon,
  MedicalFacilityIcon,
  Art80Icon
} from '@ambler/andive'

import Showcase from './showcase'

const shortLabel = 'Fan de Phil Collins'
const longLabel =
  'Philip David Charles Collins dit Phil Collins, né le 30 janvier 1951 à Chiswick (Londres), est un musicien, auteur-compositeur-interprète, acteur et producteur de disques britannique.'

storiesOf('API|Icon', module)
  .add(`How it's built`, () => {
    return (
      <>
        <Showcase legend="2 Body">
          <Box style={{background: 'white', width: 300}}>
            <Icon icon={<AmbulanceIcon circle />}>
              <Box>
                <Typography.Body1 color={palette.mediumBerryBlue}>Transporter name</Typography.Body1>
                <Typography.Body2 color={palette.secondaryText}>06 61 65 23 86</Typography.Body2>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="2 Body (overflown)">
          <Box style={{background: 'white', width: 200}}>
            <Icon icon={<AmbulanceIcon circle />}>
              <Box>
                <Typography.Body1 color={palette.mediumBerryBlue}>Transporter name</Typography.Body1>
                <Typography.Body2 color={palette.secondaryText}>06 61 65 23 86</Typography.Body2>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Intermediate MT (BO)">
          <Box style={{background: 'white', width: 300}}>
            <Icon icon={<AmbulanceIcon circle />}>
              <Box>
                <Typography.Body1 color={palette.mediumBerryBlue}>Intermediate Name</Typography.Body1>
                <Typography.Body2 color={palette.secondaryText}>06 61 65 23 86</Typography.Body2>
              </Box>
            </Icon>
            <Icon icon={<AmbulanceIcon circle />}>
              <Box>
                <Typography.Body1 color={palette.mediumBerryBlue}>Assigned name</Typography.Body1>
                <Typography.Body2 color={palette.secondaryText}>06 61 65 23 86</Typography.Body2>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Intermediate MT (BO) (overflown)">
          <Box style={{background: 'white', width: 200}}>
            <Icon icon={<AmbulanceIcon circle />}>
              <Box>
                <Typography.Body1 color={palette.mediumBerryBlue}>Intermediate Name</Typography.Body1>
                <Typography.Body2 color={palette.secondaryText}>06 61 65 23 86</Typography.Body2>
              </Box>
            </Icon>
            <Icon icon={<AmbulanceIcon circle />}>
              <Box>
                <Typography.Body1 color={palette.mediumBerryBlue}>Assigned name</Typography.Body1>
                <Typography.Body2 color={palette.secondaryText}>06 61 65 23 86</Typography.Body2>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="1 Body">
          <Box style={{background: 'white', width: 300}}>
            <Icon icon={<AmbulanceIcon circle />}>
              <Box>
                <Typography.Body1>M Jean POOLING</Typography.Body1>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="1 Body (overflown)">
          <Box style={{background: 'white', width: 200}}>
            <Icon icon={<AmbulanceIcon circle />}>
              <Box>
                <Typography.Body1>M Jean POOLING</Typography.Body1>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Examples">
          <Box style={{background: 'white', width: 300}}>
            <Icon icon={<AmbulanceIcon circle />}>
              <Box>
                <Typography.Body1 color={palette.mediumBerryBlue}>AMBULANCES RAYER SARL</Typography.Body1>
                <Typography.Body2 color={palette.secondaryText}>06 61 65 23 86</Typography.Body2>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Examples">
          <Box style={{background: 'white', width: 300}}>
            <Icon icon={<MedicalFacilityIcon circle />}>
              <Box>
                <Typography.Body1 color={palette.mediumBerryBlue}>Clinique les Tournelles</Typography.Body1>
                <Typography.Body2 color={palette.secondaryText}>01 41 24 32 74</Typography.Body2>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Examples">
          <Box style={{background: 'white', width: 600}}>
            <Icon icon={<Art80Icon circle circleColor={palette.mediumBeetrootPurple} />}>
              <Box>
                <Typography.Body1>Vous n’êtes pas prescripteur</Typography.Body1>
                <Typography.Body2 color={palette.secondaryText}>
                  Ce trajet est à la charge de l’autre établissement
                </Typography.Body2>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Examples">
          <Box style={{background: 'white', width: 600}}>
            <Icon icon={<Art80Icon circle circleColor={palette.mediumBeetrootPurple} />}>
              <Box>
                <Typography.Body1>PMT Art80 à fournir au transporteur</Typography.Body1>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Examples">
          <Box style={{background: 'white', width: 600}}>
            <Icon icon={<Art80Icon circle circleColor={palette.mediumBeetrootPurple} />}>
              <Box>
                <Typography.Body1>Transport facturable à votre établissement</Typography.Body1>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Examples">
          <Box style={{background: 'white', width: 300}}>
            <Icon icon={<AmbulanceIcon circle />}>
              <Box>
                <Typography.Body1 color={palette.mediumBerryBlue}>AMBULANCES RAYER SARL</Typography.Body1>
                <Typography.Body2 color={palette.secondaryText}>06 61 65 23 86</Typography.Body2>
              </Box>
            </Icon>
            <Icon icon={<AmbulanceIcon circle />}>
              <Box>
                <Typography.Body1 color={palette.mediumBerryBlue}>AMBULANCES FRANCILIENNES</Typography.Body1>
                <Typography.Body2 color={palette.secondaryText}>01 34 28 03 85</Typography.Body2>
              </Box>
            </Icon>
          </Box>
        </Showcase>
      </>
    )
  })

  .add('Icon with label', () => {
    return (
      <>
        <Showcase legend="Icon with label (children as string)">
          <Box style={{background: 'white', width: 300}}>
            <Icon icon={<VslIcon inline />}>
              <Box>{shortLabel}</Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Icon with label (children as react node)">
          <Box style={{background: 'white', width: 300}}>
            <Icon icon={<VslIcon inline />}>
              <Box>
                <Typography.Body1>Voiture de Phil</Typography.Body1>
              </Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Icon with boxed label">
          <Box style={{background: 'white', width: 300}}>
            <Icon icon={<VslIcon circle />}>
              <Box>{shortLabel}</Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Icon with boxed label">
          <Box style={{background: 'white', width: 300}}>
            <Icon icon={<VslIcon circle />}>
              <Box>{longLabel}</Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Icon with title and label (fixed iconSize 22 and padding 0)">
          <Box style={{background: 'white', width: 300}}>
            <Info.Item item={shortLabel} />
            <Icon icon={<AlertIcon inline />}>
              <Box>{shortLabel}</Box>
            </Icon>
          </Box>
        </Showcase>
        <Showcase legend="Icon with title and long label (fixed iconSize 22 and padding 0)">
          <Box style={{background: 'white', width: 300}}>
            <Info.Item item={shortLabel} />
            <Icon icon={<AlertIcon inline />}>
              <Box>{longLabel}</Box>
            </Icon>
          </Box>
        </Showcase>
      </>
    )
  })
