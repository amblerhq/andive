import React from 'react'
import CounterOffer from '../../../img/icons/counter-offer.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const CounterOfferIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <CounterOffer />
    </SvgIcon>
  )
}

CounterOfferIcon.size = DEFAULT_SIZE

export default CounterOfferIcon
export const CounterOfferSvg = CounterOffer
