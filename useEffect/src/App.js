import { useEffect, useState} from "react"



function App() {

  const [name, setName] = useState("Amit")
  const [name1, setName1] = useState("Ramesh")
  useEffect(()=>{
    console.log("Called for Amit")
  },[name])
  
  useEffect(()=>{
    console.log("Called for Ramesh")
  },[name1])

  return (
    
    <div>
        <h2>Learning use Effect : {name}</h2>
        <h2>Learning use Effect : {name1}</h2>
        <button onClick={()=>setName("Geeta")}>Click to update</button> <br />
        <button onClick={()=>setName1("Alexa")}>Click to update name 1</button>
    </div>
  )
}

export default App