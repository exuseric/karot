import React from 'react'

import style from '../styles/form.module.scss'
import { login } from '../utils/auth'

const LoginButton = () => {
  return (
    <button type='submit' className={`button btn-default ${style.form_submit}`} onClick={() => login()}>
      Login
    </button>
  )
}

export default LoginButton
