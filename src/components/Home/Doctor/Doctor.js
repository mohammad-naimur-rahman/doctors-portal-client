import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, email, image } = doctor;
    return (
        <div className='col-md-4'>
            {
                doctor.name ? <div className="p-3 m-2 text-center">
                    <img style={{ height: '250px', width: 'auto', objectFit: 'cover' }} src={`data:${image.contentType};base64,${image.img}`} className='img-fluid' alt="doctor" />
                    <h5 className='py-1' style={{ color: 'var(--color-secondary' }}>{name}</h5>
                    <p className="text-secondary">
                        <FontAwesomeIcon icon={faEnvelope} className='mx-1' style={{ color: 'var(--color-primary)' }} />
                        {email}
                    </p>
                </div>
                    : <div className='d-flex justify-content-center align-items-center'>
                        <div className="spinner-border text-primary" role="status"></div>
                    </div>
            }
        </div>
    );
};

export default Doctor;