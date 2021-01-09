import React from 'react'
import style from '../styles/contact.module.scss'
import Layout from '../layouts/default-layout'
import ContactForm from '../components/contact-form'
import ImageHeader from '../components/image-header'
import SEO from '../components/seo'

const Contact = () => {
  const title = 'contact'

  return (
    <Layout>
      <SEO title={title} />
      <ImageHeader title={title} />
      <ContactForm />
    </Layout>
  )
}

export default Contact
