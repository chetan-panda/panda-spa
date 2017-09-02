import {
  Container,
  Icon,
  Segment,
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
        style={{
          backgroundColor: '#003666',
          paddingBottom: '1.5em',
          paddingTop: '1.5em',
        }}
      >
        <Container textAlign='center'>
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
