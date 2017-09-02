import ContentManager from '../content-manager'
import CtrlRouter from 'ctrl-react-router'
import PropTypes from 'prop-types'
import React from 'react'
import debug from 'debug'
import feathers from 'feathers-client'
import io from 'socket.io-client'

const error = debug('panda:error')
const log = debug('panda:log')

class App extends React.Component {
  app = feathers()
  error = error
  log = log
  state = {
    content: {},
  }

  constructor(props) {
    super(props)

    this.apiVersion = props.apiVersion
    this.log('Using API Version:', this.apiVersion)

    this.socket = io(props.socketUrl)
    this.app
      .configure(feathers.hooks())
      .configure(feathers.socketio(this.socket))
    this.services = {
      content: this.getService('content'),
    }

    if (!props.isProduction) {
      this.log('Exposing app:', this)
      window.agg = this
    }

    this.services.content.find().then((content) => this.setState({content}))
    this.services.content.on('update', (content) => this.setState({content}))
  }

  getService(service) {
    this.log('Getting service:', service)

    return this.app.service(`${this.apiVersion}/${service}`)
  }

  render() {
    const props = this.props
    const state = this.state

    return (
      <CtrlRouter>
        <ContentManager
          content={state.content}
          isProduction={props.isProduction}
          services={this.services}
        />
      </CtrlRouter>
    )
  }

  static propTypes = {
    apiVersion: PropTypes.string.isRequired,
    isProduction: PropTypes.bool.isRequired,
    socketUrl: PropTypes.string.isRequired,
  }
}

export default App
