'use strict'

const CtrlEnv = require('ctrl-env')

const ctrlEnv = new CtrlEnv([
  ['NODE_ENV'],
  ['SOCKET_URL'],
  ['API_VERSION'],
])

ctrlEnv.assert()

module.exports = ctrlEnv
