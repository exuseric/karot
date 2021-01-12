import React from 'react'
import style from '../styles/login.module.scss'
import Header from './header'
import LoginButton from './login-button'
import ConnectForm from './form/connect-form'
import SEO from './seo'

const Login = () => {
  return (
    <div className={`${style.login}`}>
      <SEO title='Account | Login' />
      <Header title='You are not logged in! Please login to continue.' />
      <LoginButton type='auth-btn' />
      <ConnectForm />
    </div>
  )
}

export default Login
