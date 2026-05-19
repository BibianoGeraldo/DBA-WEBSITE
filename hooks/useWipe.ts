'use client';
import { useRef, useCallback, RefObject } from 'react';

interface WipeHandlers {
  ref: RefObject<HTMLButtonElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function useWipe(): WipeHandlers {
  const ref = useRef<HTMLButtonElement>(null);
  const tid = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onMouseEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (tid.current) clearTimeout(tid.current);
    el.classList.remove('wipe-out', 'wipe-reset');
    requestAnimationFrame(() => el.classList.add('wipe-in'));
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove('wipe-in');
    el.classList.add('wipe-out');
    tid.current = setTimeout(() => {
      if (!el) return;
      el.classList.remove('wipe-out');
      el.classList.add('wipe-reset');
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('wipe-reset')));
    }, 500);
  }, []);

  return { ref, onMouseEnter, onMouseLeave };
}
