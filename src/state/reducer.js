import { SET_NAME, SET_SURNAME } from './consts'

export default (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name }
    case SET_SURNAME:
      return { ...state, surname: action.surname }
    default:
      return state
  }
}
