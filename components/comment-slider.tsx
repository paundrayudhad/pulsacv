"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper CSS
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// Swiper Modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Components
import CommentCard from "./comment-card";

// Dummy
import { comments } from "@/dummy";

const CommentSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // navigation
      // pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },

        1140: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }}
    >
      {comments.map((item) => (
        <SwiperSlide key={item.id}>
          <CommentCard
            id={item.id}
            name={item.name}
            gender={item.gender}
            body={item.body}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CommentSlider;
