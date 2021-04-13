import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ data, selectedDate }) => {
    const { subject, visitingHour, totalSpace } = data;

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='col-lg-4 col-md-6 text-center'>
            <div className="m-2 py-5 px-3">
                <h5 className="subheading">
                    {subject}
                </h5>
                <p><b>{visitingHour}</b></p>
                <p className="text-secondary">{totalSpace} SPACE AVAILABLE</p>
                <button className="btn-main" onClick={openModal}>
                    Book appointment
                </button>
                <AppointmentForm appointmentOn={subject} date={selectedDate} modalIsOpen={modalIsOpen} visitingHour={visitingHour} closeModal={closeModal} />
            </div>
        </div>
    );
};

export default BookingCard;