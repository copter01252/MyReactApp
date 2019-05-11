import React, { Component } from 'react'
//1
import PropTypes from 'prop-types'

export default class App extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.message} {this.props.count}</h4>
      </div>
    )
  }
}
// propTypes  ต้องเปฌนแบบนี้เท่านั้น
App.propTypes = {
    message : PropTypes.string,
    count : PropTypes.number,
    require : PropTypes.string.isRequired
}

App.defaultProps = {
    message : "Prop validate",
    count : 1,
    require : ""
}