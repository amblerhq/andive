import React, {useState} from 'react'
import posed, {PoseGroup} from 'react-pose'
import styled from 'styled-components'
import useInterval from 'use-interval'
import moment from 'moment'

import {ZIndexes} from '../constants/enum'
import * as palette from '../constants/palette'

let queue = []

export const initializeQueue = () => {
  queue = []
}

const ToastType = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  INFO: 'INFO'
}

export const toast = (type, message, icon) => {
  queue.push({type, message, icon})
}

export const toastError = (message, icon) => {
  toast(ToastType.ERROR, message, icon)
}

export const toastSuccess = (message, icon) => {
  toast(ToastType.SUCCESS, message, icon)
}

export const toastInfo = (message, icon) => {
  toast(ToastType.INFO, message, icon)
}

export const toastWarning = (message, icon) => {
  toast(ToastType.WARNING, message, icon)
}

function typeToColor(type) {
  switch (type) {
    case ToastType.SUCCESS:
      return palette.amblea.green[700]
    case ToastType.ERROR:
      return palette.amblea.red[700]
    case ToastType.WARNING:
      return palette.amblea.orange[700]
    case ToastType.INFO:
      return palette.amblea.blue[600]
    default:
      return palette.amblea.blue[600]
  }
}

const toastHeight = 64

const ToastContainerRoot = styled.div`
  pointer-events: none;
  position: fixed;

  z-index: ${ZIndexes.TOASTS};

  bottom: -${toastHeight}px;
  left: 0;

  width: 100vw;
  height: ${toastHeight}px;
`

const ToastComponent = styled.div`
  --font-size: 24px;
  @media (max-width: 992px) {
    --font-size: 18px;
  }

  pointer-events: none;

  font-size: var(--font-size);
  color: white;
  height: ${toastHeight}px;

  padding: 8px 16px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  & > :last-child {
    margin-left: 15px;
  }
`

const Toast = posed.div({
  enter: {
    y: -toastHeight,
    delay: 300,
    transition: {duration: 250}
  },
  exit: {
    y: 0,
    transition: {duration: 150}
  }
})

export default function ToastContainer() {
  const [toastValue, setState] = useState(undefined)

  function tick() {
    if (queue.length > 0 && !toastValue) {
      let [first] = queue
      setState({...first, timestamp: moment().add(3, 's')})
    }

    if (toastValue) {
      if (moment().isAfter(toastValue.timestamp)) {
        setState(undefined)
        queue.shift()
      }
    }
  }

  useInterval(tick, 250, true)

  return (
    <ToastContainerRoot>
      <PoseGroup>
        {toastValue && (
          <Toast key="toast" height={toastHeight} style={{backgroundColor: typeToColor(toastValue.type)}}>
            <ToastComponent>
              {toastValue.message}
              {toastValue && toastValue.icon}
            </ToastComponent>
          </Toast>
        )}
      </PoseGroup>
    </ToastContainerRoot>
  )
}
