import React, { Component } from 'react'

export default class state extends Component {

  constructor(props){
    super(props)

    // ตัวแปร ที่ต้องการให้ เปลี่ยนค่าได้
    // ใช้คำสั่ง this.setState({ count : 0 })
    this.state = {
      count : 0,
      message : "Reset"
    }
  }
  render() {
    return (
      <div>
        <button onClick={()=>{ this.setState({ count : this.state.count+1, message : "Reset"}) }}>Click {this.state.count}</button>
        <button onClick={()=>{ this.setState({ count : 0 ,message : "Clear"})}}>{this.state.message}</button>
      </div>
    )
  }
}
