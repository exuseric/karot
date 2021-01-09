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
              netlify
            </a>
          </li>
          <li>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={`link ${style.resource}`}
            >
              <StaticImage src='../images/icons/github.svg' alt='resource' />
              github
            </a>
          </li>
          <li>
            <a href='https://fauna.com/' target='_blank' rel='noopener noreferrer' className={`link ${style.resource}`}>
              <img
                src='https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/e4ea73c2bebc64bd65d84964576515b9/fauna-logo-new-v2.svg'
                alt='resource'
              />
              fauna
            </a>
          </li>
          <li>
            <a href='https://auth0.com/' target='_blank' rel='noopener noreferrer' className={`link ${style.resource}`}>
              <StaticImage src='../images/icon.png' alt='resource' />
              auth0
            </a>
          </li>
        </ul>
      </section>
      <p className={`${style.copyright}`}>&copy; {new Date().getFullYear()} Eric Maina.</p>
    </footer>
  )
}

export default DefaultFooter
