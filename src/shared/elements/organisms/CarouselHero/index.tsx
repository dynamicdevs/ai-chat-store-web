'use client';

import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CarouselHero = () => {
  return (
    <>
      <div className='relative flex items-center justify-center'>
        <Swiper
          slidesPerView={1}
          grabCursor
          loop
          pagination={{
            clickable: true,
            el: '.swiper-pagination-hero',
          }}
          modules={[Pagination]}
          className='!pb-4'
        >
          {[1, 2, 3, 4, 5].map(_ => (
            <SwiperSlide
              key={_}
              className='!flex !justify-center relative !h-[725px] lg:!h-[436px]'
            >
              <Image
                src='/images/slide-01-mobile.png'
                alt='Image slide'
                fill
                className='block object-contain lg:hidden'
              />
              <Image
                src='/images/slide-01-desktop.png'
                alt='Image slide'
                fill
                className='hidden object-contain lg:block'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='swiper-pagination swiper-pagination-hero'></div>
    </>
  );
};
