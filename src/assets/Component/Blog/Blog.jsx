import React, { useState, useEffect } from 'react';

function Blog() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:5012/reviews')
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div>
            <h1>Data from Backend</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.userName}</li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;
