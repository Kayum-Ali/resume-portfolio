import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import SwipSlide from "./SwipSlide";


const MyResult = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1725820884/images_f6ecpy.jpg')] py-16 px-8 text-white   bg-contain  rounded-2xl">
      <div className="container mx-auto  text-center w-2/3 relative  space-y-2">
        <h2 className="font-bold text-5xl ">
          Testimonials That <br />
          Speak to <span className="text-theme_orange">My Results</span>
        </h2>
        <img
          src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725679411/React%20class/Portfolio%20Project/so0ncjl2y6almdqzdq8r.png"
          alt=""
          className="w-5 mx-auto -top-3 right-44 absolute"
        />
        <div className="relative">
          <img
            className="absolute -right-5 -top-3"
            src="https://res.cloudinary.com/dqescabbl/image/upload/v1725847442/Vector_1_f2bcrf.png"
            alt=""
          />
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
          <img
            className="absolute -bottom-3"
            src="https://res.cloudinary.com/dqescabbl/image/upload/v1725847442/Vector_1_f2bcrf.png"
            alt=""
          />
        </div>
      </div>

      <div>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
           <div className="flex gap-12">
           <SwipSlide></SwipSlide>
           <SwipSlide></SwipSlide>
           </div>
           
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-12">
           <SwipSlide></SwipSlide>
           <SwipSlide></SwipSlide>
           </div>
       
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-12">
           <SwipSlide></SwipSlide>
           <SwipSlide></SwipSlide>
           </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-12">
           <SwipSlide></SwipSlide>
           <SwipSlide></SwipSlide>
           </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-12">
           <SwipSlide></SwipSlide>
           <SwipSlide></SwipSlide>
           </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-12">
           <SwipSlide></SwipSlide>
           <SwipSlide></SwipSlide>
           </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-12">
           <SwipSlide></SwipSlide>
           <SwipSlide></SwipSlide>
           </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-12">
           <SwipSlide></SwipSlide>
           <SwipSlide></SwipSlide>
           </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-12">
           <SwipSlide></SwipSlide>
           <SwipSlide></SwipSlide>
           </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MyResult;
