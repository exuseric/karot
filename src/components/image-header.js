import React from 'react'
import PropTypes from 'prop-types'
import style from '../styles/header.module.scss'
import { capitalize } from '../utils/format'

const ImageHeader = ({ title }) => {
  return (
    <header className={`header content-center ${style.image_header}`}>
      <h1 className={`title text-xl`}>{capitalize(title)}</h1>
    </header>
  )
}

export default ImageHeader

ImageHeader.defaultProps = {
  title: '',
  img: 'images/carrot.jpg'
}

ImageHeader.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string
}
