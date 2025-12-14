import React, { use } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";


const Brands = ({brandsPromise}) => {
    const brand = use(brandsPromise);
 
    const brandsName = brand.map(item => item.name)
   console.log('yucsdvucvdsu text', brandsName)
    return (
        <div>
      {/* <Swiper
        // loop={true}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        // ata sudu auto play jonno use
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandsName.map((text, index) => (
          <SwiperSlide key={index}>
            <h1>{text}</h1>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
    );
};

export default Brands;