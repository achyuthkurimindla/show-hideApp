// Write your code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {toggleState} = this.props

    return (
      <button type="button" onClick={toggleState}>
        Login
      </button>
    )
  }
}

export default Login
