import React, { Component } from 'react'

class Students extends Component {
    render() {
    // console.log(this.props)
    return (
        <div style={{background:"red", color:"white"}}>Students name is {this.props.name}</div>
    )
  }
}

export default Students;
