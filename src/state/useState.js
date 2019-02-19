import { useReducer } from 'react'
import reducer from './reducer'
import { SET_NAME, SET_SURNAME } from './consts'

export const initialState = {
  name: 'John',
  surname: 'Doe',
}

export default initialState => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Example action creators
  const setName = name => dispatch({ type: SET_NAME, name })
  const setSurname = surname => dispatch({ type: SET_SURNAME, surname })

  return {
    state,
    actions: {
      setName,
      setSurname,
    },
  }
}
