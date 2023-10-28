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
                    <div className="h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative rounded-b flex flex-col items-center justify-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/C2kh8B9/S3.jpg')]">
                        <div className="absolute w-full h-full bg-black opacity-10"></div>
                        <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
                            <h2 className="text-3xl font-bold text-white sm:text-3xl ">
                                Elevate Your Adventures<span className='hidden sm:inline-block'>, Choose TrekVibes</span>
                            </h2>
                            <p className="w-5/6 mx-auto mt-5 text-justify text-md text-slate-300 sm:text-lg">
                                Embark on unforgettable adventures with TrekVibes. Your gateway to thrilling travel experiences worldwide, igniting wanderlust and creating memories that last a lifetime.
                            </p>
                            <div className='flex items-center justify-center'>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white border-2 rounded-md shadow hover:bg-cyan-500 border-cyan-500 shadow-cyan-500"
                                >
                                    Booked Now
                                </button>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white border-2 rounded-md shadow-lg bg-cyan-500 border-cyan-500 hover:bg-transparent hover:border-2"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative rounded-b flex flex-col items-center justify-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/Mh81F1B/S1.jpg')]">
                        <div className="absolute w-full h-full bg-black opacity-40"></div>
                        <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
                            <h2 className="text-3xl font-bold text-white sm:text-3xl ">
                                Boundless Discoveries<span className='hidden sm:inline-block'>, TrekVibes Unlocked.</span>
                            </h2>
                            <p className="w-5/6 mx-auto mt-5 text-justify text-md text-slate-300 sm:text-lg">
                                Journey to extraordinary destinations with TrekVibes. Unleash your inner explorer and create timeless memories through captivating travel experiences around the world.
                            </p>
                            <div className='flex items-center justify-center'>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white border-2 rounded-md shadow hover:bg-cyan-500 border-cyan-500 shadow-cyan-500"
                                >
                                    Booked Now
                                </button>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white border-2 rounded-md shadow-lg bg-cyan-500 border-cyan-500 hover:bg-transparent hover:border-2"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative rounded-b flex flex-col items-center justify-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/9q3zCQz/s4.jpg')]">
                        <div className="absolute w-full h-full bg-black opacity-50"></div>
                        <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
                            <h2 className="text-3xl font-bold text-white sm:text-3xl ">
                                <span className='hidden sm:inline-block'>Embark on</span> Life-Changing Journeys
                            </h2>
                            <p className="w-5/6 mx-auto mt-5 text-justify text-md text-slate-300 sm:text-lg">
                                TrekVibes: Where thrilling adventures begin. Explore diverse cultures, stunning landscapes, and hidden gems, making every moment an unforgettable chapter of your global journey.
                            </p>
                            <div className='flex items-center justify-center'>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white border-2 rounded-md shadow hover:bg-cyan-500 border-cyan-500 shadow-cyan-500"
                                >
                                    Booked Now
                                </button>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white border-2 rounded-md shadow-lg bg-cyan-500 border-cyan-500 hover:bg-transparent hover:border-2"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>


                <SwiperSlide >
                    <div className="h-[450px] sm:h-[600px] lg:h-[600px] xl:h-[600px] relative rounded-b flex flex-col items-center justify-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/9s8L96c/s8-Custom.jpg')]">
                        <div className="absolute w-full h-full bg-black opacity-10"></div>
                        <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
                            <h2 className="text-3xl font-bold text-white sm:text-3xl ">
                                Embrace the Journey<span className='hidden sm:inline-block'>, Choose TrekVibes</span>
                            </h2>
                            <p className="w-5/6 mx-auto mt-5 text-justify text-md text-slate-100 sm:text-lg">
                                <span className='flex items-center justify-center'>
                                    Embrace thrilling expeditions, cultural immersion,inspiring, and  crafting a tapestry of unforgettable travel tales and experiences.
                                </span>
                            </p>
                            <div className='flex items-center justify-center'>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white border-2 rounded-md shadow hover:bg-cyan-500 border-cyan-500 shadow-cyan-500"
                                >
                                    Booked Now
                                </button>
                                <button
                                    onClick={() => scrollToTarget("popularRecipes")}
                                    className="px-2 py-1 mx-3 mt-10 text-2xl text-white border-2 rounded-md shadow-lg bg-cyan-500 border-cyan-500 hover:bg-transparent hover:border-2"
                                >
                                    Details
                                </button>
                            </div>


                        </div>
                    </div>

                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Header;