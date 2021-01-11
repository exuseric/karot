import React from 'react'
import { logout } from '../utils/auth'
import style from '../styles/form.module.scss'

const LogoutButton = () => {
  return (
    <button type='submit' className={`button btn-default ${style.form_submit}`} onClick={() => logout()}>
      Logout
    </button>
  )
}

export default LogoutButton
