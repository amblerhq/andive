import React from 'react'
import styled from 'styled-components'
import posed, {PoseGroup} from 'react-pose'
import PropTypes from 'prop-types'

import {lightBeetrootPurple} from '../constants/palette'
import {ZIndexes} from '../constants/enum'

const Modal = posed(styled.div`
  position: fixed;

  background: ${lightBeetrootPurple};

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: ${ZIndexes.MODALS};
`)({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween'
    }
  },
  exit: {
    y: props => props.height,
    opacity: 0,
    transition: {
      type: 'tween'
    }
  }
})

function ModalComponent({show, children, ...props}) {
  return (
    <PoseGroup>
      {show && (
        <Modal key="modal" height={128} {...props}>
          {children}
        </Modal>
      )}
    </PoseGroup>
  )
}

ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default ModalComponent
