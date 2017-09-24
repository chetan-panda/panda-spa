import './style.scss'

import {
  Container,
  Divider,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'
import CtrlComponent from 'ctrl-react-component'
import Markdown from 'react-markdown'
import Navigation from '../../navigation'
import Page from '../'
import React from 'react'

import signatureImg from './signature.png'

class PageHome extends CtrlComponent {
  renderFiltered() {
    const logoSrc = this.getContent('logo')
    const logo = logoSrc
      ? <Image src={logoSrc.url} style={{
          height: '30vh',
          marginBottom: 0,
          marginTop: '30vh',
        }}/>
      : null
    const pandaSrc = this.getContent('panda')
    const panda = pandaSrc
      ? <Image src={pandaSrc.url} style={{
          height: '40vh',
          marginRight: '4em',
          marginTop: 'auto',
        }}/>
      : null

    return (
      <div id='page-about'>
        <Navigation
          content={this.getContent('navigation')}
          isLogoDark={true}
          style={{
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        />
        <Page id='page-home' title={this.getContent('title')}>
          {logo}
          <Divider hidden/>
          <Divider hidden/>
          {panda}
        </Page>
        <Segment basic inverted style={{
          backgroundColor: '#003666',
          marginTop: 0,
          paddingBottom: '3em',
          paddingTop: '3em',
        }}>
          <Container text>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/d8_vnE8cUtk?rel=0" frameborder="0" allowfullscreen></iframe>
            <Header as='h1' inverted>Why I&rsquo;m Running</Header>
            <Markdown source={this.getContent('why')}/>
            <Image src={signatureImg} style={{float: 'right', height: '80px'}}/>
            <br style={{clear: 'both'}}/>
          </Container>
        </Segment>
        <Segment basic style={{
          marginTop: 0,
          paddingBottom: '3em',
          paddingTop: '3em',
        }}>
          <Container text>
            <Header as='h1'>About Me</Header>
            <Markdown source={this.getContent('bio')}/>
          </Container>
        </Segment>
    </div>
    )
  }
}

export default PageHome
