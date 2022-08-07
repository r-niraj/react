import Navbar from './Navbar';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom"
import Shop from './Shop';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Shop/>
    <Routes>
      {/* <Route exact path="/" element={<App/>} /> */}
      {/* <Route exact path="/about" element={<Page1 />} /> */}
    </Routes>
  </Router>
    </div>
  );
}

export default App;
