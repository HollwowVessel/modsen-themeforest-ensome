import { useEffect, useState } from 'react';

import { teamCards } from '@/constants/teamCards';

export const useInfinityScrollItems = () => {
  const [items, setItems] = useState(() => teamCards.slice(0, 9));
  const [quantity, setQuantity] = useState(9);

  const scrollHandler = async (e: Event) => {
    const { scrollHeight, scrollTop } = (e.target as any).documentElement;
    const { innerHeight } = window;
    if (scrollHeight - (scrollTop + innerHeight) < 2200) {
      setQuantity((prev) => prev + 9);
    }
  };

  useEffect(() => {
    if (teamCards.length > quantity) {
      console.log(1);
      setItems((prev) => [...prev, ...teamCards.slice(quantity, quantity + 9)]);
    }
  }, [quantity]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return items;
};
