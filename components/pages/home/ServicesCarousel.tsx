'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Arrow, ChevronLeft, ChevronRight } from '@/components/ui/Arrow';
import type { Service } from '@/lib/data';

function ServiceCarouselCard({ s, active, onMouseEnter, onMouseLeave }: { s: Service; active: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) {
  const router = useRouter();
  const bg = active ? '#0165dd' : 'var(--c-bg-2)';
  const titleColor = active ? '#fff' : 'var(--c-ink)';
  const bodyColor = active ? 'rgba(255,255,255,.92)' : 'var(--c-mute)';
  const pillBg = active ? '#fff' : '#0165dd';
  const pillTextColor = active ? '#0165dd' : '#fff';
  const arrowBg = active ? '#0165dd' : '#fff';
  const arrowColor = active ? '#fff' : '#0165dd';
  const T = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  const d = '.44s';
  return (
    <div data-svc-card onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      style={{ background: bg, borderRadius: 18, padding: '26px 24px 22px', width: 240, flex: '0 0 240px', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', minHeight: 340, transition: `background ${d} ${T}, transform ${d} ${T}, box-shadow ${d} ${T}`, boxShadow: active ? '0 20px 36px -14px rgba(1,101,221,.42)' : 'none', transform: active ? 'translateY(-5px)' : 'none' }}>
      <h3 style={{ color: titleColor, fontSize: 19, fontWeight: 500, letterSpacing: '-0.015em', lineHeight: 1.18, marginBottom: 14, transition: `color ${d} ${T}` }}>
        {s.title.replace(', Reporting & Outsourcing', ' & Reporting').replace(' & Assessoria Financeira', '')}
      </h3>
      <p style={{ color: bodyColor, fontSize: 13.5, lineHeight: 1.55, flex: 1, transition: `color ${d} ${T}` }}>{s.body}</p>
      <button className="svc-pill" onClick={() => router.push('/contact')}
        style={{ marginTop: 18, alignSelf: 'flex-start', background: pillBg, color: pillTextColor, border: 0, borderRadius: 999, padding: '5px 5px 5px 16px', display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 500, cursor: 'pointer', transition: `background ${d} ${T}, color ${d} ${T}` }}>
        <span>Marcar Reunião</span>
        <span style={{ width: 28, height: 28, borderRadius: '50%', background: arrowBg, color: arrowColor, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: `background ${d} ${T}, color ${d} ${T}` }}>
          <Arrow size={12} />
        </span>
      </button>
    </div>
  );
}

export function ServicesCarousel({ services }: { services: Service[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateScrollState = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    const padLeft = parseFloat(getComputedStyle(t).paddingLeft) || 0;
    setAtStart(t.scrollLeft <= padLeft + 4);
    setAtEnd(t.scrollLeft + t.clientWidth >= t.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    updateScrollState();
    t.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => { t.removeEventListener('scroll', updateScrollState); window.removeEventListener('resize', updateScrollState); };
  }, [updateScrollState]);

  const scrollBy = (dir: number) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.querySelector<HTMLElement>('[data-svc-card]');
    const step = card ? card.offsetWidth + 20 : 320;
    t.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <h2 data-reveal style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 600, marginBottom: 20, letterSpacing: '-0.025em' }}>Serviços</h2>
        <p data-reveal data-delay="120" style={{ fontSize: 16, color: 'var(--c-mute)', maxWidth: 560, lineHeight: 1.55 }}>
          Oferecemos um conjunto completo de serviços de consultoria para atender às necessidades específicas do seu negócio.
        </p>
      </div>
      <div style={{ position: 'relative' }}>
        {!atStart && <button className="svc-arrow svc-arrow--left" aria-label="Anterior" onClick={() => scrollBy(-1)}><ChevronLeft /></button>}
        {!atEnd && <button className="svc-arrow svc-arrow--right" aria-label="Próximo" onClick={() => scrollBy(1)}><ChevronRight /></button>}
        <div ref={trackRef} className="svc-carousel-track" style={{ display: 'flex', gap: 20, overflowX: 'auto', overflowY: 'visible', scrollSnapType: 'x mandatory', padding: '8px 8px 24px' }}>
          {services.map((s, idx) => (
            <ServiceCarouselCard key={s.id} s={s} active={idx === hoverIdx} onMouseEnter={() => setHoverIdx(idx)} onMouseLeave={() => setHoverIdx(null)} />
          ))}
        </div>
      </div>
    </div>
  );
}
