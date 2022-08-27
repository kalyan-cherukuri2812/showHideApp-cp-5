import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  first = () => {
    this.setState(prev => ({firstName: !prev.firstName}))
  }

  last = () => {
    this.setState(prev => ({lastName: !prev.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Show/Hide</h1>
          <div className="sub-card">
            <div className="sub-card-1">
              <button onClick={this.first} type="button" className="btn">
                Show/Hide Firstname
              </button>
              {firstName === true ? <p className="para">Joe</p> : null}
            </div>
            <div className="sub-card-2">
              <button onClick={this.last} type="button" className="btn">
                Show/Hide Lastname
              </button>
              {lastName === true ? <p className="para">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
