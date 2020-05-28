import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'
import {Overlay, palette, Typography, Button} from '@ambler/andive'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const ButtonsWrapper = styled.div`
  display: flex;
`

const Title = styled(Typography.H1)`
  width: 100%;
  text-align: center;
`

storiesOf('Overlay', module).add('Default', () => {
  return (
    <div style={{width: '100%', height: 400, background: palette.lightBeetrootPurple}}>
      <Overlay>
        <Wrapper>
          <Title>Quel est votre artiste préféré ?</Title>

          <ButtonsWrapper>
            <Button label="Phil Collins" />
            <Button label="Phil Collins" />
            <Button label="Phil Collins" />
          </ButtonsWrapper>

          <Button variant="primary" label="J'adore !" />
        </Wrapper>
      </Overlay>
    </div>
  )
})
