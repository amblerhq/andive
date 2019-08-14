import React from 'react'
import {storiesOf} from '@storybook/react'

import Info from './info'
import Showcase from '../stories/showcase'
import VslIcon from './icons/vsl'
import AlertIcon from './icons/alert'
import {palette} from '..'
import CheckIcon from './icons/check'
import WarningIcon from './icons/warning'
import ForbiddenIcon from './icons/forbidden'

const shortLabel = 'Fan de Phil Collins'
const longLabel =
  'Philip David Charles Collins dit Phil Collins, né le 30 janvier 1951 à Chiswick (Londres), est un musicien, auteur-compositeur-interprète, acteur et producteur de disques britannique.'

storiesOf('Info', module)
  .add('Label', () => {
    return (
      <>
        <Showcase legend="Label only">
          <Info style={{background: 'white'}}>
            <Info.Label label={shortLabel} />
          </Info>
        </Showcase>
        <Showcase legend="Label only (long)">
          <Info style={{background: 'white', width: 300}}>
            <Info.Label label={longLabel} />
          </Info>
        </Showcase>
        <Showcase legend="Item only">
          <Info style={{background: 'white'}}>
            <Info.Item item={shortLabel} />
          </Info>
        </Showcase>
        <Showcase legend="Item only (only)">
          <Info style={{background: 'white', width: 300}}>
            <Info.Item item={longLabel} />
          </Info>
        </Showcase>
        <Showcase legend="Label/Item">
          <Info style={{background: 'white', width: 300}}>
            <Info.Label label={shortLabel} />
            <Info.Item item={longLabel} />
          </Info>
        </Showcase>
        <Showcase legend="Item/Label">
          <Info style={{background: 'white', width: 300}}>
            <Info.Item item={longLabel} />
            <Info.Label label={shortLabel} />
          </Info>
        </Showcase>
      </>
    )
  })
  .add('Label Icon', () => {
    return (
      <>
        <Showcase legend="Label with icon">
          <Info style={{background: 'white'}}>
            <Info.LabelIcon label={'Voiture de Phil'} icon={<VslIcon inline />} />
          </Info>
        </Showcase>
        <Showcase legend="Fixed width (2 lines)">
          <Info style={{background: 'white', width: 300}}>
            <Info.LabelIcon label={longLabel.substr(0, 64)} icon={<VslIcon inline />} />
          </Info>
        </Showcase>
        <Showcase legend="Fixed width (long label)">
          <Info style={{background: 'white', width: 300}}>
            <Info.LabelIcon label={longLabel} icon={<VslIcon inline />} />
          </Info>
        </Showcase>
        <Showcase legend="With sticky icon">
          <Info style={{background: 'white', width: 300}}>
            <Info.LabelIcon label={shortLabel} icon={<VslIcon inline />} stickyIcon />
            <Info.LabelIcon label={longLabel} icon={<VslIcon circle />} stickyIcon iconSize={32} />
          </Info>
        </Showcase>
        <Showcase legend="Item / Label with icon">
          <Info style={{background: 'white'}}>
            <Info.Item item={shortLabel} />
            <Info.LabelIcon label={shortLabel} icon={<AlertIcon inline />} />
          </Info>
        </Showcase>
        <Showcase legend="Fixed width (2 lines)">
          <Info style={{background: 'white', width: 300}}>
            <Info.Item item={shortLabel} />
            <Info.LabelIcon label={longLabel.substr(0, 64)} icon={<AlertIcon inline />} />
          </Info>
        </Showcase>
        <Showcase legend="Fixed width (long label)">
          <Info style={{background: 'white', width: 300}}>
            <Info.Item item={shortLabel} />
            <Info.LabelIcon label={longLabel} icon={<AlertIcon inline />} stickyIcon />
          </Info>
        </Showcase>
      </>
    )
  })
  .add('Icon / Items & Labels', () => {
    return (
      <>
        <Showcase>
          <Info icon={<VslIcon circle />} iconSize={32} style={{background: 'white'}}>
            <Info.Label label={shortLabel} />
            <Info.Item item={shortLabel} />
          </Info>
        </Showcase>
        <Showcase legend="Fixed width (long label)">
          <Info icon={<VslIcon circle />} iconSize={32} style={{background: 'white', width: 300}}>
            <Info.Label label={longLabel} />
            <Info.Item item={longLabel} />
          </Info>
        </Showcase>
      </>
    )
  })
  .add('Custom style items & labels', () => {
    return (
      <>
        <Showcase>
          <Info icon={<VslIcon color={palette.beetrootPurple} />} iconSize={24} style={{background: 'white'}}>
            <Info.Label label={shortLabel} color={palette.error} />
            <Info.Item item={shortLabel} color={palette.success} />
          </Info>
        </Showcase>
        <Showcase>
          <Info icon={<CheckIcon />} iconSize={24} style={{background: 'white', width: 300}}>
            <Info.Item item={longLabel} color={palette.success} />
          </Info>
        </Showcase>
      </>
    )
  })
  .add('Block', () => {
    return (
      <>
        <Showcase>
          <Info style={{background: 'white'}}>
            <Info.Block variant="success" icon={<CheckIcon />}>
              <Info.Item item={longLabel} />
            </Info.Block>
          </Info>
        </Showcase>
        <Showcase>
          <Info style={{background: 'white'}}>
            <Info.Block variant="error" icon={<ForbiddenIcon />}>
              <Info.Item item={longLabel} />
            </Info.Block>
          </Info>
        </Showcase>
        <Showcase>
          <Info style={{background: 'white'}}>
            <Info.Block variant="warning" icon={<WarningIcon />}>
              <Info.Item item={longLabel} />
            </Info.Block>
          </Info>
        </Showcase>
      </>
    )
  })
