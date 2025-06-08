import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import SectionTitle from '../../components/SectionTitle/SectionTitle';

export default function Category() {
    return (
        <section>

            <SectionTitle heading={"Order Online"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>

            <Swiper
                // className='my-20'
                loop={true}
                slidesPerView={3}
                spaceBetween={0}
                // freeMode={true}
                pagination={{
                    clickable: true,
                    // clickable: false,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} className='w-[95%]' alt="" />
                    <h2 className='text-3xl uppercase text-center text-white -mt-12'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} className='w-[95%]' alt="" />
                    <h2 className='text-3xl uppercase text-center text-white -mt-12'>Pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} className='w-[95%]' alt="" />
                    <h2 className='text-3xl uppercase text-center text-white -mt-12'>Burger</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} className='w-[95%]' alt="" />
                    <h2 className='text-3xl uppercase text-center text-white -mt-12'>Soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} className='w-[95%]' alt="" />
                    <h2 className='text-3xl uppercase text-center text-white -mt-12'>Fries</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
