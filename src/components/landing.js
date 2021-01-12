import React from 'react'

import style from '../styles/landing.module.scss'
import ConnectForm from './form/connect-form'
import LoginButton from './login-button'

const Landing = () => {
  return (
    <div className={`${style.landing}`}>
      <header className={`text-center ${style.header}`}>
        <h1 className={`title text-2xl ${style.title}`}>karot</h1>
        <h2 className={`text-sm ${style.subtitle}`}>A progressive information system.</h2>
      </header>

      <section className={`${style.intro}`}>
        <article>
          <p>karot makes connections between seemingly unrelated information and share them with the everyone else.</p>
          <p>
            The aim of karot is to make the perfoming of tasks like
            <i className='emphasis'>
              {' '}
              — paying rent, applying for a bussiness loan, starting an e-commerce platform —{' '}
            </i>
            as easy as possible by providing information related to those tasks either
            <i className='emphasis'>
              {' '}
              legal information, medical information, financial information or constitutional information.{' '}
            </i>
          </p>
          <p>
            With karot users can participate in forming the connections between the information out there in the wild.
          </p>
        </article>
      </section>

      <section className={`${style.actions}`}>
        <ConnectForm />
      </section>
    </div>
  )
}

export default Landing
