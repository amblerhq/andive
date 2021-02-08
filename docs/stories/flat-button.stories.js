import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  FlatButton,
  MoreIcon,
  MapIcon,
  TrashIcon,
  palette,
  Icon,
  Typography,
  PatientIcon,
  EditIcon,
  Box,
  Card,
  VSpace
} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('Next|FlatButton', module)
  .addParameters({component: FlatButton})
  .add('Label only', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            label="Carte"
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Icon only', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MoreIcon />}
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Icon + Label', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MapIcon />}
            label="Carte"
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Icon + Label + RightIcon', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MapIcon />}
            rightIcon={<MapIcon />}
            label="Carte"
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Active', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MapIcon />}
            label="Carte"
            active
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Disabled', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MapIcon />}
            label="Carte"
            disabled
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Reverse + Icon', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MapIcon />}
            label="Carte"
            reverse
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Loading', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MapIcon />}
            label="Carte"
            loading
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Loading + Right icon', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<MapIcon />}
            rightIcon={<MapIcon />}
            label="Carte"
            loading
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Color', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: 'white'}}>
          <FlatButton
            icon={<TrashIcon />}
            label="Supprimer"
            color={palette.error}
            onClick={() => {
              alert('On click triggered')
            }}
          />
        </div>
      </Showcase>
    )
  })
  .add('Shrink', () => {
    return (
      <Showcase>
        <div style={{width: 300, background: palette.mediumGrey}}>
          <FlatButton
            icon={<MapIcon />}
            label="Carte"
            onClick={() => {
              alert('On click triggered')
            }}
            active
            shrink
          />
        </div>
      </Showcase>
    )
  })
  .add('Keep its height in flexbox context', () => {
    return (
      <>
        <Showcase>
          <div>
            <Card>
              <Box>
                <Typography.Body1>
                  The FlatButton must not take the height of its parent container, but instead align on the top-right
                  corner of the parent container.
                </Typography.Body1>
              </Box>
            </Card>
            <VSpace px={8} />
            <div style={{width: 300, background: 'white'}}>
              <div style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between'}}>
                <div>
                  <Icon icon={<PatientIcon inline />}>
                    <Typography.Body1>Phil</Typography.Body1>
                    <Typography.Body1>Collins</Typography.Body1>
                  </Icon>
                </div>
                <FlatButton
                  label="Modifier"
                  icon={<EditIcon inline />}
                  onClick={() => {}}
                  color={palette.successText}
                  style={{background: palette.success}}
                />
              </div>
            </div>
          </div>
        </Showcase>
      </>
    )
  })
