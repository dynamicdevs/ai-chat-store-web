import { useEffect, useRef } from 'react';

export default function useResize(callback: () => void) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    window.addEventListener('resize', callbackRef.current);

    return () => {
      window.removeEventListener('resize', callbackRef.current);
    };
  }, []);
}
