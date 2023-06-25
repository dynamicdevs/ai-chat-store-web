import { useState, useCallback, useRef, useEffect } from 'react';

import useResize from './useResize';

const screens = {
  sm: '360px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  '2xl': '1920px',
};

type BreakPoint = keyof typeof screens;

export const useBreakpoint = (breakpoint: BreakPoint) => {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  const checkSize = useCallback(() => {
    const matchMediaResponse = window.matchMedia(
      `(min-width: ${screens[breakpoint]})`
    );

    setIsMatch(matchMediaResponse.matches);
  }, [breakpoint]);

  const checkSizeRef = useRef(checkSize);
  checkSizeRef.current = checkSize;

  useEffect(() => {
    checkSizeRef.current();
  }, []);

  useResize(checkSizeRef.current);

  return isMatch;
};
