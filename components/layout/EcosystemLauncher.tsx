'use client';
import { useState, useRef, useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';
import { NineDots } from '@/components/ui/Arrow';
import { ECOSYSTEM_ITEMS } from '@/lib/data';

export function EcosystemLauncher() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) { setVisible(true); return; }
    const t = setTimeout(() => setVisible(false), 180);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onKey  = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="ecosystem" ref={ref}>
      <button
        className={`ecosystem__btn ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Ecossistema dBA"
        aria-expanded={open}
      >
        <NineDots size={18} />
      </button>
      {visible && (
        <div className={`ecosystem__popup${open ? ' is-open' : ' is-closing'}`} role="dialog" aria-label="Ecossistema dBA">
          <div className="ecosystem__title">Ecossistema dBA</div>
          <div className="ecosystem__grid">
            {ECOSYSTEM_ITEMS.map(item => (
              <a
                key={item.label}
                className="ecosystem-tile"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <span className="ecosystem-tile__icon" style={{ background: item.color }}>
                  <Icon name={item.icon} size={20} />
                </span>
                <span className="ecosystem-tile__label">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
