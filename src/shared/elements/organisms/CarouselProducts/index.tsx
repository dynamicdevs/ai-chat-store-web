'use client';

import { useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IconComponent as Icon } from '@/elements/atoms';
import { type Product } from '@/interfaces';
import { ProductCard } from '@/elements/molecules';

type Props = {
  id: string;
  products: Product[];
};

export const CarouselProducts = ({ id, products }: Props) => {
  const [showPrev, setShowPrev] = useState<boolean>(false);
  const [showNext, setShowNext] = useState<boolean>(true);

  return (
    <div className='relative flex items-center justify-center'>
      <div
        className={`hidden swiper-next-custom -right-5 swiper-next-products-${id} lg:!flex ${
          showNext ? 'visible' : 'invisible'
        }`}
      >
        <Icon name='ic_arrow_right' />
      </div>
      <div
        className={`hidden swiper-prev-custom -left-5 swiper-prev-products-${id} lg:!flex ${
          showPrev ? 'visible' : 'invisible'
        }`}
      >
        <Icon name='ic_arrow_right' className='rotate-180' />
      </div>
      <Swiper
        slidesPerView='auto'
        grabCursor
        spaceBetween={8}
        navigation={{
          nextEl: `.swiper-next-products-${id}`,
          prevEl: `.swiper-prev-products-${id}`,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
        modules={[Navigation]}
        className='!p-0'
        onInit={e => {
          setShowNext(!e.isEnd);
          setShowPrev(e.activeIndex > 0);
        }}
        onSlideChange={e => {
          setShowNext(!e.isEnd);
          setShowPrev(e.activeIndex > 0);
        }}
      >
        {products.map(_ => (
          <SwiperSlide key={_.id}>
            <ProductCard product={_} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
