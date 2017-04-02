import CtrlComponent from 'ctrl-react-component'
import React from 'react'

class Page extends CtrlComponent {
  renderFiltered() {
    const props = this.props

    document.title = props.title

    return (
      <div id={props.id} className='page'>
        {props.children}
      </div>
    )
  }

  static propTypes = {
    id: React.PropTypes.string.isRequired
  , title: React.PropTypes.string
  }
}

export default Page
