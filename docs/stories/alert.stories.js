import React from 'react'
import {storiesOf} from '@storybook/react'
import {Icon, VslIcon, CheckIcon, WarningIcon, ForbiddenIcon, QuestionIcon, Typography, Alert} from '@ambler/andive'

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
        )})
      .add('With Icon', () => {
        return (
          <>
        <Showcase legend="default">
          <Alert>
            <Icon inline icon={<WarningIcon/>}>
              <Typography.Body3>Default</Typography.Body3>
            </Icon>
          </Alert>
        </Showcase>
          <Showcase legend="success">
          <Alert variant="success">
            <Icon inline icon={<CheckIcon/>}>
              <Typography.Body3>Success</Typography.Body3>
            </Icon>
          </Alert>
          </Showcase>
          <Showcase legend="error">
          <Alert variant="error">
            <Icon inline icon={<ForbiddenIcon/>}>
              <Typography.Body3>Error</Typography.Body3>
            </Icon>
          </Alert>
          </Showcase>
          <Showcase legend="warning">
          <Alert variant="warning">
            <Icon inline icon={<WarningIcon/>}>
              <Typography.Body3>Warning</Typography.Body3>
            </Icon>
          </Alert>
          </Showcase>
          <Showcase legend="info">
          <Alert variant="info">
            <Icon inline icon={<QuestionIcon/>}>
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

