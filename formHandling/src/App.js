import {useState} from 'react'

function App() {

  const [name, setName] = useState("");
  const [dropData, setdropData] = useState("");
  const [tc, setTC] = useState(false);

  function getFormData(e){
    console.log(name,dropData,tc)
    e.preventDefault();
  }

  return (
    <>
    <h2>Form Handling</h2>
    <form action="" onSubmit={getFormData}>
      <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/> <br />
      
      <select onChange={(e)=>setdropData(e.target.value)}>
        <option>Cat</option>
        <option>Dog</option>
        <option>Elephant</option>
      </select> <br />

      <input type="checkbox" onChange={(e)=>setTC(e.target.checked)}/> <span>T&C</span> <br />
      <input type="submit" />
    </form>
    </>
  );
}

export default App;
