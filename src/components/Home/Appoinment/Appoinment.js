import React from 'react';
import doctor from '../../../images/doctor.png';
import './Appoinment.css';

const Apoinment = () => {
    return (
        <div className="container-fluid my-5">
            <div className='row appoinment'>
                <div className="col-lg-4 col-md-7">
                    <img src={doctor} className="img-fluid" alt="doctor-face" />
                </div>
                <div className="col-lg-8 col-md-5 d-flex flex-column justify-content-end">
                    <h5 className='py-1' style={{ color: '#5FC7C7' }}>
                        APPOINMENT
                    </h5>
                    <h2 className='py-1 text-white'>
                        Make an appoinment
                        <br />
                        Today
                    </h2>
                    <p className="py-1 text-white-50">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi error commodi quos deserunt minus autem.
                    </p>
                    <button className="btn-main align-self-start mt-1 mb-2">
                        Learn more
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Apoinment;