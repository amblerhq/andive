import React from 'react'
import styled from 'styled-components'
import {motion, AnimatePresence} from 'framer-motion'

const OverlayRoot = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface Props {
  children?: React.ReactNode
}

function Overlay(props: Props) {
  const {children} = props

  return (
      <AnimatePresence>
        <div style={{overflowX: 'hidden', height: '100%'}}>
          <OverlayRoot
            initial={{opacity: 0, x: 200}}
            animate={{opacity: 1, x: 0}}
            transition={{ease: 'easeOut', opacity: {duration: 0.2}}}
          >
            {children}
          </OverlayRoot>
          </div>
      </AnimatePresence>
  )
}

export default Overlay
