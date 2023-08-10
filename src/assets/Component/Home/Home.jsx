import React from 'react';


import Destination from '../Destination/Destination';
import DestinationTabs from '../Tab/DestinationTabs';
import SpecialDeal from '../SpecialDeal/SpecialDeal';
import Counter from '../Counter/Counter';
import Header from '../Header/Header';



const Home = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <Header></Header>
            <Counter></Counter>
            <SpecialDeal></SpecialDeal>
            <Destination></Destination>
            <DestinationTabs></DestinationTabs>
        </div>
    );
};

export default Home;