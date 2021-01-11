import React, { useState } from 'react'
import { Router } from '@reach/router'

import AccountLayout from '../layouts/account-layout'
import Home from '../auth-pages/account'
import Details from '../auth-pages/account-details'
import Login from '../components/account-loading'

import { login, isAuthenticated, getProfile } from '../utils/auth'

const Account = () => {
  const [user, setUser] = useState(null)
  const [auth, setAuth] = useState(false)
  // if (!isAuthenticated()) login()

  if (isAuthenticated()) {
    setUser(getProfile())
  }

  return (
    <AccountLayout>
      {auth ? (
        <Router>
          <Home path='/account/' user={user} />
          <Details path='/acount/details' />
        </Router>
      ) : (
        <Login />
      )}
    </AccountLayout>
  )
}

export default Account
