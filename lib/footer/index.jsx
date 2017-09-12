import './style.scss'

import facebookSVG from './facebook.svg'
import twitterSVG from './twitter.svg'
import youtubeSVG from './youtube.svg'
import instagramSVG from './instagram.svg'

import {
  Container,
  Icon,
  Segment,
  Image
} from 'semantic-ui-react'
import CtrlComponent from 'ctrl-react-component'
import React from 'react'

class Footer extends CtrlComponent {
  renderFiltered() {
    this.getContent()

    return (
      <Segment
        basic
        inverted
        className='footer'
        style={{
          backgroundColor: '#003666',
          paddingBottom: '1.5em',
          paddingTop: '1.5em',
        }}
      >
        <Container textAlign='center'>
          <ul>
            <li>
              <a href='https://www.facebook.com/panda2018/' target='_blank' rel='nofollow'>
                <Image
                  size='mini'
                  src={facebookSVG}
                  style={{
                    cursor: 'pointer',
                  }}
                />               
              </a>
            </li>
            <li>
              <a href='https://twitter.com/panda2018TX' target='_blank' rel='nofollow'>
                <Image
                  size='mini'
                  src={twitterSVG}
                  style={{
                    cursor: 'pointer',
                  }}
                />               
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/panda2018tx/?hl=en' target='_blank' rel='nofollow'>
                <Image
                  size='mini'
                  src={instagramSVG}
                  style={{
                    cursor: 'pointer',
                  }}
                />               
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/channel/UClYeJeZI7CT23k0STc5e2Zw' target='_blank' rel='nofollow'>
                <Image
                  size='mini'
                  src={youtubeSVG}
                  style={{
                    cursor: 'pointer',
                  }}
                />               
              </a>
            </li>
          </ul>
          <p>
            <b>Paid for by the Committee to Elect Chetan Panda</b>
            <br/>
            <a href='mailto:info@panda2018.com' style={{
              color: '#fff',
            }}>
              <Icon name='mail'/>
              info@panda2018.com
            </a>
          </p>
          <p>
            If you&rsquo;d  like to send a contribution by mail, please address
            it to:
            <br/>
            Committee to Elect Chetan Panda, PO Box 29416 Austin, Texas 78755
          </p>
        </Container>
      </Segment>
    )
  }
}

export default Footer
