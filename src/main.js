// import './asserts/reset.scss'
// import './asserts/style.scss'
// import ui from './jquery.ui'
//import _ from 'lodash'

// ui()
// const dom = $('<div>')
// dom.html(_.join(['kuma','loves', 'life'],'----'))
// $('#app').append(dom)

// console.log(this)

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import Child from './components/Child'
import Child from '@components/Child'

class App extends Component {
  render(){
    return (
      <div>
        <p>this is react app</p>
        <Child/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))