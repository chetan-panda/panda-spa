import {
  Breadcrumb
, Container
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
    const {context} = this
    const {router} = context

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
            , margin: '1.75em 0 0'
            }}
            textAlign='center'
          >
            {this.get('title')}
          </Header>
          <Header
            as='h3'
            inverted
            style={{marginBottom: '5em'}}
            textAlign='center'
          >
            {this.get('summary')}
          </Header>
        </Navigation>
        <Segment basic inverted style={{
          backgroundColor: '#003666'
        , marginTop: 0
        }}>
          <Container style={{
            paddingLeft: '1.25em'
          , paddingRight: '1.25em'
          }}>
            <Breadcrumb
              style={{margin: '0.5em 0 0.5em'}}
            >
              <Breadcrumb.Section
                link
                onClick={() => router.updateRoute('/')}
                style={{color: 'white'}}
              >
                Home
              </Breadcrumb.Section>
              <Breadcrumb.Divider
                icon='right angle'
                style={{color: 'white'}}
              />
              <Breadcrumb.Section
                link
                onClick={() => router.updateRoute('/issues')}
                style={{color: 'white'}}
              >
                Issues
              </Breadcrumb.Section>
              <Breadcrumb.Divider
                icon='right angle'
                onClick={() => router.updateRoute(
                  `/issues/${this.get('slug')}`
                )}
                style={{color: 'white'}}
              />
              <Breadcrumb.Section
                link
                style={{color: 'white'}}
              >
                {this.get('title')}
              </Breadcrumb.Section>
            </Breadcrumb>
          </Container>
        </Segment>
        <Container style={{
          paddingLeft: '1.25em'
        , paddingRight: '1.25em'
        }}>
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
