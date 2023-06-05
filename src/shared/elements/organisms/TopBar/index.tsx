'use client';

import { IconComponent as Icon, type IconNames } from '@/elements/atoms';
import { GridWrapper } from '../GridWrapper';

type ItemProps = {
  text: string;
  icon?: IconNames;
  className?: string;
  onClick?: () => void;
};

const Item = ({ text, icon, className, onClick }: ItemProps) => {
  return (
    <div
      className={`flex items-center gap-1 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {icon && <Icon name={icon} />}
      <p className='font-bold text-core-default-inverted text-body-01'>
        {text}
      </p>
    </div>
  );
};

export const TopBar = () => {
  return (
    <>
      <GridWrapper className='hidden h-10 bg-core-interactive-100 xl:block'>
        <div className='flex justify-between col-span-full'>
          <div className='flex items-center'>
            <Item text='Seguros' className='pr-6' />
            <Item
              text='Tiendas'
              icon='ic_store'
              className='px-6 border-x border-x-core-default-inverted'
            />
            <Item
              text='Venta telefónica 227-700-221'
              icon='ic_phone'
              className='pl-6'
            />
          </div>
          <div className='flex items-center'>
            <Item text='Solicita tu abcvisa' icon='ic_card' className='pr-6' />
            <Item
              text='¿Necesitas ayuda?'
              icon='ic_info'
              className='px-6 border-x border-x-core-default-inverted'
            />
            <Item text='Sigue tu despacho' icon='ic_truck' className='pl-6' />
          </div>
        </div>
      </GridWrapper>
    </>
  );
};
