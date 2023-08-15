import React, { useEffect, useState } from 'react';

const VisitingSpot = () => {
    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        fetch('https://travel-server-flame.vercel.app/travelPlacesDetails')
            .then(response => response.json())
            .then(data => {
                setServerData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4">
            {serverData.map(destination => (
                <div key={destination.id} className="p-4 bg-white rounded shadow ">
                    {destination.detailedImages.map(imageUrl => (
                        <img
                            key={imageUrl}
                            src={imageUrl}
                            alt="Destination"
                            className="w-full h-auto mb-2 rounded"
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default VisitingSpot;
