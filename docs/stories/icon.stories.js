import React from 'react'
import {storiesOf} from '@storybook/react'
import {Info, VslIcon, AlertIcon, Typography, Box, Icon} from '@ambler/andive'

import Showcase from './showcase'

const shortLabel = 'Fan de Phil Collins'
const longLabel =
  'Philip David Charles Collins dit Phil Collins, né le 30 janvier 1951 à Chiswick (Londres), est un musicien, auteur-compositeur-interprète, acteur et producteur de disques britannique.'

storiesOf('API|Icon', module).add('Icon with children', () => {
  return (
    <>
      <Showcase legend="Label with icon (children as string)">
        <Info style={{background: 'white'}}>
          <Icon icon={<VslIcon inline />}>Voiture de Phil</Icon>
        </Info>
      </Showcase>
      <Showcase legend="Label with icon (children as react node)">
        <Info style={{background: 'white'}}>
          <Icon icon={<VslIcon inline />}>
            <Typography.Body1>Voiture de Phil</Typography.Body1>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Boxed label with icon (2 lines)">
        <Info style={{background: 'white', width: 300}}>
          <Icon icon={<VslIcon inline />}>
            <Box>{longLabel.substr(0, 64)}</Box>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Boxed label with icon (long label)">
        <Info style={{background: 'white', width: 300}}>
          <Icon icon={<VslIcon inline />}>
            <Box>{longLabel}</Box>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Boxed labels with icon (fixed iconSize)">
        <Info style={{background: 'white', width: 300}}>
          <Icon icon={<VslIcon inline />} iconSize={32}>
            <Box>{shortLabel}</Box>
          </Icon>
          <Icon icon={<VslIcon circle />} iconSize={32}>
            <Box>{longLabel}</Box>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Label with icon (1 line)">
        <Info style={{background: 'white'}}>
          <Info.Item item={shortLabel} />
          <Icon icon={<AlertIcon inline />}>
            <div style={{paddingLeft: '8px'}}>{shortLabel}</div>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Label with icon (2 lines)">
        <Info style={{background: 'white', width: 300}}>
          <Info.Item item={shortLabel} />
          <Icon icon={<AlertIcon inline />}>
            <div style={{paddingLeft: '8px'}}>{longLabel.substr(0, 64)}</div>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Label with icon (long label)">
        <Info style={{background: 'white', width: 300}}>
          <Info.Item item={shortLabel} />
          <Icon icon={<AlertIcon inline />}>
            <div style={{paddingLeft: '8px'}}>{longLabel}</div>
          </Icon>
        </Info>
      </Showcase>
    </>
  )
})
