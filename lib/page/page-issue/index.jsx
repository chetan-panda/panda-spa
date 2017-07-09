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
          cover={this.get('cover.url')}
        >
          <Header
            as='h1'
            inverted
            style={{
              fontSize: '4em'
            , margin: '2em 0 0'
            }}
            textAlign='center'
          >
            {this.get('title')}
          </Header>
          <Header
            as='h3'
            inverted
            style={{marginBottom: '4em'}}
            textAlign='center'
          >
            {this.get('summary')}
          </Header>
        </Navigation>
        <Segment basic inverted style={{
          backgroundColor: '#003666'
        , marginTop: 0
        }}>
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
