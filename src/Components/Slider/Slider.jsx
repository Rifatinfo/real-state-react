import slider1 from '../../assets/slide01.jpg';
import slider2 from '../../assets/slide02.jpg';
import slider3 from '../../assets/slide03.jpg';
import slider4 from '../../assets/contemporary-residential-buildings-with-balconies-gardens_979520-118166.avif'
import { useRef, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
    const swiperRef = useRef(null);

    // Automatically change slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperRef.current) {
                let currentIndex = swiperRef.current.realIndex;
                let nextIndex = (currentIndex + 1) % swiperRef.current.slides.length;
                swiperRef.current.slideTo(nextIndex);
            }
        }, 3000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" className="w-full object-cover h-screen min-h-screen " />
                    <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 lg:p-8">
                        <h2 className="text-[#ebcfa7] md:text-2xl text-7xl text-start lg:text-4xl font-bold mb-2 sm:mb-4">Elite Residences</h2>
                        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">This is a description for Slide 1.</p>
                        <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 hover:bg-blue-800 text-white text-sm sm:text-lg">
                            Learn More
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" className="w-full  object-cover  h-screen min-h-screen" />
                    <div className="bg-black bg-opacity-50  absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 lg:p-8">
                        <h2 className="text-[#ebcfa7] md:text-2xl  text-7xl text-start lg:text-4xl font-bold mb-2 sm:mb-4">Luxury Residences</h2>
                        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">This is a description for Slide 2.</p>
                        <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 hover:bg-blue-800 text-white text-sm sm:text-lg">
                            Learn More
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" className="w-full  object-cover h-screen min-h-screen" />
                    <div className="bg-black bg-opacity-50  absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 lg:p-8">
                        <h2 className="text-[#ebcfa7] md:text-2xl  text-7xl text-start  lg:text-4xl font-bold mb-2 sm:mb-4">Premium Flats</h2>
                        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">This is a description for Slide 3.</p>
                        <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 hover:bg-blue-800 text-white text-sm sm:text-lg">
                            Learn More
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" className="w-full  object-cover h-screen min-h-screen" />
                    <div className="bg-black bg-opacity-50  absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 lg:p-8">
                        <h2 className="text-[#ebcfa7] md:text-2xl  text-7xl text-start  lg:text-4xl font-bold mb-2 sm:mb-4">Premium Flats</h2>
                        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">This is a description for Slide 3.</p>
                        <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 hover:bg-blue-800 text-white text-sm sm:text-lg">
                            Learn More
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
