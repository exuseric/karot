import React from 'react'
import PropTypes from 'prop-types'

import { logout } from '../utils/auth'
import style from '../styles/navigation.module.scss'

const LogoutButton = ({ type }) => {
  return (
    <button type='button' className={`button btn-default`} id={`${type}`} onClick={() => logout()}>
      Logout
    </button>
  )
}

export default LogoutButton

LogoutButton.defaultProps = {
  type: ''
}
LogoutButton.propTypes = {
  type: PropTypes.string
}
