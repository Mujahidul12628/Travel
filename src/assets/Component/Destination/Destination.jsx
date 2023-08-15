import React, { useState, useEffect } from 'react';

const Destination = () => {
    const [destination, setDestination] = useState([]);

    useEffect(() => {
        fetch('https://travel-server-flame.vercel.app/travelPlaces')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
                setDestination(data);
            })
            .catch(error => console.error('Error fetching class data:', error));
    }, []);
    return (
        <div className='my-5'>
            <h2 className="mb-4 text-2xl font-bold"></h2>
            <h1 className='mb-5 text-3xl font-bold text-center text-cyan-500'>Travel Places</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {destination.map((destinationData, index) => (
                    <div className="p-4 border border-gray-300 rounded-md shadowAlll bg-cyan-50" key={index}>
                        <img src={destinationData.img} alt={destinationData.placeName} className="mb-4 rounded-md" />
                        <h3 className="mb-2 text-lg font-bold">{destinationData.placeName}</h3>
                        <p className="mb-2">Price: {destinationData.visitPrice}</p>
                        <p className="mb-2">Duration: {destinationData.travelDuration}</p>
                        <p>Reviews: {destinationData.userReviews}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destination;

