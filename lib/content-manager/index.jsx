import CtrlComponent from 'ctrl-react-component'
import PageHome from '../page/page-home'
import React from 'react'

import debug from 'debug'

const error = debug('panda:error:content-manager')
const log = debug('panda:content-manager')

class ContentManager extends CtrlComponent {
  error = error
  log = log
  state = {}

  constructor(props) {
    super(props)

    if (!props.isProduction) {
      this.log('Exposing contentManager:', this)
      window.contentManager = this
    }
  }

  renderFiltered() {
    const content = this.getContent()

    this.log('Using content:', content)

    return (
      <div id='content-manager'>
        <PageHome
          content={this.getContent('pageHome')}
          routeFilter={(route) => route.length === 0}
        />
      </div>
    )
  }

  static propTypes = {
    isProduction: React.PropTypes.bool.isRequired
  }
}

export default ContentManager
