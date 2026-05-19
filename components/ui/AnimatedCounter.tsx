'use client';
import { useState, useRef, useEffect } from 'react';

interface Props {
  end: number;
  suffix?: string;
  duration?: number;
  startWhen?: boolean;
}

export function AnimatedCounter({ end, suffix = '', duration = 1400, startWhen = true }: Props) {
  const [v, setV] = useState(0);
  const startedRef = useRef(false);
  useEffect(() => {
    if (!startWhen || startedRef.current) return;
    startedRef.current = true;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(end * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, duration, startWhen]);
  return <span>{v}{suffix}</span>;
}
