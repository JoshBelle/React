import React from 'react'

class ClassCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  inc = () => {
    this.setState({ count: this.state.count + 1 })
  }

  dec = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.inc}>Инкеремент</button>
        <button onClick={this.dec}>Дикремент</button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default ClassCounter
