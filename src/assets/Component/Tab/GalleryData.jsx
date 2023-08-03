import React, { useState, useEffect } from 'react';

const GalleryData = () => {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5012/travelPlacesDetails')
            .then(response => response.json())
            .then(data => setJsonData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Image Gallery</h1>
            <div className="grid grid-cols-3 gap-4">
                {jsonData.map((entry, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-lg font-medium mb-2">{entry.placeName}</h2>
                        <div className="grid grid-cols-3 gap-2">
                            {entry.detailedImages.map((imageUrl, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={imageUrl}
                                    alt={`Image ${imgIndex}`}
                                    className="w-full h-24 object-cover rounded"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryData;
