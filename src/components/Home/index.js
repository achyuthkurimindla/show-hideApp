// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'
import LogOut from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: false}

  toggleState = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="main-container">
        <Message isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogOut toggleState={this.toggleState} />
        ) : (
          <Login toggleState={this.toggleState} />
        )}
      </div>
    )
  }
}

export default Home
