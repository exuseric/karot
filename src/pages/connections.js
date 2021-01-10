import React from 'react'
import Layout from '../layouts/default-layout'
import SEO from '../components/seo'
import ImageHeader from '../components/image-header'
import Header from '../components/header'
import ConnectForm from '../components/connect-form'
import Constitution from '../components/constitution'
import { CstProvider } from '../store/constitution'

const Connections = () => {
  const title = 'connections'
  return (
    <Layout>
      <SEO title={title} />
      <ImageHeader title={title} />
      <ConnectForm />
      <Header title='all connections' />
      <div className={`connections`}>
        <CstProvider>
          <Constitution />
        </CstProvider>
      </div>
    </Layout>
  )
}

export default Connections
