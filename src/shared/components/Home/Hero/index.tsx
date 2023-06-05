import { CarouselHero, GridWrapper } from '@/elements/organisms';

export const Hero = () => {
  return (
    <GridWrapper className='bg-gradient-pink'>
      <div className='col-span-full'>
        <CarouselHero />
      </div>
    </GridWrapper>
  );
};
