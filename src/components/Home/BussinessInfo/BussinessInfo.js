import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Locaton',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhone,
        background: 'info'
    }
]

const BussinessInfo = () => {
    return (
        <section className='row d-flex justify-content-around flex-wrap'>
            {
                infoData.map(info => <InfoCard key={info.title} info={info} />)
            }
        </section>
    );
};

export default BussinessInfo;