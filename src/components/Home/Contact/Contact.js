import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container-fluid p-5 contact'>
            <h5 className="sub-heading">
                contact us
            </h5>
            <h2 className="heading text-white">
                Always Connect with us
            </h2>
            <form className='contact-form d-flex flex-column'>
                <input className='contact-email p-2 my-2' type="text" required placeholder='Email Address*' />
                <input className='contact-email p-2 my-2' type="text" required placeholder='Email Address*' />
                <textarea className='contact-message p-2 my-2' required placeholder='Your Message*'></textarea>
                <button className="btn-main py-1 my-2 align-self-center px-5">
                    submit
                </button>
            </form>
        </div>
    );
};

export default Contact;