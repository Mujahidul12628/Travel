import React from 'react';


import Destination from '../Destination/Destination';
import DestinationTabs from '../Tab/DestinationTabs';
import SpecialDeal from '../SpecialDeal/SpecialDeal';

const Home = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <SpecialDeal></SpecialDeal>
            <Destination></Destination>
            <DestinationTabs></DestinationTabs>
        </div>
    );
};

export default Home;