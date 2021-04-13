import React from 'react';
import { useHistory } from 'react-router';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    const history = useHistory();
    return (
        <main className='row d-flex align-items-center justify-content-center header-main py-5'>
            <div className="col-md-4 offset-lg-1">
                <h1 style={{ color: '#3a4256' }}>Your New Smile<br />Starts Here</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti consequatur aspernatur quis similique explicabo.</p>
                <button className="btn-main" onClick={() => history.push('/appointment')}>
                    GET  APPOINTMENT
                </button>
            </div>
            <div className="col-md-6">
                <img src={chair} className='img-fluid d-md-block d-none' alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;