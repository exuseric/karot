import React from 'react'
import { Router } from '@reach/router'

import AccountLayout from '../layouts/account-layout'
import SEO from '../components/seo'
import Home from '../auth-pages/account-details'

import { login, isAuthenticated, getProfile } from '../utils/auth'

const Account = () => {
  if (!isAuthenticated()) login()

  const user = getProfile()

  return (
    <AccountLayout>
      <SEO title={`Account | ${user.nickname}`} />
      <Router>
        <Home path='/account/' user={user} />
      </Router>
    </AccountLayout>
  )
}

export default Account
