import { type Metadata } from 'next';

import { Banner, Hero, Products } from '@/components/Home';

export const metadata: Metadata = {
  title: 'PoC Chat Retail',
  description:
    'Prueba de Concepto para el Laboratorio de AI, creando un asistente Retail',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Banner />
    </>
  );
}
