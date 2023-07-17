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
        { label: 'Destination', value: 'Destination Name' },
        { label: 'Departure', value: 'Departure Location' },
        { label: 'Departure Time', value: 'Departure Time' },
        { label: 'Return Time', value: 'Return Time' },
        { label: 'Included', value: 'Included Services' },
        { label: 'Not Included', value: 'Not Included Services' }
    ];

    return (
        <div>
            <Tabs className="bg-red-100" selectedIndex={activeTab} onSelect={handleTabChange}>
                <TabList className="flex bg-teal-500 shadow-xl max-w-fit">
                    <Tab
                        className={`mx-auto px-4 py-1 ${activeTab === 0
                            ? 'mx-auto   justify-center'
                            : 'bg-gray-300 '
                            } cursor-pointer`}
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

                                    <div className="border-gray-100 border-dotted">
                                        {travelInformation.map(({ label, value }) => (
                                            <div
                                                className="flex p-4 transition-all duration-300 transform bg-white border border-gray-400 border-dotted rounded-md shadow-md hover:-translate-y-1 hover:shadow-lg"
                                                key={label}
                                            >
                                                <div className="w-1/3">
                                                    <h3 className="text-lg font-bold">{label}</h3>
                                                </div>
                                                <div className="flex items-center justify-start w-2/3">
                                                    <p className="text-gray-600">{value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-gray-100 border-dotted">
                                        {travelInformation.map(({ label, value }) => (
                                            <div
                                                className="flex p-4 transition-all duration-300 transform bg-white border border-gray-400 border-dotted rounded-md shadow-md hover:-translate-y-1 hover:shadow-lg"
                                                key={label}
                                            >
                                                <div className="w-1/3">
                                                    <h3 className="text-lg font-bold">{label}</h3>
                                                </div>
                                                <div className="flex items-center justify-start w-2/3">
                                                    <p className="ml-4 text-gray-600">{value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>





                                </React.Fragment>
                            )}
                            {activeTab === 1 && (
                                <div className="mb-2">Duration: {destination.travelDuration}
                                    <p>Reviews: {destination.userReviews}</p>

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

