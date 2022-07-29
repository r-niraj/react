import {useState} from 'react'

function Hello() {
 
    // const [name, setName] = useState("Amit")
    const [name, setName] = useState(0)

    function updateData(){
        setName(name+1)
   }

  //  console.log("THis is the first rendring")
  return (
   <>
    <div>{name}</div>
    <button className='btn btn-success mx-5' onClick={updateData}>Click</button>
   </>

  )
}

export default Hello;
