import React from 'react'
import { Link } from 'gatsby'

import style from '../../styles/account.module.scss'
import Header from '../header'
import EmptyCard from '../emptyCard'

const Connections = () => {
  return (
    <section className={`${style.account_connections}`}>
      <Header title='Connections' />
      <article className={`${style.details_connections}`}>
        <EmptyCard title="You haven't made any connections yet." tag='Any connections you make will appear here' />

        <Link to='/connections/' className={`button`}>
          Make a connection.
        </Link>
      </article>
    </section>
  )
}

export default Connections
