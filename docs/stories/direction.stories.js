import React from 'react'
import {storiesOf} from '@storybook/react'
import {Direction, Input, Typography, palette, VSpace} from '@ambler/andive'

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
            <VSpace px={16} />
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
            <VSpace px={16} />
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
          <VSpace px={16} />
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
  .add('Multiline', () => (
    <>
      <Showcase style={{maxWidth: '500px'}}>
        <Direction style={{background: 'white'}}>
          <Direction.Origin label={<Typography.Body1>~14:10</Typography.Body1>}>
            <Direction.Origin.Point>
              <Typography.Body1>Ambler mais avec un nom à rallonge qui prends une place de fou</Typography.Body1>
            </Direction.Origin.Point>
            <Typography.Body2 color={palette.mediumPrimary}>
              Et une adresse encore plus longue qui risque de prendre deux ou lignes sur un petit écran pour le besoin
              de la demonstration
            </Typography.Body2>
            <VSpace px={16} />
          </Direction.Origin>
          <Direction.Destination label={<Typography.Body1>~14:10</Typography.Body1>}>
            <Direction.Destination.Point>
              <Typography.Body1>
                La destination aussi est super longue, on teste un edge case mais c&apos;est important. A voir si ça
                marche du premier coup
              </Typography.Body1>
            </Direction.Destination.Point>
            <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Direction with any children', () => (
    <>
      <Showcase>
        <Direction label={'Heure inconnue'} style={{background: 'white'}}>
          <Direction.Origin>
            <Direction.Origin.Point>
              <Typography.Body1>Salut !</Typography.Body1>
            </Direction.Origin.Point>
          </Direction.Origin>
          <Direction.Destination>
            <Direction.Destination.Point>
              <Typography.Body1>Au revoir !</Typography.Body1>
            </Direction.Destination.Point>
          </Direction.Destination>
        </Direction>
      </Showcase>
      <Showcase>
        <Direction style={{background: 'white'}} nopadding variant={'centered'}>
          <Direction.Origin>
            <Direction.Origin.Point>
              <div>
                <Input placeholder="Adresse d'origine" value="" onChange={() => null} />
              </div>
            </Direction.Origin.Point>
            <div style={{paddingLeft: 32}}>
              <Input placeholder="Service" value="" onChange={() => null} />
            </div>
          </Direction.Origin>
          <Direction.Destination>
            <Direction.Destination.Point>
              <div>
                <Input placeholder="Adresse d'origine" value="" onChange={() => null} />
              </div>
            </Direction.Destination.Point>
            <div style={{paddingLeft: 32}}>
              <Input placeholder="Service" value="" onChange={() => null} />
            </div>
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
