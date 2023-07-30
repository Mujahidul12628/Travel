import React, { useState, useEffect } from 'react';

const Hello = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5012/travelPlacesDetails')
            .then(response => response.json())
            .then(data => setDestinations(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='my-5'>
            <h1 className='mb-5 text-3xl font-bold text-center text-cyan-500'>Travel Gallery Sect</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {destinations.map((destination) => (
                    <div className="p-4 border border-gray-300 rounded-md shadowAlll bg-cyan-50" key={destination.id}>
                        <img src={destination.img} alt={destination.placeName} className="mb-4 rounded-md" />
                        <h3 className="mb-2 text-lg font-bold">{destination.placeName}</h3>
                        <p className="mb-2">Price: {destination.visitPrice}</p>
                        <p className="mb-2">Duration: {destination.travelDuration}</p>
                        <p>Reviews: {destination.userReviews}</p>
                        <div className="detailed-images">
                            {destination.detailedImages.map((image, index) => (
                                <img src={image} alt={`Image ${index + 1}`} key={index} className="detailed-image" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hello;
