import React, { useState } from 'react';
import { useContext } from 'react';
import Modal from 'react-modal';
import { GlobalContext } from '../../../App';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date, visitingHour }) => {
    const { signedInUser } = useContext(GlobalContext);
    const [name, setname] = useState(signedInUser.name);
    const [phone, setphone] = useState('+88');
    const [email, setemail] = useState(signedInUser.email);
    const [gender, setgender] = useState('Male');
    const [age, setage] = useState(0);
    const [weight, setweight] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        setname('');
        setphone('+88');
        setemail('');
        setgender('Male');
        setage(0);
        setweight(0);
        const appointmentData = {
            name, phone, email, gender, age, weight,
            subject: appointmentOn,
            date: (date).toDateString(),
            createdDate: (new Date()).toDateString(),
            session: visitingHour
        }

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appointmentData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Appointment Added');
                    closeModal();
                }
            })
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>On {date.toDateString()}</small></p>
                <form className="px-5" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name: </label>
                        <input type="text" id='name' name="name" placeholder='Full Name' className="form-control" value={name} onChange={e => setname(e.target.value)} required />

                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Mobile Number: </label>
                        <input type="text" id='phone' name="phone" value={phone} onChange={e => setphone(e.target.value)} placeholder="Phone Number" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" name="email" id='email' value={email} onChange={e => setemail(e.target.value)} placeholder="Email" className="form-control my-1" required />
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <label htmlFor="gender">Gender:</label>
                            <select className="form-control" value={gender} onChange={e => setgender(e.target.value)} name="gender" id='gender'>
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <label htmlFor="age">Age: </label>
                            <input className="form-control" id='age' name="age" value={age} onChange={e => setage(e.target.value)} placeholder="Your Age" type="number" required />
                        </div>
                        <div className="col-4">
                            <label htmlFor="weight">Weight: </label>
                            <input className="form-control" id='weight' name="weight" value={weight} onChange={e => setweight(e.target.value)} placeholder="Weight" type="number" required />
                        </div>
                    </div>

                    <div className="form-group text-end">
                        <button type="submit" className="btn-main mt-3 px-5">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;