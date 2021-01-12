import React from 'react'

import Navigation from '../components/navigation/account-nav'

const AccountLayout = ({ children }) => {
  return (
    <main className={`main`}>
      <Navigation />
      <section className={`content`}>{children}</section>
    </main>
  )
}

export default AccountLayout
