import CtrlComponent from 'ctrl-react-component'
import Page from '../'
import React from 'react'

class PageHome extends CtrlComponent {
  renderFiltered() {
    return (
      <Page id='page-home' title={this.getContent('title')}>
        {this.getContent('title')}
      </Page>
    )
  }
}

export default PageHome
