import Link from 'next/link';

import { IconComponent as Icon } from '@/elements/atoms';
import { FormSubscribe } from '@/elements/molecules';
import { GridWrapper } from '../GridWrapper';

type ItemProps = {
  href: string;
  text: string;
};

const Item = ({ href, text }: ItemProps) => {
  return (
    <Link
      href={href}
      className='text-body-02 text-core-default-inverted hover:underline hover:underline-offset-2'
    >
      {text}
    </Link>
  );
};

export const Footer = () => {
  return (
    <>
      <GridWrapper
        notVerticalGap
        className='py-10 bg-core-secondary-light lg:py-20'
      >
        <div className='col-span-full mb-14 lg:col-span-3'>
          <h4 className='mb-6 font-bold text-body-01 text-core-default-inverted'>
            Mi cuenta
          </h4>
          <ul className='flex flex-col gap-3'>
            <li>
              <Item href='/' text='Ingreso a mi cuenta' />
            </li>
            <li>
              <Item href='/' text='Carro de compras' />
            </li>
            <li>
              <Item href='/' text='Términos y condiciones' />
            </li>
            <li>
              <Item href='/' text='Políticas de privacidad' />
            </li>
            <li>
              <Item href='/' text='Portal de pagos' />
            </li>
          </ul>
        </div>

        <div className='col-span-full mb-14 lg:col-span-3'>
          <h4 className='mb-6 font-bold text-body-01 text-core-default-inverted'>
            Abcdin
          </h4>
          <ul className='flex flex-col gap-3'>
            <li>
              <Item href='/' text='Quienes somos' />
            </li>
            <li>
              <Item href='/' text='Tiendas' />
            </li>
            <li>
              <Item href='/' text='Retiro en tienda' />
            </li>
            <li>
              <Item href='/' text='Tarjeta abcvisa' />
            </li>
            <li>
              <Item href='/' text='Mapa de sitio' />
            </li>
            <li>
              <Item href='/' text='Inversionistas' />
            </li>
            <li>
              <Item href='/' text='Trabaja con nosotros' />
            </li>
            <li>
              <Item href='/' text='Canal de denuncias' />
            </li>
          </ul>
        </div>

        <div className='col-span-full mb-14 lg:col-span-3'>
          <h4 className='mb-6 font-bold text-body-01 text-core-default-inverted'>
            Servicio al cliente
          </h4>
          <ul className='flex flex-col gap-3'>
            <li>
              <Item href='/' text='Preguntas frecuentes' />
            </li>
            <li>
              <Item href='/' text='Seguimiento de consultas y reclamos' />
            </li>
            <li>
              <Item href='/' text='Garantía y cambios' />
            </li>
            <li>
              <Item href='/' text='Contacto' />
            </li>
            <li>
              <Item href='/' text='Contacto Tarjeta abcdin' />
            </li>
            <li>
              <Item href='/' text='Bases' />
            </li>
            <li>
              <Item href='/' text='Servicio técnico' />
            </li>
          </ul>
        </div>

        <div className='col-span-full lg:col-span-3'>
          <FormSubscribe />
        </div>
      </GridWrapper>

      <GridWrapper className='py-10 bg-core-secondary-dark'>
        <div className='flex flex-col col-span-full lg:flex-row lg:gap-6 lg:items-center'>
          <div className='flex items-center justify-center gap-6 mb-6 lg:mb-0'>
            <a
              href='/'
              className='flex items-center justify-center rounded-full cursor-pointer h-11 w-11 bg-transparency-light-100 hover:bg-transparency-light-200'
            >
              <Icon name='ic_fb' />
            </a>
            <a
              href='/'
              className='flex items-center justify-center rounded-full cursor-pointer h-11 w-11 bg-transparency-light-100 hover:bg-transparency-light-200'
            >
              <Icon name='ic_yt' />
            </a>
            <a
              href='/'
              className='flex items-center justify-center rounded-full cursor-pointer h-11 w-11 bg-transparency-light-100 hover:bg-transparency-light-200'
            >
              <Icon name='ic_ig' />
            </a>
          </div>
          <p className='text-center text-body-03 text-transparency-light-600'>
            Abcdin y Din - Copyright © 2023 - Todos los derechos reservados.
            Comprar en abcdin.cl es 100% seguro.
          </p>
        </div>
      </GridWrapper>
    </>
  );
};
