import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { isAuthenticated } from '../../utils/auth'
import style from '../../styles/navigation.module.scss'
import OpenMenu from '../../images/icons/open-menu.inline.svg'
import CloseMenu from '../../images/icons/close-menu.inline.svg'
import LoginButton from '../login-button'
import ButtonIcon from '../../images/icons/chevron-down.inline.svg'

const Navigation = () => {
  const [isMenu, setIsMenu] = useState(false)
  const [auth, setAuth] = useState(false)
  const [accMenuOpen, setIsAccMenuOpen] = useState(false)

  const [pageLinks] = useState([
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
  const [accountLinks] = useState([
    {
      name: 'Your connections',
      route: '/connections'
    },
    {
      name: 'Settings',
      route: '/account/settings'
    }
  ])

  useEffect(() => {
    const authenticated = isAuthenticated()
    setAuth(authenticated)
  }, [])

  const handleMenu = () => setIsMenu(!isMenu)
  const handleAccountMenu = () => setIsAccMenuOpen(!accMenuOpen)
  const handleNavigation = () => {
    setIsAccMenuOpen(false)
    setIsMenu(false)
  }

  return (
    <nav className={`${style.nav}`}>
      <div className={`${style.top}`}>
        <Link to='/' className={`${style.logo}`}>
          <StaticImage src='../images/icon.png' alt='Logo' />
        </Link>
        <button className={`button ${style.nav__menu_btn}`} onClick={handleMenu}>
          {isMenu ? <CloseMenu className={`icon`} /> : <OpenMenu className={`icon`} />}
        </button>
      </div>
      {isMenu ? (
        <div className={`${style.menu}`}>
          {auth ? (
            <ul className={`${style.account_menu}`}>
              <button className={`button ${style.menu_btn}`} onClick={handleAccountMenu}>
                My Account
                <span className={accMenuOpen ? `${style.flip_up}` : `${style.flip_down}`}>
                  <ButtonIcon className={`icon`} />
                </span>
              </button>
              {accMenuOpen ? (
                <div className={`${style.menu_links}`}>
                  {accountLinks.map((link) => (
                    <li key={link.route} onClick={handleNavigation}>
                      <Link to={link.route} className={`link ${style.menu_link}`}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </div>
              ) : null}
            </ul>
          ) : null}
          <ul className={`${style.menu_links}`}>
            {pageLinks.map((link, idx) => (
              <li key={idx} onClick={handleNavigation}>
                <Link to={link.route} className={`link ${style.menu_link}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <LoginButton />
        </div>
      ) : null}
    </nav>
  )
}

export default Navigation
