import React from 'react'
import style from '../styles/account-loading.module.scss'
import Header from './header'
import LoginButton from './login-button'
import ConnectForm from '../components/form/connect-form'

const Login = () => {
  return (
    <div className={`${style.loading}`}>
      <Header title='You are not logged in! Please login to continue.' />
      <LoginButton />
      <ConnectForm />
    </div>
  )
}

export default Login
