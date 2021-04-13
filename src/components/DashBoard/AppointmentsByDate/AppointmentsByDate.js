import React from 'react';
import AppointmentsList from '../AppointmentsList/AppointmentsList';

const AppointmentsByDate = ({ appointments }) => {
    return (
        <div>
            <h2>
                Total {appointments.length} appointments
            </h2>
            {
                appointments.length ?
                    <AppointmentsList appointments={appointments} /> :
                    <h4 className="text-center p-5 text-info">
                        No Appointment for this Date
                    </h4>
            }
        </div>
    );
};

export default AppointmentsByDate;