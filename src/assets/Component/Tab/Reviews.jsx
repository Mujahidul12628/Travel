/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiBadgeCheck } from "react-icons/hi";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaStar } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';


const Reviews = () => {
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        fetch('https://travel-server-mujahidul12628.vercel.app/reviews')
            .then(response => response.json())
            .then(data => setReviewsData(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {reviewsData.map((review) => (
                <SwiperSlide key={review.id}>

                    <div className='p-2 m-1 rounded-lg bg-slate-50 shadowAlll'>
                        <div className="relative">
                            <img className='z-0 w-full h-32 rounded-t-lg sm:h-36 md:h-40 lg:h-44' src={review.PlaceImage} alt="" />
                        </div>
                        <div className='relative rounded-b-lg'>
                            <div className='mb-12'>
                                <img className='z-10 w-16 h-16 mx-auto -m-10 rounded-full bg-opacity-60 bg-cyan-500 lg:w-20 lg:h-20 ' src={review.userImage} alt="" />
                            </div>

                            <p className='text-xl font-semibold text-center'>{review.userName}</p>
                            <div className='flex items-center justify-center text-md text-slate-500'>
                                <span>{review.userCategory}</span>
                                <span><HiBadgeCheck className='mx-1 text-blue-500 text-md' /></span>
                            </div>
                            <div className='flex justify-center p-1 my-2'>
                                <FaStar className='mx-1' size={17} color="gold" />
                                <FaStar className='mx-1' size={17} color="gold" />
                                <FaStar className='mx-1' size={17} color="gold" />
                                <FaStar className='mx-1' size={17} color="gold" />
                                <FaStar className='mx-1' size={17} color="gold" />

                            </div>
                            <p className='px-2 text-justify lg:px-2'>{review.text}</p>
                            <div className='flex items-center justify-center my-6'>
                                <span className='mx-1'> <FaRegClock size={20} /> </span>
                                <span className=''>{review.Time} </span>
                            </div>


                        </div>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Reviews;
