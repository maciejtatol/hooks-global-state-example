import React, { createContext } from 'react'
import { node, shape } from 'prop-types'
import useState from './useState'

// This component lifts up state to make it globally accessible
// It provides its own Provider that will wraps it with Context API Provider,
// and Context to utilize it
function GlobalState(useValue) {
  const Context = createContext()

  const Provider = props => {
    const { children, defaultState } = props
    const value = useValue(defaultState)

    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  Provider.propTypes = {
    children: node.isRequired,
    defaultState: shape({}), // defaultState depends on project reqiurements
  }

  Provider.defaultProps = {
    defaultState: undefined,
  }

  return {
    Context,
    Provider,
  }
}

export default GlobalState(useState)
