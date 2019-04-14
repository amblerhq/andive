import React from 'react'
import {storiesOf} from '@storybook/react'

import Info from './info'
import Showcase from '../stories/showcase'
import VslIcon, {VslSvg} from './icons/vsl'
import {AlertSvg} from './icons/alert'

storiesOf('Info', module)
  .add('Label', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Info style={{background: 'white'}}>
          <Info.Label label={'Fan de Phil Collins'} />
        </Info>
      </Showcase>
    )
  })
  .add('Label Item', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Info style={{background: 'white'}}>
          <Info.Label label={'Appartement de Phil'} />
          <Info.Item item={'14225 Dives-sur-mer'} />
        </Info>
      </Showcase>
    )
  })
  .add('Item Label', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Info style={{background: 'white'}}>
          <Info.Item item={'Raison du transport'} />
          <Info.Label label={'Concert de Phil'} />
        </Info>
      </Showcase>
    )
  })
  .add('Label Items', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Info style={{background: 'white'}}>
          <Info.Label label={'M Phil Collins (+1 accompagnateur)'} />
          <Info.Item item={'0000000101010'} />
          <Info.Item item={'30/01/1951 - 68 ans'} />
        </Info>
      </Showcase>
    )
  })
  .add('Label Icon', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Info style={{background: 'white'}}>
          <Info.LabelIcon label={'Voiture de Phil'} icon={<VslSvg />} />
        </Info>
      </Showcase>
    )
  })
  .add('Item / Label Icon', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Info style={{background: 'white'}}>
          <Info.Item item="Besoins de Phil" />
          <Info.LabelIcon label={'Piano'} icon={<AlertSvg />} />
        </Info>
      </Showcase>
    )
  })
  .add('Left Icon / Item Label', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Info icon={<VslIcon circle />} style={{background: 'white'}}>
          <Info.Item item="Besoins de Phil" />
          <Info.Label label={'Une voiture !'} />
        </Info>
      </Showcase>
    )
  })
  .add('Left Icon / Label Item', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Info icon={<VslIcon circle />} style={{background: 'white'}}>
          <Info.Label label={'Une voiture !'} />
          <Info.Item item="Besoins de Phil" />
        </Info>
      </Showcase>
    )
  })
  .add('LabelItem side with ItemLabel', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Info style={{background: 'white'}}>
          <Info.Label label={'Concert de Phil'} />
          <Info.Item item={'Raison du transport'} />
        </Info>
        <Info style={{background: 'white'}}>
          <Info.Item item={'Raison du transport'} />
          <Info.Label label={'Concert de Phil'} />
        </Info>
        <Info style={{background: 'white'}}>
          <Info.Label label={'Concert de Phil'} />
          <Info.Item item={'Raison du transport'} />
        </Info>
        <Info style={{background: 'white'}}>
          <Info.Item item={'Raison du transport'} />
          <Info.Label label={'Concert de Phil'} />
        </Info>
        <Info style={{background: 'white'}}>
          <Info.Label label={'Concert de Phil'} />
          <Info.Item item={'Raison du transport'} />
        </Info>
      </Showcase>
    )
  })
