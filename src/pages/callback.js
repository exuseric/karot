import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Layout from '../layouts/default-layout'
import { useSiteMeta } from '../utils/siteMetadata'
import Connect from '../images/icons/connectdevelop.inline.svg'
import ConnectForm from '../components/form/connect-form'
import LoginButton from '../components/login-button'
import { StaticImage } from 'gatsby-plugin-image'

const Callback = () => {
  const { title, description } = useSiteMeta()

  return (
    <Layout>
      <Header title={title} description={description} />
      {/* <Connect className={`icon`} /> */}
      <div className={`content-center`}>
        <StaticImage src='../images/icon.png' maxWidth={200} maxHeight={200} alt='logo' />
      </div>
      <ConnectForm />
      <LoginButton />
    </Layout>
  )
}

export default Callback
