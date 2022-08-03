import './App.css';
import Students from './Students';
import { useState } from 'react';

function App() {
  const [name, setname] = useState("Amit")
  return (
    <div className="App">
      <Students name={name} city='Delhi' details={{age:"25", salary:"247"}}/>
      {/* <Students name="Golu" city="Delhi"  details={{age:"32", salary:"276"}} />
      <Students name="Meena" city="Nagpur" details={{age:"22", salary:"300"}} />
      <Students name="Teena" city="Rampur" details={{age:"24", salary:"200"}} /> */}
    <button onClick={()=>{setname("Sumit")}}>Click me</button>
    </div>
  );
}

export default App;
