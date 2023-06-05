'use client';

import { useForm } from 'react-hook-form';

import { Input } from '@/elements/atoms';
import { Regex } from '@/utils';

export const FormSubscribe = () => {
  const { register } = useForm<{
    email: string;
  }>({
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const handleSubmit = async () => {
    // TODO: Missing connect
  };

  return (
    <div>
      <h4 className='mb-6 font-bold text-body-01 text-core-default-inverted'>
        Suscribirse
      </h4>
      <p className='text-body-02 text-core-default-inverted'>
        Infórmate de nuestras ofertas y novedades
      </p>
      <form className='flex items-center gap-3 mt-3'>
        <Input
          placeholder='e-mail'
          {...register('email', { required: true, pattern: Regex.email })}
        />
        <button
          type='button'
          className='button-sm button-primary'
          onClick={handleSubmit}
        >
          Suscribirse
        </button>
      </form>
    </div>
  );
};
