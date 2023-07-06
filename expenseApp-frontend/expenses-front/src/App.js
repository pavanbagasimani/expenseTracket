import React from 'react'
import NavBar from './components/NavBar'
import './App.css'

const App=()=>{
  return(
      <div id='app'>
          <h1 id='tracker'>Expense Tracker</h1>
          <NavBar/>
      </div>
  )
}

export default App