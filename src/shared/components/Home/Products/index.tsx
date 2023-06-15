import { CarouselProducts, GridWrapper } from '@/elements/organisms';
import { PRODUCT_LIST_01, PRODUCT_LIST_02, PRODUCT_LIST_03 } from '@/constants';

export const Products = () => {
  return (
    <GridWrapper notVerticalGap className='pt-10 md:pt-14'>
      <div className='py-10 col-span-full'>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='font-bold text-headline-01 md:text-display-04'>
            Celulares y Smartwatch
          </h3>
          <button className='button-sm button-primary !font-bold'>
            Ver más
          </button>
        </div>
        <CarouselProducts id='phones_smarts' products={PRODUCT_LIST_01} />
      </div>

      <div className='py-10 col-span-full'>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='font-bold text-headline-01 md:text-display-04'>
            Computación y Tablet
          </h3>
          <button className='button-sm button-primary !font-bold'>
            Ver más
          </button>
        </div>
        <CarouselProducts id='laptops' products={PRODUCT_LIST_02} />
      </div>

      <div className='py-10 col-span-full'>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='font-bold text-headline-01 md:text-display-04'>
            Línea blanca
          </h3>
          <button className='button-sm button-primary !font-bold'>
            Ver más
          </button>
        </div>
        <CarouselProducts id='others' products={PRODUCT_LIST_03} />
      </div>
    </GridWrapper>
  );
};
