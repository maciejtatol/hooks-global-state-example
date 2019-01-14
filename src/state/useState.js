import { useState } from 'react'

export const defaultState = {
  name: 'John',
  surname: 'Doe',
}

export default (initialState = defaultState) => {
  const [state, setState] = useState(initialState)

  // Ready to use methods
  const setName = name =>
    setState({
      ...state,
      name,
    })

  const setSurname = surname =>
    setState({
      ...state,
      surname,
    })

  return {
    state,
    actions: {
      setName,
      setSurname,
    },
  }
}
