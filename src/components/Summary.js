import React, { useContext } from 'react'
import GlobalState from '../state'

export default () => {
  const {
    state: { name, surname },
  } = useContext(GlobalState.Context)

  return (
    <div>
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
    </div>
  )
}
