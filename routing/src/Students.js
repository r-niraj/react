import {Link} from 'react-router-dom';

function Students() {
  return (
    <div>
      <h2 className="bg-success p-3 text-white text-center">This is student component</h2>
    <Link to="/">Click to open User Component</Link>
    </div>
  )
}

export default Students