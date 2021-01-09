import React from 'react'
import Layout from '../layouts/default-layout'
import SEO from '../components/seo'
import Landing from '../components/landing'

const Home = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Landing />
    </Layout>
  )
}

export default Home
