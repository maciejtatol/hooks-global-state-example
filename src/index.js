import React from 'react'
import ReactDOM from 'react-dom'
import GlobalState from './state'
import Summary from './components/Summary'
import Inputs from './components/Inputs'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container">
      <GlobalState.Provider>
        <h1>Global state management example</h1>
        <Inputs />
        <h2>Summary</h2>
        <Summary />
      </GlobalState.Provider>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
