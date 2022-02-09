import React from 'react'

import Algo from '../../../img/icons/algo.svg'
import SvgIcon from '../svg-icon'

const DEFAULT_SIZE = 24

const AlgoIcon = ({size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon size={size} {...rest}>
      <Algo />
    </SvgIcon>
  )
}

AlgoIcon.size = DEFAULT_SIZE

export default AlgoIcon
export const AlgoSvg = Algo
