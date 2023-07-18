/* eslint-disable react/jsx-key */



import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const DestinationTabs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:5012/travelPlacesDetails')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching API data:', error));
    };

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const travelInformation = [
        { label: 'Destination', value: ['Fermar Name'] },
        { label: 'Departure', value: ['High Time'] },
        { label: 'Departure Time', value: ['Kids zone Time'] },
        { label: 'Return Time', value: ['Due money'] },
        { label: 'Included', value: ['✓ Included Services 1', '✓ Included Services 2', '✓ Included Services 3', '✓ Included Services 4', '✓ Included Services 5'] },
        { label: 'Not Included', value: ['✕ Not Included Services 1', '✕ Not Included Services 2', '✕ Not Included Services 3'] }
    ];

    const tripSteps = [
        { id: 1, title: 'Day 1', description: 'Arrival and Check-in' },
        { id: 2, title: 'Day 2', description: 'Exploring City Landmarks' },
        { id: 3, title: 'Day 3', description: 'Outdoor Adventure Activities' },
        { id: 4, title: 'Day 4', description: 'Relaxation and Spa Day' },
        { id: 5, title: 'Day 5', description: 'Departure' },
    ];

    return (
        <div>
            <Tabs className="bg-red-100" selectedIndex={activeTab} onSelect={handleTabChange}>
                <TabList className="flex flex-col border-0 shadow-xl bg-emerald-500 sm:flex-row max-w-fit">
                    <Tab
                        className={`mx-auto px-4 py-1 ${activeTab === 0
                            ? 'mx-auto   justify-center'
                            : 'bg-gray-300 '
                            } `}
                        onClick={() => handleTabChange(0)}
                    >
                        Information
                    </Tab>
                    <Tab
                        className={`mx-auto px-4 py-1 ${activeTab === 1
                            ? 'mx-auto justify-center'
                            : 'bg-gray-300 '
                            } cursor-pointer`}
                        onClick={() => handleTabChange(1)}
                    >
                        Tour Plan
                    </Tab>
                    <Tab
                        className={`mx-auto px-4 py-1 ${activeTab === 2
                            ? 'mx-auto justify-center'
                            : 'bg-gray-200 '
                            } cursor-pointer`}
                        onClick={() => handleTabChange(2)}
                    >
                        Location
                    </Tab>
                    <Tab
                        className={`mx-auto px-4 py-1 ${activeTab === 3
                            ? 'mx-auto justify-center'
                            : 'bg-gray-200 '
                            } cursor-pointer`}
                        onClick={() => handleTabChange(3)}
                    >
                        Gallery
                    </Tab>
                    <Tab
                        className={`mx-auto px-4 py-1 ${activeTab === 4
                            ? 'mx-auto justify-center'
                            : 'bg-gray-200 '
                            } cursor-pointer`}
                        onClick={() => handleTabChange(4)}
                    >
                        Reviews
                    </Tab>
                </TabList>

                {data.map((destination, index) => (
                    <TabPanel key={index}>
                        <div
                            className="p-4 border border-gray-300 shadow-md bg-cyan-50"
                        >
                            {activeTab === 0 && (
                                <React.Fragment>
                                    <h3 className="mb-2 text-lg font-bold">
                                        {destination.placeName}
                                    </h3>
                                    <p className="mt-3 text-sm text-justify text-slate-500">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec.</p>
                                    <div className='flex justify-around p-3 my-5 bg-slate-500'>
                                        <div>7 days</div>
                                        <div>18+ Age</div>
                                        <div>Maldives</div>
                                        <div>Best Deals</div>
                                    </div>

                                    {/* Package explain about tour */}
                                    <div className="border-gray-100">
                                        {travelInformation.map(({ label, value }) => (
                                            <div
                                                className="flex p-4 text-sm transition-all duration-300 transform border-b border-gray-400 border-dotted rounded-md shadow-md hover:-translate-y-1 hover:shadow-lg"
                                                key={label}
                                            >
                                                <div className="w-full text-start sm:w-2/5 ">
                                                    <h3 className="text-sm font-bold">{label}</h3>
                                                </div>
                                                <div className="flex flex-col w-full sm:justify-start sm:items-start sm:flex-wrap sm:flex-row md:w-3/5">
                                                    {value.map((item, index) => (
                                                        <p className="ml-0 text-gray-600 sm:ml-10" key={index}>
                                                            {item}
                                                            {index !== value.length - 1 && ', '}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>


                                    {/* Carousel of SPOT */}
                                    <div>
                                        <h1 className='my-5 font-semibold text-md sm:text-lg'>Visiting Spot on this Place</h1>
                                        <div className="carousel carousel-center rounded-box">
                                            <div className="carousel-item">
                                                <img src={destination.detailedImages[0]} alt="Pizza" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={destination.detailedImages[1]} alt="Pizza" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={destination.detailedImages[2]} alt="Pizza" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={destination.detailedImages[3]} alt="Pizza" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={destination.detailedImages[4]} alt="Pizza" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={destination.detailedImages[5]} alt="Pizza" />
                                            </div>
                                        </div>


                                    </div>

                                </React.Fragment>
                            )}
                            {activeTab === 1 && (
                                <div>


                                </div>
                            )}
                            {activeTab === 2 && (
                                <p className="mb-2">Price: {destination.visitPrice}</p>
                            )}
                            {activeTab === 3 && (
                                <p className="mt-4">{destination.placeDescription}</p>
                            )}
                            {activeTab === 4 && (
                                <p className="mb-2">Duration: {destination.travelDuration}
                                    <p>Reviews: {destination.userReviews}</p>

                                </p>

                            )}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default DestinationTabs;

