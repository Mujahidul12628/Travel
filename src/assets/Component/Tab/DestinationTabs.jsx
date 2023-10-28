/* eslint-disable react/jsx-key */



import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Location from './Location';
import GalleryData from './GalleryData';
import Reviews from './Reviews';
import ReviewData from './ReviewData';
import VisitingSpot from './visitingSpot';

const DestinationTabs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://travel-server-flame.vercel.app/travelPlacesDetails')
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
            <Tabs className="bg-slate-100" selectedIndex={activeTab} onSelect={handleTabChange}>
                <TabList className="flex flex-col shadow-xl bg-cyan-500 sm:flex-row max-w-fit">
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
                            className="p-2 border border-gray-300 shadow-md bg-cyan-50"
                        >
                            {activeTab === 0 && (
                                <React.Fragment>
                                    <h3 className="mb-2 text-lg font-bold">
                                        {/* {destination.placeName} */}
                                        Destination
                                    </h3>
                                    <p className="mt-3 text-sm text-justify text-slate-500">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec.</p>
                                    <div className='flex justify-around p-3 my-5 bg-cyan-500 bg-opacity-80'>
                                        <div className='font-semibold text-white'>7 days</div>
                                        <div className='font-semibold text-white'>18+ Age</div>
                                        <div className='font-semibold text-white'>Maldives</div>
                                        <div className='font-semibold text-white'>Best Deals</div>
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



                                    <div>
                                    </div>

                                </React.Fragment>
                            )}
                            {activeTab === 1 && (
                                <div className="container px-4 mx-auto">
                                    <h1 className="my-8 text-3xl font-bold">Travel Itinerary</h1>

                                    <div className="space-y-8">
                                        <div className="flex items-start">
                                            <div className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-blue-500 rounded-full">
                                                1
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold"><span className='d-none sm:d-block'>Step 1:</span> Departure</h3>
                                                <p className="text-lg text-gray-600">Sightseeing and local attractions</p>
                                                <ul className="pl-8 mt-2 list-disc">
                                                    <li> <span className='font-semibold'>Visit famous landmarks</span> <span className='hidden sm:inline'>: Explore iconic landmarks and their architectural beauty and learn about their historical significance.</span> </li>
                                                    <li> <span className='font-semibold'>Explore museums</span> <span className='hidden sm:inline'>: Immerse yourself in art, culture, and history and Discover fascinating exhibitions, collections.</span></li>
                                                    <li> <span className='font-semibold'>Enjoy local cuisine</span><span className='hidden sm:inline'>: Indulge in the local flavors and culinary delights and authentic taste of the region.</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-blue-500 rounded-full">
                                                2
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold">Step 2: Outdoor Adventure</h3>
                                                <p className="text-lg text-gray-600">Hiking and nature exploration</p>
                                                <ul className="pl-8 mt-2 list-disc">
                                                    <li><span className='font-semibold'> Go hiking in the mountains</span><span className='hidden sm:inline'>: Embark on a thrilling hiking expedition through picturesque mountain trails. </span> </li>
                                                    <li><span className='font-semibold'>Visit scenic viewpoints</span><span className='hidden sm:inline'>: Discover stunning panoramic views by visiting designated viewpoints along the hiking route.</span></li>
                                                    <li><span className='font-semibold'>Try local outdoor activities</span><span className='hidden sm:inline'>:  Engage in exciting outdoor activities that highlight the regions natural offerings. </span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-blue-500 rounded-full">
                                                3
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold">Step 3: Relaxation at the Beach</h3>
                                                <p className="text-lg text-gray-600">Sun, sand, and water activities</p>
                                                <ul className="pl-8 mt-2 list-disc">
                                                    <li>Spend a day at the beach</li>
                                                    <li>Swim in the crystal-clear water</li>
                                                    <li>Try water sports</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-blue-500 rounded-full">
                                                4
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold">Step 4: Cultural Exploration</h3>
                                                <p className="text-lg text-gray-600">Immerse in local traditions and heritage</p>
                                                <ul className="pl-8 mt-2 list-disc">
                                                    <li>Visit historical sites</li>
                                                    <li>Experience local festivals</li>
                                                    <li>Discover traditional arts and crafts</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-blue-500 rounded-full">
                                                5
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold"><span className='d-none sm:d-block'>Step 5:</span> Return</h3>
                                                <p className="text-lg text-gray-600">Sightseeing and local attractions</p>
                                                <ul className="pl-8 mt-2 list-disc">
                                                    <li> <span className='font-semibold'>Visit famous landmarks</span> <span className='hidden sm:inline'>: Explore iconic landmarks and their architectural beauty and learn about their historical significance.</span> </li>
                                                    <li> <span className='font-semibold'>Explore museums</span> <span className='hidden sm:inline'>: Immerse yourself in art, culture, and history and Discover fascinating exhibitions, collections.</span></li>
                                                    <li> <span className='font-semibold'>Enjoy local cuisine</span><span className='hidden sm:inline'>: Indulge in the local flavors and culinary delights and authentic taste of the region.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 2 && (
                                <div>
                                    <Location></Location>
                                </div>
                            )}
                            {activeTab === 3 && (
                                <div>
                                    <GalleryData></GalleryData>
                                </div>
                            )}
                            {activeTab === 4 && (
                                <div className=''>
                                    <div className='hidden md:block '>
                                        <Reviews></Reviews>
                                    </div>
                                    <div className='block md:hidden'>
                                        <ReviewData></ReviewData>
                                    </div>
                                </div>

                            )}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default DestinationTabs;

