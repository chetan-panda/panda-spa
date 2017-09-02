import 'core-js'
import App from './lib/app'
import React from 'react'
import ReactDOM from 'react-dom'

import env from './lib/env'

ReactDOM.render(
  <App
    apiVersion={env.API_VERSION}
    isProduction={env.NODE_ENV === 'production'}
    socketUrl={env.SOCKET_URL}
  />
, document.body.querySelector('#app')
)
