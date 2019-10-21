import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import useElementRect from '../lib/use-element-rect'

const ButtonGroupRoot = styled.div`
  display: inline-flex;

  ${props =>
    !props.mobile &&
    css`
      /* Add 32px spacing between 2 buttons */
      & > div[data-andive-type='button'] {
        margin-right: 32px;
      }

      & > div[data-andive-type='button']:last-of-type {
        margin-right: 0px;
      }
    `}
`

// We used to pass down the props minWidth and small to the <Button /> components, but we do not know if the direct
// child will be a Button or not. Therefore we pass them through the context.
export const ButtonGroupContext = React.createContext({})

/**
 * To handle all rules associated to multiple buttons, we introduce the ButtonGroup component.
 *
 * - When at least 2 buttons are rendered, the biggest width is used on every button. To do so,
 * instead of doing it automagically, we expect the developper to pass a `minWidth` prop corresponding
 * to the biggest button width in design specs. This width is applied to all buttons.
 * - When the screen is too small, we want to force a "loose" mode which remove any min-width constraints
 * to let buttons resize down as much as possible. This is done by listening to the resize event and comparing
 * the base width the button group should have when it has enough space to the screen width.
 */
function ButtonGroup({minWidth, children}) {
  const ref = React.useRef(null)
  const rect = useElementRect(ref)
  const [small, setSmall] = React.useState(false)
  const [baseWidth, setBaseWidth] = React.useState(null)

  React.useEffect(() => {
    if (!baseWidth && rect && rect.width) {
      setBaseWidth(rect.width)
    }
  }, [baseWidth, rect])

  const onResize = React.useCallback(() => {
    if (!baseWidth) {
      return
    }

    if (!small && window.innerWidth < baseWidth) {
      setSmall(true)
    } else if (small && window.innerWidth >= baseWidth) {
      setSmall(false)
    }
  })

  React.useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [onResize])

  const contextValue = React.useMemo(() => ({minWidth, small}), [minWidth, small])

  return (
    <ButtonGroupRoot ref={ref} mobile={small}>
      <ButtonGroupContext.Provider value={contextValue}>{children}</ButtonGroupContext.Provider>
    </ButtonGroupRoot>
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  minWidth: PropTypes.number
}

export default ButtonGroup
