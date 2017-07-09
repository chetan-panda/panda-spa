import {
  Container
, Divider
, Header
, Segment
} from 'semantic-ui-react'
import CtrlComponent from 'ctrl-react-component'
import Markdown from 'react-markdown'
import Navigation from '../../navigation'
import Page from '../'
import React from 'react'

class PageIssue extends CtrlComponent {
  get(path) {
    return this.getContent(`issue.${path}`)
  }

  getGlobal(path) {
    return this.getContent(`globalElements.${path}`)
  }

  renderFiltered() {
    return (
      <Page id='page-issue' title={this.getGlobal('title')}>
        <Navigation
          content={this.getGlobal('navigation')}
          video={this.get('videoUrl')}
        />
        <Segment basic inverted style={{
          backgroundColor: '#003666'
        , marginTop: 0
        }}>
          <Header as='h1' textAlign='center' style={{
            fontSize: '4em'
          , marginTop: '0.25em'
          }}>
            {this.get('title')}
          </Header>
          <Header as='h3' textAlign='center' style={{marginTop: 0}}>
            {this.get('summary')}
          </Header>
          <Divider hidden/>
        </Segment>
        <Container text>
          <Divider hidden/>
          <Divider hidden/>
          <p>
            <Markdown source={this.get('description')}/>
          </p>
        </Container>
        <Divider hidden/>
        <Divider hidden/>
      </Page>
    )
  }
}

export default PageIssue
