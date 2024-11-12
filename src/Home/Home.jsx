import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './../styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner1 from './../assets/slider/insurance-banner-1.jpg'
import banner2 from './../assets/slider/insurance-banner-2.jpg'
import banner3 from './../assets/slider/insurance-banner-3.jpg'
import banner4 from './../assets/slider/insurance-banner-3.jpg'
import banner5 from './../assets/slider/insurance-banner-3.jpg'
import banner6 from './../assets/slider/insurance-banner-3.jpg'
import { LangContext } from '../contexts/LanguageContext';
import CountUp from 'react-countup';

const Home = () => {

    const { lang } = useContext(LangContext);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const toBanglaNumerals = (number) => {
        const bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return number.toString().split('').map(digit => bengaliNumerals[parseInt(digit)]).join('');
    };

    return (
        <div className='mx-auto sm:w-10/12 md:w-9/12 lg:w-8/12'>

            <div className={`w-full sm:h-[20vh] md:h-[30vh] lg:h-[40vh] ${lang === 'বাংলা' ? 'flex' : 'hidden'}`}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='rounded-lg' src={banner1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-lg' src={banner2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-lg' src={banner3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-lg' src={banner4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-lg' src={banner5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-lg' src={banner6} />
                    </SwiperSlide>

                </Swiper>


            </div>


            <div className='my-10 py-10 rounded-xl shadow-xl' style={{ background: 'rgba(0, 140, 240, 0.05)' }}>

                {
                    lang === 'বাংলা' ? (
                        <div className='w-full flex flex-col justify-center items-center gap-6'>

                            <h2 className='font-bold text-xl'>এক নজরে জেনিথ ইসলামি লাইফ</h2>

                            <div className='w-full max-w-screen-xl mx-auto grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-center items-center px-5 gap-3'>

                                <div className='w-full bg-white flex flex-col justify-center items-center gap-1 shadow-sm p-4 rounded-lg'>
                                    <img src="" alt="" />
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h3 className='font-bold text-md'>গ্রাহক</h3>
                                        <p className='text-sm'><CountUp start={0} end={14502500} duration={2.75} formattingFn={(value) => toBanglaNumerals(Math.floor(value))} />+</p>
                                    </div>
                                </div>

                                <div className='w-full bg-white flex flex-col justify-center items-center gap-1 shadow-sm p-4 rounded-lg'>
                                    <img src="" alt="" />
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h3 className='font-bold text-md'>এসবি দাবী</h3>
                                        <p className='text-sm'><CountUp start={0} end={114578560} duration={2.75} formattingFn={(value) => toBanglaNumerals(Math.floor(value))} />+</p>
                                    </div>
                                </div>

                                <div className='w-full bg-white flex flex-col justify-center items-center gap-1 shadow-sm p-4 rounded-lg'>
                                    <img src="" alt="" />
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h3 className='font-bold text-md'>মৃত্যু দাবী</h3>
                                        <p className='text-sm'><CountUp start={0} end={114578560} duration={2.75} formattingFn={(value) => toBanglaNumerals(Math.floor(value))} />+</p>
                                    </div>
                                </div>

                                <div className='w-full bg-white flex flex-col justify-center items-center gap-1 shadow-sm p-4 rounded-lg'>
                                    <img src="" alt="" />
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h3 className='font-bold text-md'>মেয়াদোত্তীর্ণ দাবী</h3>
                                        <p className='text-sm'><CountUp start={0} end={114578560} duration={2.75} formattingFn={(value) => toBanglaNumerals(Math.floor(value))} />+</p>
                                    </div>
                                </div>


                                <div className='w-full bg-white flex flex-col justify-center items-center gap-1 shadow-sm p-4 rounded-lg'>
                                    <img src="" alt="" />
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h3 className='font-bold text-md'>স্বাস্থ্য বীমা দাবী</h3>
                                        <p className='text-sm'><CountUp start={0} end={114578560} duration={2.75} formattingFn={(value) => toBanglaNumerals(Math.floor(value))} />+</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                        :
                        (
                            <div className='w-full flex flex-col justify-center items-center gap-6'>

                                <h2 className='font-bold text-xl'>Zenith Islami Life At a Glance</h2>

                                <div className='w-full max-w-screen-xl mx-auto grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-center items-center px-5 gap-3'>

                                    <div className='w-full bg-white flex flex-col justify-center items-center gap-1 shadow-sm p-4 rounded-lg'>
                                        <img src="" alt="" />
                                        <div className='flex flex-col justify-start items-start gap-2'>
                                            <h3 className='font-bold text-md'>Clients</h3>
                                            <p className='text-sm'><CountUp start={0} end={14502500} duration={2.75} />+</p>
                                        </div>
                                    </div>

                                    <div className='w-full bg-white flex flex-col justify-center items-center gap-1 shadow-sm p-4 rounded-lg'>
                                        <img src="" alt="" />
                                        <div className='flex flex-col justify-start items-start gap-2'>
                                            <h3 className='font-bold text-md'>SB Claim</h3>
                                            <p className='text-sm'><CountUp start={0} end={114578560} duration={2.75} />+</p>
                                        </div>
                                    </div>

                                    <div className='w-full bg-white flex flex-col justify-center items-center gap-1 shadow-sm p-4 rounded-lg'>
                                        <img src="" alt="" />
                                        <div className='flex flex-col justify-start items-start gap-2'>
                                            <h3 className='font-bold text-md'>Death Claim</h3>
                                            <p className='text-sm'><CountUp start={0} end={114578560} duration={2.75} />+</p>
                                        </div>
                                    </div>

                                    <div className='w-full bg-white flex flex-col justify-center items-center gap-1 shadow-sm p-4 rounded-lg'>
                                        <img src="" alt="" />
                                        <div className='flex flex-col justify-start items-start gap-2'>
                                            <h3 className='font-bold text-md'>Maturity Claim</h3>
                                            <p className='text-sm'><CountUp start={0} end={114578560} duration={2.75} />+</p>
                                        </div>
                                    </div>

                                    <div className='w-full bg-white flex flex-col justify-center items-center gap-1 shadow-sm p-4 rounded-lg'>
                                        <img src="" alt="" />
                                        <div className='flex flex-col justify-start items-start gap-2'>
                                            <h3 className='font-bold text-md'>Health Claim</h3>
                                            <p className='text-sm'><CountUp start={0} end={114578560} duration={2.75} />+</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                }




            </div>


        </div>
    );
};

export default Home;