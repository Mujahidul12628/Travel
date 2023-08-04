import React from 'react';
import myImage from '../../Images/google-location.png';

const Location = () => {
    return (
        <div className='w-full '>
            <h1 className='text-center text-2xl mb-3'>Google location</h1>
            <img className='mx-auto' src={myImage} alt="My Image" />
        </div>
    );
};

export default Location;