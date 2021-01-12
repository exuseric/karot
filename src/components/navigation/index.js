import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { isAuthenticated } from '../../utils/auth'
import { pageLinks as links } from '../../utils/links'
import style from '../../styles/navigation.module.scss'
import OpenMenu from '../../images/icons/open-menu.inline.svg'
import CloseMenu from '../../images/icons/close-menu.inline.svg'
import LoginButton from '../login-button'
import LogoutButton from '../logout-button'

const Navigation = () => {
  const [isMenu, setIsMenu] = useState(false)
  const [auth, setAuth] = useState(false)

  const checkScreen = () => {
    const { matches } = window.matchMedia('(min-width: 768px)')

    if (matches) {
      setIsMenu(true)
    }
    if (!matches) {
      setIsMenu(false)
    }
  }

  useEffect(() => {
    const authenticated = isAuthenticated()
    setAuth(authenticated)
    checkScreen()
  }, [])

  const handleMenu = () => setIsMenu(!isMenu)
  const handleNavigation = () => {
    setIsMenu(false)
  }

  return (
    <nav className={`${style.nav}`}>
      <div className={`${style.top}`}>
        <Link to='/' className={`${style.logo}`}>
          <StaticImage src='../../images/icon.png' alt='Logo' />
        </Link>
        <button className={`button ${style.nav__menu_btn}`} onClick={handleMenu}>
          {isMenu ? <CloseMenu className={`icon`} /> : <OpenMenu className={`icon`} />}
        </button>
      </div>
      {isMenu ? (
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
      ) : null}
    </nav>
  )
}

export default Navigation
