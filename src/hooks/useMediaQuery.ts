import { useEffect, useState } from 'react';

import {
  MOBILE_WIDTH_FOR_CAROUSEL,
  TABLET_WIDTH_FOR_CAROUSEL,
} from '@/constants/general';

export const useMediaQuery = () => {
  const checkForDevice = () => ({
    tablet: document.documentElement.clientWidth < TABLET_WIDTH_FOR_CAROUSEL,
    fold: document.documentElement.clientWidth < MOBILE_WIDTH_FOR_CAROUSEL,
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
    isTablet: tablet,
    isMobile: fold,
  };
};
