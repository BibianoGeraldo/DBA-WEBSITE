'use client';
import { useRef, useCallback, RefObject } from 'react';

interface WipeHandlers {
  ref: RefObject<HTMLButtonElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function useWipe(): WipeHandlers {
  const ref   = useRef<HTMLButtonElement>(null);
  const rafId = useRef<number>(0);
  const tid   = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onMouseEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafId.current);
    if (tid.current) { clearTimeout(tid.current); tid.current = null; }
    el.classList.remove('wipe-out', 'wipe-reset');
    rafId.current = requestAnimationFrame(() => el.classList.add('wipe-in'));
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafId.current);
    if (tid.current) { clearTimeout(tid.current); tid.current = null; }
    el.classList.remove('wipe-in');
    el.classList.add('wipe-out');
    tid.current = setTimeout(() => {
      el.classList.remove('wipe-out');
      el.classList.add('wipe-reset');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        el.classList.remove('wipe-reset');
        tid.current = null;
      }));
    }, 460);
  }, []);

  return { ref, onMouseEnter, onMouseLeave };
}
