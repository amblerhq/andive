import React from 'react'
import {storiesOf} from '@storybook/react'
import {AutoLayout, Box, Typography, palette, VSpace} from '@ambler/andive'

import Showcase from './showcase'

const props = [
  // display
  {key: '$display', values: ['flex', 'block', 'inline', 'inline-block']},
  // flex-direction
  {key: '$column', values: [true], desc: 'column layout'},
  {key: '$row', values: [true], desc: 'row layout'},
  // flex-wrap
  {key: '$wrap', values: [true], desc: 'flex-wrap: wrap'},
  {key: '$nowrap', values: [true], desc: 'flex-wrap: nowrap'},
  // justify-content
  {
    key: '$justify',
    values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    desc: 'Main axis (row/column) spacing'
  },
  // align-items
  {
    key: '$align',
    values: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    desc: 'Perpendicular from main axis (row/column) spacing',
    extra: {$column: true}
  },
  // flex
  {
    key: '$flex',
    values: ['0 0 1'],
    desc: 'Flex shortcut for shrink, grow and basis values'
  },
  // gap
  {key: '$gap', values: ['8px', '16px', '32px'], desc: 'gap between elements (with $row)', extra: {$row: true}},
  {key: '$gap', values: ['8px', '16px', '32px'], desc: 'gap between elements (with $column)', extra: {$column: true}},
  // card
  {key: '$card', values: ['rounded', 'squared'], desc: 'card look', extra: {$p: '8px'}},
  // padding
  {key: '$p', values: ['8px', '16px', '32px'], desc: 'add padding (string)'},
  // margin
  {key: '$m', values: ['8px', '16px', '32px'], desc: 'add margin (string)'},
  // background color
  {
    key: '$bgColor',
    values: [palette.lightLettuceGreen, palette.lightRadishRed, palette.lightBeetrootPurple],
    desc: 'add background color (string)'
  },
  // border radius
  {
    key: '$borderRadius',
    values: ['4px', '16px', '32px'],
    desc: 'Border radius',
    extra: {$card: 'squared', $overflow: 'hidden'}
  },
  {
    key: '$overflow',
    values: ['hidden', 'scroll', 'auto'],
    desc: 'Overflow',
    extra: {$maxWidth: '200px'}
  },
  {
    key: '$maxWidth',
    values: ['100px', '200px', '300px'],
    desc: 'Maximum width',
    extra: {$overflow: 'scroll'}
  }
]
props.map(({key, values, desc, extra}) => {
  storiesOf('API|AutoLayout', module).add([key, desc].filter(Boolean).join(' | '), () => {
    return (
      <>
        <Box>
          <Typography.Body1>
            {key} : {desc}
          </Typography.Body1>
        </Box>
        {values.map((value, valueIndex) => {
          return (
            <Box key={valueIndex} legend={`${key} = ${value}`}>
              <Typography.Body2>
                {key}={value}
              </Typography.Body2>
              <VSpace px={8} />
              <AutoLayout $bgColor={palette.lightGrey} {...{[key]: value, ...extra}}>
                <AutoLayout $bgColor={palette.lightGrey} $column $p="8px">
                  <Typography.Body2 color={palette.secondaryText}>Prénom</Typography.Body2>
                  <Typography.Body1>Phil</Typography.Body1>
                  <Typography.Body2 color={palette.secondaryText}>Nom</Typography.Body2>
                  <Typography.Body1>Colins</Typography.Body1>
                </AutoLayout>
                <AutoLayout $bgColor={palette.mediumGrey} $column $p="8px">
                  <Typography.Body2 color={palette.secondaryText}>Métier</Typography.Body2>
                  <Typography.Body1>Chanteur</Typography.Body1>
                </AutoLayout>
                <AutoLayout $bgColor={palette.lightGrey} $column $p="8px">
                  <Typography.Body2 color={palette.secondaryText}>Cool</Typography.Body2>
                  <Typography.Body1>Oui</Typography.Body1>
                </AutoLayout>
                <AutoLayout $bgColor={palette.mediumGrey} $column $p="8px">
                  <Typography.Body2 color={palette.secondaryText}>Retard</Typography.Body2>
                  <Typography.Body1>Non</Typography.Body1>
                </AutoLayout>
              </AutoLayout>
            </Box>
          )
        })}
      </>
    )
  })
})
