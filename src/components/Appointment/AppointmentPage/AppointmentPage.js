import React, { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const AppointmentPage = () => {
    const [selectedDate, setselectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setselectedDate(date);
    }
    return (
        <div className='container-fluid'>
            <NavBar />
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment selectedDate={selectedDate} />
            <Footer />
        </div>
    );
};

export default AppointmentPage;