import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer'
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedService />
            <Appoinment />
            <Testimonial />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;