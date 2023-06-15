'use client';

import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CarouselHero = () => {
  return (
    <div className='relative'>
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
        >
          {[1, 2, 3, 4, 5].map(_ => (
            <SwiperSlide
              key={_}
              className='!flex !justify-center relative !h-[725px] lg:!h-[311px] xl:!h-[436px]'
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
                className='hidden object-contain object-bottom lg:block'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='!absolute !-bottom-9 swiper-pagination swiper-pagination-hero md:!-bottom-12'></div>
    </div>
  );
};
