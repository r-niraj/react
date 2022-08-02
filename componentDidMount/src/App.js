import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
  console.log("This is constructor")
  super();
  this.state={
    name: "Amit"
  }
}

componentDidMount(){
  console.log("Component did mount here")
}
  render() {
    console.log("This is render method")
    return (
      <>
      <div>Hello {this.state.name}</div>
      <button onClick={()=>this.setState({name:"Geeta"})}>Click Me</button>
      </>
    )
  }
}
