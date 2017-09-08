//import './style.scss'

import {
  Breadcrumb,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'
import CtrlComponent from 'ctrl-react-component'
import Navigation from '../../navigation'
import Page from '../'
import React from 'react'

class PageAbout extends CtrlComponent {
  constructor(props, context) {
    super(props, context)
  }

  renderFiltered() {
    const {context} = this
    const {router} = context

    return (
      <Page id='page-about' title={this.getContent('title')}>
        <Navigation
          content={this.getContent('navigation')}
          cover={this.getContent('cover.url')}
        >
          <Header
            as='h1'
            inverted
            textAlign='center'
            style={{
              fontSize: '4em',
              margin: '2em 0 2em',
            }}
          >About</Header>
        </Navigation>
        <Segment basic inverted style={{
          backgroundColor: '#003666',
          marginTop: '0',
        }}>
          <Container style={{
            paddingLeft: '1.25em',
            paddingRight: '1.25em',
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
                onClick={() => router.updateRoute('/about')}
                style={{color: 'white'}}
              >
                About
              </Breadcrumb.Section>
            </Breadcrumb>
          </Container>
        </Segment>
        <Divider hidden/>
        <Divider hidden/>
        <Container>
          <Grid stackable={true}>
            
          </Grid>
        </Container>
        <Divider hidden/>
        <Divider hidden/>
      </Page>
    )
  }
}

export default PageAbout
