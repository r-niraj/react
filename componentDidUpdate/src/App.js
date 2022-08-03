import React, { Component } from 'react'

class App extends Component {
  constructor(){
    console.log("This is constructor")
      super();
      this.state={
        name:"Amit"
      }
  }
componentDidMount(){
  console.log("componentDidMount")
}
componentDidUpdate(preProps,preState,snapshot){
  console.log("componentDidUpdate Here", preState)
}

  render() {
    console.log("Render Method")
    return (
      <div>
        <h2>Learning componentDidUpdate: {this.state.name}</h2>
        <button onClick={()=>this.setState({name:"Geeta"})}>Click Me</button>
      </div>
    )
  }
}

export default App;
