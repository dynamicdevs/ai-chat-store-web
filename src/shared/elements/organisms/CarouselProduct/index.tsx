'use client';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type Product } from '@/interfaces';
import Image from 'next/image';

type Props = {
  product: Product;
};

export const CarouselProduct = ({ product }: Props) => {
  return (
    <div className='relative'>
      <div className='relative flex items-center justify-center'>
        <Swiper
          slidesPerView='auto'
          grabCursor
          spaceBetween={8}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-product',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
          }}
          modules={[Pagination]}
          className='!p-0'
        >
          {product.photos.map((_, i) => (
            <SwiperSlide
              key={`product-${i}`}
              className='!flex !justify-center w-full'
            >
              <div className='relative w-full !h-[358px] md:!w-[454px] md:!h-[452px] rounded-lg bg-core-component lg:!w-full lg:!h-[494px] xl:!h-[692px]'>
                <Image
                  src={_}
                  alt='Product Image'
                  fill
                  className='object-contain'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='!absolute !-bottom-8 swiper-pagination swiper-pagination-product'></div>
    </div>
  );
};
