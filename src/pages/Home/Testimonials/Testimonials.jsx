import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import SingleReview from "../../Home/Testimonials/SingleReview";

function Testimonials() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <SectionTitle heading={"Testimonials"} subHeading={"From Our Customers"}></SectionTitle>

            <div>
                <Swiper
                    navigation={true}
                    // loop={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <SingleReview review={review}></SingleReview>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials