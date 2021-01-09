import React from 'react'
import PropTypes from 'prop-types'

import { capitalize } from '../utils/format'

const Header = ({ title }) => {
  return (
    <header className={`header`}>
      <h1 className={`title text-lg text-center`}>{capitalize(title)}</h1>
    </header>
  )
}

export default Header

Header.defaultProps = {
  title: 'title'
}

Header.propTypes = {
  title: PropTypes.string
}
