import React from 'react'
import {storiesOf} from '@storybook/react'
import {Direction, Input, Typography, Box, palette} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('API|Direction', module)
  .add('Origin', () => (
    <>
      <Showcase>
        <Direction style={{background: 'white'}}>
          <Direction.Origin>
            <Direction.Origin.Point>
              <Typography.Body1>Ambler</Typography.Body1>
            </Direction.Origin.Point>
            <Typography.Body2 color={palette.mediumPrimary}>24 Quai charles pasqua, Levalois-Perret</Typography.Body2>
          </Direction.Origin>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Origin with label', () => (
    <>
      <Showcase>
        <Direction style={{background: 'white'}}>
          <Direction.Origin label={<Typography.Body1>11:27</Typography.Body1>}>
            <Direction.Origin.Point>
              <Typography.Body1>Ambler</Typography.Body1>
            </Direction.Origin.Point>
            <Typography.Body2 color={palette.mediumPrimary}>24 Quai charles pasqua, Levalois-Perret</Typography.Body2>
          </Direction.Origin>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Destination', () => (
    <>
      <Showcase>
        <Direction style={{background: 'white'}}>
          <Direction.Destination>
            <Direction.Destination.Point>
              <Typography.Body1>Phil</Typography.Body1>
            </Direction.Destination.Point>
            <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Destination with label', () => (
    <>
      <Showcase>
        <Direction style={{background: 'white'}}>
          <Direction.Destination label={<Typography.Body1>~14:10</Typography.Body1>}>
            <Direction.Destination.Point>
              <Typography.Body1>Phil</Typography.Body1>
            </Direction.Destination.Point>
            <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Trip', () => (
    <>
      <Showcase>
        <Direction style={{background: 'white'}}>
          <Direction.Origin>
            <Direction.Origin.Point>
              <Typography.Body1>Ambler</Typography.Body1>
            </Direction.Origin.Point>
            <Typography.Body2 color={palette.mediumPrimary}>24 Quai charles pasqua, Levalois-Perret</Typography.Body2>
          </Direction.Origin>
          <Direction.Destination>
            <Direction.Destination.Point>
              <Typography.Body1>Phil</Typography.Body1>
            </Direction.Destination.Point>
            <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Trip with label', () => (
    <>
      <Showcase>
        <Direction style={{background: 'white'}}>
          <Direction.Origin label={<Typography.Body1>~14:10</Typography.Body1>}>
            <Direction.Origin.Point>
              <Typography.Body1>Ambler</Typography.Body1>
            </Direction.Origin.Point>
            <Typography.Body2 color={palette.mediumPrimary}>24 Quai charles pasqua, Levalois-Perret</Typography.Body2>
          </Direction.Origin>
          <Direction.Destination label={<Typography.Body1>~14:10</Typography.Body1>}>
            <Direction.Destination.Point>
              <Typography.Body1>Phil</Typography.Body1>
            </Direction.Destination.Point>
            <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Trip with shared label', () => (
    <Showcase>
      <Direction label={'Heure inconnue'} style={{background: 'white'}}>
        <Direction.Origin>
          <Direction.Origin.Point>
            <Typography.Body1>Ambler</Typography.Body1>
          </Direction.Origin.Point>
          <Typography.Body2 color={palette.mediumPrimary}>24 Quai charles pasqua, Levalois-Perret</Typography.Body2>
        </Direction.Origin>
        <Direction.Destination>
          <Direction.Destination.Point>
            <Typography.Body1>Phil</Typography.Body1>
          </Direction.Destination.Point>
          <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
        </Direction.Destination>
      </Direction>
    </Showcase>
  ))
  .add('Direction with any children', () => (
    <>
      <Showcase>
        <Direction label={'Heure inconnue'} style={{background: 'white'}}>
          <Direction.Origin>Salut !</Direction.Origin>
          <Direction.Destination>Au revoir !</Direction.Destination>
        </Direction>
      </Showcase>
      <Showcase>
        <Direction style={{background: 'white'}} nopadding>
          <Direction.Origin>
            <Direction.Origin.Point>
              <div>
                <Input label="Adresse" placeholder="Adresse d'origine" value="" onChange={() => null} />
              </div>
            </Direction.Origin.Point>
            <div style={{paddingLeft: 32}}>
              <Input label="Origin" placeholder="Service" value="" onChange={() => null} />
            </div>
          </Direction.Origin>
          <Direction.Destination>
            <Direction.Destination.Point>
              <div>
                <Input label="Adresse" placeholder="Adresse d'origine" value="" onChange={() => null} />
              </div>
            </Direction.Destination.Point>
            <div style={{paddingLeft: 32}}>
              <Input label="Origin" placeholder="Service" value="" onChange={() => null} />
            </div>
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
