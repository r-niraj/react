function Students(props) {
  return (
    <div>
       <h2>This is student component</h2>
       <button onClick={()=>props.data("Geeta")}>Call the function</button>
    </div>
  )
}

export default Students