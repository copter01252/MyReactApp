import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count1 : 0,
         count2 : 0
      }
    }
    
  render() {

    const { count1 , count2 } = this.state

    return (
      <div>
        <button onClick = { ()=> this.setState( {count1 : count1+1} )}>SetState1 : { count1 }</button>
        <button onClick = { ()=> this.setState( {count2 : count1+count2})}>SetState2 : { count2 }</button>
        <button onClick = { ()=> this.forceUpdate() }>fourceUpdate : { Math.random() }</button>
        <button onClick = { ()=>{
            var DivCom = document.getElementById("comment")
            ReactDOM.findDOMNode(DivCom).style.color = "red";
        }
        }>
        FindDOMNode</button>

        <div id="comment">CodeMobiles</div>
      </div>

    )
  }
}
