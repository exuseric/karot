import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { isAuthenticated } from '../../utils/auth'
import style from '../../styles/navigation.module.scss'
import ButtonIcon from '../../images/icons/chevron-down.inline.svg'
import LoginButton from '../login-button'
import LogoutButton from '../logout-button'
import OpenMenu from '../../images/icons/open-menu.inline.svg'
import CloseMenu from '../../images/icons/close-menu.inline.svg'

const Navigation = () => {
  const [isMenu, setIsMenu] = useState(false)
  const [auth, setAuth] = useState(false)
  const [links] = useState([
    {
      name: 'Your connections',
      route: '/connections'
    },
    {
      name: 'Settings',
      route: '/account/settings'
    }
  ])

  const checkScreen = () => {
    const { matches } = window.matchMedia('(min-width: 768px)')

    if (matches) {
      setIsMenu(true)
    }
    if (!matches) {
      setIsMenu(false)
    }
  }

  const handleMenu = () => setIsMenu(!isMenu)
  const handleNavigation = () => {
    setIsMenu(false)
  }

  useEffect(() => {
    const authenticated = isAuthenticated()
    setAuth(authenticated)
    checkScreen()
  }, [])
  return (
    <nav className={`${style.nav}`}>
      <div className={`${style.top}`}>
        <Link to='/' className={`${style.logo}`}>
          <StaticImage src='../../images/icon.png' alt='Logo' />
        </Link>
        <button type='button' className={`button ${style.nav__menu_btn}`} onClick={handleMenu}>
          {isMenu ? <CloseMenu className={`icon`} /> : <OpenMenu className={`icon`} />}
        </button>
      </div>
      {isMenu && (
        <div className={`${style.menu}`}>
          <ul className={`${style.menu_links}`}>
            {links.map((link) => (
              <li key={link.route} onClick={handleNavigation}>
                <Link to={link.route} className={`link ${style.menu_link}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {auth ? <LogoutButton type='auth-btn' /> : <LoginButton type='auth-btn' />}
        </div>
      )}
    </nav>
  )
}

export default Navigation
