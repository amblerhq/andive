import React, {createContext} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import * as palette from '../constants/palette'
import {ZIndexes} from '../constants/enum'

import Hover from './hover'
import {FullWidthDivider, Divider} from './autocomplete'
import Info from './info'
import * as Typography from './typography'
import ArrowRightIcon from './icons/arrow-right'
import BackIcon from './icons/back'

const MenuContext = createContext({onClick() {}})

const MenuLayout = styled.ul`
  box-sizing: border-box;
  list-style: none;

  width: calc(100% - 16px);
  margin: 0 8px;
  padding: 8px;

  background: white;
  border: 1px solid ${palette.lightGrey};
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 ${palette.darkGrey}44;

  /* To crop the child suggestion :hover effect */
  overflow: hidden;

  z-index: ${ZIndexes.ABSOLUTE};

  margin-bottom: ${props => props.bottomFootprint || 0}px;
`

const OptionLayout = styled.div`
  cursor: pointer;
`

function Option({id, children, ...props}) {
  const {onClick} = React.useContext(MenuContext)

  return (
    <OptionLayout id={id} onClickCapture={() => onClick(id)} {...props}>
      {children}
    </OptionLayout>
  )
}

Option.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
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
      <ArrowRightIcon color={palette.mediumGrey} />
    </OptionGroupLayout>
  )
}

OptionGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
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
    background: ${palette.mediumGrey}20;
  }
`

const Container = styled.div`
  padding: 0 8px;
`

const Menu = React.forwardRef(function Menu({children, bottomFootprint, onClick, ...props}, ref) {
  const [state, dispatch] = React.useReducer(reducer, initialState(children))
  const length = React.Children.count(state.options)
  const contextValue = React.useMemo(
    () => ({
      onClick
    }),
    [onClick]
  )

  return (
    <MenuContext.Provider value={contextValue}>
      <MenuLayout ref={ref} bottomFootprint={bottomFootprint} {...props}>
        {state.stack.length > 0 && (
          <>
            <Container>
              <BackOption>
                <BackButton color={palette.mediumGrey} circle onClick={() => dispatch({type: 'navigate/back'})} />
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
        <Container>
          {React.Children.map(state.options, (child, index) => {
            return (
              <React.Fragment key={index}>
                <Hover padding={16}>
                  {React.cloneElement(child, {
                    onClick(children) {
                      return () => {
                        if (child.type === OptionGroup) {
                          dispatch({type: 'navigate/push', options: children, label: child.props.label})
                        }
                      }
                    }
                  })}
                </Hover>
                {index !== length - 1 && <Divider />}
              </React.Fragment>
            )
          })}
        </Container>
      </MenuLayout>
    </MenuContext.Provider>
  )
})

Menu.Option = Option
Menu.OptionGroup = OptionGroup

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  bottomFootprint: PropTypes.number
}

export default Menu
