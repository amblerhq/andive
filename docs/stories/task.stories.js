import React from 'react'
import {storiesOf} from '@storybook/react'
import {Icon, TaskIcon, WarningIcon, Typography, Task, Button, palette} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('NEXT|Task', module)
  .add('Text', () => {
    return (
      <>
        <Showcase legend="Variant info">
          <Task variant="info">
            <Typography.Body1>A dispatcher</Typography.Body1>
          </Task>
        </Showcase>
        <Showcase legend="Vartiant warning">
          <Task variant="warning">
            <Typography.Body1>A dispatcher</Typography.Body1>
          </Task>
        </Showcase>
      </>
    )
  })
  .add('Icon', () => {
    return (
      <>
        <Showcase legend="Variant info">
          <Task variant="info">
            <Icon icon={<TaskIcon inline />}>
              <Typography.Body1>A dispatcher</Typography.Body1>
            </Icon>
          </Task>
        </Showcase>
        <Showcase legend="Vartiant warning">
          <Task variant="warning">
            <Icon icon={<WarningIcon inline />}>
              <Typography.Body1>A vérifier</Typography.Body1>
            </Icon>
          </Task>
        </Showcase>
      </>
    )
  })
  .add('Button', () => {
    return (
      <>
        <Showcase legend="Info with Icon and Button">
          <Task variant="info">
            <Icon icon={<TaskIcon inline />}>
              <Typography.Body1 color={'white'}>
                Incident signalé par AMBULANCE RIVIERE (123) : Demande d'ajout d'un transport
              </Typography.Body1>
            </Icon>
            <Button small inverted mobile label="Résoudre" onClick={() => null} />
          </Task>
        </Showcase>
        <Showcase legend="Warning with Icon and Button">
          <Task variant="warning">
            <Icon icon={<WarningIcon inline />}>
              <Typography.Body1 color={'white'}>
                Advanced Warning Task with super long text text text text text text text text text text text text
              </Typography.Body1>
            </Icon>
            <Button
              variant="primary"
              invert
              backgroundColor="white"
              textColor={palette.darkPotatoYellow}
              mobile
              small
              label="Vérifier"
              onClick={() => null}
            />
          </Task>
        </Showcase>
        <Showcase legend="Info with Icon and Button disabled">
          <Task variant="info">
            <Icon icon={<TaskIcon inline />}>
              <Typography.Body1 color={'white'}>
                Incident signalé par AMBULANCE RIVIERE (123) : Demande d'ajout d'un transport
              </Typography.Body1>
            </Icon>
            <Button small inverted mobile disabled label="Résoudre" onClick={() => null} />
          </Task>
        </Showcase>
      </>
    )
  })
