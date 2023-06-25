'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import {
  IconComponent as Icon,
  Loading,
  MessageBubble,
} from '@/elements/atoms';
import { FormChat } from '@/elements/molecules';
import { type Message } from '@/interfaces';
import { useMessageService } from '@/services';
import { RoleMessage } from '@/enums';
import { DEFAULT_MESSAGE } from '@/constants';
import { useBreakpoint } from '@/hooks';

type Props = {
  onClose: () => void;
};

const Header = ({ onClose }: Props) => {
  return (
    <div className='flex items-center justify-between p-4 border-b bg-core-component border-b-core-subtle md:py-1 xl:py-4'>
      <div className='flex items-center gap-3'>
        <Icon name='mini_logo' />
        <div>
          <h3 className='font-bold text-headline-01 md:text-body-01 xl:text-headline-01'>
            Chat IA
          </h3>
          <p className='text-body-01 md:text-body-03 xl:text-body-01'>Abcdin</p>
        </div>
      </div>
      <Icon name='ic_exit' onClick={onClose} />
    </div>
  );
};

export const ChatContent = () => {
  const [listMessage, setListMessage] = useState<Message[]>([DEFAULT_MESSAGE]);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const isXl = useBreakpoint('xl');
  const bottomRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const { useSendMessage, useSendMessageForProduct } = useMessageService();

  useEffect(() => {
    if (listMessage.length > 10) {
      listMessage.shift();
      setListMessage([...listMessage]);
    }
  }, [listMessage]);

  useEffect(() => {
    setListMessage([DEFAULT_MESSAGE]);
    setLoading(false);
  }, [pathname]);

  const sendMessage = async (newMessage: string) => {
    const item: Message = {
      role: RoleMessage.user,
      content: newMessage,
    };

    setListMessage([...listMessage, item]);
    scrollContentBottom();
    setLoading(true);

    try {
      const fetch =
        pathname === '/'
          ? useSendMessage([...listMessage, item])
          : useSendMessageForProduct([...listMessage, item], '1176074');
      const { data } = await fetch;
      setListMessage([...listMessage, data[data.length]]);
      scrollContentBottom();
      setLoading(false);
    } catch (e: any) {
      // TODO: catch
    }
  };

  const scrollContentBottom = () => {
    if (bottomRef.current) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <>
      <div
        className='fixed z-30 bottom-4 right-4 flex items-center justify-center w-[74px] h-[74px] shadow-04 gap-3 rounded-full bg-core-interactive-100 md:w-fit md:px-[26px] md:bottom-10 md:right-10'
        onClick={() => {
          setOpen(true);
          if (!isXl) {
            document.body.style.overflow = 'hidden';
          }
        }}
      >
        <Icon name='ic_bubble' className='w-6 h-6' />
        <h3 className='hidden font-bold text-headline-01 text-core-default-inverted md:block'>
          Chat IA
        </h3>
      </div>

      {open && (
        <section className='fixed top-0 right-0 z-50 flex w-screen h-screen bg-transparency-black-700 md:justify-end xl:bg-transparent xl:w-[516px] xl:shadow-04'>
          <div className='flex flex-col w-full h-screen md:w-[546px] lg:w-[663px] xl:w-full'>
            <Header
              onClose={() => {
                setOpen(false);
                document.body.style.overflow = 'unset';
              }}
            />
            <div className='overflow-auto scroll-primary bg-core-default-inverted grow'>
              <div className='flex flex-col justify-end min-h-full gap-5 p-4 bg-chat'>
                {listMessage
                  .filter(_ => _.role !== 'system')
                  .map((_, i) => (
                    <MessageBubble key={`message-${i}`} message={_} />
                  ))}

                {loading && (
                  <div className='flex items-center justify-center h-6'>
                    <Loading />
                  </div>
                )}
              </div>
              <div ref={bottomRef}></div>
            </div>
            <FormChat onSend={async e => sendMessage(e)} />
          </div>
        </section>
      )}
    </>
  );
};
