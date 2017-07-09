import './style.scss'

import {
  Breadcrumb
, Container
, Divider
, Grid
, Header
, Image
, Segment
} from 'semantic-ui-react'
import CtrlComponent from 'ctrl-react-component'
import Navigation from '../../navigation'
import Page from '../'
import React from 'react'

class PageIssues extends CtrlComponent {
  constructor(props, context) {
    super(props, context)

    this.mapIssue = this.mapIssue.bind(this)
  }

  mapIssue(issue) {
    const {context} = this
    const {router} = context

    return (
      <Grid.Column onClick={() => {
        router.updateRoute(`/issues/${issue.slug}`)
      }} width='8'>
        <div className='issues-thumbnail-wrapper'>
          <Image className='issues-thumbnail' src={issue.thumbnail.url} fluid/>
          <div className='issues-thumbnail-border'>
            <Header
              className='issues-thumbnail-title'
              inverted
              size='huge'
              textAlign='center'
            >{issue.title.toUpperCase()}</Header>
            <p
              className='issues-thumbnail-summary'
            >{issue.summary}</p>
          </div>
        </div>
      </Grid.Column>
    )
  }

  renderFiltered() {
    const {context} = this
    const {router} = context

    return (
      <Page id='page-issues' title={this.getContent('title')}>
        <Navigation
          content={this.getContent('navigation')}
          cover={this.getContent('cover.url')}
        >
          <Header
            as='h1'
            inverted
            textAlign='center'
            style={{
              fontSize: '4em'
            , margin: '2em 0 2em'
            }}
          >Issues</Header>
        </Navigation>
        <Segment basic inverted style={{
          backgroundColor: '#003666'
        , marginTop: '0'
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
            </Breadcrumb>
          </Container>
        </Segment>
        <Divider hidden/>
        <Divider hidden/>
        <Container>
          <Grid>
            {(this.getContent('issues') || []).map(this.mapIssue)}
          </Grid>
        </Container>
        <Divider hidden/>
        <Divider hidden/>
      </Page>
    )
  }
}

export default PageIssues
