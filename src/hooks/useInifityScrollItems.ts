import { useEffect, useState } from 'react';

import { MAX_HEIGHT, NINE_PERSONS } from '@/constants/general';
import { teamCards } from '@/constants/teamCards';

import { useLanguage } from './useLanguage';

export const useInfinityScrollItems = () => {
  const lang = useLanguage();
  const [items, setItems] = useState(() =>
    teamCards[lang].slice(0, NINE_PERSONS)
  );
  const [quantity, setQuantity] = useState(NINE_PERSONS);

  const scrollHandler = () => {
    const {
      documentElement: { scrollHeight, scrollTop },
    } = document;
    const { innerHeight } = window;
    if (
      scrollHeight - (scrollTop + innerHeight) < MAX_HEIGHT &&
      teamCards[lang].length > quantity
    ) {
      setQuantity((prev) => prev + NINE_PERSONS);
    }
  };

  useEffect(() => {
    if (teamCards[lang].length > quantity && quantity > NINE_PERSONS) {
      setItems((prev) => [
        ...prev,
        ...teamCards[lang].slice(quantity, quantity + NINE_PERSONS),
      ]);
    }
  }, [quantity]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return items;
};
