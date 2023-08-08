import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/3Rq1nnd/Slider3.jpg" alt="" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/zN57JnC/Slider6.jpg" alt="" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/ZzSSzxf/Slider8.jpg" alt="" className="w-full" />
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Header;

