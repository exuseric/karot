import React, { useState } from 'react'

import style from '../../styles/form.module.scss'
import SearchIcon from '../../images/icons/search.inline.svg'

const ConnectForm = () => {
  const [connections, setConnectios] = useState([])
  const [notFound, setNotFound] = useState(false)
  const [found, setFound] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    const { value } = e.target
    const { data } = await axios.get('/api/fauna-constitution/?q=getConnections')
    const connection = data.filter((connection) => connection.tags.contains(value))
    if (connection.length !== 0) {
      setConnectios(connections)
      setFound(true)
    }
    if (connection.length === 0) {
      setNotFound(true)
    }
  }

  return (
    <form className={`${style.search_form}`} onSubmit={handleSearch}>
      <div className={`${style.form_group}`}>
        <label htmlFor='find' className={`text-md emphasis`}>
          Find a connection
        </label>
        <div className={`${style.search_bar}`}>
          <input
            className={`${style.form_control}`}
            type='search'
            name='find'
            id='find'
            placeholder='Example: Loan, Tenant, School...'
            required
          />
          <button type='submit' className={`content-center ${style.connect_submit}`}>
            <SearchIcon className={`icon`} />
          </button>
        </div>
        <div className={`${style.form_group}`}></div>
      </div>
      <div className={`${style.form_connections}`}>
        {notFound ? <EmptyCard /> : null}
        {found ? connections.map((connection) => connection !== undefined && <ConnectionCard />) : null}
      </div>
    </form>
  )
}

export default ConnectForm
