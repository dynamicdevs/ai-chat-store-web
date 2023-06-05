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
              className='w-full !h-[358px] rounded-lg bg-core-component'
            >
              <Image
                src={_}
                alt='Product Image'
                fill
                className='object-contain'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='!absolute !-bottom-8 swiper-pagination swiper-pagination-product'></div>
    </div>
  );
};
