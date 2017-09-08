import './style.scss'

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
          <Segment basic style={{
            marginTop: 0,
            paddingBottom: '3em',
            paddingTop: '3em',
          }}>
            <Container text>
              <p className='first'>I am a Texan and a first-generation American. My family came to America seeking the opportunity for a better life. My mother became an educator. My father worked for IBM before starting his own company. My parents taught me the value of working hard, showing compassion to all, and doing the right thing. Most importantly, they taught me that the American dream is possible and everyone deserves a fair shot at pursuing it.
              </p>
              <p>I grew up in this community and I've spent my entire life here. I played competitive basketball, studied the piano, and volunteered by coaching, tutoring, and mentoring kids. After high school, I attended the London School of Economics and Georgetown University, where I graduated with a degree in International Economics. Each summer, I always returned from Washington to Texas because I knew I belonged here. So, it was only natural that after college, I came home.
              </p>
              <p>I'm a problem solver. I became a successful leader at a globally recognized mutual fund company. I worked to protect and grow the retirement savings of police officers, teachers, and other hard-working Americans. I was entrusted with managing billions of dollars in retirement funds and leading a program that earned additional revenue on behalf of retirees. I solved complex problems, created new products, and worked with people from different groups and companies to get things done. Now I want to apply my expertise, energy, and forward thinking on behalf of our District.
              </p>
              <p>This community and this country have given me and my family the opportunity to enjoy a better life. Who I am and what I’ve accomplished is the result of living here: a place where people supported me, encouraged me to be a better person, and gave me the resources and relationships to succeed. In our community, people are accepting, character is prized, and there is a warmth and authenticity to our way of life. Working hard for what we have is part of our identity. Though we may have our differences, we all share the same desire: to be treated fairly and to have a shot at bettering our lives.
              </p>
              <p>I will fight for our community and our country. President Trump and Congressional Republicans want wins, not what’s best for our community or country. They will sacrifice our best interests for their own personal gain. Instead, I believe that we must strive to make our community a better place for all. To do that, we must ensure people receive a fair shake and they have the opportunities and tools to advance. I will focus on providing all Americans quality and affordable healthcare. I will strive to build a 21st century economy that works for everyone. I will seek to eliminate barriers holding people back. And if anyone tries to get in our way I’ll stand up to them. Because I believe that if one of us succeeds, we all succeed.
              </p>
            </Container>
          </Segment>
        </Container>
        <Divider hidden/>
        <Divider hidden/>
      </Page>
    )
  }
}

export default PageAbout
