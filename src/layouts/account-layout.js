import React from 'react'
import Navigation from '../components/account-nav'
import style from '../styles/account.module.scss'

const AccountLayout = ({ children }) => {
  return (
    <main className={`main`}>
      <Navigation />
      <section className={`content`}>{children}</section>
    </main>
  )
}

export default AccountLayout
