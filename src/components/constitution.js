import React, { useContext, useState, useEffect } from 'react'
import { CstContext } from '../store/constitution'

const Constitution = () => {
  const { GET_ALL_CHAPTERS } = useContext(CstContext)
  const [chapters, setChapters] = useState([])

  const allChapters = () => {
    const res = GET_ALL_CHAPTERS()
    console.log(res)
  }
  useEffect(() => {
    allChapters()
    // if (data !== undefined) setChapters(data)
  }, [])

  return <div className={`connections`}>{}</div>
}

export default Constitution
