import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        fetch('../../../../public/Reviews.json')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressWidth(prevWidth => (prevWidth + 1) % 101);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-md mx-auto bg-gray-100 py-8">
            <div className="relative">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className={`carousel-item absolute top-0 left-0 transform ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-300 ease-in-out`}
                    >
                        <img
                            src={review.userImage}
                            alt={`User ${index + 1}`}
                            className="rounded-full w-24 h-24 mx-auto mb-4"
                        />
                        <p className="text-lg mb-2">{review.text}</p>
                        <p className="italic">{`- ${review.userName}`}</p>
                    </div>
                ))}
                <div className="w-full h-1 bg-gray-300 absolute bottom-0 left-0">
                    <div
                        className="h-1 bg-blue-500"
                        style={{ width: `${progressWidth}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
