import React from 'react';
import logo from '../../assets/Adobe.png'
import { Link } from 'react-router';


const Logo = () => {
    return (
        <Link to="/">
                <div className='flex  '>
            <img src={logo} alt="" className='h-20 '/>
            <h2 className='text-3xl font-extrabold -ms-6 mt-8'>LekhokHub</h2>
        </div>
        </Link>
    );
};

export default Logo;