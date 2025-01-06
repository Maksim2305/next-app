import { useEffect, useState } from 'react';

export const useScrollY = (): number => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const isClient = typeof window !== 'undefined';

  const handleScroll = () => {
    setScrollPosition(isClient ? window.scrollY : 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};
