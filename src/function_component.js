import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <div>
          <Header message="Hello world." />
      </div>
    )
  }
}

const Header = ({message}) => {

    return (
       <div style={{width:100,backgroundColor:'blue'}}>
           <span style={{color : 'white'}}>{message}</span>
        </div>
    )
}
