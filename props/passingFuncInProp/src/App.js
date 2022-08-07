import Students from './Students';
import Users from './Users';


function App() {

function getData(name){
  alert("Hello There from App component: " + name)
}

  return (
    <>
    <Students data={getData}/>
    <div style={{background:"red", color:"white"}}>
      <Users data={getData}/>
    </div>
    </>
  );
}

export default App;
