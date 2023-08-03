import React from 'react';
import myImage from '../../Images/location.jpg';

const Location = () => {
    return (
        <div className='w-full border border-red-800'>
            <h1 className='text-center mb-3'>Google location</h1>
            <img className='mx-auto' src={myImage} alt="My Image" />
        </div>
    );
};

export default Location;