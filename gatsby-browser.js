import React from 'react'
import { silentAuth } from './src/utils/auth'
import { CstProvider } from './src/store/constitution'

import './src/styles/global.scss'

class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>
          <CstProvider>{this.props.children}</CstProvider>
        </React.Fragment>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>
}
