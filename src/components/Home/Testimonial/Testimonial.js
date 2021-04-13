import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import TestimonialBox from '../TestimonialBox/TestimonialBox';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]


const Testimonial = () => {
    return (
        <div className='container-fluid p-5'>
            <h5 className='py-2' style={{ color: 'var(--color-primary)' }}>TESTIMONIAL</h5>
            <h2 style={{ color: 'var(--color-secondary)' }}>
                What's Our Patients
                <br />
                Says
            </h2>
            <div className="row p-3">
                {
                    testimonialData.map(testimonial => <TestimonialBox key={testimonial.name} testimonial={testimonial} />)
                }
            </div>
        </div>
    );
};

export default Testimonial;