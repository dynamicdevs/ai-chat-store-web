'use client';

import Link from 'next/link';

import { IconComponent as Icon } from '@/elements/atoms';
import { GridWrapper } from '../GridWrapper';
import { Search } from '@/elements/molecules';
import { TopBar } from '../TopBar';

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-20 w-full bg-core-default-inverted shadow-01'>
      <TopBar />
      <GridWrapper className='h-22'>
        <div className='flex items-center justify-between col-span-full lg:col-span-3'>
          <div className='flex items-center'>
            <Icon name='ic_menu' className='w-6 h-6 mr-5' />
            <Link href='/'>
              <Icon name='logo' />
            </Link>
          </div>
          <div className='flex items-center gap-6 lg:hidden'>
            <Icon name='ic_search' className='w-6 h-6' />
            <Icon name='ic_person' className='w-6 h-6' />
            <div className='relative'>
              <span className='absolute -top-[5px] -right-[2px] w-3 h-3 text-center rounded-full bg-core-interactive-100 text-core-default-inverted text-caption-02'>
                0
              </span>
              <Icon name='ic_cart' />
            </div>
          </div>
        </div>
        <div className='items-center hidden lg:flex lg:col-span-6 lg:col-start-4'>
          <Search
            placeholder='¿Qué buscas?'
            classNameContainer='w-full'
            onChange={e => console.log(e)}
          />
        </div>
        <div className='items-center hidden gap-5 lg:flex lg:col-span-2 lg:col-start-11'>
          <button className='button-sm button-primary flex items-center gap-[6px]'>
            <Icon
              name='ic_person'
              className='w-4 h-4 icon-color-inherit fill-core-default-inverted'
            />
            Iniciar sesión
          </button>
          <div className='relative'>
            <span className='absolute -top-[5px] -right-[2px] w-3 h-3 rounded-full bg-core-interactive-100 text-core-default-inverted text-caption-02 text-center'>
              0
            </span>
            <Icon name='ic_cart' />
          </div>
        </div>
      </GridWrapper>
    </header>
  );
};
