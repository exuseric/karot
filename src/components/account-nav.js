import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import style from '../styles/navigation.module.scss'
import { getProfile } from '../utils/auth'
import ChevronDown from '../images/icons/chevron-down.inline.svg'
import { Link } from 'gatsby'

const Navigation = () => {
  const { email, name, nickname, picture, email_verified } = getProfile()
  const [isMenu, setIsMenu] = useState(false)
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

  const handleMenu = () => setIsMenu(!isMenu)
  return (
    <nav className={`${style.account_nav}`}>
      <div className={`${style.logo}`}>
        <StaticImage src='../images/icon.png' alt='logo' />
      </div>

      <section className={`${style.account_menu}`}>
        <button className={`${style.account_menu__btn}`} onClick={handleMenu}>
          <div className={`${style.avatar}`}>
            <img src={picture} alt='avatar' />
          </div>
          <ChevronDown className={`icon ${isMenu && 'icon_flip'}`} />
        </button>

        <ul className={`${style.account_menu__links}`}>
          {links.map((link) => (
            <Link to={link.route} className={`link`}>
              {link.name}
            </Link>
          ))}
          <button className={`button btn-danger`}>log out</button>
        </ul>
      </section>
    </nav>
  )
}

export default Navigation
