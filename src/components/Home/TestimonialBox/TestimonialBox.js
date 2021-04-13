import React from 'react';

const TestimonialBox = ({ testimonial }) => {
    const { quote, name, from, img } = testimonial;
    return (
        <div className='col-lg-4 col-md-6 rounded'>
            <div className="p-4 m-2 shadow">
                <p className="text-secondary">
                    {quote}
                </p>
                <div className="d-flex align-items-center justify-content-around p-2">
                    <img src={img} style={{ width: '60px' }} alt="clinet" />
                    <div>
                        <h6 style={{ color: 'var(--color-primary)' }}>{name}</h6>
                        <p className="text-secondary fw-bold">
                            {from}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialBox;