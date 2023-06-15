import { GridWrapper } from '@/elements/organisms';
import { type Product } from '@/interfaces';

type Props = {
  product: Product;
};

export const Description = ({ product }: Props) => {
  return (
    <GridWrapper className='py-9 md:pt-0 md:pb-10'>
      <div className='col-span-full'>
        <h2 className='hidden mb-4 font-bold text-display-04 md:block'>
          Descripción
        </h2>
        <p className='text-body-01 md:text-headline-02'>
          {product.descriptionLong}
        </p>
        <button className='w-full mt-4 button-md button-primary-outlined md:w-fit'>
          Ver ficha técnica
        </button>
      </div>
    </GridWrapper>
  );
};
