import { Hero, Description, Detail } from '@/components/DetailProduct';
import { PRODUCT_LIST_01 } from '@/constants';
import { GridWrapper } from '@/elements/organisms';
import { type Product } from '@/interfaces';

export default function DetailProduct({ params }: any) {
  const product = PRODUCT_LIST_01.find(
    _ => _.id === Number(params.slug)
  ) as Product;

  return (
    <>
      <GridWrapper
        notVerticalGap
        className='pt-4 pb-3 bg-core-default-inverted md:pt-10 md:pb-6 xl:pb-16'
      >
        <Hero product={product} />
        <Detail product={product} />
      </GridWrapper>

      <Description product={product} />
    </>
  );
}
