import React from 'react'
import style from '../styles/about.module.scss'
import Layout from '../layouts/default-layout'
import SEO from '../components/seo'
import ImageHeader from '../components/image-header'

const About = () => {
  const title = 'about'

  return (
    <Layout>
      <SEO title={title} />
      <ImageHeader title={title} />
      <div className={`${style.about_content}`}>
        <article className={`${style.content}`}>
          <header className={`header text-center`}>
            <h1 className={`subtitle text-md`}>What is karot?</h1>
          </header>
          <p>
            Karot is an information system that aims at finding connections between seemingly different information.{' '}
          </p>
          <p>
            With karot users are able to see the relationships between the different data and the different everyday
            life task that they can perform. for example; Medical and legal and finacial information for starting a food
            production business.
          </p>
        </article>
        <article className={`${style.content}`}>
          <header className={`header text-center`}>
            <h1 className={`subtitle text-md`}>How does this work?</h1>
          </header>
          <ol className={`${style.list}`} type='1'>
            <li className={`${style.list_item}`}>
              <span className={`text-md ${style.list_item__no}`}>1</span>
              <span className={`${style.list_item__content}`}>
                You can browse through karot; <i className={`emphasis`}>find, save and share</i> the connections that
                they find interesting or informative.
              </span>
            </li>
            <li className={`${style.list_item}`}>
              <span className={`text-md ${style.list_item__no}`}>2</span>
              <span className={`${style.list_item__content}`}>
                You can make a connection through karot; <i className={`emphasis`}>view, save and share</i> the
                connection.
              </span>
            </li>
          </ol>
        </article>
      </div>
    </Layout>
  )
}

export default About
