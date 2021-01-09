import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import style from '../styles/navigation.module.scss'
import OpenMenu from '../images/icons/open-menu.inline.svg'
import CloseMenu from '../images/icons/close-menu.inline.svg'

const Navigation = () => {
  const [links] = useState([
    {
      name: 'home',
      route: '/'
    },
    {
      name: 'about',
      route: '/about'
    },
    {
      name: 'contact',
      route: '/contact'
    },
    {
      name: 'connections',
      route: '/connections'
    }
  ])

  const [isMenu, setIsMenu] = useState(false)

  const handleMenu = () => setIsMenu(!isMenu)

  return (
    <nav className={`${style.main_nav}`}>
      <Link to='/' className={`${style.logo}`}>
        <StaticImage src='../images/icon.png' alt='Logo' />
      </Link>
      <button className={`button ${style.main_menu__btn}`} onClick={handleMenu}>
        {isMenu ? <CloseMenu className={`icon`} /> : <OpenMenu className={`icon`} />}
      </button>
      <ul className={`${style.main_menu__links} ${isMenu ? `${style.show_menu}` : `${style.hide_menu}`}`}>
        {links.map((link, idx) => (
          <li key={idx}>
            <Link to={link.route} className={`link ${style.main_menu__link}`}>
              {link.name}
            </Link>
          </li>
        ))}
        <Link to='/login' className={`link text-center text-md ${style.login_btn}`}>
          login
        </Link>
      </ul>
    </nav>
  )
}

export default Navigation
