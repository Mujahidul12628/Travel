// import React from 'react';
// import CountUp from 'react-countup';

// const Counter = () => {
//     const memberStart = 0;
//     const memberEnd = 500;
//     const memberDuration = 3;

//     const spotStart = 0;
//     const spotEnd = 50;
//     const spotDuration = 3;

//     const countryStart = 0;
//     const countryEnd = 20;
//     const countryDuration = 3;

//     const reviewStart = 0;
//     const reviewEnd = 1000;
//     const reviewDuration = 3;

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
//             <h1 className="mb-4 text-3xl font-bold">Count Up Example</h1>
//             <div className="grid grid-cols-2 gap-4">
//                 <div className="p-4 bg-white rounded-lg shadow-md">
//                     <h2 className="mb-2 text-lg font-semibold">Total Members</h2>
//                     <CountUp start={memberStart} end={memberEnd} duration={memberDuration} />
//                 </div>
//                 <div className="p-4 bg-white rounded-lg shadow-md">
//                     <h2 className="mb-2 text-lg font-semibold">Total Spots</h2>
//                     <CountUp start={spotStart} end={spotEnd} duration={spotDuration} />
//                 </div>
//                 <div className="p-4 bg-white rounded-lg shadow-md">
//                     <h2 className="mb-2 text-lg font-semibold">Total Countries</h2>
//                     <CountUp start={countryStart} end={countryEnd} duration={countryDuration} />
//                 </div>
//                 <div className="p-4 bg-white rounded-lg shadow-md">
//                     <h2 className="mb-2 text-lg font-semibold">Total Reviews</h2>
//                     <CountUp start={reviewStart} end={reviewEnd} duration={reviewDuration} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Counter;

import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    const memberStart = 0;
    const memberEnd = 500000;
    const memberDuration = 10;

    const spotStart = 0;
    const spotEnd = 500000;
    const spotDuration = 10;

    const countryStart = 0;
    const countryEnd = 2000000;
    const countryDuration = 10;

    const reviewStart = 0;
    const reviewEnd = 1000000;
    const reviewDuration = 10;

    return (
        <div className="flex items-center justify-center">
            <div className="grid w-full grid-cols-2 gap-2 sm:gap-2 md:gap-4 sm:grid-cols-4 sm:w-max ">
                <div className="p-2 text-center bg-white rounded-lg md:p-4 lg:p-6 shadowAlll">
                    <h2 className="mb-1 font-semibold sm:mb-4 text-md sm:text-lg">Total Members</h2>
                    <CountUp
                        start={memberStart}
                        end={memberEnd}
                        duration={memberDuration}
                        className="text-2xl font-bold text-Cyan-600 md:text-3xl"
                    />
                </div>

                <div className="p-2 text-center bg-white rounded-lg md:p-4 lg:p-6 shadowAlll">
                    <h2 className="mb-1 font-semibold sm:mb-4 text-md sm:text-lg">Total Members</h2>
                    <CountUp
                        start={spotStart}
                        end={spotEnd}
                        duration={spotDuration}
                        className="text-2xl font-bold text-Cyan-600 md:text-3xl"
                    />
                </div>
                <div className="p-2 text-center bg-white rounded-lg md:p-4 lg:p-6 shadowAlll">
                    <h2 className="mb-1 font-semibold sm:mb-4 text-md sm:text-lg">Total Members</h2>
                    <CountUp
                        start={countryStart}
                        end={countryEnd}
                        duration={countryDuration}
                        className="text-2xl font-bold text-Cyan-600 md:text-3xl"
                    />
                </div>
                <div className="p-2 text-center bg-white rounded-lg md:p-4 lg:p-6 shadowAlll">
                    <h2 className="mb-1 font-semibold sm:mb-4 text-md sm:text-lg">Total Members</h2>
                    <CountUp
                        start={reviewStart}
                        end={reviewEnd}
                        duration={reviewDuration}
                        className="text-2xl font-bold text-Cyan-600 md:text-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Counter;
