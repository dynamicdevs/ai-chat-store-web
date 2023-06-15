import { IconComponent as Icon } from '@/elements/atoms';

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className='fixed bottom-0 left-0 z-10 flex items-center justify-center w-full h-20 gap-4 bg-gradient-pink md:hidden'>
        <Icon name='ic_bubble' className='w-6 h-6' />
        <h3 className='font-bold text-headline-01 text-core-default-inverted'>
          Chat IA
        </h3>
      </div>
      <div className='hidden justify-center items-center cursor-pointer fixed right-10 bottom-10 rounded-full w-[74px] h-[74px] shadow-03 bg-core-interactive-100 md:flex'>
        <Icon name='ic_bubble' className='w-6 h-6' />
      </div>
    </>
  );
}
