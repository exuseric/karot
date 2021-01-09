import React from 'react'
import DefaultFooter from '../components/default-footer'
import Navigation from '../components/navigation'

const Layout = ({ children }) => {
  return (
    <div className={`main`}>
      <Navigation />
      <main className='content'>{children}</main>
      <DefaultFooter />
    </div>
  )
}

export default Layout
