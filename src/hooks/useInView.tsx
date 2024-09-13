import { MutableRefObject, useEffect, useState } from 'react';

interface IUseInViewOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useInView = (
  { root, rootMargin, threshold }: IUseInViewOptions,
  targetRef: MutableRefObject<HTMLDivElement | null>,
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (targetRef.current) observer.unobserve(targetRef.current);
        }
      },
      { root, rootMargin, threshold },
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current);
      }
    };
  }, [root, rootMargin, targetRef, threshold]);

  return [isVisible];
};
