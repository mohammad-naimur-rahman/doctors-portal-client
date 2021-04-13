import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { GlobalContext } from '../../../App';
import jwt_decode from "jwt-decode";

const Sidebar = () => {

    const { signedInUser, setsignedInUser } = useContext(GlobalContext);
    const [isDoctor, setisDoctor] = useState(false);

    const token = sessionStorage.getItem('token');
    const decodedToken = jwt_decode(token);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: signedInUser.email || decodedToken.email })
        })
            .then(res => res.json())
            .then(data => {
                setisDoctor(data)
            });
    }, [signedInUser, decodedToken])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ padding: '0' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                {
                    isDoctor && <>
                        <li>
                            <Link to="/appointments" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/patients" className="text-white">
                                <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/prescriptions" className="text-white">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addDoctor" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/setting" className="text-white" >
                                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                            </Link>
                        </li>
                    </>
                }
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={() => {
                    sessionStorage.removeItem('token');
                    setsignedInUser({});
                }}>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;