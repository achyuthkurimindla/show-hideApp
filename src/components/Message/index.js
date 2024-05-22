// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {isLoggedIn} = this.props
    return (
      // <h1>Hello</h1>
      <div>{isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}</div>
    )
  }
}

export default Message
