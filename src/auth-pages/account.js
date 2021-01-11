import React from 'react'
import SEO from '../components/seo'

const Account = ({ user }) => {
  return (
    <div>
      <SEO title={`Account | ${user.nickname}`} />
    </div>
  )
}

export default Account
