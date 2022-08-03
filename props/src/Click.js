let name = "Amit";
function Click() {

    function clickEffect(){
        name = "Garima";
        alert(name);
        // alert("This is function");
    }

  return (
    <>
        <h1>{name}</h1>
        <button className='btn btn-success mx-5' onClick={clickEffect}>Click</button>
        {/* <button className='btn btn-success mx-5' onClick={clickEffect()}>Click</button>  */}
        {/* <button className='btn btn-success mx-5' onClick={()=>{ alert("This is function");}}>Click</button>  */}
    </>
  )
}

export default Click;