import React, { useContext } from 'react'
import Layout from '../layouts/default-layout'
import SEO from '../components/seo'
import ImageHeader from '../components/image-header'
import Header from '../components/header'
import ConnectForm from '../components/form/connect-form'
import Constitution from '../components/constitution'
import { CstContext } from '../store/constitution'
import style from '../styles/connections.module.scss'

const Connections = () => {
  const title = 'connections'
  const { allConnections } = useContext(CstContext)
  return (
    <Layout>
      <SEO title={title} />
      <ImageHeader title={title} />
      {allConnections.length === 0 ? (
        <div className={`${style.connections}`}>
          <ConnectForm />
          <Header title='all connections' />
          <div className={`${style.connection}`}>
            <Constitution />
          </div>
        </div>
      ) : null}
    </Layout>
  )
}

export default Connections
