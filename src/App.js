import React , {Component} from 'react';
import logo from './assets/logo.svg';
import './App.css';

class App extends Component{
  
  constructor(props){
    super(props)

    this.state =  {
      rows : []
    }
  }

   search = (keyword)=>{

    var aData = [
      { title : "Avenger End Game."},
      { title : "Marvel"},
      { title : "Ant Man"}
    ]
    aData.find((element) => {
      if(element.title == keyword){
        console.log(element.title);
        aData = [
          { title : element.title}
        ]
      }
    });

    this.setState({rows: aData});
  }
  

  render(){
    
    var title = "Copter"
    return (
      <div className="App">
          <table className="NavBar">
            <tbody>
              <tr>
                <td><img src={require('./assets/logo.svg')} width="50"></img></td>
                <td style={ {cursor : PointerEvent} }>Learn React by K.Copter</td>
              </tr>
            </tbody>
          </table>
          <input style={{fontSize:24,width:'100%'}} placeholder="Please enter what do you want." onKeyUp={ (event) => { this.search(event.target.value)}}></input>

          {/* <strong>{ this.stage.rows[0].title }</strong> */}

          { this.state.rows.map( item => (
            <div>
              <strong>{ item.title } </strong>
            </div>
          ))}
      </div>
    );
  }

  
  
}

// function App() {

//   var title = "Copter"

//   return (
//     <div className="App">
//         <table className="NavBar">
//           <tbody>
//             <tr>
//               <td><img src={require('./assets/logo.svg')} width="50"></img></td>
//               <td style={ {cursor : PointerEvent} }>Learn React by K.Copter</td>
//             </tr>
//           </tbody>
//         </table>
//         <input style={{fontSize:24,width:'100%'}} placeholder="Please enter what do you want." onKeyUp={ (event) => { search(event.target.value)}}></input>
//     </div>
//   );
// }

// function search (keyword){
//   console.log(keyword);

//   var aData = [
//     { title : "Avenger End Game."},
//     { title : "Marvel"},
//     { title : "Ant Man"}
//   ]
//   console.log(aData);
//   // this.setStage({rows: aData});
//   console.log(this.stage)
  
// }



export default App;
