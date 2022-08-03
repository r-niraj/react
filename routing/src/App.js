import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Students from './Students';
import Users from './Users';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Users />}/>
            <Route path='/students' element={<Students />}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App


