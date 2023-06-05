import { Hero, Description, Detail } from '@/components/DetailProduct';
import { PRODUCT_LIST_01 } from '@/constants';

export default function DetailProduct() {
  const product = PRODUCT_LIST_01[1];

  return (
    <>
      <Hero product={product} />
      <Detail product={product} />
      <Description product={product} />
    </>
  );
}
