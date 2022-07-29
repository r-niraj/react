import User from "./User";
import Nested from "./Nested";

function App() {
   
   function game(){
      return (<div>THis is my game component</div>)
   }

  return (
     <>
        <User/>
        {game()}
        <Nested/>
     </>
  );
}

export default App;
