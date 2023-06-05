import { type PropsWithChildren } from 'react';

type Props = {
  className?: string;
  classNameContent?: string;
  notVerticalGap?: boolean;
} & PropsWithChildren;

export const GridWrapper = ({
  className,
  classNameContent,
  notVerticalGap,
  children,
}: Props) => (
  <div className={className}>
    <div className='w-full h-full'>
      <div
        className={`content-grid  ${
          notVerticalGap && '!gap-y-0 medium:!gap-y-0'
        } ${classNameContent}`}
      >
        {children}
      </div>
    </div>
  </div>
);
