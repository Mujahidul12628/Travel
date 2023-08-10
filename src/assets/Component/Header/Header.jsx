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
                    <div className="h-screen sm:h-[700px] relative rounded-b flex items-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/C2kh8B9/S3.jpg')]">
                        <div className="absolute w-full h-full bg-black opacity-25"></div>
                        <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
                            <h2 className="text-2xl font-bold text-white sm:text-6xl ">
                                Welcome & Enjoy <br /> World-Class Cuisine Recipes
                            </h2>
                            <p className="mt-5 text-xl text-slate-400 sm:text-2xl">
                                Family Dinner, date night, brunches, parties, get-togethers and even
                                meals for the entire week.
                            </p>
                            <button
                                onClick={() => scrollToTarget("popularRecipes")}
                                className="px-3 py-2 mt-10 text-2xl text-white border shadow hover:bg-amber-500 border-amber-500 shadow-amber-500"
                            >
                                SEE OUR RECIPES
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-screen sm:h-[700px] relative rounded-b flex items-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/Mh81F1B/S1.jpg')]">
                        <div className="absolute w-full h-full bg-black opacity-25"></div>
                        <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
                            <h2 className="text-2xl font-bold text-white sm:text-6xl ">
                                Welcome & Enjoy <br /> World-Class Cuisine Recipes
                            </h2>
                            <p className="mt-5 text-xl text-slate-400 sm:text-2xl">
                                Family Dinner, date night, brunches, parties, get-togethers and even
                                meals for the entire week.
                            </p>
                            <button
                                onClick={() => scrollToTarget("popularRecipes")}
                                className="px-3 py-2 mt-10 text-2xl text-white border shadow hover:bg-amber-500 border-amber-500 shadow-amber-500"
                            >
                                SEE OUR RECIPES
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-screen sm:h-[700px] relative rounded-b flex items-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/9q3zCQz/s4.jpg')]">
                        <div className="absolute w-full h-full bg-black opacity-25"></div>
                        <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
                            <h2 className="text-2xl font-bold text-white sm:text-6xl ">
                                Welcome & Enjoy <br /> World-Class Cuisine Recipes
                            </h2>
                            <p className="mt-5 text-xl text-slate-400 sm:text-2xl">
                                Family Dinner, date night, brunches, parties, get-togethers and even
                                meals for the entire week.
                            </p>
                            <button
                                onClick={() => scrollToTarget("popularRecipes")}
                                className="px-3 py-2 mt-10 text-2xl text-white border shadow hover:bg-amber-500 border-amber-500 shadow-amber-500"
                            >
                                SEE OUR RECIPES
                            </button>
                        </div>
                    </div>

                </SwiperSlide>



                <SwiperSlide >
                    <div className="h-screen sm:h-[700px] lg:h-[500px] relative rounded-b flex flex-col items-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/9s8L96c/s8-Custom.jpg')]">
                        <div className="absolute w-full h-full bg-black opacity-25"></div>
                        <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
                            <h2 className="text-2xl font-bold text-white sm:text-6xl ">
                                Welcome & Enjoy <br /> World-Class Cuisine Recipes
                            </h2>
                            <p className="mt-5 text-xl text-slate-400 sm:text-2xl">
                                Family Dinner, date night, brunches, parties, get-togethers and even
                                meals for the entire week.
                            </p>
                            <button
                                onClick={() => scrollToTarget("popularRecipes")}
                                className="px-3 py-2 mt-10 text-2xl text-white border shadow hover:bg-amber-500 border-amber-500 shadow-amber-500"
                            >
                                SEE OUR RECIPES
                            </button>

                        </div>
                    </div>

                </SwiperSlide>





            </Swiper>
        </div>
    );
};

export default Header;

