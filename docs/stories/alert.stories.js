import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  Icon,
  TaskIcon,
  VslIcon,
  CheckIcon,
  WarningIcon,
  ForbiddenIcon,
  QuestionIcon,
  Typography,
  Alert,
  Button,
  palette
} from '@ambler/andive'

import Showcase from './showcase'

storiesOf('NEXT|Alert', module)
  .add('With Variant', () => {
    return (
      <>
        <Showcase legend="default">
          <Alert>
            <Typography.Body3>Default</Typography.Body3>
          </Alert>
        </Showcase>
        <Showcase legend="success">
          <Alert variant="success">
            <Typography.Body3>Success</Typography.Body3>
          </Alert>
        </Showcase>
        <Showcase legend="error">
          <Alert variant="error">
            <Typography.Body3>Error</Typography.Body3>
          </Alert>
        </Showcase>
        <Showcase legend="warning">
          <Alert variant="warning">
            <Typography.Body3>Warning</Typography.Body3>
          </Alert>
        </Showcase>
        <Showcase legend="info">
          <Alert variant="info">
            <Typography.Body3>Info</Typography.Body3>
          </Alert>
        </Showcase>
        <Showcase legend="disabled">
          <Alert variant="disabled">
            <Typography.Body3>Disabled</Typography.Body3>
          </Alert>
        </Showcase>
      </>
    )
  })
  .add('With Icon', () => {
    return (
      <>
        <Showcase legend="default">
          <Alert>
            <Icon inline icon={<WarningIcon />}>
              <Typography.Body3>Default</Typography.Body3>
            </Icon>
          </Alert>
        </Showcase>
        <Showcase legend="success">
          <Alert variant="success">
            <Icon inline icon={<CheckIcon />}>
              <Typography.Body3>Success</Typography.Body3>
            </Icon>
          </Alert>
        </Showcase>
        <Showcase legend="error">
          <Alert variant="error">
            <Icon inline icon={<ForbiddenIcon />}>
              <Typography.Body3>Error</Typography.Body3>
            </Icon>
          </Alert>
        </Showcase>
        <Showcase legend="warning">
          <Alert variant="warning">
            <Icon inline icon={<WarningIcon />}>
              <Typography.Body3>Warning</Typography.Body3>
            </Icon>
          </Alert>
        </Showcase>
        <Showcase legend="info">
          <Alert variant="info">
            <Icon inline icon={<QuestionIcon />}>
              <Typography.Body3>Info</Typography.Body3>
            </Icon>
          </Alert>
        </Showcase>
        <Showcase legend="disabled">
          <Alert variant="disabled">
            <Icon inline icon={<VslIcon />}>
              <Typography.Body3>Disabled</Typography.Body3>
            </Icon>
          </Alert>
        </Showcase>
      </>
    )
  })
  .add('With Rounded', () => {
    return (
      <>
        <Showcase legend="default">
          <Alert rounded>
            <Typography.Body3>Default</Typography.Body3>
          </Alert>
        </Showcase>
        <Showcase legend="success">
          <Alert rounded variant="success">
            <Typography.Body3>Success</Typography.Body3>
          </Alert>
        </Showcase>
        <Showcase legend="error">
          <Alert rounded variant="error">
            <Typography.Body3>Error</Typography.Body3>
          </Alert>
        </Showcase>
        <Showcase legend="warning">
          <Alert rounded variant="warning">
            <Typography.Body3>Warning</Typography.Body3>
          </Alert>
        </Showcase>
        <Showcase legend="info">
          <Alert rounded variant="info">
            <Typography.Body3>Info</Typography.Body3>
          </Alert>
        </Showcase>
        <Showcase legend="disabled">
          <Alert rounded variant="disabled">
            <Typography.Body3>Disabled</Typography.Body3>
          </Alert>
        </Showcase>
      </>
    )
  })
  .add('Avanced', () => {
    return (
      <>
        <Showcase legend="Info with Icon">
          <Alert variant="info">
            <Icon icon={<TaskIcon inline />}>
              <Typography.Body1>A dispatcher</Typography.Body1>
            </Icon>
          </Alert>
        </Showcase>
        <Showcase legend="Info with Button">
          <Alert variant="info">
            <Typography.Body1 color={'white'}>2 nouvelles demandes</Typography.Body1>
            <Button small inverted mobile label="Voir la demande" onClick={() => null} />
          </Alert>
        </Showcase>
        <Showcase legend="Info with Icon and Button">
          <Alert variant="info">
            <Icon icon={<TaskIcon inline />}>
              <Typography.Body1 color={'white'}>
                Incident signalé par AMBULANCE RIVIERE (123) : Demande d'ajout d'un transport
              </Typography.Body1>
            </Icon>
            <Button small inverted mobile label="Résoudre" onClick={() => null} />
          </Alert>
        </Showcase>
        <Showcase legend="Info with Icon and Button disabled">
          <Alert variant="info">
            <Icon icon={<TaskIcon inline />}>
              <Typography.Body1 color={'white'}>
                Incident signalé par AMBULANCE RIVIERE (123) : Demande d'ajout d'un transport
              </Typography.Body1>
            </Icon>
            <Button small inverted mobile disabled label="Résoudre" onClick={() => null} />
          </Alert>
        </Showcase>
        <Showcase legend="Warning with Icon and Button">
          <Alert variant="warning">
            <Icon icon={<WarningIcon inline />}>
              <Typography.Body1 color={'white'}>
                Advanced Warning Alert with super long text text text text text text text text text text text text
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
          </Alert>
        </Showcase>
        <Showcase legend="Warning with Icon">
          <Alert variant="warning">
            <Icon icon={<WarningIcon inline />}>
              <Typography.Body1>
                Pour un trajet de plus de 150km, il est nécessaire que NOM Prénom dispose de l'accord préalable de la
                sécurité sociale
              </Typography.Body1>
            </Icon>
          </Alert>
        </Showcase>
      </>
    )
  })
