import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import posed, {PoseGroup} from 'react-pose'
import PropTypes from 'prop-types'
import OutsideClickHandler from 'react-outside-click-handler'

import * as palette from '../constants/palette'
import {ZIndexes} from '../constants/enum'

const Modal = posed(styled.div`
  position: fixed;
  background: ${props => (props.transparent ? palette.hexToRGBA(palette.white, 0.8) : palette.darkBeetrootPurple)};

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: ${ZIndexes.MODALS};
`)({
  enter: {
    opacity: 1,
    transition: {
      type: 'tween'
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween'
    }
  }
})

const DisableScrolling = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

const Center = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 64px 50px;

  box-shadow: 0px 1px 4px 0px ${palette.hexToRGBA(palette.darkPrimary, 0.3)};

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

function ModalComponent({show, onClose, transparent, children, ...props}) {
  return (
    <>
      <PoseGroup>
        {show ? (
          <Modal key="modal" height={128} transparent={transparent} {...props}>
            {transparent ? (
              <Center>
                <OutsideClickHandler onOutsideClick={onClose}>
                  <Card>{children}</Card>
                </OutsideClickHandler>
              </Center>
            ) : (
              children
            )}
          </Modal>
        ) : null}
      </PoseGroup>
      {show ? <DisableScrolling /> : null}
    </>
  )
}

ModalComponent.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
  transparent: PropTypes.bool,
  onClose: PropTypes.func
}

export default ModalComponent
