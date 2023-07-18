import React from 'react';


import Destination from '../Destination/Destination';
import DestinationTabs from '../Tab/DestinationTabs';

const Home = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <Destination></Destination>

            <DestinationTabs></DestinationTabs>

        </div>
    );
};

export default Home;