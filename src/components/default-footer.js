import React from 'react'
import { Link } from 'gatsby'

import style from '../styles/footer.module.scss'
import { pageLinks, resources } from '../utils/links'
import { StaticImage } from 'gatsby-plugin-image'

const DefaultFooter = () => {
  return (
    <footer className={`${style.footer}`}>
      <section className={`${style.footer_links}`}>
        <header className={`text-sm subtitle ${style.header}`}>
          <h3>page links</h3>
        </header>
        <ul className={`${style.links}`}>
          {pageLinks.map((link) => (
            <li key={link.route}>
              <Link to={link.route} className={`link`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${style.footer_links}`}>
        <header className={`text-sm subtitle ${style.header}`}>
          <h3>resources</h3>
        </header>
        <ul className={`${style.links}`}>
          <li>
            <a
              href='https://netlify.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={`link ${style.resource}`}
            >
              <StaticImage src='../images/netlify.png' alt='resource' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={`link ${style.resource}`}
            >
              <StaticImage src='../images/github.png' alt='resource' />
            </a>
          </li>
          <li>
            <a href='https://fauna.com/' target='_blank' rel='noopener noreferrer' className={`link ${style.resource}`}>
              <StaticImage src='../images/fauna.png' alt='resource' />
            </a>
          </li>
          <li>
            <a href='https://auth0.com/' target='_blank' rel='noopener noreferrer' className={`link ${style.resource}`}>
              <StaticImage src='../images/auth0.png' alt='resource' />
            </a>
          </li>
        </ul>
      </section>
      <p className={`${style.copyright}`}>&copy; {new Date().getFullYear()} Eric Maina.</p>
    </footer>
  )
}

export default DefaultFooter
