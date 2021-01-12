import React from 'react'

import style from '../../styles/account.module.scss'

const Details = ({ user }) => {
  return (
    <section className={`${style.details}`}>
      <header className={` header ${style.details_header}`}>
        <h1 className={`title text-lg text-center`}>Account Details</h1>
        <div className={`${style.details_avatar}`}>
          <img src={user && user.picture} alt='avatar' />
        </div>
      </header>
      <div className={`${style.details_details}`}>
        <h1 className={`${style.details_detail}`}>
          <p className={`subtitle text-sm`}>Username</p>
          <p className={`text-md`}>{user && user.nickname}</p>
        </h1>
        <h2 className={`${style.details_detail}`}>
          <p className={`subtitle text-sm`}>E-mail</p>
          <p className={`text-md`}>{user && user.email}</p>
        </h2>
      </div>
    </section>
  )
}

export default Details
