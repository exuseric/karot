import React, { useState, useEffect } from 'react'

const Constitution = () => {
  const [chapters, setChapters] = useState([])

  const allChapters = async () => {
    const res = await fetch('/api/fauna-constitution/?q=getAllChapters')
    const data = await res.json()
    setChapters(data)
  }
  useEffect(() => {
    allChapters()
  }, [])

  return <div className={`connections`}>{}</div>
}

export default Constitution
