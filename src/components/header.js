import React from 'react'
import PropTypes from 'prop-types'

import { capitalize } from '../utils/format'

const Header = ({ title, description }) => {
  return (
    <header className={`header`}>
      <h1 className={`title text-lg text-center`}>{capitalize(title)}</h1>
      <p className={`subtitle text-sm text-center`}>{description}</p>
    </header>
  )
}

export default Header

Header.defaultProps = {
  title: 'title',
  description: null
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
