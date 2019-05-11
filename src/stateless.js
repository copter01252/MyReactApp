import React, { Component } from 'react'

const styles = {
  header : {backgroundColor : 'skyblue', color : '#fff', padding : 10},
  menubar : {backgroundColor : 'grey', color : '#fff' , padding : 10}
}

export default class test extends Component {
  constructor(props){
    super(props)

    // Stateless : คือ Component ที่ไม่มี State เลย
    this.state = {
      secound : 1,
      secoundDef : 1
    }
  }
  componentDidMount(){
    this.count();
  }

  count = ()=>{
    setInterval(() => {
        var secound = this.state.secound+1;
        this.setState({secound : secound});
    }, 1000);
  }

  render() {
    var today = new Date();
    var dateToDay = today.getFullYear()+'-'+today.getMonth()+'-'+today.getDate();
 
    return (
      <div style={{textAlign:"center"}}>
        <Header />
        <div style={ styles.menubar }>
          Date  : {dateToDay} : {this.state.secound}
        </div>
        <LoginFrom />
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div style={ styles.header }>
        <h1>Happy Coding By React</h1>
        <h4>By K.COPTER</h4>
      </div>
    )
  }
}



class LoginFrom extends Component {
  render() {
    return (
      <div style={{padding : 30}}>
        <div>
          <label>Username </label>
          <input name="username"/>
        </div>
        <div>
          <label>Password </label>
          <input name="password"/>
        </div>
      </div>
    )
  }
}

