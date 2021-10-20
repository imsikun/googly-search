import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ResultContextProvider } from './contexts/ResultContextProvider'

import './global.css'

import App from './App'

ReactDom.render(
  <ResultContextProvider>
   <Router>
      <App /> 
   </Router>
  </ResultContextProvider>,
document.getElementById('root')
)