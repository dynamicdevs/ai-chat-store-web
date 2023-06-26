'use client';

import { useRef, useState } from 'react';

import { IconComponent as Icon } from '@/elements/atoms';
import { useAutoSize } from '@/hooks';

type Props = {
  onSend: (e: string) => void;
};

export const FormChat = ({ onSend }: Props) => {
  const [value, setValue] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutoSize(textAreaRef.current, value);

  const handleSubmit = () => {
    onSend(value);
    setValue('');
  };

  return (
    <div className='flex items-center w-full gap-3 p-4 border-t bg-core-component border-t-core-subtle md:py-2 xl:py-4'>
      <textarea
        ref={textAreaRef}
        value={value}
        className='w-full px-3 py-2 border rounded-full h-9 outline-none bg-core-default-inverted border-core-subtle text-body-02 max-h-[58px] overflow-auto xl:min-h-[44px] resize-none'
        onChange={e => setValue(e.target.value)}
        onKeyUp={e => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      ></textarea>
      <button
        type='button'
        className='flex items-center justify-center rounded-full w-9 button-sm button-primary xl:button-md xl:min-w-[44px]'
        onClick={handleSubmit}
      >
        <Icon name='ic_send' />
      </button>
    </div>
  );
};
