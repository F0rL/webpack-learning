import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './assets/global.scss'
import './index.scss'

const Container = () => {
  return (
    <div>
      container
      <img className="logo" src={require('./assets/panda.png')} />
    </div>
  )
}


class App extends Component {
  render(){
    return (
      <div>
        hello react
        <Container />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))