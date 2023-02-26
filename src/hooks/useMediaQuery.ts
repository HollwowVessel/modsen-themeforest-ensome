import { useEffect, useState } from 'react';

import { theme } from '@/theme/theme';

export const useIsMobile = (breakpoint = theme.breakPoints.tablet) => {
  const checkForDevice = () => ({
    tablet: document.documentElement.clientWidth < breakpoint,
    fold: document.documentElement.clientWidth < theme.breakPoints.mobile,
  });
  const [{ tablet, fold }, setIsMobile] = useState(() => checkForDevice());
  useEffect(() => {
    const handlePageResized = () => {
      setIsMobile(checkForDevice());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handlePageResized);
      window.addEventListener('orientationchange', handlePageResized);
      window.addEventListener('load', handlePageResized);
      window.addEventListener('reload', handlePageResized);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handlePageResized);
        window.removeEventListener('orientationchange', handlePageResized);
        window.removeEventListener('load', handlePageResized);
        window.removeEventListener('reload', handlePageResized);
      }
    };
  }, []);

  return {
    isMobile: tablet,
    isFold: tablet && !fold,
  };
};
