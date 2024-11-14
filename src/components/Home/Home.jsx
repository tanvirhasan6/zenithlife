import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner1 from '../../assets/slider/insurance-banner-1.jpg'
import banner2 from '../../assets/slider/insurance-banner-2.jpg'
import banner3 from '../../assets/slider/insurance-banner-3.jpg'
import banner4 from '../../assets/slider/insurance-banner-3.jpg'
import banner5 from '../../assets/slider/insurance-banner-3.jpg'
import banner6 from '../../assets/slider/insurance-banner-3.jpg'

import { LangContext } from '../../contexts/LanguageContext';
import CountUp from 'react-countup';

import appqrImg from '../../assets/app_qr_code.png'
import appImg from '../../assets/zenith_app.png'

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

            <div className='my-20 py-10 shadow-sm sm:rounded-xl sm:shadow-lg' style={{ background: 'rgba(0, 140, 240, 0.05)' }}>

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
                                        <h3 className='font-bold text-md'>মেয়াদপূর্তি দাবী</h3>
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

            <div className='my-20 p-10 bg-white sm:rounded-md flex flex-col justify-center items-center gap-7 text-red-400 hover:text-red-500'>
                {
                    lang === 'বাংলা' ?
                        (<>
                            <h2 className='font-bold text-xl underline'>সতর্কীকরণ বিজ্ঞপ্তি</h2>
                            <p className='text-sm text-justify'>** কোম্পানীর সকল প্রকার লেনদেন সরাসরি কোম্পানীর ব্যাংক একাউন্ট এর মাধ্যমে করার জন্য সকলকে নির্দেশনা প্রদান করা হল। জেনিথ ইসলামী লাইফ ইন্স্যুরেন্স লিঃ এ মার্কেটিং এর কোন পদে নিয়োগের ক্ষেত্রে নিজের নামে বীমা করার কোন বাধ্যবাধকতা নেই এবং মার্কেটিং এর কোন পদে কোন ফিক্সড বেতন প্রদান করা হয় না। **</p>
                        </>
                        )
                        :
                        (<>
                            <h2 className='font-bold text-xl underline'>Warning notice</h2>
                            <p className='text-sm text-justify'>** All the company's transactions are directed to be done directly through the company's bank account. There is no obligation to take out insurance in one's own name when appointing to any marketing position at Zenith Islami Life Insurance Ltd. and no fixed salary is paid to any marketing position. **</p>
                        </>
                        )
                }

            </div>

            <div className='my-20 w-full flex flex-col justify-center items-center gap-5'>
                <h3 className='font-bold text-lg text-center'>
                    {
                        lang==='বাংলা' ? 'জেনিথ ইসলামী লাইফের মোবাইল অ্যাপস ডাউনলোড করুন এবং আমাদের সেবা নিন' : 'Download Zenith Islami Life mobile apps and avail our services.'
                    }
                </h3>
                <div className='w-full flex flex-row justify-around sm:justify-center items-center gap-4'>
                    <a href='https://play.google.com/store/search?q=zenith+islami+life+insurance&c=apps&hl=en' target='_blank'><img src={appImg} alt="app image" /></a>
                    <a href='https://play.google.com/store/search?q=zenith+islami+life+insurance&c=apps&hl=en' target='_blank'><img src={appqrImg} alt="app qr code" /></a>
                </div>
            </div>

            <div className='my-10 p-10 flex flex-col justify-center items-center gap-5 sm:rounded-md bg-white'>
                {
                    lang === 'বাংলা' ? (<>
                        <h3 className='font-bold text-xl'>জেনিথ ইসলামি লাইফের বীমা সংক্রান্ত কোন পরামর্শ বা অভিযোগ থাকলে</h3>
                        <div className='flex flex-col justify-start items-start gap-1 text-xs md:text-sm'>
                            <p className='mb-2'>সরাসরি, কল করে অথবা ই-মেইলে আমাদের সাথে যোগাযোগ করে আপনার মুল্যবান মতামত, পরামর্শ বা অভিযোগ জানাতে পারেন।</p>
                            <p>প্রধান কার্যালয়ঃ ৯৩ মতিঝিল বা/এ (৯ম তলা) আজিজ ভবন, ঢাকা, বাংলাদেশ। <span className='text-pink-700'>( সকাল ১০টা থেকে সন্ধ্যা ৬টা পর্যন্ত সরকারি ছুটির দিন এবং শুক্রবার ও শনিবার ব্যতিত )</span></p>
                            <p>কাস্টমার কেয়ারঃ ০১৭৭৭ ৭৭৭ ০৯০, ৮৮-০২-২২৩৩৮০৩৩৮</p>
                            <p>ই-মেইলঃ zililbd@gmail.com, info@zenithlifebd.com</p>
                            <button className='btn btn-accent mt-3'>অন্যান্য অফিস সমূহ</button>
                        </div>
                    </>)
                        :
                        (<>
                            <h3 className='font-bold text-xl'>If you have any query or complaint regarding Zenith Islami Life Insurance</h3>
                            <div className='flex flex-col justify-start items-start gap-1 text-xs md:text-sm'>
                                <p className='mb-2'>You can share your valuable feedback, suggestions or complaints by contacting us directly, by calling or by e-mail.</p>
                                <p>Head Office: 93, Motijheel C/A (8th Floor), Aziz Bhaban, Dhaka. <span className='text-pink-700'>( 10am to 6pm except public holidays and Fridays and Saturdays )</span></p>
                                <p>Customer Care: 01777 777 090, 88-02–223380338</p>
                                <p>E-mail: zililbd@gmail.com, info@zenithlifebd.com</p>
                                <button className='btn btn-accent mt-3'>Other Offices</button>
                            </div>
                        </>)
                }


            </div>

            <div className=''>
                <h2 className=''>
                    {
                        lang === 'বাংলা' ? 'আমাদের পার্টনার' : 'Our Partners'
                    }
                </h2>

            </div>


        </div>
    );
};

export default Home;