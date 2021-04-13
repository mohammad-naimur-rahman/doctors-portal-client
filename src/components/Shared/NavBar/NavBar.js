import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../App';
import './NavBar.css';

const NavBar = () => {
    const { signedInUser, setsignedInUser } = useContext(GlobalContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 main-nav">
                        <li className="nav-item">
                            <Link className="nav-link me-5 active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5" to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5" to='/reviews'>Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5" to='/blog'>Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5" to='/contact'>Contact us</Link>
                        </li>
                        {
                            signedInUser.email ?
                                <li className="nav-item">
                                    <Link to='/' className="nav-link me-5" onClick={() => {
                                        setsignedInUser({});
                                        sessionStorage.removeItem('token');
                                    }}>Logout</Link>
                                </li> :
                                <li className="nav-item">
                                    <Link className="nav-link me-5" to='/login'>Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;