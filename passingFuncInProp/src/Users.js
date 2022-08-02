function Users(props) {
    return (
      <div>
         <h2>This is Users component</h2>
         <button onClick={()=>props.data("Ramesh")}>Call the function</button>
      </div>
    )
  }
  
  export default Users