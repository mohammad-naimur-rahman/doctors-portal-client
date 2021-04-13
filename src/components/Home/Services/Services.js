import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import tooth from '../../../images/tooth.png';
import ServiceBox from '../ServiceBox/ServiceBox';

const serviceData = [
    {
        title: 'Floudide Treatment',
        img: flouride
    },
    {
        title: 'Cavity Fllling',
        img: cavity
    },
    {
        title: 'Teeth Whitening',
        img: tooth
    }
]

const Services = () => {
    return (
        <section className='py-5'>
            <h6 className="sub-heading">
                OUR SERVICES
            </h6>
            <h2 className="heading">
                SERVICES WE PROVIDE
            </h2>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-around py-5">
                    {
                        serviceData.map(service => <ServiceBox key={service.title} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;