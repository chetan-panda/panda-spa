import './style.scss'

import {
  Divider
, Header
, Icon
, Image
} from 'semantic-ui-react'
import CtrlComponent from 'ctrl-react-component'
import Navigation from '../../navigation'
import Page from '../'
import React from 'react'

class PageHome extends CtrlComponent {
  renderFiltered() {
    const logoSrc = this.getContent('logo')
    const logo = logoSrc
      ? <Image src={logoSrc.url}/>
      : null

    return (
      <div id='page-about'>
        <Navigation
          content={this.getContent('navigation')}
          style={{
            left: 0
          , position: 'absolute'
          , right: 0
          , top: 0
          }}
        />
        <Page id='page-home' title={this.getContent('title')}>
          {logo}
          <Header style={{
            color: '#003057'
          , fontFamily: 'Montserrat'
          }}>
            <Icon name='angle down'/>
          </Header>
          <Divider hidden/>
          <Divider hidden/>
        </Page>
    </div>
    )
  }
}

export default PageHome
