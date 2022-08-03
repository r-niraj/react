import {useState} from 'react'

function App() {

  const [data, setDate] = useState(null)
  const [show, setShow] = useState(false)

  function getData(e){
      console.log(e.target.value)
      setDate(e.target.value)
  }

  return (
    <div>
      {
        show? <h2>Getting Input data : {data}</h2> : null
      }
      <input type="text" onChange={getData}/>
      <button onClick={()=>setShow(true)}>Show Data</button>
    </div>
  )
}

export default App