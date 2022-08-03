import './App.css';
import Students from './Students';
import React, {Component} from 'react';

class App extends Component{
 
  constructor(){
    super();
    this.state={
      name: "Amit"
    }
  }
  render(){
    return (
      <div className="App">
        <Students name={this.state.name} city='Delhi' details={{age:"25", salary:"247"}}/>
        <button onClick={()=>this.setState({name:"Geeta"})}>Update value</button>
      </div>
    );
  }
}

export default App;
