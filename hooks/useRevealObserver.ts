'use client';
import { useEffect } from 'react';

export function useRevealObserver(dep?: unknown) {
  useEffect(() => {
    let io: IntersectionObserver | null = null;
    const rafId = requestAnimationFrame(() => {
      const els = document.querySelectorAll('[data-reveal], [data-stagger]');
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            if (target.hasAttribute('data-stagger')) {
              target.classList.add('is-in');
              Array.from(target.children).forEach((child, i) => {
                setTimeout(() => child.classList.add('is-in'), i * 180);
              });
            } else {
              const d = target.getAttribute('data-delay');
              if (d) {
                setTimeout(() => target.classList.add('is-in'), parseInt(d, 10));
              } else {
                target.classList.add('is-in');
              }
            }
            io?.unobserve(target);
          }
        });
      }, { rootMargin: '0px 0px -4% 0px', threshold: 0.08 });
      els.forEach(el => io!.observe(el));
    });
    return () => {
      cancelAnimationFrame(rafId);
      if (io) io.disconnect();
    };
  }, [dep]);
}
