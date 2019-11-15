import React, {createContext} from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import {ScrollTo} from 'react-scroll-to'

import * as palette from '../constants/palette'
import {ZIndexes} from '../constants/enum'

import Hover from './hover'
import {FullWidthDivider, Divider} from './autocomplete'
import Info from './info'
import ArrowRightIcon from './icons/arrow-right'
import BackIcon from './icons/back'
import useElementRect from '../lib/use-element-rect'

const MenuContext = createContext({onClick() {}})

const MenuLayout = styled.ul`
  box-sizing: border-box;
  list-style: none;

  width: ${props => (props.mobile ? '100%' : `calc(100% - 16px)`)};
  margin: 0 ${props => (props.mobile ? 0 : 8)}px;
  padding: 8px;

  background: white;
  border: 1px solid ${palette.mediumGrey};
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 ${palette.darkPrimary}44;

  /* To crop the child suggestion :hover effect */
  overflow: hidden;

  z-index: ${ZIndexes.ABSOLUTE};

  margin-bottom: ${props => props.bottomFootprint || 0}px;
`

const OptionLayout = styled.div`
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      & [data-andive-type='typography'] {
        color: ${palette.mediumPrimary};
      }
    `}
`

function Option({id, children, disabled, ...props}) {
  const {onClick} = React.useContext(MenuContext)

  return (
    <OptionLayout
      disabled={disabled}
      id={id}
      onClickCapture={() => {
        disabled ? null : onClick(id)
      }}
      {...props}
    >
      {children}
    </OptionLayout>
  )
}

Option.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool
}

const OptionGroupLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;

  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`

function OptionGroup({children, label, onClick, ...props}) {
  return (
    <OptionGroupLayout onClick={onClick(children)} {...props}>
      <Info>
        <Info.Label label={label} />
      </Info>
      <ArrowRightIcon color={palette.mediumPrimary} />
    </OptionGroupLayout>
  )
}

OptionGroup.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func
}

const initialState = children => ({
  options: children,
  stack: []
})

function reducer(prevState, action) {
  if (action.type === 'navigate/push') {
    return {
      ...prevState,
      stack: [{label: action.label, options: prevState.options}, ...prevState.stack],
      options: action.options
    }
  }

  if (action.type === 'navigate/back') {
    const [{options}, ...stack] = prevState.stack
    return {
      ...prevState,
      stack,
      options
    }
  }

  return prevState
}

const BackOption = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const BackButton = styled(BackIcon)`
  cursor: pointer;

  flex-shrink: 0;
  flex-basis: 32px;

  margin-top: 4px;

  background: white;
  :hover {
    background: ${palette.mediumPrimary}20;
  }
`

const Container = styled.div`
  padding: 0 8px;
`

const Menu = React.forwardRef(function Menu({className, children, bottomFootprint, onClick, mobile}, ref) {
  const [state, dispatch] = React.useReducer(reducer, initialState(children))
  const length = React.Children.count(state.options)
  const menuRef = React.useRef(null)
  const menuRect = useElementRect(menuRef)
  const contextValue = React.useMemo(
    () => ({
      onClick
    }),
    [onClick]
  )

  return (
    <MenuContext.Provider value={contextValue}>
      <MenuLayout className={className} ref={ref} bottomFootprint={bottomFootprint} mobile={mobile}>
        {state.stack.length > 0 && (
          <>
            <Container>
              <BackOption>
                <BackButton color={palette.mediumPrimary} circle onClick={() => dispatch({type: 'navigate/back'})} />
                <div style={{width: 8}} />
                <Info>
                  <Info.Label
                    label={state.stack
                      .map(s => s.label)
                      .reduce((acc, s) => [s, ...acc], [])
                      .join(' / ')}
                  />
                </Info>
              </BackOption>
            </Container>
            <FullWidthDivider />
          </>
        )}
        <ScrollTo>
          {({scrollTo}) => {
            return (
              <Container ref={menuRef}>
                {React.Children.map(state.options, (child, index) => {
                  function onClick(children) {
                    return () => {
                      if (child.type === OptionGroup) {
                        dispatch({type: 'navigate/push', options: children, label: child.props.label})
                        scrollTo({x: 0, y: menuRect ? menuRect.top - 16 : 0, smooth: true})
                      }
                    }
                  }

                  return (
                    <React.Fragment key={index}>
                      <Hover padding={16}>{React.cloneElement(child, {onClick})}</Hover>
                      {index !== length - 1 && <Divider />}
                    </React.Fragment>
                  )
                })}
              </Container>
            )
          }}
        </ScrollTo>
      </MenuLayout>
    </MenuContext.Provider>
  )
})

Menu.Option = Option
Menu.OptionGroup = OptionGroup

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  bottomFootprint: PropTypes.number,
  mobile: PropTypes.bool
}

export default Menu
