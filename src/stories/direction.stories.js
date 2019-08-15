import React from 'react'
import {storiesOf} from '@storybook/react'

import {Direction, Input, Typography, palette} from '..'
import Showcase from './showcase'

storiesOf('Direction', module)
  .add('Origin', () => (
    <>
      <Showcase legend="children as PropTypes.node">
        <Direction style={{background: 'white'}}>
          <Direction.Origin>
            <div>
              <Typography.Body1>Ambler</Typography.Body1>
              <Typography.Body2 color={palette.mediumPrimary}>24 Quai charles pasqua, Levalois-Perret</Typography.Body2>
            </div>
          </Direction.Origin>
        </Direction>
      </Showcase>
      <Showcase legend="children as PropTypes.func">
        <Direction style={{background: 'white'}}>
          <Direction.Origin>
            {(ref, pointRef) => {
              return (
                <div ref={ref}>
                  <Typography.Body1 ref={pointRef}>Ambler</Typography.Body1>
                  <Typography.Body2 color={palette.mediumPrimary}>
                    24 Quai charles pasqua, Levalois-Perret
                  </Typography.Body2>
                </div>
              )
            }}
          </Direction.Origin>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Origin with label', () => (
    <>
      <Showcase legend="children as PropTypes.node">
        <Direction style={{background: 'white'}}>
          <Direction.Origin label={'11:27'}>
            <div>
              <Typography.Body1>Ambler</Typography.Body1>
              <Typography.Body2 color={palette.mediumPrimary}>24 Quai charles pasqua, Levalois-Perret</Typography.Body2>
            </div>
          </Direction.Origin>
        </Direction>
      </Showcase>
      <Showcase legend="children as PropTypes.func">
        <Direction style={{background: 'white'}}>
          <Direction.Origin label={'11:27'}>
            {(ref, pointRef) => {
              return (
                <div ref={ref}>
                  <Typography.Body1 ref={pointRef}>Ambler</Typography.Body1>
                  <Typography.Body2 color={palette.mediumPrimary}>
                    24 Quai charles pasqua, Levalois-Perret
                  </Typography.Body2>
                </div>
              )
            }}
          </Direction.Origin>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Destination', () => (
    <>
      <Showcase legend="children as PropTypes.node">
        <Direction style={{background: 'white'}}>
          <Direction.Destination>
            <div>
              <Typography.Body1>Phil</Typography.Body1>
              <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
            </div>
          </Direction.Destination>
        </Direction>
      </Showcase>
      <Showcase legend="children as PropTypes.func">
        <Direction style={{background: 'white'}}>
          <Direction.Destination>
            {(ref, pointRef) => {
              return (
                <div ref={ref}>
                  <Typography.Body1 ref={pointRef}>Phil</Typography.Body1>
                  <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
                </div>
              )
            }}
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Destination with label', () => (
    <>
      <Showcase legend="children as PropTypes.node">
        <Direction style={{background: 'white'}}>
          <Direction.Destination label={'~14:10'}>
            <div>
              <Typography.Body1>Phil</Typography.Body1>
              <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
            </div>
          </Direction.Destination>
        </Direction>
      </Showcase>
      <Showcase legend="children as PropTypes.func">
        <Direction style={{background: 'white'}}>
          <Direction.Destination label={'~14:10'}>
            {(ref, pointRef) => {
              return (
                <div ref={ref}>
                  <Typography.Body1 ref={pointRef}>Phil</Typography.Body1>
                  <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
                </div>
              )
            }}
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Trip', () => (
    <>
      <Showcase legend="children as PropTypes.node">
        <Direction style={{background: 'white'}}>
          <Direction.Origin>
            <Typography.Body1>Ambler</Typography.Body1>
            <Typography.Body2 color={palette.mediumPrimary}>24 Quai charles pasqua, Levalois-Perret</Typography.Body2>
          </Direction.Origin>
          <Direction.Destination>
            <Typography.Body1>Phil</Typography.Body1>
            <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
          </Direction.Destination>
        </Direction>
      </Showcase>
      <Showcase legend="children as PropTypes.func">
        <Direction style={{background: 'white'}}>
          <Direction.Origin>
            {(ref, pointRef) => {
              return (
                <div ref={ref}>
                  <Typography.Body1 ref={pointRef}>Ambler</Typography.Body1>
                  <Typography.Body2 color={palette.mediumPrimary}>
                    24 Quai charles pasqua, Levalois-Perret
                  </Typography.Body2>
                  <div style={{height: 8}} />
                </div>
              )
            }}
          </Direction.Origin>
          <Direction.Destination>
            {(ref, pointRef) => {
              return (
                <div ref={ref}>
                  <div style={{height: 8}} />
                  <Typography.Body1 ref={pointRef}>Phil</Typography.Body1>
                  <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
                </div>
              )
            }}
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Trip with label', () => (
    <>
      <Showcase legend="children as PropTypes.node">
        <Direction style={{background: 'white'}}>
          <Direction.Origin label={'~14:10'}>
            <Typography.Body1>Ambler</Typography.Body1>
            <Typography.Body2 color={palette.mediumPrimary}>24 Quai charles pasqua, Levalois-Perret</Typography.Body2>
          </Direction.Origin>
          <Direction.Destination label={'~14:10'}>
            <Typography.Body1>Phil</Typography.Body1>
            <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
          </Direction.Destination>
        </Direction>
      </Showcase>
      <Showcase legend="children as PropTypes.func">
        <Direction style={{background: 'white'}}>
          <Direction.Origin label={'~14:10'}>
            {(ref, pointRef) => {
              return (
                <div ref={ref}>
                  <Typography.Body1 ref={pointRef}>Ambler</Typography.Body1>
                  <Typography.Body2 color={palette.mediumPrimary}>
                    24 Quai charles pasqua, Levalois-Perret
                  </Typography.Body2>
                  <div style={{height: 8}} />
                </div>
              )
            }}
          </Direction.Origin>
          <Direction.Destination label={'~14:10'}>
            {(ref, pointRef) => {
              return (
                <div ref={ref}>
                  <div style={{height: 8}} />
                  <Typography.Body1 ref={pointRef}>Phil</Typography.Body1>
                  <Typography.Body2 color={palette.mediumPrimary}>Appart de Phil, Dives-sur-mer</Typography.Body2>
                </div>
              )
            }}
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
  .add('Trip with shared label', () => (
    <Showcase>
      <Direction label={'Heure inconnue'} style={{background: 'white'}}>
        <Direction.Origin>
          <Typography.Body1>Ambler</Typography.Body1>
          <Typography.Body2 color={palette.mediumPrimary}>24 Quai charles pasqua, Levalois-Perret</Typography.Body2>
        </Direction.Origin>
        <Direction.Destination>
          <Typography.Body1>Phil</Typography.Body1>
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
            {(originRef, pointRef) => {
              return (
                <div ref={originRef}>
                  <Input
                    ref={pointRef}
                    label="Adresse"
                    placeholder="Adresse d'origine"
                    value=""
                    onChange={() => null}
                  />
                  <div style={{paddingLeft: 32}}>
                    <Input label="Origin" placeholder="Service" value="" onChange={() => null} />
                  </div>
                  <div style={{height: 32}} />
                </div>
              )
            }}
          </Direction.Origin>
          <Direction.Destination>
            {(ref, pointRef) => {
              return (
                <div ref={ref}>
                  <Input
                    ref={pointRef}
                    label="Adresse"
                    placeholder="Adresse d'origine"
                    value=""
                    onChange={() => null}
                  />
                  <div style={{paddingLeft: 32}}>
                    <Input label="Origin" placeholder="Service" value="" onChange={() => null} />
                  </div>
                </div>
              )
            }}
          </Direction.Destination>
        </Direction>
      </Showcase>
    </>
  ))
