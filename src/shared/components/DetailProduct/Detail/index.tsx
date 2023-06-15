'use client';

import {
  IconComponent as Icon,
  Quantity,
  type IconNames,
} from '@/elements/atoms';
import { ProductType } from '@/enums';
import { type Product } from '@/interfaces';
import { currencyFormat } from '@/utils';

type ItemProps = {
  icon: IconNames;
  title: string;
  subTitle: string;
  className?: string;
  onClick?: () => void;
};

const Item = ({ icon, title, subTitle, className, onClick }: ItemProps) => {
  return (
    <div className='flex px-5' onClick={onClick}>
      <div
        className={`flex h-[66px] w-full items-center justify-between ${className}`}
      >
        <div className='flex items-center gap-4'>
          <Icon name={icon} />
          <div>
            <p className='font-bold text-body-01 xl:text-headline-02'>
              {title}
            </p>
            <p className='text-body-03 text-core-muted xl:text-body-02'>
              {subTitle}
            </p>
          </div>
        </div>
        <Icon name='ic_chevron' className='cursor-pointer' />
      </div>
    </div>
  );
};

type Props = {
  product: Product;
};

export const Detail = ({ product }: Props) => {
  return (
    <div className='col-span-full mt-14 lg:col-span-6'>
      <div className='flex justify-between'>
        <div>
          <p className='text-body-01 text-core-muted md:text-body-02 xl:text-body-01'>
            SKU: {product.sku}
          </p>
          <h4 className='my-1 font-bold text-headline-01 xl:text-display-04'>
            {product.name}
          </h4>
          <p className='text-body-01 text-core-muted md:text-body-02 xl:text-body-01'>
            {product.description}
          </p>
        </div>
        <Icon name='ic_share' className='w-5 h-5 md:w-7 md:h-7' />
      </div>

      <div className='my-8 md:my-4'>
        {product.type === ProductType.sale && product.discount && (
          <div className='px-2 py-1 mb-2 font-bold rounded-full w-fit text-body-02 text-core-default-inverted h-7 bg-core-interactive-100'>
            {product.discount}% dsct
          </div>
        )}
        <h2 className='font-bold text-display-03 xl:text-display-02'>
          $
          {product.type === ProductType.sale && product.discount
            ? currencyFormat((product.price * product.discount) / 100)
            : currencyFormat(product.price)}
        </h2>
        {product.type === ProductType.sale && product.discount > 0 && (
          <>
            <p className='mt-2 text-body-03 text-core-muted xl:text-body-02'>
              Precio normal
            </p>
            <h3 className='text-display-04 text-core-muted md:text-headline-01 xl:text-display-04'>
              ${currencyFormat(product.price)}
            </h3>
          </>
        )}
      </div>

      <div className='items-center hidden gap-4 px-4 mb-4 rounded-md h-19 bg-gradient-pink md:flex xl:h-21'>
        <button
          type='button'
          className='pill-md pill-inverted flex items-center justify-center gap-[6px] group min-w-30 xl:pill-lg xl:min-w-45'
        >
          <Icon
            name='ic_bubble'
            className='w-4 h-4 icon-color-inherit fill-core-interactive-100 group-hover:fill-core-interactive-200'
          />
          Chat IA
        </button>
        <p className='font-bold text-core-default-inverted text-body-03 xl:text-body-02'>
          Prueba nuestro nuevo Chat IA. Consulta cualquier información
          relacionada a este producto.
        </p>
      </div>

      <div className='border rounded-md border-core-subtle'>
        <Item
          icon='ic_shield'
          title='Garantía'
          subTitle='Reparación o reemplazo por fallas'
          className='border-b border-b-core-subtle'
        />
        <Item
          icon='ic_card_outline'
          title='Cuota'
          subTitle='Calcula tus pagos'
          className='border-b border-b-core-subtle'
        />
        <Item
          icon='ic_truck_outline'
          title='Despacho'
          subTitle='Calcula el valor de despacho'
          className='border-b border-b-core-subtle'
        />
        <Item
          icon='ic_shop'
          title='Retiro en Tienda'
          subTitle='Consulta tu tienda'
        />
      </div>

      <div className='flex flex-col gap-4 mt-4 md:flex-row md:gap-3'>
        <Quantity className='md:w-35 md:min-w-35' onChange={() => {}} />
        <button className='flex items-center justify-center gap-[6px] button-md button-primary w-full md:button-lg'>
          <Icon
            name='ic_cart'
            className='w-4 h-4 icon-color-inherit fill-core-default-inverted'
          />
          Agregar al carro
        </button>
      </div>
    </div>
  );
};
