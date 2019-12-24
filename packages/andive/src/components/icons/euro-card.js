import React from 'react'

import EuroCard from '../../../img/icons/euro-card.svg'
import Icon from '../icon'

const EuroCardIcon = props => {
  return (
    <Icon {...props}>
      <EuroCard />
    </Icon>
  )
}

EuroCardIcon.size = 40

export default EuroCardIcon
export const EuroCardSvg = EuroCard
