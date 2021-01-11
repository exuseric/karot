import React, { useContext } from 'react'
import Layout from '../layouts/default-layout'
import SEO from '../components/seo'
import ImageHeader from '../components/image-header'
import Header from '../components/header'
import ConnectForm from '../components/form/connect-form'
import Constitution from '../components/constitution'
import { CstContext } from '../store/constitution'

const Connections = () => {
  const title = 'connections'
  const { allConnections } = useContext(CstContext)
  return (
    <Layout>
      <SEO title={title} />
      <ImageHeader title={title} />
      <ConnectForm />
      {allConnections.length !== 0 ? (
        <>
          <Header title='all connections' />
          <div className={`connections`}>
            <Constitution />
          </div>
        </>
      ) : null}
    </Layout>
  )
}

export default Connections
