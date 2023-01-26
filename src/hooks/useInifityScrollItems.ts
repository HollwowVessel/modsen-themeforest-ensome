import { useEffect, useState } from 'react';

import { teamCards } from '@/constants/teamCards';
import { MAX_HEIGHT, NINE_PERSONS } from '@/constants/general';

export const useInfinityScrollItems = () => {
  const [items, setItems] = useState(() => teamCards.slice(0, NINE_PERSONS));
  const [quantity, setQuantity] = useState(NINE_PERSONS);

  const scrollHandler = () => {
    const {
      documentElement: { scrollHeight, scrollTop },
    } = document;
    const { innerHeight } = window;
    if (
      scrollHeight - (scrollTop + innerHeight) < MAX_HEIGHT &&
      teamCards.length > quantity
    ) {
      setQuantity((prev) => prev + NINE_PERSONS);
    }
  };

  useEffect(() => {
    if (teamCards.length > quantity && quantity > NINE_PERSONS) {
      setItems((prev) => [
        ...prev,
        ...teamCards.slice(quantity, quantity + NINE_PERSONS),
      ]);
    }
  }, [quantity]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return items;
};
