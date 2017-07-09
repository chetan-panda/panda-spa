import './style.scss'

import {
  Button
, Container
, Image
, Menu
, Segment
} from 'semantic-ui-react'
import CtrlComponent from 'ctrl-react-component'
import Player from 'react-player'
import React from 'react'

class Navigation extends CtrlComponent {
  renderFiltered() {
    const props = this.props

    const video = props.video
      ? <div className='player-container'>
          <Player
            playing
            height='56.25vw'
            width='100%'
            url={props.video}
          />
        </div>
      : null

    return (
      <Segment
        basic
        className='navigation'
        style={{
          backgroundImage: `url(${props.cover})`
        , backgroundPosition: 'center'
        , backgroundSize: 'cover'
        , height: props.video ? '56.25vw' : null
        , marginBottom: 0
        , maxHeight: '60vh'
        }}
      >
        <div className='navigation-overlay'/>
        <Container className='navigation-container'>
          <Menu borderless size='huge' secondary inverted>
            <Menu.Item>
              <Image
                size='mini'
                src={this.getContent('logo.url')}
              />
            </Menu.Item>
            <Menu.Item link>About</Menu.Item>
            <Menu.Item link>Issues</Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Button color='orange' compact>Donate</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          {props.children}
        </Container>
        {video}
      </Segment>
    )
  }
}

export default Navigation
