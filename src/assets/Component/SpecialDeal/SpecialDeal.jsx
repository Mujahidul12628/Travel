// import React, { useState, useEffect } from 'react';

// const UserCarousel = () => {
//     const [userData, setUserData] = useState([]);

//     useEffect(() => {
//         fetch('../../../../public/Place.json')
//             .then(response => response.json())
//             .then(data => setUserData(data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div>
//             <div className="rounded-md carousel">
//                 {userData.map(user => (
//                     <div className="w-1/4 carousel-item" key={user.Id}>
//                         <div className="relative group">
//                             <img src={user.placeImage} alt={user.placeName} className="w-full " />
//                             <div className="absolute bottom-0 left-0 w-full p-2 transition-opacity duration-300 bg-white bg-opacity-100 border opacity-0 border-cyan-500 hover:border group-hover:opacity-100">
//                                 <div className='flex items-start justify-between p-1'>
//                                     <div>
//                                         <p className="text-xl font-semibold text-cyan-500">{user.placeName}</p>
//                                         <p className="text-lg font-semibold text-slate-700">{user.placeCountry}</p>
//                                     </div>
//                                     <div className='flex items-center justify-center'>
//                                         <p className="pb-2 mr-3 line-through text-slate-500 text-md text-Cyan-500">{user.visitingPrice}</p>
//                                         <p className="text-xl font-semibold text-Cyan-500 text-cyan-500">{user.visitingPrice}</p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default UserCarousel;


import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const UserCarousel = () => {
    const [userData, setUserData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('../../../../public/Place.json')
            .then(response => response.json())
            .then(data => {
                setUserData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % userData.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [userData]);

    return (
        <div className='mt-10'>
            <div className="rounded-md carousel">
                {userData.map((user, index) => (
                    <div className={`w-2/4 sm:w-2/6 lg:w-1/4 carousel-item ${index === currentIndex ? 'active' : ''}`} key={user.Id}>
                        <div className="relative group">

                            <img src={user.placeImage} alt={user.placeName} className="w-full " />

                            <div className="absolute inset-0 flex items-start justify-end mx-2 my-4 font-semibold opacity-100 text-md text-cyan-500 text-semibold">
                                <p className="px-2 py-1 transform bg-white rounded-md shadowAlll -translate-y-1/4">{user.discount}% off</p>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-2 transition-opacity duration-300 bg-white bg-opacity-100 border opacity-0 border-cyan-500 hover:border group-hover:opacity-100">
                                <div className='flex items-start justify-between p-1'>
                                    <div>
                                        <p className="text-xl font-semibold text-cyan-500">{user.placeName}</p>
                                        <p className="text-lg font-semibold text-slate-700">{user.placeCountry}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center justify-center'>
                                            <p className="pb-2 mr-3 line-through text-slate-500 text-md text-Cyan-500">{user.visitingPrice}</p>
                                            <p className="text-xl font-semibold text-Cyan-500 text-cyan-500">{user.discountPrice}</p>
                                        </div>
                                        <div className='flex items-center justify-end mt-1'>
                                            <FaStar className='' size={15} color="gold" />
                                            <FaStar className='' size={15} color="gold" />
                                            <FaStar className='' size={15} color="gold" />
                                            <FaStar className='' size={15} color="gold" />
                                            <FaStar className='' size={15} color="gold" />

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div >
    );
};

export default UserCarousel;



