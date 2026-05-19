'use client';
import { useRef, useState, useEffect, RefObject } from 'react';

interface InViewOptions {
  rootMargin?: string;
  threshold?: number;
}

export function useInView(opts: InViewOptions = { rootMargin: '0px 0px -20% 0px', threshold: 0.18 }): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.unobserve(el); }
    }, opts);
    io.observe(el);
    return () => io.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [ref, inView];
}
