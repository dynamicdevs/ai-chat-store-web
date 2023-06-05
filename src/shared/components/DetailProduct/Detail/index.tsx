'use client';

import {
  IconComponent as Icon,
  Quantity,
  type IconNames,
} from '@/elements/atoms';
import { GridWrapper } from '@/elements/organisms';
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
        className={`flex py-3 w-full items-center justify-between ${className}`}
      >
        <div className='flex items-center gap-4'>
          <Icon name={icon} />
          <div>
            <p className='font-bold text-body-01'>{title}</p>
            <p className='text-body-03 text-core-muted'>{subTitle}</p>
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
    <GridWrapper className='pb-4 pt-14'>
      <div className='col-span-full'>
        <div className='flex justify-between gap-17'>
          <div>
            <p className='text-body-01 text-core-muted'>SKU: {product.sku}</p>
            <h4 className='my-1 font-bold text-headline-01'>{product.name}</h4>
            <p className='text-body-01 text-core-muted'>
              {product.description}
            </p>
          </div>
          <Icon name='ic_share' />
        </div>

        <div className='my-8'>
          <h2 className='font-bold text-display-03'>
            $
            {product.type === ProductType.sale && product.discount
              ? currencyFormat((product.price * product.discount) / 100)
              : currencyFormat(product.price)}
          </h2>
          {product.type === ProductType.sale && product.discount > 0 && (
            <>
              <p className='mt-2 text-body-03 text-core-muted'>Precio normal</p>
              <h3 className='text-display-04 text-core-muted'>
                ${currencyFormat(product.price)}
              </h3>
            </>
          )}
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

        <div className='flex flex-col gap-4 mt-4'>
          <Quantity onChange={() => {}} />
          <button className='flex items-center justify-center gap-[6px] button-md button-primary w-full'>
            <Icon
              name='ic_cart'
              className='w-4 h-4 icon-color-inherit fill-core-default-inverted'
            />
            Agregar al carro
          </button>
        </div>
      </div>
    </GridWrapper>
  );
};
