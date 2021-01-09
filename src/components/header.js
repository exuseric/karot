import React from 'react'

const Header = ({ title }) => {
  return (
    <header className={`header`}>
      <h1 className={`title text-lg text-center`}>{title}</h1>
    </header>
  )
}

export default Header
