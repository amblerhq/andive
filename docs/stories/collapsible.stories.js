import React from 'react'
import styled from 'styled-components'
import {storiesOf} from '@storybook/react'
import {Box, Typography, Button, Collapsible, Card, Icon, PatientIcon} from '@ambler/andive'

const Showcase = styled.div`
  height: 100px;
  padding: 16px;
  width: 600px;
  margin: 0 auto;
`

const shortLabel = 'Fan de Phil Collins'

storiesOf('API|Collapsible', module).add('Default', () => {
  return (
    <Showcase>
      <Card>
        <Collapsible
          openByDefault
          trigger={
            <Icon icon={<PatientIcon circle />}>
              <Typography.Body1>{shortLabel}</Typography.Body1>
            </Icon>
          }
        >
          <Box>
            <Typography.Body2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography.Body2>
          </Box>
        </Collapsible>
      </Card>
    </Showcase>
  )
})
