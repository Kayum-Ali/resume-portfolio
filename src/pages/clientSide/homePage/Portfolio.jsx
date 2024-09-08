import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./Portfolio.css";
import { EffectCube, Pagination } from "swiper/modules";
import { GoArrowUpRight } from "react-icons/go";

const Portfolio = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex justify-between items-center">
        <h2 className="text-6xl font-semibold">
          Lets have a look at <br /> my{" "}
          <span className="text-theme_orange">Portfolio</span>
        </h2>
        <div>
          <button className="bg-theme_orange py-3 px-6 text-white rounded-[60px]">
            See All
          </button>
        </div>
      </div>

      <div className="relative  h-max py-12">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper h-max"
        >
          <SwiperSlide>
             <div className="flex gap-8 w-full">
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
             </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-8 w-full">
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
             </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-8 w-full">
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
             </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex gap-8 w-full">
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
                 <div>
                     <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1725826782/Frame_27_dbadb0.png" alt="" />
                 </div>
             </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" flex gap-5 justify-center py-12">
           <button className="bg-[#F2F4F7] py-2.5 px-5 rounded-[24px] ">landing Page</button>
           <button className="bg-[#F2F4F7] py-2.5 px-5 rounded-[24px] ">Web Design</button>
           <button className="bg-[#F2F4F7] py-2.5 px-5 rounded-[24px] ">Animation</button>
           <button className="bg-[#F2F4F7] py-2.5 px-5 rounded-[24px] ">Glassmorphism</button>
           <button className="bg-[#F2F4F7] py-2.5 px-5 rounded-[24px] ">Cards</button>
           
      </div>

      <div className="flex justify-center gap-3">
          <h2 className="text-5xl font-bold">Lirante - Food Dilvery Solution</h2>
          <GoArrowUpRight className="bg-theme_orange text-white rounded-full p-1 text-5xl"></GoArrowUpRight>
      </div>
      <p className="w-2/4 mx-auto opacity-85 text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
    </div>
  );
};

export default Portfolio;
