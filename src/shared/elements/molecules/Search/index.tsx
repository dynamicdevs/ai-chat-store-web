'use client';

import { useEffect, useState, useRef } from 'react';

import { IconComponent as Icon } from '@/elements/atoms';
import { useDebounce } from '@/hooks';

interface Props {
  placeholder?: string;
  className?: string;
  classNameContainer?: string;
  onChange: (e: string) => void;
}

export const Search = ({
  placeholder,
  className,
  classNameContainer,
  onChange,
}: Props) => {
  const [value, setValue] = useState<string>('');
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const debounced = useDebounce(value, 400);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isDirty && debounced) {
      setIsDirty(true);
    }

    if (isDirty) {
      onChange(debounced);
    }
  }, [debounced, isDirty]);

  return (
    <div
      className={`flex items-center relative ${classNameContainer}`}
      onClick={() => ref.current?.focus()}
    >
      <Icon
        name='ic_search'
        className='absolute icon-color-inherit fill-core-interactive-100 cursor-text left-3'
      />
      <input
        ref={ref}
        placeholder={placeholder}
        className={`input !pl-[42px] ${className}`}
        autoComplete='off'
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};
