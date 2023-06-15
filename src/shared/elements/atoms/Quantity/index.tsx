'use client';

import { type ChangeEvent, useState } from 'react';
import { IconComponent as Icon } from '../Icon';

type Props = {
  className?: string;
  onChange: (e: number) => void;
};

export const Quantity = ({ className, onChange }: Props) => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setValue(Number(val));
  };

  return (
    <div
      className={`relative flex items-center justify-center h-11 border border-core-subtle rounded-[35px] bg-core-default-inverted md:h-14 ${className}`}
    >
      <Icon
        name='ic_minus'
        className={`absolute cursor-pointer icon-color-inherit left-3 ${
          value > 1 ? 'fill-core-interactive-100' : 'fill-core-disabled'
        }`}
        onClick={() => {
          if (value > 1) {
            setValue(e => e - 1);
          }
        }}
      />
      <Icon
        name='ic_plus'
        className='absolute cursor-pointer icon-color-inherit right-3 fill-core-interactive-100'
        onClick={() => {
          setValue(e => e + 1);
        }}
      />
      <input
        value={value}
        onChange={handleChange}
        onBlur={() => {
          if (!value) {
            setValue(1);
          }
        }}
        className='w-full font-medium text-center border-none rounded-full outline-none text-button-01'
      />
    </div>
  );
};
