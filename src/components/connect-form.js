import React from 'react'

import style from '../styles/form.module.scss'

const ConnectForm = () => {
  return (
    <form className={`${style.search_form}`}>
      <header className={`text-center header`}>
        <h3 className={`text-md subtitle ${style.cta}`}>Find a connection</h3>
      </header>
      <div className={`${style.form_group}`}>
        <label htmlFor='find' className={`text-md text-center`}>
          I want a connection for:
        </label>
        <input
          className={`${style.form_control}`}
          type='search'
          name='find'
          id='find'
          placeholder='Example: Loan, Tenant, School...'
          required
        />
      </div>
      <div className={`${style.form_group}`}>
        <button type='submit' className={`button btn-default ${style.form_submit}`}>
          Find
        </button>
      </div>
    </form>
  )
}

export default ConnectForm
