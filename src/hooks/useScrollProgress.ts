import { useEffect, useState } from 'react';

export const useScrollProgress = (nameObserve: string, element: string) => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const onObserve = (e: IntersectionObserverEntry[]) => {
      const value = e[0].target.getAttribute(nameObserve);
      if (value && e[0].isIntersecting) {
        setProgress(Number(value));
      }
    };

    const observer = new IntersectionObserver(onObserve);
    const elements = document.querySelectorAll(`${element}[${nameObserve}]`);
    elements.forEach((e) => observer.observe(e));

    return () => observer.disconnect();
  }, []);

  return { progress: progress - 1, setProgress };
};
