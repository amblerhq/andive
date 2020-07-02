import React from 'react'
import {storiesOf} from '@storybook/react'
import {Info, VslIcon, AlertIcon, Typography, Box, Icon} from '@ambler/andive'

import Showcase from './showcase'

const shortLabel = 'Fan de Phil Collins'
const longLabel =
  'Philip David Charles Collins dit Phil Collins, né le 30 janvier 1951 à Chiswick (Londres), est un musicien, auteur-compositeur-interprète, acteur et producteur de disques britannique.'

storiesOf('API|Icon', module).add('Icon with label', () => {
  return (
    <>
      <Showcase legend="Icon with label (children as string)">
        <Info style={{background: 'white'}}>
          <Icon icon={<VslIcon inline />}>Voiture de Phil</Icon>
        </Info>
      </Showcase>
      <Showcase legend="Icon with label (children as react node)">
        <Info style={{background: 'white'}}>
          <Icon icon={<VslIcon inline />}>
            <Typography.Body1>Voiture de Phil</Typography.Body1>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Icon with boxed label">
        <Info style={{background: 'white', width: 300}}>
          <Icon icon={<VslIcon circle />}>
            <Box>{shortLabel}</Box>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Icon with boxed label">
        <Info style={{background: 'white', width: 300}}>
          <Icon icon={<VslIcon circle />}>
            <Box>{longLabel}</Box>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Icon with title and 2 lines label (fixed iconSize 22 and padding 0)">
        <Info style={{background: 'white', width: 300}}>
          <Info.Item item={shortLabel} />
          <Icon icon={<AlertIcon inline />} iconSize={22} padding={0}>
            <div style={{paddingLeft: '8px'}}>{longLabel.substr(0, 64)}</div>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Icon with title and long label (fixed iconSize 22 and padding 0)">
        <Info style={{background: 'white', width: 300}}>
          <Info.Item item={shortLabel} />
          <Icon icon={<AlertIcon inline />} iconSize={22} padding={0}>
            <div style={{paddingLeft: '8px'}}>{longLabel}</div>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Icon with title and label (fixed iconSize 22 and padding 4)">
        <Info style={{background: 'white'}}>
          <Info.Item item={shortLabel} />
          <Icon icon={<AlertIcon inline />} iconSize={22} padding={4}>
            <div style={{paddingLeft: '8px'}}>{shortLabel}</div>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Icon with title and label (fixed iconSize 22 and padding 8)">
        <Info style={{background: 'white'}}>
          <Info.Item item={shortLabel} />
          <Icon icon={<AlertIcon inline />} iconSize={22} padding={8}>
            <div style={{paddingLeft: '8px'}}>{shortLabel}</div>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Icon with title and label (fixed iconSize 32 and padding 4)">
        <Info style={{background: 'white'}}>
          <Info.Item item={shortLabel} />
          <Icon icon={<AlertIcon inline />} iconSize={32} padding={4}>
            <div style={{paddingLeft: '8px'}}>{shortLabel}</div>
          </Icon>
        </Info>
      </Showcase>
      <Showcase legend="Icon with title and label (fixed iconSize 32 and padding 8)">
        <Info style={{background: 'white'}}>
          <Info.Item item={shortLabel} />
          <Icon icon={<AlertIcon inline />} iconSize={32} padding={8}>
            <div style={{paddingLeft: '8px'}}>{shortLabel}</div>
          </Icon>
        </Info>
      </Showcase>
    </>
  )
})
