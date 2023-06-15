import { CarouselProduct } from '@/elements/organisms';
import { type Product } from '@/interfaces';

type Props = {
  product: Product;
};

export const Hero = ({ product }: Props) => {
  return (
    <div className='col-span-full lg:col-span-6'>
      <CarouselProduct product={product} />
    </div>
  );
};
