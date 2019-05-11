import React, { Component } from 'react'

export default class props extends Component {
  render() {
    return (
      <div>
        <Entry label="Username" type="text"/>
        <Entry label="Password" type="password"/>
      </div>
    )
  }
}


class Entry extends Component {

  constructor(props){
    super(props)
  }
    
  render() {
    return (
      <div>
        <span>{this.props.label} </span>
        <input type={this.props.type} id="oet" name={this.props.label} />
      </div>
    )
  }
}

