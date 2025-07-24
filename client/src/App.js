import React from 'react'
import Header from './Components/Headers/Header'
import Page from './Components/MainPages/Page'
import {BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'



const App = () => {
  return (
    <DataProvider>
    <Router>
    <div className='App'>
      <Header/>
      <Page/>
    </div>
    </Router>
    </DataProvider>
  )
}

export default App
