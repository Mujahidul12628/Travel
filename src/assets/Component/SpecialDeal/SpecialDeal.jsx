import React, { useState, useEffect } from 'react';

const UserCarousel = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Fetch data from the JSON file
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
                        <img src={user.place} alt={user.userName} />
                        {/* <h3>{user.userName}</h3>
                        <p>{user.text}</p>
                        <p>{user.Time}</p>
                        <p>{user.userCategory}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserCarousel;
