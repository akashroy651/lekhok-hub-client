import React from 'react';
import logo from '../../assets/Adobe.png'


const Logo = () => {
    return (
        <div className='flex  '>
            <img src={logo} alt="" className='h-20 '/>
            <h2 className='text-3xl font-extrabold -ms-6 mt-8'>LekhokHub</h2>
        </div>
    );
};

export default Logo;