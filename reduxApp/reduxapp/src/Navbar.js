import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

function Navbar() {
    const state  = useSelector(state=>state.amount)

    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/students">Studens</Link>
                            </li>
                        </ul>
                        <div>

                            {state<0? <button className='btn btn-danger rounded-0' disabled={true}>Balance : {state}</button> : state>=1000 ? <button className='btn btn-success rounded-0' disabled={true}>Balance : {state}</button>: <button className='btn btn-primary rounded-0' disabled={true}>Balance : {state}</button>}
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar