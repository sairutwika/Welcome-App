import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
