import { CarouselProduct, GridWrapper } from '@/elements/organisms';
import { type Product } from '@/interfaces';

type Props = {
  product: Product;
};

export const Hero = ({ product }: Props) => {
  return (
    <GridWrapper notVerticalGap className='pt-4 bg-core-default-inverted'>
      <div className='col-span-full'>
        <CarouselProduct product={product} />
      </div>
    </GridWrapper>
  );
};
