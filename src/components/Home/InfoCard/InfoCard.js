import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InfoCard = ({ info }) => {
    const { title, description, icon, background } = info;
    return (
        <div className='col-md-4 text-white' style={{ maxWidth: '400px', whiteSpace: 'nowrap' }}>
            <div className={`mx-1 my-2 p-4 bg-${background} rounded`}>
                <div className="d-flex align-items-center justify-content-between">
                    <FontAwesomeIcon icon={icon} className='pe-2' style={{ fontSize: '45px' }} />
                    <div>
                        <h6>{title}</h6>
                        <p className='small'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;