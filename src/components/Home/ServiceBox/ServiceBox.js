import React from 'react';

const ServiceBox = ({ service }) => {
    const { title, img } = service;
    return (
        <div className='text-center p-3 m-2' style={{ maxWidth: '300px' }}>
            <img src={img} alt="service" className='py-2' style={{ maxWidth: '80px' }} />
            <h5 className='py-2'>{title}</h5>
            <p className="text-secondary py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus facilis ratione saepe maiores praesentium est facere velit magnam sequi?
            </p>
        </div>
    );
};

export default ServiceBox;