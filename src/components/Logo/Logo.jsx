import React from 'react';
import logo from '../../assets/LH.png'
import { Link } from 'react-router';
// import log from '../../assets/LH.p'


const Logo = () => {
    return (
        <Link to="/">
                <div className='flex  '>
            <img src={logo} alt="" className='h-20 '/>
            <h2 className='text-3xl font-extrabold -ms-13 mt-8'>LekhokHub</h2>
        </div>
        </Link>
    );
};

export default Logo;