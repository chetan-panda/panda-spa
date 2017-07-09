import './style.scss'

import {
  Container
, Divider
, Grid
, Header
, Image
} from 'semantic-ui-react'
import CtrlComponent from 'ctrl-react-component'
import Navigation from '../../navigation'
import Page from '../'
import React from 'react'

class PageIssues extends CtrlComponent {
  static mapIssue(issue) {
    return (
      <Grid.Column width='8'>
        <div className='issues-thumbnail-wrapper'>
          <Image className='issues-thumbnail' src={issue.thumbnail.url} fluid/>
          <div className='issues-thumbnail-border'>
            <Header
              className='issues-thumbnail-title'
              inverted
              size='huge'
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
            , margin: '2em 0 2.5em'
            }}
          >Issues</Header>
        </Navigation>
        <Divider hidden/>
        <Divider hidden/>
        <Container>
          <Grid>
            {(this.getContent('issues') || []).map(PageIssues.mapIssue)}
          </Grid>
        </Container>
        <Divider hidden/>
        <Divider hidden/>
      </Page>
    )
  }
}

export default PageIssues
