import React, { useEffect, useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../Sidebar/Sidebar';

const AllPatients = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div className="container-fluid row" style={{ padding: '0' }}>
            <NavBar />
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">All Patients</h5>
                    <AppointmentDataTable appointments={appointments} />
                </div>
            </div>
        </div>
    );
};

export default AllPatients;