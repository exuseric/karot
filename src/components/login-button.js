import React from 'react'
import PropTypes from 'prop-types'

import style from '../styles/navigation.module.scss'
import { login } from '../utils/auth'

const LoginButton = ({ type }) => {
  return (
    <button type='button' className={`button btn-default`} id={`${type}`} onClick={() => login()}>
      Login
    </button>
  )
}

export default LoginButton

LoginButton.defaultProps = {
  type: ''
}
LoginButton.propTypes = {
  type: PropTypes.string
}
