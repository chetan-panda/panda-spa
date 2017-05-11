import './style.scss'

import {
  Divider
, Header
, Image
} from 'semantic-ui-react'
import CtrlComponent from 'ctrl-react-component'
import Page from '../'
import React from 'react'

class PageHome extends CtrlComponent {
  renderFiltered() {
    const logoSrc = this.getContent('logo')
    const logo = logoSrc
      ? <Image src={logoSrc.url}/>
      : null

    return (
      <Page id='page-home' title={this.getContent('title')}>
        {logo}
        <Header style={{
          color: '#003057'
        , fontFamily: 'Montserrat'
        }}>
        {this.getContent('comingSoon')}
        </Header>
        <Divider hidden/>
        <Divider hidden/>
      </Page>
    )
  }
}

export default PageHome
