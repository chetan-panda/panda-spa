import CtrlComponent from 'ctrl-react-component'
import PropTypes from 'prop-types'
import React from 'react'

class Page extends CtrlComponent {
  renderFiltered() {
    const props = this.props

    document.title = props.title

    return (
      <div id={props.id} className='page' style={{
        flex: 1,
      }}>
        {props.children}
      </div>
    )
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
  }
}

export default Page
