import React from 'react'
import {storiesOf} from '@storybook/react'
import {palette, Info, VslIcon, CheckIcon, WarningIcon, ForbiddenIcon, QuestionIcon, Typography} from '@ambler/andive'

import Showcase from './showcase'

const shortLabel = 'Fan de Phil Collins'
const longLabel =
  'Philip David Charles Collins dit Phil Collins, né le 30 janvier 1951 à Chiswick (Londres), est un musicien, auteur-compositeur-interprète, acteur et producteur de disques britannique.'

storiesOf('API|Info', module)
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
          <Info icon={<QuestionIcon color={palette.error} />} style={{background: 'white'}}>
            <Info.Label label={shortLabel} color={palette.error} />
            <Info.Item item={shortLabel} color={palette.success} />
          </Info>
        </Showcase>
        <Showcase>
          <Info icon={<CheckIcon />} style={{background: 'white', width: 300}}>
            <Info.Item item={longLabel} color={palette.success} />
          </Info>
        </Showcase>
      </>
    )
  })
  .add('Block', () => {
    return (
      <>
        <Showcase legend="success">
          <Info style={{background: 'white', width: 320}}>
            <Info.Block variant="success" icon={<CheckIcon />}>
              <Info.Item item={longLabel} />
            </Info.Block>
          </Info>
        </Showcase>
        <Showcase legend="error">
          <Info style={{background: 'white', width: 320}}>
            <Info.Block variant="error" icon={<ForbiddenIcon />}>
              <Info.Item item={longLabel} />
            </Info.Block>
          </Info>
        </Showcase>
        <Showcase legend="warning">
          <Info style={{background: 'white', width: 320}}>
            <Info.Block variant="warning" icon={<WarningIcon />}>
              <Info.Item item={longLabel} />
            </Info.Block>
          </Info>
        </Showcase>
        <Showcase legend="info">
          <Info style={{background: 'white', width: 320}}>
            <Info.Block variant="info" icon={<QuestionIcon color={palette.mediumBeetrootPurple} />}>
              <Info.Label label={longLabel} />
            </Info.Block>
          </Info>
        </Showcase>
        <Showcase legend="disabled">
          <Info style={{background: 'white', width: 320}}>
            <Info.Block variant="disabled">
              <Info.Label label={longLabel} />
            </Info.Block>
          </Info>
        </Showcase>
        <Showcase legend="2+ children">
          <Info style={{background: 'white', width: 320}}>
            <Info.Block variant="warning" icon={<WarningIcon />}>
              <Info.Item item={shortLabel} />
              <Info.Item item={shortLabel} />
            </Info.Block>
          </Info>
        </Showcase>
        <Showcase legend="Custom colors">
          <Info style={{background: 'white', width: 320}}>
            <Info.Block colors={{forground: 'white', background: palette.darkPrimary}} icon={<WarningIcon />}>
              <Info.Item item={shortLabel} />
              <Info.Item item={shortLabel} />
              <div>
                <Typography.Body3 color="white">{shortLabel}</Typography.Body3>
              </div>
            </Info.Block>
          </Info>
        </Showcase>
      </>
    )
  })
