import { GridWrapper } from '@/elements/organisms';
import { type Product } from '@/interfaces';

type Props = {
  product: Product;
};

export const Description = ({ product }: Props) => {
  return (
    <GridWrapper className='py-9'>
      <div className='col-span-full'>
        <p className='text-body-01'>{product.descriptionLong}</p>
        <button className='w-full mt-4 button-md button-primary-outlined'>
          Ver ficha técnica
        </button>
      </div>
    </GridWrapper>
  );
};
