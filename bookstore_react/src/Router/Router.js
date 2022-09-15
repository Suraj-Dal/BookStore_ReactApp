import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Forget from '../Components/Forget/Forget';
import Account from '../Pages/Account/Account';
import Reset from '../Components/Reset/Reset';

function RouterComponent() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Reset" element={<Reset />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouterComponent