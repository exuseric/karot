import React, { useContext, useState } from 'react'

import { CstContext } from '../store/constitution'
import style from '../../styles/form.module.scss'

const ConnectForm = () => {
  const { allConnections } = useContext(CstContext)
  const [connections, setConnectios] = useState([])
  const handleSearch = (e) => {
    e.preventDefault()
    const { value } = e.target
    const connection = allConnections.filter((connection) => connection.tags.contains(value))
    if (connection.length !== 0) {
      setConnectios(connections)
    }
  }
  return (
    <form className={`${style.search_form}`} onSubmit={handleSearch}>
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

      <div className={`${style.form_connections}`}></div>
    </form>
  )
}

export default ConnectForm
