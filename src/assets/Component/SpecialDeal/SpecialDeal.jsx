import React, { useState, useEffect } from 'react';

const UserCarousel = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('../../../../public//Reviews.json')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div className="rounded-md carousel">
                {userData.map(user => (
                    <div className="carousel-item" key={user.Id}>
                        <div className="relative group">
                            <img src={user.place} alt={user.userName} className="w-full rounded-md" />
                            <div className="absolute bottom-0 left-0 w-full p-2 transition-opacity duration-300 bg-opacity-25 opacity-0 bg-cyan-500 group-hover:opacity-100">
                                <p className="text-white">Name: {user.userName}</p>
                                <p className="text-white">Country: {user.country}</p>
                                <p className="text-white">Price: {user.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserCarousel;