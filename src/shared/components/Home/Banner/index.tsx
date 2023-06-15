import Image from 'next/image';

import { GridWrapper } from '@/elements/organisms';

export const Banner = () => {
  return (
    <GridWrapper
      notVerticalGap
      className='py-10 z-[2] rounded-3xl'
      classNameContent='relative'
    >
      <div className='absolute left-0 w-full h-full banner-back rounded-3xl col-span-full'></div>
      <div className='relative px-6 pt-6 pb-12 col-span-full md:px-0 md:col-span-4 md:col-start-3 lg:col-span-6 lg:flex lg:flex-col lg:justify-between lg:py-11 lg:pl-15'>
        <div>
          <h3 className='text-headline-01 text-core-default-inverted lg:text-display-03 xl:text-display-02'>
            Solicita tu tarjeta
          </h3>
          <h2 className='text-[44px] leading-[56px] font-phonk text-core-default-inverted font-semibold uppercase mb-[26px] lg:text-[60px] lg:mb-[126px] lg:leading-[80px] xl:text-[80px] xl:leading-[102px] xl:mb-0'>
            abCvisa
          </h2>
        </div>
        <button className='button-lg button-primary w-fit'>
          Quiero saber más
        </button>
      </div>
      <div className='px-6 pb-6 col-span-full md:col-span-4 md:col-start-3 md:p-0 lg:col-span-6 lg:py-10 lg:px-0 lg:flex lg:items-center'>
        <div className='relative h-50 w-full md:h-[216px] lg:w-[371.45px] lg:h-60 xl:h-[295px] xl:w-[455px] lg:mx-auto'>
          <Image
            src='/images/card.png'
            alt='Banner'
            fill
            className='object-contain object-center'
          />
        </div>
      </div>
    </GridWrapper>
  );
};
