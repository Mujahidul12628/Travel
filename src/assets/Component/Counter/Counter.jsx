
import React from 'react';
import CountUp from 'react-countup';
import { HiMiniGlobeAlt, HiUserGroup } from "react-icons/hi2";
import { IoMdRibbon } from "react-icons/io";
import { FaUserCheck, FaPersonHiking } from "react-icons/fa6";


const Counter = () => {
    const client = 0;
    const clientEnd = 6715;
    const clientDuration = 10;

    const country = 0;
    const countryEnd = 170;
    const countryDuration = 10;

    const tour = 0;
    const tourEnd = 13648;
    const tourDuration = 10;

    const destination = 0;
    const destinationPlaces = "1500";
    const destinationDuration = 10;

    const reviewStart = 0;
    const reviewEnd = 4275;
    const reviewDuration = 10;

    return (
        <div className="flex items-center justify-center mt-2">
            <div className="grid w-full grid-cols-2 gap-2 mx-auto sm:w-fit sm:gap-2 md:gap-4 sm:grid-cols-4 lg:grid-cols-5">
                <div className="p-2 text-center bg-white rounded-lg md:p-4 lg:p-6 shadowAlll">
                    <HiUserGroup className='mx-auto mb-2 text-cyan-500' size={35} />
                    <CountUp
                        start={client}
                        end={clientEnd}
                        duration={clientDuration}
                        className="text-2xl font-bold text-Cyan-600 md:text-3xl text-cyan-500"
                    />
                    <h2 className="mt-2 text-sm font-semibold sm:mb-4 sm:text-md text-slate-500">Total Travelers</h2>
                </div>

                <div className="p-2 text-center bg-white rounded-lg md:p-4 lg:p-6 shadowAlll">
                    <HiMiniGlobeAlt className='mx-auto mb-2 text-cyan-500' size={35} />
                    <CountUp
                        start={country}
                        end={countryEnd}
                        duration={destinationDuration}
                        className="text-2xl font-bold text-Cyan-600 md:text-3xl text-cyan-500"
                    />
                    <h2 className="mt-2 text-sm font-semibold sm:mb-4 sm:text-md text-slate-500">Visitable Country</h2>
                </div>
                <div className="p-2 text-center bg-white rounded-lg md:p-4 lg:p-6 shadowAlll">
                    <FaPersonHiking className='mx-auto mb-2 text-cyan-500' size={35} />
                    <CountUp
                        start={destination}
                        end={destinationPlaces}
                        duration={countryDuration}
                        className="text-2xl font-bold text-Cyan-600 md:text-3xl text-cyan-500"
                    />
                    <h2 className="mt-2 text-sm font-semibold sm:mb-4 sm:text-md text-slate-500">Destination</h2>
                </div>
                <div className="hidden p-2 text-center bg-white rounded-lg lg:block md:p-4 lg:p-6 shadowAlll">
                    <IoMdRibbon className='mx-auto mb-2 text-cyan-500' size={35} />
                    <CountUp
                        start={tour}
                        end={tourEnd}
                        duration={tourDuration}
                        className="text-2xl font-bold text-Cyan-600 md:text-3xl text-cyan-500"
                    />
                    <h2 className="mt-2 text-sm font-semibold sm:mb-4 sm:text-md text-slate-500">Successful Tour</h2>
                </div>
                <div className="p-2 text-center bg-white rounded-lg md:p-4 lg:p-6 shadowAlll">
                    <FaUserCheck className='mx-auto mb-2 text-cyan-500' size={35} />
                    <CountUp
                        start={reviewStart}
                        end={reviewEnd}
                        duration={reviewDuration}
                        className="text-2xl font-bold text-Cyan-600 md:text-3xl text-cyan-500"
                    />
                    <h2 className="mt-2 text-sm font-semibold sm:mb-4 sm:text-md text-slate-500">User Reviews</h2>
                </div>
            </div>
        </div>
    );
};

export default Counter;
