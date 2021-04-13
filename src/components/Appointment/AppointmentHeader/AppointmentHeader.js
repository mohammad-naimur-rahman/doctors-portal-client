import React from 'react';
import Calendar from 'react-calendar';
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({ handleDateChange }) => {
    return (
        <main className='row d-flex align-items-center justify-content-center header-main py-5'>
            <div className="col-md-4 offset-lg-1">
                <h1 style={{ color: '#3a4256' }}>Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} className='img-fluid d-md-block d-none' alt="" />
            </div>
        </main>
    );
};

export default AppointmentHeader;