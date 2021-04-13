import React, { useContext } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import { useEffect } from 'react';
import { GlobalContext } from '../../../App';
import jwt_decode from "jwt-decode";

const DashBoard = () => {

    const containerStyle = {
        background: '#F4FDFB'
    }

    const [date, setdate] = useState((new Date()).toDateString());
    const [appointments, setappointments] = useState([]);
    const { signedInUser } = useContext(GlobalContext);
    const handleDateChange = dateInfo => {
        setdate(dateInfo.toDateString());

    }

    const token = sessionStorage.getItem('token');
    const decodedToken = jwt_decode(token);

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: date, email: signedInUser.email || decodedToken.email })
        })
            .then(res => res.json())
            .then(data => {
                setappointments(data);
            })
    }, [date, signedInUser, decodedToken])
    return (
        <section>
            <NavBar />
            <div className="container-fluid row" style={{ padding: '0' }}>
                <div className="col-md-2" style={containerStyle}>
                    <Sidebar />
                </div>
                <div className="col-md-5 mx-auto">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                        className='mx-auto p-2 border-0'
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments} />
                </div>
            </div>
        </section>
    );
};

export default DashBoard;