import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data : [
            {
                component : 'React',
                id : 1
            },
            {
                component : 'PHP',
                id : 2
            },
            {
                component : 'Angular',
                id : 3
            },
            {
                component : 'Swift',
                id : 4
            }
         ]
      }

    }
    
  render() {
    return (
      <div>
        <div> 
            <ul>
                {this.state.data.map((item) =>
                    <Content key={item.id} value={item.id} title={item.component} />
                )}
            </ul>
        </div>
      </div>
    )
  }
}





class Content extends Component {
  render() {
    return (
      <div>
        <div className="btn-group">
            <a className="btn btn-default" href="#" id={this.props.value} role="button">{this.props.title}</a>
        </div>
      </div>
    )
  }
}

