import CtrlComponent from 'ctrl-react-component'
import PageHome from '../page/page-home'
import PageIssue from '../page/page-issue'
import PageIssues from '../page/page-issues'
import React from 'react'

import debug from 'debug'

const error = debug('panda:error:content-manager')
const log = debug('panda:content-manager')

const ISSUE_LENGTH = 2

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

  findIssue = (issue) => {
    return issue.slug === this.context.router.route[1]
  }

  renderFiltered() {
    const content = this.getContent()
    const issue = (this.getContent('issue') || []).find(this.findIssue)

    this.log('Using content:', content)

    return (
      <div id='content-manager'>
        <PageHome
          content={this.getContent('pageHome')}
          routeFilter={(route) =>
             route.length === 0
          || route[0] === 'about'
          }
        />
        <PageIssues
          content={this.getContent('pageIssues')}
          routeFilter={(route) => route[0] === 'issues' && route.length === 1}
        />
        <PageIssue
          content={{
            globalElements: this.getContent('pageIssue')
          , issue
          }}
          routeFilter={
            (route) => route[0] === 'issues' && route.length === ISSUE_LENGTH
          }
        />
      </div>
    )
  }

  static propTypes = {
    isProduction: React.PropTypes.bool.isRequired
  }
}

export default ContentManager
