import React from 'react'
import Details from '../components/account/account-details'
import Connections from '../components/account/account-connections'
import ConnectForm from '../components/form/connect-form'
import SEO from '../components/seo'
import style from '../styles/account.module.scss'

const Account = ({ user }) => {
  return (
    <main className={`${style.account}`}>
      <SEO title={`${user && user.nickname} | Account`} />
      <section className={`${style.account_details} ${style.left}`}>
        <Details />
      </section>
      <section className={`${style.account_connections} ${style.center}`}>
        <Connections />
      </section>
      <section className={`${style.account_search} ${style.right}`}>
        <ConnectForm />
      </section>
    </main>
  )
}

export default Account
