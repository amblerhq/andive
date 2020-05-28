import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Typography, Box, palette } from '@ambler/andive'

const Vertical = styled.div<{ width?: number }>`
  flex-shrink: 0;

  display: flex;
  flex-flow: column nowrap;

  width: ${props => (props.width ? props.width + 'px' : 'inherit')};

  background: white;
  min-height: 100vh;
`

const AmblerLink = ({ href, typo: Typo = Typography.Body1, children }) => {
  return (
    <Link href={href}>
      <a>
        <Box>
          <Typo color={palette.mediumBerryBlue}>{children}</Typo>
        </Box>
      </a>
    </Link>
  )
}

export function NavMenu() {
  return (
    <Vertical width={256}>
      <AmblerLink href="/" typo={Typography.H1}>
        Garden
      </AmblerLink>
      <Box>
        <Typography.Body2>Atoms</Typography.Body2>
      </Box>
      <AmblerLink href="/atom/text">Text</AmblerLink>
      <AmblerLink href="/atom/box">Box</AmblerLink>
      <Box>
        <Typography.Body2>Layout</Typography.Body2>
      </Box>
      <Box>
        <Typography.Body2>Components</Typography.Body2>
      </Box>
    </Vertical>
  )
}
