import React, { Component } from 'react'

class Classcomp extends Component {

  constructor(){
    super()
    this.state={
        name: "Amit"
    }
  } 

  updateData(){
    // alert ("Changing Data");
    this.setState({name:"Garima"})
  }

  render() {
    return (
      <>
      <h1>{this.state.name}</h1>
      <button className='btn btn-success mx-5' onClick={()=>this.updateData()}>Click</button>
      </>
    )
  }
}

export default Classcomp;
