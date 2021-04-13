import React from 'react';
import BussinessInfo from '../BussinessInfo/BussinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../../Shared/NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container container-fluid d-flex flex-column justify-content-around' style={{ minHeight: '100vh' }}>
            <NavBar />
            <HeaderMain />
            <BussinessInfo />
        </div>
    );
};

export default Header;