import React, { Component } from 'react'
import axios from 'axios'

const CstContext = React.createContext()

class CstProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allChapters: [],
      allConnections: [],
      userConnections: []
    }
  }

  GET_ALL_CHAPTERS = async () => {
    const res = await fetch('/api/fauna-constitution/?q=getAllChapters')
    const data = await res.json()
    this.setState({ allChapters: data })
    return data
  }
  GET_CONNECTIONS = async () => {
    const { data } = await axios.get('/api/fauna-constitution/?q=getConnections')
    this.setState({ allConnections: data })
    return data
  }
  GET_USER_CONNECTIONS = async () => {
    const { data } = await fetch('/api/fauna-constitution/?q=getUserConnections')
    this.setState({ userConnections: data })
    return data
  }

  render() {
    return (
      <CstContext.Provider
        value={{
          ...this.state,
          GET_ALL_CHAPTERS: this.GET_ALL_CHAPTERS,
          GET_CONNECTIONS: this.GET_CONNECTIONS,
          GET_USER_CONNECTIONS: this.GET_USER_CONNECTIONS
        }}
      >
        {this.props.children}
      </CstContext.Provider>
    )
  }
}

export { CstProvider, CstContext }
