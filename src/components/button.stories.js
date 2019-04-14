import React, {useState, useEffect} from 'react'
import {storiesOf} from '@storybook/react'

import Button from './button'
import Showcase from '../stories/showcase'

import icons from './icons'

function TimedIcon({interval, children}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    function tick() {
      setIndex(index + 1)
    }

    const handle = setInterval(tick, interval || 1000)

    return () => {
      clearInterval(handle)
    }
  }, [index, setIndex])

  const Icon = icons[index % icons.length]

  return children(<Icon />)
}

storiesOf('Button', module)
  .add('Default', () => (
    <Showcase>
      <Button label={'Je suis fan'} />
    </Showcase>
  ))
  .add('Primary', () => (
    <Showcase>
      <Button primary label={'Je suis fan'} />
    </Showcase>
  ))
  .add('Invert', () => (
    <Showcase invert>
      <Button invert label={'Je suis fan'} />
    </Showcase>
  ))
  .add('Invert primary', () => (
    <Showcase invert>
      <Button invert primary label={'Je suis fan'} />
    </Showcase>
  ))
  .add('With icon', () => (
    <Showcase>
      <TimedIcon>{icon => <Button label={'VSL / Taxi'} icon={icon} />}</TimedIcon>
    </Showcase>
  ))
  .add('With long text', () => (
    <Showcase>
      <Button label={'Enregistrer mes changements'} />
    </Showcase>
  ))
