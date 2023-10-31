import React, {createContext} from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import {ScrollTo} from 'react-scroll-to'

import * as palette from '../constants/palette'
import {ZIndexes} from '../constants/enum'

import {FullWidthDivider, Divider} from './autocomplete'
import Info from './info'
import ArrowRightIcon from './icons/arrow-right'
import BackIcon from './icons/back'
import useElementRect from '../lib/use-element-rect'
import Box from './box'
import Icon from './icon'
import {Body1} from './typography'

const MenuContext = createContext({onClick() {}})

const MenuLayout = styled.ul`
  box-sizing: border-box;
  list-style: none;

  width: ${props => (props.mobile ? '100%' : `calc(100% - 16px)`)};
  margin: 0 ${props => (props.mobile ? 0 : 8)}px;
  padding: 8px;

  background: white;
  border: 1px solid ${palette.darkGrey};
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 ${palette.darkPrimary}44;

  /* To crop the child suggestion :hover effect */
  overflow: hidden;

  z-index: ${ZIndexes.ABSOLUTE};

  margin-bottom: ${props => props.bottomFootprint || 0}px;
`

const OptionLayout = styled.div`
  cursor: pointer;
  :hover {
    ${props => !props.disabled && `background: #fafafa;`}
  }

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

  :hover {
    background: #fafafa;
  }
`

function OptionGroup({children, label, onClick, leftIcon, ...props}) {
  return (
    <OptionGroupLayout onClick={onClick(children)} {...props}>
      {leftIcon ? (
        <Icon icon={leftIcon}>
          <Body1>{label}</Body1>
        </Icon>
      ) : (
        <Box>
          <Body1>{label}</Body1>
        </Box>
      )}
      <ArrowRightIcon color={palette.mediumPrimary} />
    </OptionGroupLayout>
  )
}

OptionGroup.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  leftIcon: PropTypes.node
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
    background: #fafafa;
  }
`

const Menu = React.forwardRef(function Menu(
  {className, children, bottomFootprint, onClick, mobile, noScroll = false},
  ref
) {
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
            <FullWidthDivider />
          </>
        )}
        <ScrollTo>
          {({scrollTo}) => {
            return (
              <div ref={menuRef}>
                {React.Children.map(state.options, (child, index) => {
                  function onClick(children) {
                    return () => {
                      if (child.type === OptionGroup) {
                        dispatch({type: 'navigate/push', options: children, label: child.props.label})
                        if (!noScroll) {
                          scrollTo({x: 0, y: menuRect ? menuRect.top - 16 : 0, smooth: true})
                        }
                      }
                    }
                  }

                  return (
                    <React.Fragment key={index}>
                      {React.cloneElement(child, {onClick})}
                      {index !== length - 1 && <Divider />}
                    </React.Fragment>
                  )
                })}
              </div>
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
  mobile: PropTypes.bool,
  noScroll: PropTypes.bool
}

export default Menu
