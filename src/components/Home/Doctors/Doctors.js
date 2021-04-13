import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';


const Doctors = () => {
    const [doctors, setdoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setdoctors(data))
    }, [])
    return (
        <div className='container p-5'>
            <h5 className="sub-heading">
                Our doctors
            </h5>
            <h2 className='heading'>
                Our Dedicated Doctors
            </h2>
            <div className="row py-5">
                {
                    doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor} />)
                }
            </div>
        </div>
    );
};

export default Doctors;