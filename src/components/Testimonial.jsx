import { useEffect, useState } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/effect-cards";

// importing the section layout
import SectionLayout from "../layouts/SectionLayout";
import ReviewCard from "./ReviewCard";

const Testimonial = ({ bgDefault }) => {
  const [reviews, setReviews] = useState([]);
  // const [currentSlide, setCurrentSlide]= useState(0)

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.testimonials);
        console.log(data.testimonials);
      })
      .catch((error) => console.error("Error fetching Review Data;", error));
  }, []);

  return (
    <SectionLayout bgDefault={`bg-sec-bg`}>
      <section>
        <section className="mb-[4.688rem]">
          <div className="flex items-center justify-center gap-3 mb-6 text-center">
            <span className=" w-[4.5rem] border-b border-cta-sec"></span>
            <h3 className="inline-block text-cta-sec text-heading3-sm font-headerFonts">
              Testimonials
            </h3>
            <span className=" w-[4.5rem] border-b border-cta-sec"></span>
          </div>
          <h2 className="text-center text-heading-text text-heading2-sm font-headerFonts">
            What People Say
          </h2>
          <div className="text-center">
            <p className="leading-7 text-base2">
              Discover what happy clients are raving about working with us!
            </p>
          </div>
        </section>
        <section className="flex items-center justify-center p-6">
          <Swiper
            spaceBetween={30}
            // centeredSlides={true}
            // slidesPerView={2}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}

            // CARD EFFECT
            // effect={'cards'}
            //   grabCursor={true}
            //   modules={[EffectCards, Autoplay]}
            //   className="mySwiper"
            //   autoplay={{delay: 2000}}
          >
            {reviews?.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    </SectionLayout>
  );
};

export default Testimonial;
