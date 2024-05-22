// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class LogOut extends Component {
  render() {
    const {toggleState} = this.props

    return (
      <button type="button" onClick={toggleState}>
        Logout
      </button>
    )
  }
}

export default LogOut
