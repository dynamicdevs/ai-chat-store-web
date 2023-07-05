'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ProductType } from '@/enums';
import { type Product } from '@/interfaces';
import { currencyFormat } from '@/utils';

type Props = {
  product: Product;
  className?: string;
};

export const ProductCard = ({ product, className }: Props) => {
  const router = useRouter();

  return (
    <div
      className={`relative flex flex-col gap-3 ${className}`}
      onClick={async () => router.replace(`${product.slug}`)}
    >
      <div className='bg-core-component relative rounded-lg w-full h-[233.33px] hover:bg-[#F7F7F7] hover:shadow-02 lg:h-[266.67px]'>
        <Image
          src={product.photos[0]}
          alt={product.name}
          fill
          className='object-contain'
        />
        {product.type === ProductType.sale && product.discount && (
          <div className='absolute top-0 right-0 px-3 py-2 rounded-tr-lg rounded-bl-lg bg-core-interactive-100'>
            <p className='font-bold text-core-default-inverted text-body-02'>
              {product.discount}% dsct
            </p>
          </div>
        )}
        {product.type === ProductType.new && (
          <div className='absolute top-0 right-0 px-3 py-2 rounded-tr-lg rounded-bl-lg bg-core-purple'>
            <p className='font-bold text-core-default-inverted text-body-02'>
              Nuevo
            </p>
          </div>
        )}
      </div>
      <div>
        <p className='font-bold text-body-01'>{product.name}</p>
        <p className='text-body-02 text-core-muted'>{product.description}</p>
      </div>
      <div>
        <h3 className='font-bold text-headline-01'>
          $
          {product.type === ProductType.sale && product.discount
            ? currencyFormat((product.price * product.discount) / 100)
            : currencyFormat(product.price)}
        </h3>
        {product.type === ProductType.sale && product.discount && (
          <p className='text-body-03 text-core-muted'>
            Precio normal $ {currencyFormat(product.price)}
          </p>
        )}
      </div>
    </div>
  );
};
