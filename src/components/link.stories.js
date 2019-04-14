import React from 'react'
import {storiesOf} from '@storybook/react'

import Showcase from '../stories/showcase'
import Link from './link'

import ArrowIcon from './icons/arrow'
import EditIcon from './icons/edit'
import LogoutIcon from './icons/logout'

storiesOf('Link', module)
  .add('Default', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Link style={{background: 'white'}} extend={<a href="#" />} label="Editer la commande" />
      </Showcase>
    )
  })
  .add('With icon', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Link
          style={{background: 'white'}}
          extend={<a href="https://ambler.fr" />}
          label="Editer la commande"
          icon={<EditIcon inline />}
        />
      </Showcase>
    )
  })
  .add('With right icon', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Link
          style={{background: 'white'}}
          extend={<a href="#" />}
          label="Nouvelle commande"
          icon={<ArrowIcon inline />}
          reverse
        />
      </Showcase>
    )
  })
  .add('Invert, with icon', () => {
    return (
      <Showcase style={{background: '#eee'}}>
        <Link
          style={{background: 'white'}}
          extend={<a href="#" />}
          label="Déconnexion"
          icon={<LogoutIcon inline />}
          invert
        />
      </Showcase>
    )
  })
