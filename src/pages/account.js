import React, { useState } from 'react'
import { Router } from '@reach/router'

import AccountLayout from '../layouts/account-layout'
import Home from '../auth-pages/account'
import Login from '../components/login'

import { login, isAuthenticated, getProfile } from '../utils/auth'

const Account = () => {
  const [user, setUser] = useState(null)
  const [auth, setAuth] = useState(false)
  // if (!isAuthenticated()) login()

  if (isAuthenticated()) {
    setUser(getProfile())
    setAuth(true)
  }

  return (
    <AccountLayout>
      {!auth ? (
        <Router>
          <Home path='/account/' />
        </Router>
      ) : (
        <Login />
      )}
    </AccountLayout>
  )
}

export default Account
