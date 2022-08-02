function Students(props) {
    console.log(props)
    return (
    <div style={{backgroundColor:"red", color:"white", margin:"10px"}}>
        Welcome {props.name} you are from {props.city}
        <p>
            Age : {props.details.age} <br />
            Salary : {props.details.salary}
        </p>
    </div>
  )
}

export default Students