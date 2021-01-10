import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { CstContext } from '../store/constitution'

const Constitution = () => {
  const { GET_ALL_CHAPTERS } = useContext(CstContext)
  const [chapters, setChapters] = useState([])

  const allChapters = async () => {
    const res = await axios.get('https://localhost:8888/api/fauna-constitution/?q=getAllChapters')
    console.log(res)
  }
  useEffect(() => {
    allChapters()
    // if (data !== undefined) setChapters(data)
  }, [])

  return (
    <div className={`connections`}>
      {/* {chapters.map((chapter) => (
        <div className={`connection`} key={chapter.number}>
          <header className={`header text-center`}>
            <h2 className={`subtitle text-md`}>{`Chapter ${chapter.number}: ${chapter.title}`}</h2>
          </header>
        </div>
      ))} */}
    </div>
  )
}

export default Constitution
