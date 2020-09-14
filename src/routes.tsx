import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// import Route from './Route'

import Landing from './pages/Landing'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Landing} />
    
    {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
  </BrowserRouter>
)

export default Routes